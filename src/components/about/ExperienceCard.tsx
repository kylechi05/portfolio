"use client";

import { useState, useEffect } from "react";

import { SkillCard } from "@/components/SkillCard";
import { OpenExternalIcon } from "../icons";

function ImageFramer({
    backgroundColor,
    isOpen,
    children,
}: {
    backgroundColor: string;
    isOpen: boolean;
    children: React.ReactNode;
}) {
    return (
        <div
            className={`${isOpen ? "h-32 w-full p-3 md:size-40 md:self-start md:p-8" : "p-6 md:self-center"} relative flex size-42 shrink-0 grow-0 flex-row items-center justify-center rounded-lg object-contain transition-[width,height,padding] duration-100 ease-linear md:size-15 md:p-1`}
            style={{
                backgroundColor: backgroundColor,
            }}
        >
            {children}
        </div>
    );
}

export function ExperienceCard({
    title,
    location,
    externalUrl,
    date,
    logo,
    logoBackgroundColor,
    description,
    skills,
}: {
    title: string;
    location: string;
    externalUrl: string;
    date: string;
    logo: React.ReactNode;
    logoBackgroundColor: string;
    description: string[];
    skills: string[];
}) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)"); // md breakpoint

        const handleChange = (e: MediaQueryListEvent) => {
            setIsOpen(e.matches);
        };

        setIsOpen(mediaQuery.matches);

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);
    const MoreInfoButton = ({
        enabled = true,
        className,
    }: {
        enabled?: boolean;
        className?: string;
    }) => (
        <div
            className={`${className} group/button bg-background-dark-secondary text-text-light-primary dark:bg-background-light-primary dark:text-text-dark-primary relative z-0 rounded-[inherit] px-3 py-1 text-sm font-semibold transition-[scale] duration-100 ${!isOpen ? "group-hover/card:scale-105" : "hover:scale-105"}`}
            onClick={() => enabled && setIsOpen((prev) => !prev)}
        >
            {isOpen ? "Close" : "More"}
            <div
                className={`bg-background-dark-primary dark:bg-background-light-primary absolute inset-0 -z-1 rounded-[inherit] opacity-0 transition-all duration-100 ease-linear ${!isOpen ? "group-hover/card:-inset-3 group-hover/card:opacity-5" : "group-hover/button:-inset-3 group-hover/button:opacity-5"} md:rounded-[20px]`}
            />
        </div>
    );

    return (
        <>
            <div
                className="group/card relative cursor-pointer"
                onClick={() => !isOpen && setIsOpen((prev) => !prev)}
            >
                <div
                    className={`bg-background-light-primary hover:bg-background-light-secondary/50 dark:bg-background-dark-primary hover:dark:bg-background-dark-secondary/50 z-0 flex flex-col items-center gap-3 rounded-2xl p-4 transition-[gap,background] duration-100 ease-linear md:flex-row md:items-start ${isOpen ? "md:gap-12" : null}`}
                >
                    <ImageFramer
                        backgroundColor={logoBackgroundColor}
                        isOpen={isOpen}
                    >
                        {logo}
                    </ImageFramer>
                    <div
                        className={`flex w-full flex-col transition-[padding] duration-100 ease-linear ${
                            isOpen ? "md:py-0" : "md:py-2"
                        }`}
                    >
                        <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
                            <div className="flex flex-col gap-0.5">
                                <h1 className="hidden flex-row items-center text-base font-medium md:flex">
                                    <span>
                                        {title} · {location}
                                    </span>
                                    {isOpen && (
                                        <a
                                            className="group/external relative ml-3 stroke-current p-1 transition-[scale] duration-100 ease-linear hover:scale-[115%]"
                                            href={externalUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="bg-light-gradient-green dark:bg-background-light-primary absolute inset-0 -z-1 opacity-0 blur-sm transition-[opacity] duration-100 ease-linear group-hover/external:opacity-50" />
                                            <OpenExternalIcon />
                                        </a>
                                    )}
                                </h1>
                                <div className="flex flex-col items-center md:hidden">
                                    <h1 className="font-medium">{title}</h1>
                                    <h2 className="text-text-dark-secondary dark:text-text-light-secondary text-sm">
                                        {location}
                                    </h2>
                                    <MoreInfoButton
                                        className="mt-1.5 block w-fit rounded-full md:hidden"
                                        enabled={false}
                                    />
                                </div>
                                <h2 className="text-text-dark-secondary dark:text-text-light-secondary hidden text-sm font-medium md:block">
                                    {date}
                                </h2>
                            </div>
                            <MoreInfoButton
                                className="mr-10 hidden w-fit rounded-lg md:block"
                                enabled={isOpen}
                            />
                        </div>
                        <div
                            className={`hidden overflow-hidden opacity-0 transition-[grid-template-rows,opacity,padding,height] md:grid ${isOpen ? "grid-rows-[1fr] pt-5 pb-2 opacity-100 delay-50 duration-100" : "grid-rows-[0fr] pt-0 pb-0 opacity-0 delay-0 duration-0"}`}
                        >
                            <div
                                className={`flex w-[70%] flex-col gap-5 overflow-hidden text-start`}
                            >
                                <ul
                                    className={`text-text-dark-secondary dark:text-text-light-secondary flex flex-col gap-1.5 text-sm`}
                                >
                                    {description.map((desc, idx) => (
                                        <li key={idx}>{desc}</li>
                                    ))}
                                </ul>
                                <ul
                                    className={`flex w-full flex-row flex-wrap justify-start gap-x-1.5 gap-y-2 p-0.5`}
                                >
                                    {skills.map((skill) => (
                                        <SkillCard key={skill} skill={skill} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`px-mobile-x bg-background-light-primary dark:bg-background-dark-primary fixed inset-x-0 top-16 bottom-0 z-10 flex flex-col items-center gap-5 py-3 text-start transition-opacity duration-100 md:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
                <div className="sticky top-0 flex w-full flex-col items-center gap-5">
                    <ImageFramer
                        backgroundColor={logoBackgroundColor}
                        isOpen={isOpen}
                    >
                        {logo}
                    </ImageFramer>
                    <div className="flex w-full flex-row items-center justify-between gap-3">
                        <div className="flex-flex-col w-full">
                            <h1 className="flex flex-row items-center font-medium">
                                {title}
                                {isOpen && (
                                    <a
                                        className="ml-3 stroke-current p-1"
                                        href={externalUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <OpenExternalIcon />
                                    </a>
                                )}
                            </h1>
                            <h2 className="text-text-dark-secondary dark:text-text-light-secondary flex flex-col text-sm">
                                <span>{location}</span>
                                <span>{date}</span>
                            </h2>
                        </div>
                        <MoreInfoButton className="w-fit rounded-full" />
                    </div>
                </div>
                <div className="flex h-full w-full flex-col gap-5 overflow-y-auto pt-2 pb-8">
                    <ul
                        className={`text-text-dark-secondary dark:text-text-light-secondary flex flex-col gap-1.5 text-sm`}
                    >
                        {description.map((desc, idx) => (
                            <li key={idx}>{desc}</li>
                        ))}
                    </ul>
                    <ul
                        className={`flex w-full flex-row flex-wrap gap-x-1.5 gap-y-2 p-0.5`}
                    >
                        {skills.map((skill) => (
                            <SkillCard key={skill} skill={skill} />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
