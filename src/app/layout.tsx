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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: "Complete Staffing Solutions",
  url: "https://www.completestaffingsolutions.com",
  description:
    "Recruitment and staffing services across healthcare, finance, engineering, and administrative roles.",
  telephone: "+1-401-475-8800",
  sameAs: [
    "https://www.linkedin.com/company/complete-staffing-solutions/",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "33 Boston Post Road West, Suite 190",
    addressLocality: "Marlborough",
    addressRegion: "MA",
    postalCode: "01752",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+1-401-475-8800",
      areaServed: "US",
      availableLanguage: ["English"],
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
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
