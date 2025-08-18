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

interface LearningProject {
    title: string;
    description: string;
    date: string;
}

const learningProjects: LearningProject[] = [
    {
        title: "Beatmaker",
        description:
            "A GarageBand-style music creation website built during HackUIowa '23. This was my first project and was developed using JavaScript, HTML, and CSS.",
        date: "Sep 2023",
    },
    {
        title: "Weather App",
        description:
            "A simple weather application built to practice working with REST APIs using JavaScript, Node.js, and Express.",
        date: "Oct 2023",
    },
    {
        title: "Tic-Tac-Toe",
        description:
            "A basic Tic-Tac-Toe game developed to explore the fundamentals of React.js.",
        date: "Jan 2024",
    },
    {
        title: "To-do List",
        description:
            "A standard to-do list app created to further develop my React.js skills and gain foundational experience with databases.",
        date: "Feb 2024",
    },
    {
        title: "Dogs vs. Cats Image Classifier",
        description:
            "An image classification model developed using Keras and CNNs as an introduction to Deep Learning during my time as an undergraduate researcher at the University of Iowa.",
        date: "May 2024",
    },
    {
        title: "FashionMNIST Image Classifier",
        description:
            "First project for CS4420 – Artificial Intelligence. Used PyTorch and CNNs to perform image classification on the FashionMNIST dataset.",
        date: "Feb 2025",
    },
    {
        title: "Hospital Management System",
        description:
            "Final project for CS4400 – Database Systems. Built using a data-driven development approach, including data analysis, ER diagrams, normalization, and stored procedures, implemented using MySQL Workbench.",
        date: "Apr 2025",
    },
    {
        title: "IMDb Movie Review Classifier",
        description:
            "Final project for CS4420 – Artificial Intelligence. Used PyTorch and LSTMs to perform sentiment analysis and text classification on IMDb movie reviews.",
        date: "Apr 2025",
    },
];

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
                    visualizing incidents in real time. It also uses a
                    spatiotemporal GNN to actively predict crimes within the
                    next 48 hours.
                </p>
                <p>
                    The project is currently a work in progress. I&apos;m
                    currently building the frontend with React and Next.js,
                    using Leaflet for lightweight, interactive mapping. I also
                    plan to experiment with Kubernetes (Minikube) to learn about
                    container orchestration.
                </p>
                <div>
                    <p>
                        <a
                            href="https://github.com/kylechi05/CivSentinel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            GitHub
                        </a>
                    </p>
                </div>
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
                    &ndash; nearly two-thirds of the university&apos;s student
                    body.
                </p>
                <p>
                    The project began as a collaboration between the University
                    of Iowa&apos;s ACM chapter and the Undergraduate Student
                    Government. I contributed to the original version of
                    UIGrades, which was built with React.js, Tailwind CSS, and
                    SQL. About a year later, I redesigned the platform in Figma
                    and modernized the project using Next.js, replacing SQL with
                    MongoDB for greater flexibility and scalability.
                </p>
                <div>
                    <p>
                        <a
                            href="https://www.figma.com/design/ER2GkymBrORUWpnABQYwzy/UIGrades?node-id=0-1&t=DJCZgmoNKok69R1K-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            Figma
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://github.com/acm-uiowa/uigrades"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            GitHub
                        </a>
                    </p>
                </div>
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
        children: (
            <div className="flex flex-col gap-3">
                <p>
                    Built at Swan Hacks 2024, SpreadSim is an educational
                    simulation game based on computational epidemiology
                    research. It illustrates virus transmission and models the
                    impact of various preventative measures on transmission
                    flow.
                </p>
                <p>
                    3rd place winner &ndash; Swan Hacks 2024 @ Iowa State
                    University
                </p>
                <div>
                    <p>
                        <a
                            href="https://github.com/kylechi05/SwanHacks2024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            GitHub
                        </a>
                    </p>
                </div>
            </div>
        ),
    },
    {
        title: "Portfolio",
        subtitle: "My Portfolio.",
        techStack: ["Next.js", "React.js", "Tailwind CSS", "Figma"],
        externalUrl: "https://kylechi.vercel.app/",
        order: 4,
        image: <PortfolioIcon />,
        children: (
            <div className="flex flex-col gap-3">
                <p>
                    This is my personal portfolio, designed in Figma and built
                    with Next.js, React, and Tailwind CSS.
                </p>
                <div>
                    <p>
                        <a
                            href="https://github.com/kylechi05/portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            GitHub
                        </a>
                    </p>
                </div>
            </div>
        ),
    },
    {
        title: "Learning Projects",
        subtitle:
            "Explore my progression through beginner projects. *Note*: Not all projects are on GitHub",
        techStack: [
            "Keras",
            "PyTorch",
            "React.js",
            "Node.js",
            "Express",
            "SQL",
            "JavaScript",
            "HTML",
            "CSS",
            "MySQL",
        ],
        externalUrl: "https://github.com/kylechi05?tab=repositories",
        order: 5,
        image: <LearningProjectsIcon />,
        children: (
            <div className="flex flex-col gap-3">
                {learningProjects.map((proj) => (
                    <div
                        key={proj.title}
                        className="flex flex-row items-baseline gap-6"
                    >
                        <h2 className="w-fit shrink-0 text-xs">{proj.date}</h2>
                        <div>
                            <h1 className="text-text-dark-primary dark:text-text-light-primary font-medium">
                                {proj.title}
                            </h1>
                            <h2>{proj.description}</h2>
                        </div>
                    </div>
                ))}
            </div>
        ),
    },
];

export const sortedProjects = projects.sort((a, b) => a.order - b.order);
