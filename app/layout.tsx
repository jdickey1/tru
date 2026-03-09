import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://texasrepublicansunited.com"),
  title: "Texas Republicans United | Electing Republicans & Growing the Party",
  description: "Texas Republicans United is a Political Action Committee dedicated to electing conservative Republicans and growing the Republican Party across Texas.",
  keywords: "Texas Republicans, Texas GOP, Republican Party, PAC, Texas politics, conservative, Texas elections",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Texas Republicans United",
    description: "Electing Republicans & Growing the Party in Texas",
    url: "https://texasrepublicansunited.com",
    siteName: "Texas Republicans United",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas Republicans United",
    description: "Electing Republicans & Growing the Party in Texas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased`}
      >
        {children}
              <Script
          src="https://analytics.jdkey.com/script.js"
          data-website-id="e6db9ac2-d8de-4a6b-b5b1-5c8a79c497d1"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
