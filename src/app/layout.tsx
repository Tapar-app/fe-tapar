import { Poppins } from 'next/font/google';

import Providers from '@/app/providers';
import Header from '@/components/layout/header';
import MatomoAnalytics from '@/components/MatomoAnalytics';
import { metadata, viewport } from '@/components/layout/metadata';

import './globals.css';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export { metadata, viewport };

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
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
