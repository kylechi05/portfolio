import {
    CivSentinelIcon,
    UIGradesIcon,
    SpreadSimIcon,
    LearningProjectsIcon,
    PortfolioIcon,
} from "@/components/icons";

interface Project {
    title: string;
    subtitle: string;
    techStack: string[];
    externalUrl: string;
    order: number;
    image: React.ReactNode;
    children?: React.ReactNode;
}

const projects: Project[] = [
    {
        title: "CivSentinel",
        subtitle: "Live crime mapper and AI crime predictor.",
        techStack: [
            "Apache Kafka",
            "Docker",
            "Supabase",
            "Next.js",
            "React.js",
            "PostgreSQL",
            "TypeScript",
            "Python",
            "Web Scraping",
            "Leaflet.js",
            "Tailwind CSS",
        ],
        externalUrl: "https://github.com/kylechi05/CivSentinel",
        order: 1,
        image: <CivSentinelIcon />,
        children: (
            <div className="flex flex-col gap-3">
                <p>
                    CivSentinel is a live crime mapping application focused on
                    the University of Iowa area. It continuously scrapes and
                    processes data from the university&apos;s public crime log,
                    visualizing incidents in real time.
                </p>
                <p>
                    The project is currently a work in progress. I&apos;m
                    currently building the frontend with React and Next.js,
                    using Leaflet for lightweight, interactive mapping. On the
                    backend, I plan to develop a spatiotemporal graph neural
                    network with PyTorch to predict future crime patterns. I
                    also hope to experiment with Kubernetes (Minikube) to deepen
                    my understanding of container orchestration.
                </p>
            </div>
        ),
    },
    {
        title: "UIGrades",
        subtitle:
            "The University of Iowa's course grade distribution visualizer.",
        techStack: [
            "Next.js",
            "React.js",
            "MongoDB",
            "SQL",
            "Figma",
            "SendGrid",
            "Tailwind CSS",
        ],
        externalUrl: "https://uigrades.vercel.app/",
        order: 2,
        image: <UIGradesIcon />,
        children: (
            <div className="flex flex-col gap-3">
                <p>
                    UIGrades is a web application that helps University of Iowa
                    students explore historical course and section grade
                    distributions. Since its launch in October 2023, the site
                    has garnered over 800K views from more than 20K unique users
                    – nearly two-thirds of the university&apos;s student body.
                </p>
                <p>
                    The project began as a collaboration between the University
                    of Iowa&apos;s ACM chapter and the Undergraduate Student
                    Government. I contributed to the original version of
                    UIGrades, which was built with React.js, Tailwind CSS, and
                    SQL. About a year later, I redesigned the platform in Figma
                    and modernized the entire codebase using Next.js, replacing
                    SQL with MongoDB for greater flexibility and scalability.
                </p>
            </div>
        ),
    },
    {
        title: "SpreadSim",
        subtitle:
            "An educational simulation game based on computational epidemiology.",
        techStack: ["Godot Engine", "GDScript"],
        externalUrl: "https://devpost.com/software/spreadsim",
        order: 3,
        image: <SpreadSimIcon />,
        children: <div></div>,
    },
    {
        title: "Portfolio",
        subtitle: "My Porfolio.",
        techStack: ["Next.js", "React.js", "Tailwind CSS", "Figma"],
        externalUrl: "https://kylechi.vercel.app/",
        order: 4,
        image: <PortfolioIcon />,
        children: <div></div>,
    },
    {
        title: "Learning Projects",
        subtitle: "Learn about my progression and how I got into programming.",
        techStack: ["React.js", "HTML", "CSS", "JavaScript"],
        externalUrl: "https://github.com/kylechi05?tab=repositories",
        order: 5,
        image: <LearningProjectsIcon />,
        children: <div></div>,
    },
];

export const sortedProjects = projects.sort((a, b) => {
    if (a.order < b.order) {
        return -1;
    } else if (a.order > b.order) {
        return 1;
    } else {
        return 0;
    }
});
