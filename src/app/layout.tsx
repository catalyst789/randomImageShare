import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        property="og:title"
        content="How to change the address bar color in Chrome, Firefox, Opera, Safari"
      />
      <meta
        property="og:description"
        content="How to change the address bar color in Chrome, Firefox, Opera, Safari"
      />
      <meta
        property="og:url"
        content="http://webdevelopmentscripts.com/64-how-to-change-the-address-bar-color-in-chrome-firefox-opera-safari"
      />
      <meta
        property="og:image"
        content="http://webdevelopmentscripts.com/post-images/685b-change-browser-address-bar-color-chrome-android.jpeg"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
