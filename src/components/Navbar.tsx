"use client";

import Link from "next/link";
import { useState } from "react";

import { useTheme } from "@/context/ThemeContext";
import { KCIcon, MenuIcon, MoonIcon, SunIcon } from "@/components/icons";
import { HoverLink } from "@/components/HoverLink";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const changeTheme = (button: "light" | "dark") => {
        if (button === "light" && theme === "dark") {
            toggleTheme();
        } else if (button === "dark" && theme === "light") {
            toggleTheme();
        }
    };

    const handleMenuOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <nav className="text-text-dark-secondary dark:text-text-light-secondary px-mobile-header-footer-x md:px-desktop-s-x lg:px-desktop-l-x xl:px-desktop-xl-x border-border-light bg-background-light-primary/80 dark:border-border-dark dark:bg-background-dark-primary/80 sticky top-0 z-10 flex h-16 w-full flex-row justify-between border-b-1 backdrop-blur-sm">
            <div className="flex flex-row items-center gap-20">
                <Link
                    href="/"
                    className="group/home font-unbounded text-text-dark-primary dark:text-text-light-primary relative font-bold"
                >
                    <KCIcon />
                    <span className="bg-light-gradient-green dark:bg-background-light-primary absolute inset-0 -z-1 opacity-0 blur-md transition-opacity duration-100 group-hover/home:opacity-60" />
                </Link>
                <div className="hidden flex-row items-center gap-10 text-sm md:flex">
                    <HoverLink href="/about">About</HoverLink>
                    <HoverLink href="/projects">Projects</HoverLink>
                </div>
            </div>
            <div className="flex flex-row items-center gap-8">
                <div className="border-border-light dark:border-border-dark flex flex-row gap-2 rounded-full border-1 p-1">
                    <button
                        onClick={() => changeTheme("light")}
                        className={`dark:stroke-text-light-secondary dark:hover:stroke-text-light-primary flex size-8 cursor-pointer items-center justify-center rounded-full ${theme === "light" ? "bg-background-light-secondary/75 stroke-text-dark-primary" : null}`}
                    >
                        <SunIcon />
                    </button>
                    <button
                        onClick={() => changeTheme("dark")}
                        className={`stroke-text-dark-secondary dark:stroke-text-light-primary dark:bg-background-dark-secondary/75 flex size-8 cursor-pointer items-center justify-center rounded-full ${theme !== "dark" ? "hover:stroke-text-dark-primary" : null}`}
                    >
                        <MoonIcon />
                    </button>
                </div>
                <div
                    onClick={handleMenuOpen}
                    className="stroke-text-dark-primary dark:stroke-text-light-primary block w-6 md:hidden"
                >
                    <MenuIcon isMenuOpen={isOpen} />
                </div>
            </div>
            {isOpen && (
                <div className="px-mobile-x bg-background-light-primary dark:bg-background-dark-primary fixed inset-x-0 top-16 flex h-[calc(100vh-4rem)] flex-col gap-6 py-6 md:hidden">
                    <Link href="/" onClick={handleMenuOpen}>
                        Home
                    </Link>
                    <Link href="/about" onClick={handleMenuOpen}>
                        About
                    </Link>
                    <Link href="/projects" onClick={handleMenuOpen}>
                        Projects
                    </Link>
                </div>
            )}
        </nav>
    );
}
