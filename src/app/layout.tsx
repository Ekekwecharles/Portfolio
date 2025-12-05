import type { ReactNode } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import "html5-device-mockups/dist/device-mockups.min.css";
// import StyledComponentsRegistry from "../lib/registry";

export const metadata: Metadata = {
  title: "Ekekwe Charles",
  description:
    "Fullstack Software Developer | React, Next.js, TypeScript & Backend APIs",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        <GlobalStyle />
        <Toaster position="top-right" />
        <Header />
        {children}
        {/* <StyledComponentsRegistry></StyledComponentsRegistry> */}
      </body>
    </html>
  );
}
