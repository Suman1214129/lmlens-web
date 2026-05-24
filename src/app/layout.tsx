import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LM Lens — Enterprise Authentication Platform",
  description: "Centralized identity management with memory-safe Rust-based authentication. Multi-tenant, multi-project auth for modern applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" href="/lm-lens 1.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="/css2" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
