export default function KCIcon() {
    return (
        <svg
            viewBox="0 0 95 50"
            className="font-unbounded w-7 font-bold"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <clipPath id="clipC">
                    <path
                        d="M40,21.05883 L57.07169,0 H95 V50 H57.63976 L40,21.05883 Z"
                        fill="evenodd"
                    />
                </clipPath>
            </defs>
            <text x="-3" y="48" fontSize={62}>
                K
            </text>
            <text x="37" y="48" fontSize={62} clipPath="url(#clipC)">
                C
            </text>
        </svg>
    );
}
