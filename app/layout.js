import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TravelVize - Profesyonel Vize Danışmanlığı",
  description: "TravelVize ile vize başvuru sürecinizi kolaylaştırın. Schengen, Amerika, Kanada ve daha fazla ülke için profesyonel vize danışmanlığı hizmeti.",
  keywords: "vize, vize başvurusu, schengen vizesi, Amerika vizesi, vize danışmanlığı, travel vize",
  author: "TravelVize",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
