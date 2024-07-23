import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import UserProvider from "@/components/user_context/context";
import ReduxProvider from "@/lib/provider";
const poppins = Poppins({weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Simple Invoice App",
  description: "A simple invoice app built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className + " h-screen "}>
        <ReduxProvider >  
            <UserProvider>
              {children}
            </UserProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
