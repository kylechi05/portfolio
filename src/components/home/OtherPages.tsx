import { ProjectsCard } from "@/components/home/ProjectsCard";

export function OtherPages() {
    return (
        <div className="flex flex-col gap-10 py-16">
            <h2 className="font-space-grotesk dark:text-text-light-primary text-text-home-dark-primary text-center text-2xl font-semibold md:text-3xl">
                Other Pages
            </h2>
            <div className="flex flex-col items-center justify-center gap-x-12 gap-y-4 md:flex-row">
                <ProjectsCard
                    title="About Me"
                    description="Learn more about me, my skills, and my experiences"
                    href="/about"
                />
                <ProjectsCard
                    title="Projects"
                    description="Explore my projects and personal work"
                    href="/projects"
                />
            </div>
        </div>
    );
}
