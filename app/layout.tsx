import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import DM_Sans from "@/lib/fonts/dm-sans";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Aksara",
  description: "Writing Platform for Human.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={DM_Sans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
