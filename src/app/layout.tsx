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
  title: "TAPAR",
  description: "TAPAR.AZ",
  icons: {
    icon: "Group3.svg",
  },
};

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
