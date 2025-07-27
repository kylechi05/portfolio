export default function MenuIcon({ isMenuOpen }: { isMenuOpen: boolean }) {
    return (
        <span className="relative">
            <svg viewBox="0 0 100 100" className="w-full">
                <path
                    className="transition-transform duration-150 ease-in-out"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    d="M0,30 H100"
                    transform={
                        isMenuOpen
                            ? "translate(15, -15) rotate(45, 0, 30)"
                            : "translate(0, 0) rotate(0, 0, 0)"
                    }
                />
            </svg>
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full">
                <path
                    className="transition-transform duration-150 ease-in-out"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    d="M0,70 H100"
                    transform={
                        isMenuOpen
                            ? "translate(15, 15) rotate(-45, 0, 70)"
                            : "translate(0, 0) rotate(0, 0, 0)"
                    }
                />
            </svg>
        </span>
    );
}
