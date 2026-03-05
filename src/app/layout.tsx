import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mōtus Clínica Integral",
  description: "Clínica de salud integral enfocada en el cuidado personalizado, el bienestar físico y el seguimiento humano en Rosario.",
  icons: {
    icon: "/LogoBlancoFavIcon.png",
    apple: "/LogoBlancoFavIcon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${outfit.className} min-h-screen bg-background text-foreground antialiased flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
