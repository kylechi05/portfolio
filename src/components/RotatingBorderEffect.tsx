export function RotatingBorderEffect({
    borderWidth,
    className,
    children,
}: {
    borderWidth: number;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={`group relative size-fit ${className}`}>
            <div className="relative z-10 rounded-[inherit]">{children}</div>
            <div
                className="absolute rounded-[inherit]"
                style={{
                    inset: `-${borderWidth}px`,
                }}
            >
                <div className="animate-spin-gradient group-hover:animate-spin-gradient-hover absolute -inset-1 rounded-[inherit] opacity-35 blur-md transition duration-250 will-change-transform [background:conic-gradient(from_var(--spin-gradient-angle),var(--spin-gradient-stops-light))] dark:[background:conic-gradient(from_var(--spin-gradient-angle),var(--spin-gradient-stops-dark))]" />

                <div className="animate-spin-gradient absolute inset-0 rounded-[inherit] [background:conic-gradient(from_var(--spin-gradient-angle),var(--spin-gradient-stops-light))] dark:[background:conic-gradient(from_var(--spin-gradient-angle),var(--spin-gradient-stops-dark))]" />
            </div>
        </div>
    );
}
