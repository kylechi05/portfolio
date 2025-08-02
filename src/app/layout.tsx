import type { Metadata } from "next";
import { Montserrat, Space_Grotesk, Unbounded } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/context/ThemeContext";

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Kyle Chi",
    description: "Kyle Chi's portfolio.",
};

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
});

const unbounded = Unbounded({
    subsets: ["latin"],
    variable: "--font-unbounded",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${spaceGrotesk.variable} ${montserrat.variable} ${unbounded.variable} font-montserrat`}
        >
            <body className="tracking-wide antialiased">
                <ThemeProvider>
                    <div className="bg-background-light-primary text-text-dark-primary dark:bg-background-dark-primary dark:text-text-light-primary relative z-0 min-h-screen">
                        <NavBar />
                        <div className="px-mobile-x md:px-desktop-s-x lg:px-desktop-l-x xl:px-desktop-xl-x relative z-1 pb-12">
                            {children}
                        </div>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
