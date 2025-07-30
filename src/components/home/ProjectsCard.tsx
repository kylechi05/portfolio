import React from "react";
import Link from "next/link";

export const ProjectsCard = ({
    title,
    description,
    href,
    className = "",
    containerClassName = "",
    animate = true,
}: {
    title: string;
    description: string;
    href: string;
    className?: string;
    containerClassName?: string;
    animate?: boolean;
}) => {
    return (
        <Link
            href={href}
            className={`group relative w-72 p-1 ${containerClassName}`}
        >
            <div
                className={`absolute inset-0 z-10 rounded-3xl bg-[radial-gradient(circle_farthest-side_at_0_100%,#10b981,transparent),radial-gradient(circle_farthest-side_at_100%_0,#ffa308,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#84cc16,transparent),radial-gradient(circle_farthest-side_at_0_0,#f97316,#141316)] bg-[length:400%_400%] opacity-40 blur-xl transition duration-250 will-change-transform group-hover:opacity-80 dark:bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] ${animate ? "animate-gradientShift" : ""} `}
            />
            <div
                className={`absolute inset-0 z-20 rounded-3xl bg-[radial-gradient(circle_farthest-side_at_0_100%,#10b981,transparent),radial-gradient(circle_farthest-side_at_100%_0,#ffa308,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#84cc16,transparent),radial-gradient(circle_farthest-side_at_0_0,#f97316,#141316)] bg-[length:400%_400%] will-change-transform dark:bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] ${animate ? "animate-gradientShift" : ""} `}
            />
            <div
                className={`dark:bg-background-dark-secondary bg-background-light-secondary relative z-30 flex flex-col gap-3 rounded-[20px] px-8 py-12 ${className}`}
            >
                <h3 className="dark:text-text-light-primary text-text-home-dark-primary text-lg font-semibold">
                    {title}
                </h3>
                <p className="text-text-home-dark-secondary dark:text-text-light-secondary text-sm">
                    {description}
                </p>
            </div>
        </Link>
    );
};
