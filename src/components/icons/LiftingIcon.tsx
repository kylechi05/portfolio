export default function LiftingIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            vectorEffect="non-scaling-stroke"
            className="mx-1 size-4 stroke-current"
            strokeWidth={2}
            fill="none"
        >
            <path d="M7,12 H18" />
            <rect x="4" y="7" rx="2" ry="1" height="10" width="3" />
            <rect x="17" y="7" rx="2" ry="1" height="10" width="3" />
            <circle cx="3" cy="12" r="1" />
            <circle cx="21" cy="12" r="1" />
        </svg>
    );
}
