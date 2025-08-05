export default function CivSentinelIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="size-6 stroke-current"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            strokeWidth={2}
            fill="none"
        >
            <defs>
                <clipPath id="pin-clip">
                    <path d="M0,0 H24 V9 c-23,-9,-10,15,-7,15 V24 H0 V0" />
                </clipPath>
            </defs>
            <path
                d="M11,1 L1,5 A19,19,0,0,0,11,23 A19,19,0,0,0,21,5 L11,1"
                clipPath="url(#pin-clip)"
            />
            <path
                d="M14,15 c-1,-7,10,-7,9,0 c0,0.5,-0.75,4,-4.5,8 M14,15 c0,0.5,0.75,4,4.5,8"
                strokeWidth={1.5}
            />
            <circle cx="18.5" cy="14.5" r="1.75" strokeWidth={1.25} />
        </svg>
    );
}
