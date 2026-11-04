import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trans SabbaGlobal | International Freight Forwarder & Logistics Partner",
  description:
    "Delivering Reliable, Fast, and Efficient Supply Chain Solutions Worldwide. Ocean Freight, Air Freight, Domestic Logistics, Project Cargo, Charter Vessel & Customs Clearance.",
  keywords: [
    "Trans SabbaGlobal",
    "Freight Forwarder Jakarta",
    "International Logistics",
    "Ocean Freight Indonesia",
    "Air Freight Jakarta",
    "Customs Clearance Indonesia",
    "Domestic Logistics Indonesia",
  ],
  authors: [{ name: "Trans SabbaGlobal" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-['Plus_Jakarta_Sans',sans-serif] antialiased min-h-screen selection:bg-tsg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
