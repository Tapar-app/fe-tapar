import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import Header from "@/app/components/layout/header";
import MatomoAnalytics from "./components/matomo-analytics";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

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

export const generateViewport = () => "width=device-width, initial-scale=1.0";
export const generateThemeColor = () => "#ffffff";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MatomoAnalytics>
          <Providers>
            <Header />
            {children}
          </Providers>
        </MatomoAnalytics>
      </body>
    </html>
  );
}

export default RootLayout;
