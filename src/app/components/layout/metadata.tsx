import type { Viewport, Metadata } from "next";

//Viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// Main metadata settings
export const metadata: Metadata = {
  metadataBase: new URL("https://tapar.az"),
  title: "TAPAR",
  description: "TAPAR.AZ - Find the products you're looking for at TAPAR.",
  icons: {
    icon: "/Group3.svg",
  },
  openGraph: {
    title: "TAPAR",
    description: "Lazım olan məhsulları Tapar-da tap!",
    url: "https://tapar.az",
    siteName: "TAPAR",
    images: [
      {
        url: "/Group 4.png",
        width: 1200,
        height: 630,
        alt: "TAPAR Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@taparaz",
    title: "TAPAR",
    description: "Lazım olan məhsulları Tapar-da tap!",
    images: [
      {
        url: "/Group 4.png",
        alt: "TAPAR Twitter Card Image",
      },
    ],
  },
};
