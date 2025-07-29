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
            <div className="bg-background-light-primary/80 dark:bg-background-dark-primary/80 absolute inset-x-0 top-16 z-2 h-156 w-full" />
            <DynamicGradientBackground
                containerClassName="hidden md:block absolute h-172 z-1"
                darkMode={theme === "dark"}
            />
            <div className="absolute inset-0 top-16 z-3 h-156 bg-gradient-to-b from-[rgba(0,0,0,0)] from-80% to-[var(--color-background-light-primary)] to-100% dark:to-[var(--color-background-dark-primary)]" />
            <div className="relative z-4 flex h-[calc(39rem)] flex-col justify-center gap-4 py-16 text-center md:py-48">
                <h1 className="dark:text-text-light-primary text-3xl font-semibold md:text-5xl md:text-emerald-700 lg:text-6xl">
                    Kyle Chi
                </h1>
                <div className="text-text-dark-secondary dark:text-text-light-secondary text-base md:text-lg md:text-emerald-950">
                    <div>Computer Science and Math</div>
                    <div>3rd year at the University of Iowa</div>
                </div>
            </div>
            <div className="flex w-full flex-col items-center gap-6 text-center">
                <div className="flex flex-col gap-2 md:w-2/3">
                    <div className="dark:text-text-light-primary flex flex-row justify-center gap-3 text-2xl font-semibold md:text-emerald-800">
                        <p>Hi</p>
                        <div className="w-8">
                            <HandwaveIcon />
                        </div>
                    </div>
                    <p className="text-text-dark-secondary dark:text-text-light-secondary md:text-emerald-950">
                        I&apos;m a computer science and math student at the
                        University of Iowa. I enjoy fullstack development and
                        AI/ML. Besides coding, I enjoy lifting, music, and
                        cooking. You can find my most recently listened to song
                        below. Feel free to explore my site to learn more about
                        me, my experience, and my projects.
                    </p>
                </div>
                <SocialMediaBar />
            </div>
            <OtherPages />
        </div>
    );
}
