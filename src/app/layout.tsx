import { Poppins } from 'next/font/google';
import Script from 'next/script';

import Providers from '@/app/providers';
import Header from '@/components/layout/header';
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
      <head>
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=G-185Q8MF1JJ`}
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-185Q8MF1JJ');
          `}
        </Script>
        <Script id='yandex-metrika' strategy='afterInteractive'>
          {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){
              (m[i].a=m[i].a||[]).push(arguments)
            };
            m[i].l=1*new Date();
            for (var j=0; j<document.scripts.length; j++) {
              if(document.scripts[j].src===r){ return; }
            }
            k=e.createElement(t),
            a=e.getElementsByTagName(t)[0],
            k.async=1,
            k.src=r,
            a.parentNode.insertBefore(k,a)
          })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(100438313, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true,
            ecommerce:"dataLayer"
          });
        `}
        </Script>
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
