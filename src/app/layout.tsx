import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/context/ThemeContext";

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Kyle Chi",
    description: "Kyle Chi's professional portfolio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider>
                    <div className="bg-background-light-primary text-text-dark-primary dark:bg-background-dark-primary dark:text-text-light-primary">
                        <NavBar />
                        <div className="px-mobile-x md:px-desktop-small-x lg:px-desktop-large-x">{children}</div>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
