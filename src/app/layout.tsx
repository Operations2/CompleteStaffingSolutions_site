import type { Metadata } from "next";
import Script from "next/script";
import { Inter, DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Staffing Agency | Healthcare, Finance & Engineering Recruiting | Complete Staffing Solutions",
  description: "Complete Staffing Solutions - Recruitment and staffing services",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.completestaffingsolutions.com/#organization",
      name: "Complete Staffing Solutions",
      url: "https://www.completestaffingsolutions.com",
      logo: {
      "@type": "ImageObject",
      url: "https://www.completestaffingsolutions.com/logo.svg"
      },
      description:
        "Recruitment and staffing services across healthcare, finance, engineering, and administrative roles.",
      sameAs: [
        "https://www.linkedin.com/company/complete-staffing-solutions/",
      ],
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
    },
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.completestaffingsolutions.com/#marlborough",
      name: "Complete Staffing Solutions",
      parentOrganization: {
        "@id": "https://www.completestaffingsolutions.com/#organization",
      },
      telephone: "+1-508-460-6600",
      address: {
        "@type": "PostalAddress",
        streetAddress: "33 Boston Post Road West, Suite 190",
        addressLocality: "Marlborough",
        addressRegion: "MA",
        postalCode: "01752",
        addressCountry: "US",
      },
    },
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.completestaffingsolutions.com/#boston",
      name: "Complete Staffing Solutions",
      parentOrganization: {
        "@id": "https://www.completestaffingsolutions.com/#organization",
      },
      telephone: "+1-857-265-3500",
      address: {
        "@type": "PostalAddress",
        streetAddress: "260 Franklin St, Suite 710",
        addressLocality: "Boston",
        addressRegion: "MA",
        postalCode: "02110",
        addressCountry: "US",
      },
    },
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.completestaffingsolutions.com/#lincoln",
      name: "Complete Staffing Solutions",
      parentOrganization: {
        "@id": "https://www.completestaffingsolutions.com/#organization",
      },
      telephone: "+1-401-475-8800",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1 Albion Rd, Suite 105",
        addressLocality: "Lincoln",
        addressRegion: "RI",
        postalCode: "02865",
        addressCountry: "US",
      },
    },
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.completestaffingsolutions.com/#glastonbury",
      name: "Complete Staffing Solutions",
      parentOrganization: {
        "@id": "https://www.completestaffingsolutions.com/#organization",
      },
      telephone: "+1-860-554-3015",
      address: {
        "@type": "PostalAddress",
        streetAddress: "45 Glastonbury Boulevard",
        addressLocality: "Glastonbury",
        addressRegion: "CT",
        postalCode: "06033",
        addressCountry: "US",
      },
    },
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.completestaffingsolutions.com/#burlington",
      name: "Complete Staffing Solutions",
      parentOrganization: {
        "@id": "https://www.completestaffingsolutions.com/#organization",
      },
      telephone: "+1-781-270-0004",
      address: {
        "@type": "PostalAddress",
        streetAddress: "25 Burlington Mall Road, Suite 406",
        addressLocality: "Burlington",
        addressRegion: "MA",
        postalCode: "01803",
        addressCountry: "US",
      },
    },
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.completestaffingsolutions.com/#shelton",
      name: "Complete Staffing Solutions",
      parentOrganization: {
        "@id": "https://www.completestaffingsolutions.com/#organization",
      },
      telephone: "+1-203-533-2110",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2 Corporate Drive, Suite 943",
        addressLocality: "Shelton",
        addressRegion: "CT",
        postalCode: "06484",
        addressCountry: "US",
      },
    },
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.completestaffingsolutions.com/#fort-myers",
      name: "Complete Staffing Solutions",
      parentOrganization: {
        "@id": "https://www.completestaffingsolutions.com/#organization",
      },
      telephone: "+1-239-519-9990",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4575 Via Royale Suite 218",
        addressLocality: "Fort Myers",
        addressRegion: "FL",
        postalCode: "33907",
        addressCountry: "US",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} ${plusJakarta.variable}`}
    >
      <body className="antialiased">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
