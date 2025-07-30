import React from "react";
import Image from "next/image";

export const HeadshotContainer = ({
    src,
    animate = true,
}: {
    src: string;
    animate?: boolean;
}) => {
    return (
        <div className="z-0 group relative w-fit shrink-0 rounded-3xl p-1">
            <div
                className={`absolute inset-0 z-10 rounded-3xl bg-background-dark-secondary dark:bg-background-light-primary bg-[length:400%_400%] opacity-0 blur-xl transition duration-250 will-change-transform group-hover:opacity-50 ${animate ? "animate-gradientShift" : ""} `}
            />
            <div
                className={`absolute inset-0 z-20 rounded-3xl bg-background-light-secondary dark:bg-background-light-primary bg-[length:400%_400%] will-change-transform ${animate ? "animate-gradientShift" : ""} `}
            />
            <div className="relative rounded-[20px] overflow-hidden z-30">
                <Image
                    src={src}
                    alt="Headshot Photo"
                    height={500}
                    width={500}
                    className="w-56 md:w-72"
                />
            </div>
        </div>
    );
};
