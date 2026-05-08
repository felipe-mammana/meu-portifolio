import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felipe Mammana | Backend & Systems Developer",
  description:
    "Portfólio premium de Felipe Mammana, desenvolvedor backend/fullstack criando sistemas reais, automações e soluções inteligentes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
