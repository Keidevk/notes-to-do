import { Inter } from "next/font/google";
import "./globals.css";
import { StrictMode } from 'react';

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "Notemaster",
  description: "notemaster is a application for creating and managing notes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <StrictMode>
      <body className={inter.className}>{children}</body>
      </StrictMode>
    </html>
  );
}
