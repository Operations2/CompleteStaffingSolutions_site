 "use client";

import { useRef, useState } from "react";

const OFFICE_ILLUSTRATION =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80";
const UPLOAD_ICON =
  "/for%20employer/material-symbols-light_upload-file-outline.svg";

type JobApplicationFormProps = {
  jobTitle: string;
  jobId: string;
};

export default function JobApplicationForm({
  jobTitle,
  jobId,
}: JobApplicationFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("No file chosen");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitError(null);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const resumeFile = fileInputRef.current?.files?.[0] ?? null;

      let resume:
        | {
            fileName: string;
            mimeType: string;
            content: string;
          }
        | null = null;

      if (resumeFile) {
        const arrayBuffer = await resumeFile.arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);
        let binary = "";
        for (let i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        const base64Content =
          typeof window !== "undefined" ? window.btoa(binary) : "";

        resume = {
          fileName: resumeFile.name,
          mimeType: resumeFile.type || "application/octet-stream",
          content: base64Content,
        };
      }

      const payload = {
        jobTitle: jobTitle || (formData.get("jobTitle") as string | null),
        jobId: jobId || (formData.get("jobId") as string | null),
        email: formData.get("email") as string | null,
        fullName: formData.get("fullName") as string | null,
        phone: formData.get("phone") as string | null,
        street: formData.get("street") as string | null,
        city: formData.get("city") as string | null,
        state: formData.get("state") as string | null,
        zip: formData.get("zip") as string | null,
        salary: formData.get("salary") as string | null,
        hearAbout: formData.get("hearAbout") as string | null,
        employmentTypes: formData.getAll("type") as string[],
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
        throw new Error(data?.error || "Failed to submit application.");
      }

      setSubmitStatus("success");
      form.reset();
      setFileName("No file chosen");
    } catch (err: any) {
      setSubmitStatus("error");
      setSubmitError(
        err?.message || "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          <div className="flex-1 mx-auto lg:mx-0">
            <div className="bg-[#19478e] rounded-3xl shadow-xl p-6 sm:p-8 md:p-10">
              <div className="mb-8">
                <h2 className="font-[var(--font-plus-jakarta)] font-bold text-white text-[clamp(20px,3vw,28px)] uppercase tracking-wide mb-3">
                  Job Application
                </h2>
                <p className="font-[var(--font-inter)] text-white/90 text-sm sm:text-base">
                  You are applying for{" "}
                  <span className="font-semibold">
                    {jobTitle || "this position"}
                  </span>
                  {jobId && (
                    <>
                      {" "}
                      (Ref <span className="font-mono">{jobId}</span>)
                    </>
                  )}
                  . Please complete the form below and attach your resume.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <input type="hidden" name="jobTitle" value={jobTitle} />
                <input type="hidden" name="jobId" value={jobId} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-medium mb-2 text-sm"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-white font-medium mb-2 text-sm"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-white font-medium mb-2 text-sm"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    className="w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="street"
                    className="block text-white font-medium mb-2 text-sm"
                  >
                    Street Address
                  </label>
                  <input
                    id="street"
                    type="text"
                    name="street"
                    className="w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                    placeholder="Your street address"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-white font-medium mb-2 text-sm"
                    >
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      className="w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                      placeholder="Your city"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="block text-white font-medium mb-2 text-sm"
                    >
                      State
                    </label>
                    <input
                      id="state"
                      type="text"
                      name="state"
                      className="w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                      placeholder="Your state"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="zip"
                      className="block text-white font-medium mb-2 text-sm"
                    >
                      Zip Code
                    </label>
                    <input
                      id="zip"
                      type="text"
                      name="zip"
                      className="w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                      placeholder="Your zip code"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="salary"
                      className="block text-white font-medium mb-2 text-sm"
                    >
                      Desired Salary Range
                    </label>
                    <select
                      id="salary"
                      name="salary"
                      className="w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all cursor-pointer"
                    >
                      <option value="" className="text-neutral-900">
                        Please Select a Range
                      </option>
                      <option value="30-50k" className="text-neutral-900">
                        $30,000 - $50,000
                      </option>
                      <option value="50-80k" className="text-neutral-900">
                        $50,000 - $80,000
                      </option>
                      <option value="80k+" className="text-neutral-900">
                        $80,000+
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3 text-sm">
                    Type of Employment Desired:
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 text-white cursor-pointer">
                      <input
                        type="checkbox"
                        name="type"
                        value="full-time"
                        className="w-4 h-4 rounded border-white/30 bg-white/10 text-white focus:ring-white/30 focus:ring-2"
                      />
                      <span className="text-sm">Full Time</span>
                    </label>
                    <label className="flex items-center gap-2 text-white cursor-pointer">
                      <input
                        type="checkbox"
                        name="type"
                        value="part-time"
                        className="w-4 h-4 rounded border-white/30 bg-white/10 text-white focus:ring-white/30 focus:ring-2"
                      />
                      <span className="text-sm">Part Time</span>
                    </label>
                    <label className="flex items-center gap-2 text-white cursor-pointer">
                      <input
                        type="checkbox"
                        name="type"
                        value="temporary"
                        className="w-4 h-4 rounded border-white/30 bg-white/10 text-white focus:ring-white/30 focus:ring-2"
                      />
                      <span className="text-sm">Temporary</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3 text-sm">
                    Upload Resume (Optional)
                  </label>
                  <div className="flex items-center gap-4 p-4 border-2 border-dashed border-white/30 rounded-lg bg-white/5">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
                    >
                      <img
                        src={UPLOAD_ICON}
                        alt="upload"
                        className="w-6 h-6 invert"
                      />
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="sr-only"
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={(e) =>
                          setFileName(
                            e.target.files?.[0]?.name ?? "No file chosen",
                          )
                        }
                      />
                    </button>
                    <div className="flex-1">
                      <span className="block text-white font-medium text-sm">
                        {fileName}
                      </span>
                      <span className="block text-white/70 text-xs">
                        Max. file size: 128 MB.
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-8 bg-white text-[#19478e] font-semibold py-3.5 px-6 rounded-lg hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>

                {submitStatus === "success" && (
                  <p className="mt-3 text-sm text-emerald-200">
                    Thank you. Your application has been submitted successfully.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="mt-3 text-sm text-red-200">
                    {submitError ||
                      "We could not submit your application. Please try again."}
                  </p>
                )}
              </form>
            </div>
          </div>

          <div className="flex-1 max-w-[550px] mx-auto lg:mx-0">
            <div className="h-full min-h-[560px] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#19478e] via-[#225eb9] to-[#6CA642] text-white flex flex-col">
              <div className="p-7 sm:p-8 md:p-9 pb-4 flex flex-col gap-4">
                <h3 className="font-[var(--font-plus-jakarta)] font-semibold text-[clamp(18px,2.4vw,22px)]">
                  Why Apply for This Role?
                </h3>
                <p className="font-[var(--font-inter)] text-sm sm:text-[15px] text-white/90 leading-relaxed">
                  Our recruiters work directly with hiring managers to ensure
                  your application is reviewed quickly. Applying through
                  Complete Staffing gives you access to roles and insights you
                  will not find elsewhere.
                </p>
                <ul className="mt-2 space-y-2 text-sm sm:text-[15px] font-[var(--font-inter)]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
                    <span>
                      Dedicated support from a recruiter who understands your
                      background.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
                    <span>
                      Insight into company culture, hiring timelines, and
                      compensation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
                    <span>
                      Access to additional opportunities that match your skills
                      and preferences.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative flex-1 px-7 pb-8 sm:px-8 sm:pb-9">
                <div className="w-full h-full min-h-[260px] sm:min-h-[320px] md:min-h-[360px] rounded-2xl bg-white/10 overflow-hidden">
                  <img
                    src={OFFICE_ILLUSTRATION}
                    alt="Modern open office with team collaborating around a table"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

