export function Header({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="font-space-grotesk pb-5 text-3xl font-semibold md:text-4xl">
            {children}
        </h1>
    );
}
