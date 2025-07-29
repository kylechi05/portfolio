import type { Metadata } from "next";
import { Montserrat, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/context/ThemeContext";

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Kyle Chi",
    description: "Kyle Chi's portfolio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-montserrat antialiased">
                <ThemeProvider>
                    <div className="bg-background-light-primary text-text-dark-primary dark:bg-background-dark-primary dark:text-text-light-primary min-h-screen">
                        <NavBar />
                        <div className="px-mobile-x md:px-desktop-s-x lg:px-desktop-l-x xl:px-desktop-xl-x pb-12">
                            {children}
                        </div>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
