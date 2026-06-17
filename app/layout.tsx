import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://davarisio.com"; // ← replace with real domain when ready

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Davaris | Premium Digital Agency in Nigeria",
    template: "%s | Davaris",
  },
  description:
    "Davaris is a premium digital agency in Nigeria helping businesses grow through web design, software development, branding, SEO, and digital marketing.",

  keywords: [
    "digital agency",
    "web design agency",
    "web development company",
    "custom website development",
    "UI/UX design agency",
    "mobile app development agency",
    "brand identity design",
    "digital strategy consulting",
    "premium web design",
    "Next.js development agency",
    "e-commerce website development",
    "business website design",
      "Premium Digital Agency",
"Digital Agency Nigeria",
"Web Design Company Nigeria",
"Website Development Nigeria",
"Branding Agency Nigeria",
"Mobile App Development Nigeria",
"UI UX Design Agency Nigeria",
"Social Media Management Nigeria",
"Digital Marketing Agency Lagos",
"Premium Digital Agency Africa",
"Website Design for Small Businesses Nigeria",
"Startup Branding Nigeria",
"Affordable Web Design Nigeria",
"How to Build a Business Website in Nigeria",
"Best Digital Agency in Nigeria",
"Davaris Digital Agency",
"Davaris IO",
"Davarisio",
"Davaris 9ja",
"Davaris Lagos",
"Davaris Abuja",
"Davaris Nigeria",
"Davaris Benin",
"Davaris Marketing",
"Davaris Web Designer",
"Davaris Web Design", 
"Davaris Media",
"Osasenaga David",
"Founder Davaris",
"Founder Osasenaga David",
"Social Media Manager",
"Davaris Social Management",
"Davaris App Developer Company",
"Davaris Africa",
"Davaris IO Africa",
"Davaris Social Platforms",
"Davaris Contact Us",
"Davaris IO About Us",
"Dav App and Website Development",
"Davaris UI UX",
"Motion Graphics Designers",
"Silver Group Brand",
"Silver Group Africa",
"Silver Group Nigeria",
"Silver Group Abuja",
"Silver Group 9ja",
"Best Digital Agency for Small Businesses",
"E-Commerce Website Development Agency",
"Hire a Digital Agency Online",
"Affordable Premium Web Design",
"Branding Agency for Startups",
"Digital Strategy Agency",
"Personal Brand Website Design",
"Personal Brand",
"Web Development Company Nigeria",
"Software Development Company Nigeria",
"Custom Software Development Nigeria",
"Landing Page Design Nigeria",
"Business Website Design Nigeria",
"Corporate Branding Agency Nigeria",
"Logo Design Agency Nigeria",
"SEO Agency Nigeria",
"Search Engine Optimization Nigeria",
"Website Maintenance Nigeria",
"Website Redesign Services",
"Startup Website Development",
"SaaS Website Design",
"Fintech Website Development Nigeria",
  ],

  authors: [{ name: "Davaris" }],
  creator: "Davaris",
  publisher: "Davaris",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── Open Graph (WhatsApp, Facebook, LinkedIn previews) ──
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Davaris",
    title: "Davaris - Building Digital Futures for Ambitious Brands",
    description:
      "Premium digital agency crafting websites, apps, brands, and strategies that turn visitors into loyal clients.",
    images: [
      {
        // ← Place your OG image at /public/og-image.jpg (1200x630px recommended)
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Davaris - Digital Agency",
      },
    ],
  },

  // ── Twitter / X card ──
  twitter: {
    card: "summary_large_image",
    title: "Davaris - Building Digital Futures for Ambitious Brands",
    description:
      "Premium digital agency crafting websites, apps, brands, and strategies that turn visitors into loyal clients.",
    images: ["/og-image.jpg"], // ← same image as above
    // creator: "@davaris", // ← add Twitter handle when ready
  },

  // ── Icons / favicon ──


  manifest: "/manifest.json",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  verification: {
    google: "google-site-verification=y9KHiJ-WboMr_rJEC3r9bXOZ2i4aUfamLwCNgmnwqys"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />

        {/* ── JSON-LD Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService"],
              name: "Davaris",
              description:
                "Davaris is a premium digital agency crafting websites, apps, brands, and strategies that turn visitors into loyal clients.",
              url: SITE_URL,
              logo: `${SITE_URL}/favicon.png`, // ← add when logo file is ready
              image: `${SITE_URL}/favicon.png`,
              email: "", // ← add when finalized
              sameAs: [
                "https://instagram.com/davaris.io",
                "https://calendly.com/davarisio",
                // "https://linkedin.com/company/davaris",
                // "https://twitter.com/davaris",
              ], // ← add social links when finalized
              serviceType: [
                "Web Design",
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "Branding",
                "Digital Strategy",
                "Social Media Management",
              ],
              areaServed: {
                "@type": "Place",
                name: "Worldwide",
              },
              "founder": {
                "@type": "Person",
                "name": "Osasenaga David"
              }
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}