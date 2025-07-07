import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HiSync - Transform Your Business Holistically",
  description: "We are your agile end-to-end partner: Ex-Big 4 consultants streamline operations and elite top tiered engineers build custom ERP Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} font-sans antialiased smooth-animation prevent-layout-shift`}>
        <PerformanceOptimizer />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
