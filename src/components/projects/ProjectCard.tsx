"use client";

import { useState } from "react";

import { MouseBorderEffect } from "@/components/effects/MouseBorderEffect";

export function ProjectCard({
    title,
    subtitle,
    image,
    className,
    children,
}: {
    title: string;
    subtitle: string;
    image: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`${className} relative block h-fit break-inside-avoid overflow-hidden rounded-3xl p-[1.5px]`}
        >
            <MouseBorderEffect
                blur={0}
                inactiveZone={0}
                proximity={128}
                spread={90}
                disabled={false}
                movementDuration={0.5}
                borderWidth={1.5}
                className="hidden md:block"
            />
            <div className="group/project-card bg-background-light-primary dark:bg-background-dark-primary border-border-light dark:border-border-dark relative cursor-pointer rounded-[inherit] border-1 p-2.75">
                <div className="relative z-0 rounded-[13px]">
                    <div className="bg-background-light-primary group-hover/project-card:bg-background-light-secondary/80 dark:group-hover/project-card:bg-background-dark-secondary/80 dark:bg-background-dark-primary z-1 rounded-[inherit] px-5 py-10 transition-all duration-100 ease-linear md:px-12 md:py-20">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-lg font-medium md:text-xl">
                                {title}
                            </h1>
                            <h2 className="text-text-dark-secondary dark:text-text-light-secondary text-sm">
                                {subtitle}
                            </h2>
                            <h2
                                className="pt-6 text-sm"
                                onClick={() => setIsOpen((prev) => !prev)}
                            >
                                {isOpen ? "Close" : "View More"}
                            </h2>
                        </div>
                        <div
                            className={`text-sm text-text-dark-secondary dark:text-text-light-secondary grid overflow-hidden transition-[grid-template-rows,opacity] duration-100 ease-linear ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                        >
                            {children}
                        </div>
                    </div>
                    <div className="dark:bg-background-light-secondary bg-background-dark-secondary absolute inset-0 -z-1 rounded-[inherit] opacity-10 blur-sm" />
                </div>
            </div>
        </div>
    );
}
