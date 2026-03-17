export const metadata = {
  title: "Terms & Conditions | Complete Staffing Solutions",
  description:
    "Read the terms and conditions that govern your use of the Complete Staffing Solutions website.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full flex items-center justify-center h-24 min-h-[380px] xs:min-h-[420px] sm:min-h-[480px] px-4 sm:px-6 md:px-8 lg:px-12 relative z-10"
        style={{
          background: "url('/terms-conditions/close-up-hand-signing-contract.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#19478e]/60 via-[#19478e]/50 to-[#19478e]/30" />
        <h1 className="m-0 font-[var(--font-plus-jakarta)] font-bold text-[clamp(24px,5vw,48px)] text-white relative z-11">
          Terms &amp; <span className="text-[var(--accent)]">Conditions</span>
        </h1>
      </div>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="space-y-8 text-slate-700">
          <p className="text-sm text-slate-500">
            Last updated: March 10, 2026
          </p>

          <p>
            These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to
            and use of the completestaffingsolutions.com website (the
            &quot;Website&quot;) operated by Complete Staffing Solutions
            (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;). By accessing or using the Website, you agree to be
            bound by these Terms. If you do not agree with any part of these
            Terms, you must not use the Website.
          </p>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              1. Use of the Website
            </h2>
            <p>
              You may use the Website only for lawful purposes and in
              accordance with these Terms. You agree not to use the Website in
              any way that could damage, disable, overburden, or impair the
              Website or interfere with any other party&apos;s use of the
              Website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              2. No Employment Guarantee
            </h2>
            <p>
              The Website may allow you to submit job applications or
              expressions of interest. Submission of any information does not
              guarantee employment or engagement. All hiring decisions are made
              at the sole discretion of the hiring organization.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              3. Intellectual Property
            </h2>
            <p>
              All content, trademarks, logos, and other materials displayed on
              the Website are owned by or licensed to Complete Staffing
              Solutions and are protected by applicable intellectual property
              laws. You may not copy, reproduce, modify, or distribute any
              part of the Website without our prior written consent, except as
              expressly permitted by law.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              4. Third-Party Websites and Content
            </h2>
            <p>
              The Website may contain links to third-party websites or content
              that are not owned or controlled by us. We are not responsible
              for the content, privacy policies, or practices of any
              third-party sites and you access such sites at your own risk.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              5. Disclaimer of Warranties
            </h2>
            <p>
              The Website is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without warranties of any kind, whether
              express or implied. We do not warrant that the Website will be
              uninterrupted, secure, or error-free.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Complete Staffing
              Solutions shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of or
              relating to your use of, or inability to use, the Website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              7. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. When we do, we will
              revise the &quot;Last updated&quot; date at the top of this
              page. Your continued use of the Website after any changes are
              posted constitutes your acceptance of the revised Terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms &amp; Conditions,
              please contact us at{" "}
              <a
                href="mailto:Contactus@completestaffingsolutions.com"
                className="text-[#225eb9] underline-offset-2 hover:underline"
              >
                Contactus@completestaffingsolutions.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

