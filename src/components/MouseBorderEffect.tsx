"use client";

import { memo, useCallback, useEffect, useRef } from "react";

interface GlowingEffectProps {
    blur?: number;
    inactiveZone?: number;
    proximity?: number;
    spread?: number;
    variant?: "dark" | "light";
    className?: string;
    disabled?: boolean;
    movementDuration?: number;
    borderWidth?: number;
}
const MouseBorderEffect = memo(
    ({
        blur = 0,
        inactiveZone = 0.7,
        proximity = 0,
        spread = 20,
        variant = "dark",
        className = "",
        movementDuration = 2,
        borderWidth = 1,
        disabled = true,
    }: GlowingEffectProps) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const lastPosition = useRef({ x: 0, y: 0 });
        const animationFrameRef = useRef<number>(0);

        const animateLinear = (
            from: number,
            to: number,
            duration: number,
            onUpdate: (val: number) => void,
        ) => {
            const start = performance.now();
            const loop = (time: number) => {
                const elapsed = (time - start) / 1000;
                const progress = Math.min(elapsed / duration, 1);
                const value = from + (to - from) * progress;
                onUpdate(value);
                if (progress < 1) {
                    requestAnimationFrame(loop);
                }
            };
            requestAnimationFrame(loop);
        };

        const handleMove = useCallback(
            (e?: MouseEvent | { x: number; y: number }) => {
                if (!containerRef.current) return;

                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }

                animationFrameRef.current = requestAnimationFrame(() => {
                    const element = containerRef.current;
                    if (!element) return;

                    const { left, top, width, height } =
                        element.getBoundingClientRect();
                    const mouseX = e?.x ?? lastPosition.current.x;
                    const mouseY = e?.y ?? lastPosition.current.y;

                    if (e) {
                        lastPosition.current = { x: mouseX, y: mouseY };
                    }

                    const center = [left + width * 0.5, top + height * 0.5];
                    const distanceFromCenter = Math.hypot(
                        mouseX - center[0],
                        mouseY - center[1],
                    );
                    const inactiveRadius =
                        0.5 * Math.min(width, height) * inactiveZone;

                    if (distanceFromCenter < inactiveRadius) {
                        element.style.setProperty("--active", "0");
                        return;
                    }

                    const isActive =
                        mouseX > left - proximity &&
                        mouseX < left + width + proximity &&
                        mouseY > top - proximity &&
                        mouseY < top + height + proximity;

                    element.style.setProperty("--active", isActive ? "1" : "0");

                    if (!isActive) return;

                    const currentAngle =
                        parseFloat(element.style.getPropertyValue("--start")) ||
                        0;
                    const targetAngle =
                        (180 *
                            Math.atan2(
                                mouseY - center[1],
                                mouseX - center[0],
                            )) /
                            Math.PI +
                        90;

                    const angleDiff =
                        ((targetAngle - currentAngle + 180) % 360) - 180;
                    const newAngle = currentAngle + angleDiff;

                    animateLinear(
                        currentAngle,
                        newAngle,
                        movementDuration,
                        (v) => element.style.setProperty("--start", `${v}`),
                    );
                });
            },
            [inactiveZone, proximity, movementDuration],
        );

        useEffect(() => {
            if (disabled) return;

            const handleScroll = () => handleMove();
            const handlePointerMove = (e: PointerEvent) => handleMove(e);

            window.addEventListener("scroll", handleScroll, { passive: true });
            document.body.addEventListener("pointermove", handlePointerMove, {
                passive: true,
            });

            return () => {
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
                window.removeEventListener("scroll", handleScroll);
                document.body.removeEventListener(
                    "pointermove",
                    handlePointerMove,
                );
            };
        }, [handleMove, disabled]);

        return (
            <>
                <div
                    ref={containerRef}
                    style={
                        {
                            "--blur": `${blur}px`,
                            "--spread": spread,
                            "--start": "0",
                            "--active": "0",
                            "--glowingeffect-border-width": `${borderWidth}px`,
                            "--gradient":
                                variant === "light"
                                    ? `linear-gradient(
                  135deg,
                  #5900ff 0%,
                  #e736ff 35%,
                  #fc9e05 110%
                )`
                                    : `
                linear-gradient(
                  135deg,
                  #e736ff 0%,
                  #885ffa 25%,
                  #1ff4ff 110%
                )`,
                        } as React.CSSProperties
                    }
                    className={`pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-100 transition-opacity ${blur > 0 ? "blur-[var(--blur)]" : null} ${className} ${disabled ? "!hidden" : null}`}
                >
                    <div
                        className={`absolute -inset-[var(--glowingeffect-border-width)] rounded-[inherit] [mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))] [background-attachment:fixed] opacity-[var(--active)] [background:var(--gradient)]`}
                    />
                </div>
            </>
        );
    },
);

MouseBorderEffect.displayName = "MouseBorderEffect";

export { MouseBorderEffect };
