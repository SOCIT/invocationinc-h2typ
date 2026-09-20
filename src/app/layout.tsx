import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { brand } from "@/lib/products";

export const metadata: Metadata = {
  title: {
    default: `${brand.bookTitle} — ${brand.name}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "How to Train Your Partner from Invocation Inc. Run your relationship like an operator: fix yourself first, communicate so it lands, use incentives without becoming a manipulator. A field manual. Not Hallmark. Not pickup-artist.",
  openGraph: {
    title: `${brand.bookTitle} — ${brand.name}`,
    description:
      "How to Train Your Partner — a blunt field manual for intimate relationships. Launch list now open.",
    siteName: brand.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
