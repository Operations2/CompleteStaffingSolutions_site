"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { PhoneIcon, ChevronDownIcon } from "./icons";
import RecruitmentFraudNotice from "@/components/FraudNoticeSection/RecruitmentFraudNotice";

const specificPathnames = ["/why-choose-us", `/open-position/[jobId]`];

// Function to check if current pathname matches static or dynamic routes
const isSpecificPath = (pathname: string) => {
  if (!pathname) return false;

  return specificPathnames.some((route) => {
    // Dynamic route pattern
    if (route.includes("[") && route.includes("]")) {
      const pattern = route.replace(/\[.*?\]/g, "[^/]+"); // replace [param] with regex
      const regex = new RegExp(`^${pattern}$`);
      return regex.test(pathname);
    }
    // Static route
    return route === pathname;
  });
};

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

type DropdownKey = "employers" | "jobseekers" | "contact" | null;

function DesktopDropdown({
  label,
  dropdownKey,
  openKey,
  onOpen,
  onClose,
  alignRight = false,
  children,
}: {
  label: string;
  dropdownKey: DropdownKey;
  openKey: DropdownKey;
  onOpen: (key: DropdownKey) => void;
  onClose: () => void;
  alignRight?: boolean;
  children: React.ReactNode;
}) {
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isOpen = openKey === dropdownKey;
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    onOpen(dropdownKey);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`inline-flex items-center gap-1 font-semibold pb-1 border-b-2 border-transparent -mb-1.5 hover:text-[var(--accent)] transition-colors ${
          isSpecificPath(pathname) ? "text-black" : ""
        }`}
      >
        {label}
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            alignRight ? "right-0" : "left-0"
          } top-full mt-2 w-56 rounded-md bg-white shadow-lg py-2 z-20 border border-neutral-100`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null,
  );
  const [desktopOpenDropdown, setDesktopOpenDropdown] =
    useState<DropdownKey>(null);
  const [mounted, setMounted] = useState(false);
  const [showFraudModal, setShowFraudModal] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setDesktopOpenDropdown(null);
    setIsMobileMenuOpen(false);
    setMobileOpenDropdown(null);
  }, [pathname]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setMobileOpenDropdown(null);
  }, []);

  const toggleMobileDropdown = (key: string) => {
    setMobileOpenDropdown((prev) => (prev === key ? null : key));
  };

  const isActive = (href: string) => {
    if (!mounted) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navItemClass = (href: string) =>
    `nav-link-underline ${isActive(href) ? "text-[var(--accent)]" : ""} ${
      isSpecificPath(pathname) ? "text-black" : ""
    }`;

  const dropdownLinkClass = `block px-5 py-2.5 text-[15px] font-semibold text-black no-underline hover:bg-[#6ca642]/10 hover:text-[#6ca642]`;

  return (
    <header className="relative z-50 w-full text-sm font-[var(--font-inter)]">
      {/* Top bar */}
      <div className="w-full bg-[#bbe5ff] text-white">
        <div className="w-full max-w-[1280px] 2xl:max-w-[1840px] mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-2 2xl:px-8 font-[var(--font-dm-sans)]">
          <Link
            href="/"
            aria-label="Complete Staffing Solutions - Home"
            className="flex items-center gap-2"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo.svg"
              alt="Complete Staffing Solutions"
              width={160}
              height={60}
              className="h-10 w-auto lg:h-[56px] object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <div className="hidden sm:flex items-center gap-2 text-black">
              <PhoneIcon className="w-4 h-4 text-[#6ca642]" />
              <span>(401) 475-8800</span>
            </div>
            <button
              onClick={() => setShowFraudModal(true)}
              className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded bg-[#6ca642] text-xs sm:text-sm font-semibold shadow-sm hover:bg-[#5a8e37] hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Recruitment Fraud Notice
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex lg:hidden items-center justify-center w-10 h-10 rounded hover:bg-black/10 text-white transition-colors"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <HamburgerIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <div className="w-full absolute top-[56px] sm:top-[60px] left-0 right-0 z-40">
        <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto flex items-center justify-end px-4 py-3 lg:py-4 2xl:px-8">
          <nav
            className="py-5 hidden lg:flex items-center gap-6 text-[15px] text-white"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className={navItemClass("/")}
              onClick={() => setDesktopOpenDropdown(null)}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={navItemClass("/about-us")}
              onClick={() => setDesktopOpenDropdown(null)}
            >
              About Us
            </Link>

            <Link
              href="/why-choose-us"
              className={navItemClass("/why-choose-us")}
              onClick={() => setDesktopOpenDropdown(null)}
            >
              Why Choose Us
            </Link>

            <DesktopDropdown
              label="Employers"
              dropdownKey="employers"
              openKey={desktopOpenDropdown}
              onOpen={setDesktopOpenDropdown}
              onClose={() => setDesktopOpenDropdown(null)}
            >
              <Link
                href="/our-solutions"
                className={dropdownLinkClass}
                onClick={() => setDesktopOpenDropdown(null)}
              >
                Our Solutions
              </Link>
              <Link
                href="/industries-we-serve"
                className={dropdownLinkClass}
                onClick={() => setDesktopOpenDropdown(null)}
              >
                Industries
              </Link>
            </DesktopDropdown>

            <Link
              href="/our-recruiting-process"
              className={navItemClass("/our-recruiting-process")}
              onClick={() => setDesktopOpenDropdown(null)}
            >
              Our Recruiting Process
            </Link>

            <DesktopDropdown
              label="Job Seekers"
              dropdownKey="jobseekers"
              openKey={desktopOpenDropdown}
              onOpen={setDesktopOpenDropdown}
              onClose={() => setDesktopOpenDropdown(null)}
            >
              <Link
                href="/open-position"
                className={dropdownLinkClass}
                onClick={() => setDesktopOpenDropdown(null)}
              >
                Open Positions
              </Link>
              <Link
                href="/employment-form"
                className={dropdownLinkClass}
                onClick={() => setDesktopOpenDropdown(null)}
              >
                For Job Applications
              </Link>
            </DesktopDropdown>

            <DesktopDropdown
              label="Contact"
              dropdownKey="contact"
              openKey={desktopOpenDropdown}
              onOpen={setDesktopOpenDropdown}
              onClose={() => setDesktopOpenDropdown(null)}
              alignRight
            >
              <Link
                href="/contact"
                className={dropdownLinkClass}
                onClick={() => setDesktopOpenDropdown(null)}
              >
                Our Locations
              </Link>
              <Link
                href="/policies"
                className={dropdownLinkClass}
                onClick={() => setDesktopOpenDropdown(null)}
              >
                Policies and Disclosures
              </Link>
            </DesktopDropdown>
          </nav>
        </div>
      </div>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <nav
          className="lg:hidden w-full bg-white border-b border-neutral-200 shadow-md"
          aria-label="Mobile navigation"
        >
          <div className="max-w-[1280px] 2xl:max-w-[1440px] mx-auto px-4 py-4 text-sm font-[var(--font-inter)]">
            <Link
              href="/"
              className="block py-4 font-semibold text-neutral-900"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className="block border-t border-neutral-200 py-4 font-semibold text-neutral-900"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>

            <Link
              href="/why-choose-us"
              className="block border-t border-neutral-200 py-4 font-semibold text-neutral-900"
              onClick={closeMobileMenu}
            >
              Why Choose Us
            </Link>

            {/* Employers dropdown */}
            <div className="border-t border-neutral-200 py-2">
              <button
                type="button"
                className="flex w-full items-center justify-between py-2 font-semibold text-neutral-900"
                onClick={() => toggleMobileDropdown("employers")}
                aria-expanded={mobileOpenDropdown === "employers"}
              >
                <span>Employers</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    mobileOpenDropdown === "employers" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileOpenDropdown === "employers" && (
                <div className="pl-4 pb-1 space-y-1">
                  <Link
                    href="/our-solutions"
                    className="block py-2 text-[15px] font-medium text-neutral-800"
                    onClick={closeMobileMenu}
                  >
                    Our Solutions
                  </Link>
                  <Link
                    href="/industries-we-serve"
                    className="block py-2 text-[15px] font-medium text-neutral-800"
                    onClick={closeMobileMenu}
                  >
                    Industries
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/our-recruiting-process"
              className="block py-4 font-semibold text-neutral-900 border-t border-neutral-200"
              onClick={closeMobileMenu}
            >
              Our Recruiting Process
            </Link>

            {/* Job Seekers dropdown */}
            <div className="border-t border-neutral-200 py-2">
              <button
                type="button"
                className="flex w-full items-center justify-between py-2 font-semibold text-neutral-900"
                onClick={() => toggleMobileDropdown("jobseekers")}
                aria-expanded={mobileOpenDropdown === "jobseekers"}
              >
                <span>Job Seekers</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    mobileOpenDropdown === "jobseekers" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileOpenDropdown === "jobseekers" && (
                <div className="pl-4 pb-1 space-y-1">
                  <Link
                    href="/open-position"
                    className="block py-2 text-[15px] font-medium text-neutral-800"
                    onClick={closeMobileMenu}
                  >
                    Open Positions
                  </Link>
                  <Link
                    href="/employment-form"
                    className="block py-2 text-[15px] font-medium text-neutral-800"
                    onClick={closeMobileMenu}
                  >
                    For Job Applications
                  </Link>
                </div>
              )}
            </div>

            {/* Contact dropdown */}
            <div className="border-t border-neutral-200 py-2">
              <button
                type="button"
                className="flex w-full items-center justify-between py-2 font-semibold text-neutral-900"
                onClick={() => toggleMobileDropdown("contact")}
                aria-expanded={mobileOpenDropdown === "contact"}
              >
                <span>Contact</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    mobileOpenDropdown === "contact" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileOpenDropdown === "contact" && (
                <div className="pl-4 pb-2 space-y-1">
                  <Link
                    href="/contact"
                    className="block py-2 text-[15px] font-medium text-neutral-800"
                    onClick={closeMobileMenu}
                  >
                    Our Locations
                  </Link>
                  <Link
                    href="/policies"
                    className="block py-2 text-[15px] font-medium text-neutral-800"
                    onClick={closeMobileMenu}
                  >
                    Policies and Disclosures
                  </Link>
                </div>
              )}
            </div>

            {/* Fraud notice button for mobile */}
            <button
              type="button"
              onClick={() => {
                setShowFraudModal(true);
                closeMobileMenu();
              }}
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-[#6ca642] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#5a8e37] transition-colors"
            >
              Recruitment Fraud Notice
            </button>
          </div>
        </nav>
      )}

      {/* Fraud Notice Modal */}
      {showFraudModal && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 p-4 sm:p-6"
          onClick={() => setShowFraudModal(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowFraudModal(false)}
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors"
              aria-label="Close"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
            <div className="max-h-[85vh] overflow-y-auto pt-14">
              <RecruitmentFraudNotice />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
