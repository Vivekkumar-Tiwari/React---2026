import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SynthoraAI — Unlock Your Creativity With Stunning Images",
  description:
    "Generate hyper-realistic images, dreamy illustrations, and cinematic scenes with AI. No design skills needed.",
  keywords: ["AI image generator", "creative AI", "image generation", "SynthoraAI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
