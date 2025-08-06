import { Metadata } from "next";

import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { sortedProjects } from "./projects";

export const metadata: Metadata = {
    title: "Kyle Chi · Projects",
    description: "Kyle Chi's portfolio · Projects",
};

export default function ProjectsPage() {
    return (
        <div className="py-6 md:py-16">
            <Header>Projects</Header>
            <>
                <div className="hidden gap-4 md:grid md:grid-cols-2">
                    <div className="flex w-full grow-0 flex-col gap-4">
                        {sortedProjects.map((project) => {
                            if (project.order & 1) {
                                return (
                                    <ProjectCard
                                        key={project.title}
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        techStack={project.techStack}
                                        externalUrl={project.externalUrl}
                                        image={project.image}
                                    >
                                        {project.children}
                                    </ProjectCard>
                                );
                            }
                        })}
                    </div>
                    <div className="flex w-full grow-0 flex-col gap-4">
                        {sortedProjects.map((project) => {
                            if (project.order % 2 == 0) {
                                return (
                                    <ProjectCard
                                        key={project.title}
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        techStack={project.techStack}
                                        externalUrl={project.externalUrl}
                                        image={project.image}
                                    >
                                        {project.children}
                                    </ProjectCard>
                                );
                            }
                        })}
                    </div>
                </div>
            </>
            <>
                <div className="flex w-full flex-col gap-4 md:hidden">
                    {sortedProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            subtitle={project.subtitle}
                            techStack={project.techStack}
                            externalUrl={project.externalUrl}
                            image={project.image}
                        >
                            {project.children}
                        </ProjectCard>
                    ))}
                </div>
            </>
        </div>
    );
}
