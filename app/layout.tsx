import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mathis Portfolio",
  description: "Le portfolio de Mathis HEDER, développeur fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
