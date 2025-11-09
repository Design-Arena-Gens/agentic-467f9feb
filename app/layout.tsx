export const metadata = {
  metadataBase: new URL("https://agentic-467f9feb.vercel.app"),
  title: {
    default: "Bhagavad Gita 1.2 | Sanjaya Uvacha",
    template: "%s | Bhagavad Gita 1.2"
  },
  description:
    "Sanjaya said: Seeing the Pandava army arrayed, King Duryodhana approached his teacher and spoke.",
  openGraph: {
    title: "Bhagavad Gita 1.2 | Sanjaya Uvacha",
    description:
      "Sanjaya said: Seeing the Pandava army arrayed, King Duryodhana approached his teacher and spoke.",
    url: "https://agentic-467f9feb.vercel.app",
    siteName: "Bhagavad Gita Verse",
    locale: "en_US",
    type: "website"
  },
  robots: { index: true, follow: true }
} satisfies import("next").Metadata;

import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sa">
      <body>
        <main className="container">
          {children}
        </main>
        <footer className="footer">
          <span>Bhagavad Gita 1.2 ? Built for Vercel</span>
        </footer>
      </body>
    </html>
  );
}
