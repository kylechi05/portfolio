"use client";

import { DynamicGradientBackground } from "@/components/home/DynamicGradientBackground";
import { SocialMediaBar } from "@/components/SocialMediaBar";
import { OtherPages } from "@/components/home/OtherPages";
import { useTheme } from "@/context/ThemeContext";
import HandwaveIcon from "@/components/icons/HandwaveIcon";

export default function Home() {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col gap-20">
            <div className="bg-background-light-primary/80 dark:bg-background-dark-primary/80 absolute inset-0 top-0 z-2 h-156 w-full" />
            <DynamicGradientBackground
                containerClassName="absolute h-172 -top-16  z-1"
                darkMode={theme === "dark"}
            />
            <div className="absolute inset-0 z-3 h-156 bg-gradient-to-b from-[rgba(0,0,0,0)] from-80% to-[var(--color-background-light-primary)] to-100% dark:to-[var(--color-background-dark-primary)]" />
            <div className="relative z-4 flex h-[calc(39rem)] flex-col justify-center gap-4 py-16 text-center md:py-48">
                <h1 className="dark:text-text-light-primary font-unbounded text-text-home-dark-primary text-3xl font-semibold md:text-5xl lg:text-6xl">
                    Kyle Chi
                </h1>
                <div className="font-space-grotesk text-text-home-dark-secondary dark:text-text-light-secondary text-base md:text-lg">
                    <div>Computer Science and Math</div>
                    <div>3rd year at the University of Iowa</div>
                </div>
            </div>
            <div className="flex w-full flex-col items-center gap-6 text-center">
                <div className="flex flex-col gap-2 md:w-2/3">
                    <div className="dark:text-text-light-primary text-text-home-dark-primary flex flex-row justify-center gap-3 text-2xl font-semibold">
                        <p className="font-space-grotesk">Hi</p>
                        <div className="w-8">
                            <HandwaveIcon />
                        </div>
                    </div>
                    <p className="text-text-home-dark-secondary dark:text-text-light-secondary">
                        I&apos;m a computer science and math student at the
                        University of Iowa. I enjoy fullstack development and
                        AI/ML. Besides coding, I enjoy lifting, music, and
                        cooking. Feel free to explore my site to learn more
                        about me, my experience, and my projects.
                    </p>
                </div>
                <SocialMediaBar />
            </div>
            <div className="z-0">
                <OtherPages />
            </div>
        </div>
    );
}
