export default function MusicIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            vectorEffect="non-scaling-stroke"
            className="mx-1 size-4 stroke-current"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <ellipse cx="5" cy="20" rx="4" ry="3" />
            <ellipse cx="19" cy="17" rx="4" ry="3" />
            <path d="M9,20 v-15 l14,-3 v15 M9,10 l14,-3" />
        </svg>
    );
}
