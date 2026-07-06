import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gran Reserva Ideale · Roteiros de Gravação",
  description:
    "Roteiros de gravação da diária no Gran Reserva Ideale: 10 roteiros, 5 looks-base e opções de figurino por ambiente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${inter.variable}`}
        style={{ "--font-heading": "var(--font-display)" } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
