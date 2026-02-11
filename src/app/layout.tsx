import { RootProvider } from "fumadocs-ui/provider/next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s — Experiments",
    default: "Experiments — UI & Interaction Design Lab",
  },
  description:
    "A design lab for documenting user interface experiments and interaction patterns.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable}`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
