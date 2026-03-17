"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const VIDEO_TITLE = "Complete Staffing Solutions — Who We Are";

const MuteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);

const UnmuteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
  </svg>
);

const stats = [
  { number: "35,000+", description: "Successful Placements" },
  { number: "200,000+", description: "Qualified Candidates" },
  { number: "25+", description: "Years of Experience" },
];

const pillars = [
  {
    title: "Understand Your Needs",
    body: "We learn your company culture, goals, and hiring challenges.",
    icon: "/search.webp",
  },
  {
    title: "Find the Right Talent",
    body: "Our recruiters identify qualified professionals who match your requirements.",
    icon: "/target.webp",
  },
  {
    title: "Deliver Results",
    body: "We connect you with candidates ready to contribute from day one.",
    icon: "/hand-shake.webp",
  },
];

export default function LandingVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsStatsVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleMute: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const togglePlayPause: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center"
      aria-label="Video and impact stats"
    >
      {/* Background image — faded (not grayed); soft overlay for readability */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('/Landing-video-bg.png')",
          // opacity: 0.9,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-b from-black/15 via-black/20 to-black/30"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header text */}
        <div className="max-w-3xl mx-auto text-center before:content-[''] before:absolute before:inset-0 before:rounded-4xl before:blur-3xl before:z-[-1] before:bg-pink-100/30">
          <p className="mt-3 text-[#354b83] font-bold text-2xl sm:text-3xl md:text-4xl ">
            See How We Help Businesses Find Talent
          </p>
          <p className="mt-3 text-sm sm:text-base md:text-xl leading-relaxed text-[#343134] font-semibold tracking-wide">
            Watch how we partner with employers to understand their{" "}
            <span className="font-extrabold text-md sm:text-lg md:text-2xl text-[#354b83]">needs</span> and deliver qualified
            candidates ready to succeed from day one.
          </p>
        </div>

        {/* Pillars row */}
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 md:grid-cols-3">
          {pillars.map(({ title, body, icon }) => (
            <div
              key={title}
              className="flex items-start gap-3 rounded-2xl bg-white/65 backdrop-blur-sm px-5 py-5 sm:px-6 sm:py-6 shadow-[0_18px_40px_rgba(15,23,42,0.18)]"
            >
              <Image
                src={icon.replace(/ /g, "%20")}
                alt={title}
                width={56}
                height={56}
              />
              <div>
                <h3 className="font-(--font-plus-jakarta) text-slate-900 text-base sm:text-lg">
                  {title}
                </h3>
                <p className="mt-1 text-sm sm:text-base leading-tight text-slate-600 font-(--font-inter)">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video container */}
        <div className="mt-9 sm:mt-11 lg:mt-12 max-w-2xl mx-auto">
          <div
            className="relative mx-auto aspect-video w-full max-w-4xl rounded-[26px] overflow-hidden flex items-center justify-center select-none
            border-10 border-white
            bg-white
            border-b-25
            shadow-b
            shadow-xl"
          >
            <video
              ref={videoRef}
              src="/videos/landing-bottom-video.mp4"
              title={VIDEO_TITLE}
              muted={isMuted}
              className="w-full h-full object-cover rounded-[22px]"
              playsInline
              controls={false}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            <button
              type="button"
              onClick={togglePlayPause}
              onKeyDown={(e) => {
                if (e.key === " ") e.preventDefault();
              }}
              className="absolute inset-0 z-10 flex items-center justify-center"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              <span className="flex items-center justify-center w-[70px] h-[70px] sm:w-[82px] sm:h-[82px] rounded-full bg-black/65 text-white backdrop-blur-[2px] border border-white/40">
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </span>
            </button>

            <button
              type="button"
              onClick={toggleMute}
              className="absolute bottom-5 right-5 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/70 text-white hover:bg-black/85 focus:outline-none focus:ring-2 focus:ring-white/60 transition-colors"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <MuteIcon /> : <UnmuteIcon />}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={`mt-10 sm:mt-12 border-t border-white pt-7 sm:pt-8 transition-all duration-700 ease-out relative z-10 ${
            isStatsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#19478E]/50 via-[#19478E]/30 to-[#19478E]/0"
            aria-hidden
          />
          <div className="flex items-center justify-center gap-1 text-white font-(--font-plus-jakarta) sm:justify-center sm:gap-10 lg:gap-16">
            {stats.map((stat, index) => (
              <div
                key={stat.number}
                className={`flex flex-col items-center justify-center text-center px-4 sm:px-6 transition-all duration-500 ease-out ${
                  isStatsVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: isStatsVisible
                    ? `${0.15 + index * 0.15}s`
                    : "0s",
                }}
              >
                <span className="font-bold text-2xl sm:text-3xl md:text-[2rem] leading-tight tracking-tight">
                  {stat.number}
                </span>
                <span className="mt-1.5 text-xs sm:text-sm text-slate-100/85 font-(--font-inter)">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
