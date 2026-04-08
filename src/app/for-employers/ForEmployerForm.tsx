"use client";

import Image from "next/image";
import { useState } from "react";
import { US_AREA_CODES } from "../../constants/usAreaCodes";

const PLACEHOLDER_IMAGE = "/for%20employer/pic.jpg";
const US_AREA_CODE_SET = new Set(US_AREA_CODES);
const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export default function ForEmployerForm() {
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneAreaCodeError, setPhoneAreaCodeError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    const area = digits.slice(0, 3);
    const first = digits.slice(3, 6);
    const second = digits.slice(6, 10);

    if (digits.length <= 3) return area;
    if (digits.length <= 6) return `(${area}) ${first}`;
    return `(${area}) ${first}-${second}`;
  };

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const rawValue = input.value;
    const cursorPosition = input.selectionStart ?? rawValue.length;
    const digitsBeforeCursor = rawValue
      .slice(0, cursorPosition)
      .replace(/\D/g, "").length;
    const formatted = formatPhoneNumber(rawValue);
    const digits = formatted.replace(/\D/g, "");
    const areaCode = digits.slice(0, 3);

    setPhoneValue(formatted);
    if (digits.length >= 3 && !US_AREA_CODE_SET.has(areaCode)) {
      setPhoneAreaCodeError("Please enter a valid US area code.");
    } else {
      setPhoneAreaCodeError(null);
    }

    requestAnimationFrame(() => {
      let nextCursor = formatted.length;

      if (digitsBeforeCursor === 0) {
        nextCursor = 0;
      } else {
        let seenDigits = 0;
        for (let i = 0; i < formatted.length; i += 1) {
          if (/\d/.test(formatted[i])) {
            seenDigits += 1;
          }

          if (seenDigits >= digitsBeforeCursor) {
            nextCursor = i + 1;
            break;
          }
        }
      }

      input.setSelectionRange(nextCursor, nextCursor);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const formData = new FormData(formElement);

      const email = (formData.get("email") as string | null) ?? "";
      const firstName = (formData.get("firstName") as string | null) ?? "";
      const lastName = (formData.get("lastName") as string | null) ?? "";
      const phone = ((formData.get("phone") as string | null) ?? "").trim();

      const jobTitle = (formData.get("jobTitle") as string | null) ?? "";
      const jobId = (formData.get("jobId") as string | null) ?? "";
      const companyName = (formData.get("companyName") as string | null) ?? "";
      const contactTitle = (formData.get("title") as string | null) ?? "";

      const street = (formData.get("street") as string | null) ?? "";
      const city = (formData.get("city") as string | null) ?? "";
      const state = (formData.get("state") as string | null) ?? "";
      const zipCode = ((formData.get("zipCode") as string | null) ?? "").trim();

      const linkedInUrl = (formData.get("linkedInUrl") as string | null) ?? "";

      const hearAbout =
        (formData.get("hearAbout") as string | null) ?? "";

      const comments = (formData.get("comments") as string | null) ?? "";

      if (!email || !firstName || !lastName || !phone) {
        setSubmitError("Please fill in all required fields.");
        setIsSubmitting(false);
        return;
      }

      if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
        setSubmitError("Phone number must be in the format (xxx) xxx-xxxx.");
        setIsSubmitting(false);
        return;
      }

      const phoneDigits = phone.replace(/\D/g, "");
      const phoneAreaCode = phoneDigits.slice(0, 3);
      if (!US_AREA_CODE_SET.has(phoneAreaCode)) {
        setSubmitError("Please enter a phone number with a valid US area code.");
        setIsSubmitting(false);
        return;
      }

      if (!/^\d{5}$/.test(zipCode)) {
        setSubmitError("Zip code must be exactly 5 digits.");
        setIsSubmitting(false);
        return;
      }

      const payload = {
        email,
        firstName,
        lastName,
        jobTitle: jobTitle || undefined,
        companyName: companyName || undefined,
        contactTitle: contactTitle || undefined,
        jobId: jobId || undefined,
        phone,
        street: street || undefined,
        city: city || undefined,
        state: state || undefined,
        zip: zipCode || undefined,
        linkedInUrl: linkedInUrl || undefined,
        hearAbout: hearAbout || undefined,
        comments: comments.trim() || undefined,
      };

      const res = await fetch("/api/lead-forward", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to submit request.");
      }

      setSubmitSuccess(true);
      formElement.reset();
      setPhoneValue("");
      setPhoneAreaCodeError(null);
    } catch (error) {
      console.error("Error submitting job request form:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="mx-auto flex max-w-7xl items-stretch justify-center gap-8 px-4 pb-20 pt-16 font-inter md:px-5 lg:px-6 lg:pt-[60px]"
      aria-labelledby="for-employer-form-title"
    >
      <div className="flex w-full min-h-[200px] xs:min-h-[300px] sm:min-h-[400px] flex-1 flex-col items-center gap-8 rounded-2xl bg-[#19478e] px-6 pb-10 pt-8 shadow-[3px_4px_20.5px_3px_rgba(0,0,0,0.25)] md:px-5 md:pb-9 md:pt-7 ">
        <div className="w-full text-left">
          <h2
            id="for-employer-form-title"
            className="m-0 font-plus-jakarta text-[clamp(20px,4vw,46px)] font-bold uppercase leading-tight text-white sm:text-[22px]"
          >
            Place a Job Request
          </h2>
          <p className="mt-2 text-[15px] text-[#e8e8e8] sm:text-[16px] md:text-[18px]">
            Please contact us to discuss your hiring needs.
          </p>
        </div>

        <form
          className="flex w-full flex-col items-stretch gap-5"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
              placeholder=""
              required
            />
          </div>

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:gap-7">
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="firstName"
                className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
                required
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="lastName"
                className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
                required
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:gap-7">
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="jobTitle"
                className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
              >
                Position / Job Title
              </label>
              <input
                id="jobTitle"
                type="text"
                name="jobTitle"
                className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
                placeholder="e.g. Senior Accountant"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="jobId"
                className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
              >
                Job ID / Reference (optional)
              </label>
              <input
                id="jobId"
                type="text"
                name="jobId"
                className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
                placeholder="Internal job reference"
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:gap-7">
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="companyName"
                className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
              >
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="title"
                className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                name="title"
                className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="linkedInUrl"
                className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
              >
                LinkedIn URL
              </label>
              <input
                id="linkedInUrl"
                type="url"
                name="linkedInUrl"
                className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
                placeholder="https://www.linkedin.com/in/..."
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:gap-7">
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="street"
                className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
              >
                Street Address
              </label>
              <input
                id="street"
                type="text"
                name="street"
                className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="city"
                className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
              >
                City
              </label>
              <input
                id="city"
                type="text"
                name="city"
                className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:gap-7">
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="state"
                className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
              >
                State
              </label>
              <select
                id="state"
                name="state"
                className="h-11 w-full appearance-none rounded border border-[#e8e8e8] bg-transparent px-3.5 pr-11 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
                defaultValue=""
              >
                <option className="text-black" value="">
                  Select a state
                </option>
                {US_STATES.map((stateName) => (
                  <option key={stateName} className="text-black" value={stateName}>
                    {stateName}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="zipCode"
                className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
              >
                Zip Code
              </label>
              <input
                id="zipCode"
                type="text"
                name="zipCode"
                className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
                inputMode="numeric"
                pattern="\d{5}"
                maxLength={5}
                required
                onInput={(e) => {
                  const input = e.currentTarget;
                  input.value = input.value.replace(/\D/g, "").slice(0, 5);
                }}
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={phoneValue}
              className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
              placeholder="(xxx) xxx-xxxx"
              pattern="\(\d{3}\) \d{3}-\d{4}"
              maxLength={14}
              required
              onChange={handlePhoneInputChange}
            />
            {phoneAreaCodeError && (
              <p className="text-sm text-red-200">{phoneAreaCodeError}</p>
            )}
          </div>

          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="hearAbout"
              className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
            >
              How did you hear about us?
            </label>
            <select
              id="hearAbout"
              name="hearAbout"
              className="h-11 w-full appearance-none rounded border border-[#e8e8e8] bg-transparent px-3.5 pr-11 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
            >
              <option className="text-black" value="">Select</option>
              <option className="text-black" value="search">Search / Google</option>
              <option className="text-black" value="referral">Referral</option>
              <option className="text-black" value="linkedin">LinkedIn</option>
              <option className="text-black" value="event">Event</option>
              <option className="text-black" value="other">Other</option>
            </select>
          </div>

          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="comments"
              className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
            >
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              className="min-h-[100px] w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 py-3 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-[123px]"
              placeholder="Message"
            />
          </div>

          <button
            type="submit"
            className="h-[50px] w-full max-w-[200px] rounded bg-[#6ca642] text-[18px] font-semibold text-white transition-opacity hover:opacity-90 md:w-[120px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {submitError && (
            <p className="text-sm text-red-200">{submitError}</p>
          )}
          {submitSuccess && !submitError && (
            <p className="text-sm text-green-200">
              Your request has been submitted successfully.
            </p>
          )}
        </form>
      </div>

      <Image 
        src={PLACEHOLDER_IMAGE}
        alt=""
        width={689}
        height={1208}
        className="hidden h-auto min-h-[400px] w-full max-w-[450px] shrink-0 rounded-2xl object-cover shadow-[3px_4px_20.5px_3px_rgba(0,0,0,0.25)] lg:block md:w-[400px] lg:max-w-[450px]"
        sizes="(max-width: 768px) 0px, (max-width: 992px) 50vw, 689px"
      />
    </section>
  );
}
