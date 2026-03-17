"use client";

import React, { useState } from "react";

const CONTACT_REASONS = [
  "I'm an employer looking for talent",
  "I'm a job seeker looking for opportunities",
  "I'm interested in partnering with your team",
  "I have a general question",
];

const ContactHero: React.FC = () => {
  const [selectedReason, setSelectedReason] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const showForm = !!selectedReason;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage(null);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const payload = {
        topic: selectedReason,
        fullName: formData.get("fullName") as string | null,
        email: formData.get("email") as string | null,
        phone: formData.get("phone") as string | null,
        howHeard: formData.get("howHeard") as string | null,
        subject: formData.get("subject") as string | null,
        message: formData.get("message") as string | null,
      };

      const res = await fetch("/api/contact-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to send your message.");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err?.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* Hero with gradient */}
      <section className="w-full bg-gradient-to-br from-[#19478e] via-[#225eb9] to-[#2d7ac7] flex items-center justify-center min-h-[200px] xs:min-h-[300px] sm:min-h-[400px] px-4 sm:px-6 md:px-8 relative overflow-hidden flex-col gap-4">
        <div className="absolute inset-0 opacity-80 " />
        <h1 className="font-[var(--font-plus-jakarta)] font-bold text-white text-[clamp(28px,4.5vw,44px)] m-0 relative z-10 drop-shadow-sm">
          Contact <span className="text-[var(--accent)]">Us.</span>
        </h1>
        <p className="font-[var(--font-inter)] text-white/95 text-[clamp(14px,1.5vw,17px)] leading-relaxed max-w-[900px] mx-auto text-center">
          We appreciate your interest and are here to assist you. Our dedicated team is ready to respond promptly, or you can schedule a time for us to reach out.
        </p>
      </section>

      {/* Intro + CTA - light blue background */}
      <section className="w-full bg-sky-100/70 py-10 sm:py-12 md:py-14">
        <div className="w-full max-w-[920px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-6">
            <p className="font-[var(--font-inter)] text-[15px] sm:text-base md:text-[17px] leading-relaxed text-neutral-700 mb-2">
              We appreciate your interest and are here to assist you. Our dedicated team is ready to respond promptly, or you can schedule a time for us to reach out.
            </p>
            <p className="font-[var(--font-inter)] text-sm sm:text-base text-neutral-600 mb-6">
              Select a topic below so we can route your message to the right specialist.
            </p>
            <div className="w-full max-w-[540px] mx-auto">
              <label htmlFor="contact-reason" className="sr-only">
                What are you reaching out about?
              </label>
              <select
                id="contact-reason"
                className="w-full rounded-xl border-2 border-sky-200 bg-white px-4 py-3.5 text-sm sm:text-base text-neutral-800 shadow-md shadow-sky-100/50 focus:outline-none focus:ring-2 focus:ring-[#19478e] focus:border-[#19478e] focus:shadow-lg focus:shadow-[#19478e]/20 cursor-pointer transition-all"
                value={selectedReason}
                onChange={(e) => {
                  setSelectedReason(e.target.value);
                  setStatus("idle");
                  setErrorMessage(null);
                }}
              >
                <option value="">
                  Please select a topic
                </option>
                {CONTACT_REASONS.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {showForm && (
            <div className="mt-6 max-w-[720px] mx-auto">
              <div className="bg-white rounded-3xl shadow-lg border border-sky-100 px-5 py-6 sm:px-7 sm:py-7 md:px-8 md:py-8">
                <h2 className="font-[var(--font-plus-jakarta)] font-bold text-[clamp(18px,2.3vw,22px)] text-[#022d6d] mb-1">
                  Send us a message
                </h2>
                <p className="font-[var(--font-inter)] text-sm text-neutral-600 mb-5">
                  Topic selected: <span className="font-semibold text-[#19478e]">{selectedReason}</span>
                </p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-neutral-800 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        className="w-full rounded-lg border border-sky-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#19478e]/70 focus:border-[#19478e]"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-800 mb-1.5">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full rounded-lg border border-sky-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#19478e]/70 focus:border-[#19478e]"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-800 mb-1.5">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-sky-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#19478e]/70 focus:border-[#19478e]"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="howHeard" className="block text-sm font-medium text-neutral-800 mb-1.5">
                        How did you hear about us?
                      </label>
                      <select
                        id="howHeard"
                        name="howHeard"
                        className="w-full rounded-lg border border-sky-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#19478e]/70 focus:border-[#19478e]"
                      >
                        <option value="">Please select</option>
                        <option value="search">Search engine</option>
                        <option value="referral">Referral</option>
                        <option value="social">Social media</option>
                        <option value="event">Event or conference</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-800 mb-1.5">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={selectedReason}
                      readOnly
                      className="w-full rounded-lg border border-sky-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#19478e]/70 focus:border-[#19478e]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-800 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-lg border border-sky-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#19478e]/70 focus:border-[#19478e] resize-y"
                      placeholder="Please share a few details so we can help you faster."
                    />
                  </div>

                  <div className="pt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="text-[11px] text-neutral-500 text-left sm:max-w-[60%]">
                      By submitting this form you agree to be contacted by our team about your inquiry. We respect your privacy and will not share your information.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center rounded-full bg-[#19478e] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#15376f] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                  </div>

                  {status === "success" && (
                    <p className="mt-3 text-sm text-emerald-600 text-left">
                      Thank you. Your message has been sent and our team will follow up shortly.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-3 text-sm text-red-600 text-left">
                      {errorMessage || "We could not send your message. Please try again."}
                    </p>
                  )}
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ContactHero;
