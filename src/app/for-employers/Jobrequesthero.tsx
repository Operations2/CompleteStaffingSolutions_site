export default function JobRequestHero() {
  return (
    <section
      className="relative mx-auto flex w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat h-[60vh] sm:h-[70vh] md:h-[420px]"
      style={{ backgroundImage: "url('/homepage/job request.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(24,27,30,0.368)] z-20" />

      {/* Content */}
      <div className="relative z-30 mx-auto w-full max-w-5xl px-5 md:px-10 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-jakarta font-bold text-white text-[clamp(32px,4.5vw,50px)] leading-tight mb-4 [text-shadow:0_2px_8px_rgba(0,0,0,0.3)]">
            Find Your Perfect Candidate
          </h1>
          <p className="text-white text-[clamp(16px,2vw,22px)] leading-relaxed m-0 [text-shadow:0_1px_4px_rgba(0,0,0,0.3)]">
            Tell us about your hiring needs and we'll connect you with top talent.
            Our experienced team is ready to help you build your dream team.
          </p>
        </div>
      </div>
    </section>
  );
}
