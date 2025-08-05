export default function SpreadSimIcon() {
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
                <clipPath id="circle-clip">
                    <path d="M0,0 H24 V24 H0 V0 Z M16.5,17 m-9,0 a9,9,0,1,0,18,0 a9,9,0,1,0,-18,0 Z" />
                </clipPath>
            </defs>
            <path
                d="M2,1 H14 M4,1 V19 A2,2,0,0,0,12,19 V2 M4,9 H12"
                clipPath="url(#circle-clip)"
            />
            <circle cx={16.5} cy={17} r={5} strokeWidth={1} />
            <circle
                cx={15.5}
                cy={15.5}
                r={0.5}
                strokeWidth={1}
                fill="currentColor"
            />
            <circle
                cx={17.5}
                cy={18.5}
                r={0.5}
                strokeWidth={1}
                fill="currentColor"
            />
            {[...Array(8)].map((_, i) => {
                const angle = ((i + 0.75) / 8) * 2 * Math.PI;
                const r = 5.5;
                const cx = 16.5 + r * Math.cos(angle);
                const cy = 17 + r * Math.sin(angle);

                const arcR = 0.75;

                const rotation = angle * (180 / Math.PI) + 90;

                const d = `
                    M ${cx - arcR},${cy}
                    A ${arcR},${arcR} 0 0 1 ${cx + arcR},${cy}
                    L ${cx},${cy}
                    Z
                `;

                return (
                    <path
                        key={i}
                        d={d}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1}
                        transform={`rotate(${rotation}, ${cx}, ${cy})`}
                    />
                );
            })}
        </svg>
    );
}
