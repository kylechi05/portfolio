export default function CookingIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            vectorEffect="non-scaling-stroke"
            className="mx-1 size-4 stroke-current"
            strokeWidth={2}
            fill="none"
        >
            <circle cx="9" cy="9" r="8" />
            <path
                d="M13,15 L19,22 A2,2,0,0,0,22,19 L15,13 M16,14 A9,9,0,0,1,14,16 Z"
                fill="currentColor"
            />
            <rect
                x={6.5}
                y={6.5}
                rx={1}
                ry={2}
                height={5}
                width={5}
                fill="currentColor"
            />
        </svg>
    );
}
