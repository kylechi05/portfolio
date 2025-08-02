export function ProjectCard({
    title,
    subtitle,
    image,
}: {
    title: string;
    subtitle: string;
    image: React.ReactNode;
}) {
    return (
        <div className="border-border-light dark:border-border-dark rounded-3xl border-1 p-2.75">
            <div className="relative z-0 rounded-[13px]">
                <div className="bg-background-light-primary dark:bg-background-dark-primary z-1 rounded-[inherit] p-3">
                    {title}
                    {subtitle}
                </div>
                <div className="bg-background-dark-secondary dark:bg-background-light-secondary absolute inset-0 -z-1 rounded-[inherit] opacity-10 blur-sm" />
            </div>
        </div>
    );
}
