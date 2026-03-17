"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const PLACEHOLDER_IMAGE = "/for%20employer/pic.jpg";
const UPLOAD_ICON = "/for%20employer/material-symbols-light_upload-file-outline.svg";

export default function ForEmployerForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("No file chosen");

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
          onSubmit={(e) => e.preventDefault()}
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
                htmlFor="department"
                className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
              >
                Department
              </label>
              <input
                id="department"
                type="text"
                name="department"
                className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
              />
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
                className="h-11 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:gap-7">
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="departmentHiringFor"
                className="text-[16px] font-normal text-[#e8e8e8] md:text-[18px]"
              >
                Department Hiring for
              </label>
              <select
                id="departmentHiringFor"
                name="departmentHiringFor"
                className="h-11 w-full appearance-none rounded border border-[#e8e8e8] bg-transparent px-3.5 pr-11 text-[16px] text-white outline-none placeholder:text-[#e8e8e880] md:h-12"
              >
                <option value="">Select</option>
                <option value="engineering">Engineering</option>
                <option value="sales">Sales</option>
                <option value="operations">Operations</option>
                <option value="hr">Human Resources</option>
                <option value="other">Other</option>
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
              <option value="">Select</option>
              <option value="search">Search / Google</option>
              <option value="referral">Referral</option>
              <option value="linkedin">LinkedIn</option>
              <option value="event">Event</option>
              <option value="other">Other</option>
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
                onChange={(e) =>
                  setFileName(e.target.files?.[0]?.name ?? "No file chosen")
                }
              />
              <button
                type="button"
                className="flex h-22 w-[136px] flex-shrink-0 items-center justify-center rounded-[10px] border border-[#e8e8e8] bg-transparent transition-colors hover:bg-white/10"
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
          >
            Submit
          </button>
        </form>
      </div>

      <Image 
        src={PLACEHOLDER_IMAGE}
        alt=""
        width={689}
        height={1208}
        className="hidden h-auto min-h-[400px] w-full max-w-[450px] flex-shrink-0 rounded-2xl object-cover shadow-[3px_4px_20.5px_3px_rgba(0,0,0,0.25)] md:block md:w-[400px] lg:max-w-[450px]"
        sizes="(max-width: 768px) 0px, (max-width: 992px) 50vw, 689px"
      />
    </section>
  );
}
