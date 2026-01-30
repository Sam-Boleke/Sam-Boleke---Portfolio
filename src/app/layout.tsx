import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relebohile Samuel Boleke (Sam Boleke) | Portfolio",
  description: "Full-stack developer portfolio — apps, platforms, and case studies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
