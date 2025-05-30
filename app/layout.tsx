import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { SessionProvider } from "@/components/AuthProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body>
          <Nav />
          <div className="flex flex-col items-center mt-5">{children}</div>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
