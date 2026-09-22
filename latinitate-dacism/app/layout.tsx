import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daco-Romanii | Latinitate și Dacism",
  description:
    "Aplicație educațională despre originea daco-romană a poporului român, romanizare și demontarea miturilor istorice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className="antialiased">{children}</body>
    </html>
  );
}
