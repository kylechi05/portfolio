import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
    return (
        <div className="py-6 md:py-16">
            <Header>Projects</Header>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                <ProjectCard title="CivSentinel" subtitle="" image={<div />} />
                <ProjectCard title="UIGrades" subtitle="" image={<div />} />
                <ProjectCard title="SpreadSim" subtitle="" image={<div />} />
            </div>
        </div>
    );
}
