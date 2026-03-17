"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const PLACEHOLDER_IMAGE = "/for%20employer/pic.jpg";
const UPLOAD_ICON = "/for%20employer/material-symbols-light_upload-file-outline.svg";

export default function ForEmployerForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("No file chosen");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          const base64 = result.split(",")[1] ?? "";
          resolve(base64);
        } else {
          reject(new Error("Failed to read file"));
        }
      };
      reader.onerror = () => reject(reader.error ?? new Error("File read error"));
      reader.readAsDataURL(file);
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
      const phone = (formData.get("phone") as string | null) ?? "";

      const jobTitle = (formData.get("jobTitle") as string | null) ?? "";
      const jobId = (formData.get("jobId") as string | null) ?? "";

      const street = (formData.get("street") as string | null) ?? "";
      const city = (formData.get("city") as string | null) ?? "";
      const state = (formData.get("state") as string | null) ?? "";
      const zipCode = (formData.get("zipCode") as string | null) ?? "";

      const salary = (formData.get("salary") as string | null) ?? "";

      const hearAbout =
        (formData.get("hearAbout") as string | null) ?? "";

      const employmentTypes = formData
        .getAll("employmentTypes")
        .map((value) => String(value))
        .filter((value) => value.trim().length > 0);

      if (!email || !firstName || !lastName || !phone) {
        setSubmitError("Please fill in all required fields.");
        setIsSubmitting(false);
        return;
      }

      let resume: {
        fileName?: string;
        mimeType?: string;
        content?: string;
      } | null = null;

      if (selectedFile) {
        const base64Content = await fileToBase64(selectedFile);
        resume = {
          fileName: selectedFile.name,
          mimeType: selectedFile.type || "application/octet-stream",
          content: base64Content,
        };
      }

      const payload = {
        jobTitle: jobTitle || "Job Request",
        jobId: jobId || undefined,
        email,
        fullName: `${firstName} ${lastName}`.trim(),
        phone,
        street: street || undefined,
        city: city || undefined,
        state: state || undefined,
        zip: zipCode || undefined,
        salary: salary || undefined,
        hearAbout: hearAbout || undefined,
        employmentTypes: employmentTypes.length > 0 ? employmentTypes : undefined,
        resume,
      };

      const res = await fetch("/api/job-application", {
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
      setSelectedFile(null);
      setFileName("No file chosen");
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
      className="mx-auto flex max-w-6xl items-stretch justify-center gap-8 px-4 pb-20 pt-16 font-inter md:px-5 lg:px-6 lg:pt-[60px]"
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
              <input
                id="state"
                type="text"
                name="state"
                className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
              />
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
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:gap-7">
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
                className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="salary"
                className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
              >
                Desired Salary Range
              </label>
              <input
                id="salary"
                type="text"
                name="salary"
                className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
                placeholder="e.g. $60k - $80k"
              />
            </div>
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
            <span className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]">
              Type of Employment Desired
            </span>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <label className="flex items-center gap-2 text-[15px] text-[#e8e8e8]">
                <input
                  type="checkbox"
                  name="employmentTypes"
                  value="Full-time"
                  className="h-4 w-4"
                />
                <span>Full-time</span>
              </label>
              <label className="flex items-center gap-2 text-[15px] text-[#e8e8e8]">
                <input
                  type="checkbox"
                  name="employmentTypes"
                  value="Part-time"
                  className="h-4 w-4"
                />
                <span>Part-time</span>
              </label>
              <label className="flex items-center gap-2 text-[15px] text-[#e8e8e8]">
                <input
                  type="checkbox"
                  name="employmentTypes"
                  value="Contract"
                  className="h-4 w-4"
                />
                <span>Contract</span>
              </label>
              <label className="flex items-center gap-2 text-[15px] text-[#e8e8e8]">
                <input
                  type="checkbox"
                  name="employmentTypes"
                  value="Temporary"
                  className="h-4 w-4"
                />
                <span>Temporary</span>
              </label>
            </div>
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

          <div className="flex w-full flex-col gap-3">
            <span className="text-[20px] font-bold text-white">
              Job Description
            </span>
            <span className="text-[18px] text-[#e8e8e8]">
              Please upload a .docx or .pdf file with your job description.
            </span>
            <div className="flex flex-wrap items-center gap-5 md:flex-row md:items-center">
              <input
                ref={fileInputRef}
                type="file"
                id="jobDescription"
                name="jobDescription"
                accept=".doc,.docx,.pdf"
                className="sr-only"
                aria-label="Upload job description file"
                onChange={(e) => {
                  const file = e.target.files?.[0] ?? null;
                  setSelectedFile(file);
                  setFileName(file?.name ?? "No file chosen");
                }}
              />
              <button
                type="button"
                className="flex h-22 w-[136px] shrink-0 items-center justify-center rounded-[10px] border border-[#e8e8e8] bg-transparent transition-colors hover:bg-white/10"
                onClick={() => fileInputRef.current?.click()}
                aria-label="Choose file"
              >
                <Image
                  src={UPLOAD_ICON}
                  alt=""
                  width={50}
                  height={50}
                  className="h-[50px] w-[50px] object-contain text-[#e8e8e8]"
                />
              </button>
              <div>
                <span
                  className="text-[18px] text-[#e8e8e8]"
                  aria-live="polite"
                >
                  {fileName}
                </span>
                <div className="w-full text-[18px] text-[#e8e8e8]">
                  Max. file size: 128 MB.
                </div>
              </div>
            </div>
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
        className="hidden h-auto min-h-[400px] w-full max-w-[450px] shrink-0 rounded-2xl object-cover shadow-[3px_4px_20.5px_3px_rgba(0,0,0,0.25)] md:block md:w-[400px] lg:max-w-[450px]"
        sizes="(max-width: 768px) 0px, (max-width: 992px) 50vw, 689px"
      />
    </section>
  );
}
