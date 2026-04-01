"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export interface RoleItem {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonColor: "blue" | "green";
  image: string;
}

interface Props {
  roles: RoleItem[];
}

export default function IndustryRoles({ roles }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!scrollContainerRef.current || roles.length === 0) return;

    let animationFrameId: number;
    let lastTimestamp: number | null = null;
    const SPEED = 40; // pixels per second

    const step = (timestamp: number) => {
      const container = scrollContainerRef.current;
      if (!container) return;

      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
      }

      if (pausedRef.current) {
        lastTimestamp = timestamp;
        animationFrameId = window.requestAnimationFrame(step);
        return;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      const distance = (SPEED * delta) / 1000;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (maxScrollLeft <= 0) {
        animationFrameId = window.requestAnimationFrame(step);
        return;
      }

      const nextScrollLeft = container.scrollLeft + distance;

      container.scrollLeft =
        nextScrollLeft >= maxScrollLeft ? 0 : nextScrollLeft;

      animationFrameId = window.requestAnimationFrame(step);
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [roles]);

  return (
    <section className="w-full bg-[#f8f9fa] py-12 sm:py-14 md:py-16">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between gap-4 mb-12">
            <h2 className="font-[var(--font-plus-jakarta)] text-[clamp(28px,4vw,36px)] font-bold text-[#1a1a1a] m-0 leading-tight">
              Roles We Fill
            </h2>
          </div>

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden pt-5 scrollbar-hide"
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
          >
            <div className="flex gap-6 min-w-max">
              {roles.map((role, index) => (
                <div
                  key={`${role.title}-${index}`}
                  className="w-[85vw] sm:w-[calc(50vw-24px)] xl:w-[calc(25vw-24px)] max-w-[320px] min-w-0 flex-shrink-0"
                >
                  <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
                    <div className="relative w-full aspect-[1.8/1] overflow-hidden">
                      <Image
                        src={role.image}
                        alt={role.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 300px"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-3 p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[20px] ${
                            role.buttonColor === "blue"
                              ? "bg-[#4A7BAD]"
                              : "bg-[#6CA642]"
                          }`}
                        >
                          <span>{role.icon}</span>
                        </div>
                        <h3 className="m-0 font-[var(--font-plus-jakarta)] text-[18px] font-bold leading-snug text-[#1a1a1a]">
                          {role.title}
                        </h3>
                      </div>

                      <p className="m-0 flex-1 text-[14px] leading-relaxed text-[#666]">
                        {role.description}
                      </p>

                      <Link
                        href={`/open-position?search=${encodeURIComponent(role.title)}`}
                        className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-[#6CA642] px-5 py-3 text-[15px] font-semibold text-white no-underline transition-all duration-300 hover:bg-[#5d9338] hover:shadow-[0_4px_12px_rgba(108,166,66,0.3)]"
                      >
                        {role.buttonText}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M1 8H15M15 8L8 1M15 8L8 15"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
