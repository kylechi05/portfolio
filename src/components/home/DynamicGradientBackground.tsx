"use client";

import { useEffect, useRef, useState } from "react";

export const DynamicGradientBackground = ({
    gradientBackgroundStart = "rgb(194, 255, 89)",
    gradientBackgroundEnd = "rgb(255, 89, 222)",
    firstColor = "77, 51, 150",
    secondColor = "135, 3, 166",
    thirdColor = "0, 126, 163",
    fourthColor = "176, 11, 85",
    fifthColor = "230, 9, 9",
    pointerColor = "18, 113, 255",
    darkGradientBackgroundStart = "rgb(50, 0, 94)",
    darkGradientBackgroundEnd = "rgb(18, 0, 99)",
    darkFirstColor = "140, 100, 255",
    darkSecondColor = "221, 74, 255",
    darkThirdColor = "100, 220, 255",
    darkFourthColor = "219, 70, 137",
    darkFifthColor = "252, 121, 121",
    darkPointerColor = "18, 113, 255",
    darkMode = false,
    size = "80%",
    blendingValue = "hard-light",
    children,
    className,
    interactive = true,
    containerClassName,
}: {
    gradientBackgroundStart?: string;
    gradientBackgroundEnd?: string;
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
    fourthColor?: string;
    fifthColor?: string;
    pointerColor?: string;
    darkGradientBackgroundStart?: string;
    darkGradientBackgroundEnd?: string;
    darkFirstColor?: string;
    darkSecondColor?: string;
    darkThirdColor?: string;
    darkFourthColor?: string;
    darkFifthColor?: string;
    darkPointerColor?: string;
    darkMode?: boolean;
    size?: string;
    blendingValue?: string;
    children?: React.ReactNode;
    className?: string;
    interactive?: boolean;
    containerClassName?: string;
}) => {
    const interactiveRef = useRef<HTMLDivElement>(null);

    const [curX, setCurX] = useState(0);
    const [curY, setCurY] = useState(0);
    const [tgX, setTgX] = useState(0);
    const [tgY, setTgY] = useState(0);
    useEffect(() => {
        document.body.style.setProperty(
            "--gradient-background-start",
            darkMode ? darkGradientBackgroundStart : gradientBackgroundStart,
        );
        document.body.style.setProperty(
            "--gradient-background-end",
            darkMode ? darkGradientBackgroundEnd : gradientBackgroundEnd,
        );
        document.body.style.setProperty(
            "--first-color",
            darkMode ? darkFirstColor : firstColor,
        );
        document.body.style.setProperty(
            "--second-color",
            darkMode ? darkSecondColor : secondColor,
        );
        document.body.style.setProperty(
            "--third-color",
            darkMode ? darkThirdColor : thirdColor,
        );
        document.body.style.setProperty(
            "--fourth-color",
            darkMode ? darkFourthColor : fourthColor,
        );
        document.body.style.setProperty(
            "--fifth-color",
            darkMode ? darkFifthColor : fifthColor,
        );
        document.body.style.setProperty(
            "--pointer-color",
            darkMode ? darkPointerColor : pointerColor,
        );
    }, [darkMode]);

    useEffect(() => {
        document.body.style.setProperty("--size", size);
        document.body.style.setProperty("--blending-value", blendingValue);
    }, []);

    useEffect(() => {
        function move() {
            if (!interactiveRef.current) {
                return;
            }
            setCurX(curX + (tgX - curX) / 20);
            setCurY(curY + (tgY - curY) / 20);
            interactiveRef.current.style.transform = `translate(${Math.round(
                curX,
            )}px, ${Math.round(curY)}px)`;
        }

        move();
    }, [tgX, tgY]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (interactiveRef.current) {
            const rect = interactiveRef.current.getBoundingClientRect();
            setTgX(event.clientX - rect.left);
            setTgY(event.clientY - rect.top);
        }
    };

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }, []);

    return (
        <div
            className={`${containerClassName} top-0 left-0 w-full overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]`}
        >
            <svg className="hidden">
                <defs>
                    <filter id="blurMe">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className={className}>{children}</div>
            <div
                className={`gradients-container h-full w-full blur-lg ${isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"}`}
            >
                <div
                    className={
                        "animate-first absolute top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [transform-origin:center_center] opacity-100 [mix-blend-mode:var(--blending-value)] [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]"
                    }
                ></div>
                <div className="animate-second absolute top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [transform-origin:calc(50%-400px)] opacity-100 [mix-blend-mode:var(--blending-value)] [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]"></div>
                <div className="animate-third absolute top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [transform-origin:calc(50%+400px)] opacity-100 [mix-blend-mode:var(--blending-value)] [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]"></div>
                <div className="animate-fourth absolute top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [transform-origin:calc(50%-200px)] opacity-70 [mix-blend-mode:var(--blending-value)] [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]"></div>
                <div
                    className={
                        "animate-fifth absolute top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [transform-origin:calc(50%-800px)_calc(50%+800px)] opacity-100 [mix-blend-mode:var(--blending-value)] [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]"
                    }
                ></div>

                {interactive && (
                    <div
                        ref={interactiveRef}
                        onMouseMove={handleMouseMove}
                        className={
                            "absolute -top-1/2 -left-1/2 h-full w-full opacity-70 [mix-blend-mode:var(--blending-value)] [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]"
                        }
                    ></div>
                )}
            </div>
        </div>
    );
};
