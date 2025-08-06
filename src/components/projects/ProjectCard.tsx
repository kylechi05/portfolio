"use client";

import { useState } from "react";

import { SkillCard } from "../SkillCard";
import { MouseBorderEffect } from "@/components/effects/MouseBorderEffect";
import { OpenExternalIcon } from "@/components/icons";

function ImageFramer({
    isOpen,
    children,
}: {
    isOpen: boolean;
    children: React.ReactNode;
}) {
    return (
        <div
            className={`${isOpen ? "h-12 w-full md:self-start" : null} border-border-light text-text-dark-secondary dark:text-text-light-primary bg-background-light-primary dark:bg-background-dark-primary dark:border-border-dark relative flex size-10 shrink-0 grow-0 flex-row items-center justify-center rounded-lg border-1 transition-[width,height] duration-100 ease-linear`}
        >
            {children}
        </div>
    );
}

export function ProjectCard({
    title,
    subtitle,
    techStack,
    externalUrl,
    image,
    className,
    children,
}: {
    title: string;
    subtitle: string;
    techStack: string[];
    externalUrl: string;
    image: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    const ViewMoreButton = ({
        enabled = true,
        className,
    }: {
        enabled?: boolean;
        className?: string;
    }) => (
        <div
            className={`${className} dark:border-border-dark border-border-light relative z-0 w-fit shrink-0 grow-0 rounded-[inherit] border-1 px-2.5 py-1 text-sm transition-[scale] duration-100 ${!isOpen ? "group-hover/project-card:bg-background-light-secondary/75 dark:group-hover/project-card:bg-background-dark-secondary/75 group-hover/project-card:scale-105" : "hover:bg-background-light-secondary/75 dark:hover:bg-background-dark-secondary/75 hover:scale-105"}`}
            onClick={() => enabled && setIsOpen((prev) => !prev)}
        >
            {isOpen ? "Close" : "View More"}
        </div>
    );

    return (
        <>
            <div
                className={`${className} group/project-card relative block h-fit break-inside-avoid overflow-hidden rounded-3xl p-[1.5px]`}
                onClick={() => !isOpen && setIsOpen((prev) => !prev)}
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
                <div className="bg-background-light-primary dark:bg-background-dark-primary border-border-light dark:border-border-dark relative cursor-pointer rounded-[inherit] border-1 p-2.75">
                    <div className="relative z-0 rounded-[13px]">
                        <div className="bg-background-light-primary group-hover/project-card:bg-background-light-primary/65 dark:group-hover/project-card:bg-background-dark-primary/65 dark:bg-background-dark-primary z-1 flex flex-col gap-3.75 rounded-[inherit] px-5 pt-5 pb-7.5 transition-all duration-100 ease-linear md:gap-7.5 md:px-12 md:pt-10 md:pb-15">
                            <ImageFramer isOpen={isOpen}>{image}</ImageFramer>
                            <div className="flex w-full flex-col gap-2">
                                <h1 className="flex flex-row items-center gap-3 text-lg font-medium md:text-xl">
                                    {title}
                                    {isOpen && (
                                        <a
                                            className="group/external relative stroke-current p-1 transition-[scale] duration-100 ease-linear hover:scale-[115%]"
                                            href={externalUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="bg-light-gradient-green dark:bg-background-light-primary absolute inset-0 -z-1 opacity-0 blur-sm transition-[opacity] duration-100 ease-linear group-hover/external:opacity-50" />
                                            <OpenExternalIcon />
                                        </a>
                                    )}
                                </h1>
                                <h2 className="text-text-dark-secondary dark:text-text-light-secondary text-sm">
                                    {subtitle}
                                </h2>
                            </div>

                            <div
                                className={`text-text-dark-secondary dark:text-text-light-secondary hidden overflow-hidden text-sm transition-[grid-template-rows,opacity,filter,margin] duration-150 ease-in-out md:grid ${isOpen ? "m-0 grid-rows-[1fr] opacity-100 blur-[0px]" : "grid-rows-[0fr] opacity-0 blur-[8px] md:-m-3.75"}`}
                            >
                                <div className="flex flex-col gap-8 overflow-hidden">
                                    {children}
                                    <div className="flex flex-row flex-wrap gap-1.5 p-[2px]">
                                        {techStack.map((tech) => (
                                            <SkillCard
                                                key={tech}
                                                skill={tech}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <ViewMoreButton
                                enabled={isOpen}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="dark:bg-background-light-secondary bg-background-dark-secondary absolute inset-0 -z-1 rounded-[inherit] opacity-10 blur-sm" />
                    </div>
                </div>
            </div>
            <div
                className={`px-mobile-x bg-background-light-primary dark:bg-background-dark-primary fixed inset-x-0 top-16 bottom-0 z-10 flex flex-col items-center gap-5 py-3 text-start transition-opacity duration-100 md:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
                <ImageFramer isOpen={isOpen}>{image}</ImageFramer>
                <div className="relative flex w-full flex-row items-center justify-between gap-3">
                    <div className="flex-flex-col z-1 w-full">
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
                            {subtitle}
                        </h2>
                    </div>
                    <ViewMoreButton className="z-1 w-fit rounded-full" />
                    <div className="absolute -inset-x-6 top-0 -bottom-6 backdrop-blur-sm" />
                </div>
                <div className="flex h-full w-full flex-col gap-5 overflow-y-auto pt-2 pb-8">
                    <div className="text-text-dark-secondary dark:text-text-light-secondary text-sm">
                        {children}
                    </div>
                    <ul
                        className={`flex w-full flex-row flex-wrap gap-x-1.5 gap-y-2 p-0.5`}
                    >
                        {techStack.map((tech) => (
                            <SkillCard key={tech} skill={tech} />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
