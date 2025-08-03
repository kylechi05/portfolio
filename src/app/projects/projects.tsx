interface Project {
    title: string;
    subtitle: string;
    skills: string[];
    order: number;
    image: React.ReactNode;
    children?: React.ReactNode;
}

const projects: Project[] = [
    {
        title: "CivSentinel",
        subtitle: "Live crime mapper and AI crime predictor.",
        skills: [
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
        order: 1,
        image: <div></div>,
        children: (
            <div className="flex flex-col gap-3">
                <h1>About</h1>
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
                <h1>My Experience</h1>
                <p>
                    My goal with this project has been to deepen my
                    understanding of system design while becoming more
                    comfortable working in a microservices architecture. I
                    scoped CivSentinel to be both technically broad and deep –
                    challenging enough to learn new tools, but focused enough to
                    remain practical.
                </p>
                <p>
                    This project has sharpened my frontend skills with React and
                    Next.js, backend development with Python, database design
                    and querying, and Docker-based containerization. It&apos;s
                    also introduced me to tools like Apache Kafka for
                    event-driven pipelines and will soon involve working with
                    PyTorch and Kubernetes.
                </p>
            </div>
        ),
    },
    {
        title: "UIGrades",
        subtitle:
            "The University of Iowa's course grade distribution visualizer.",
        skills: [
            "Next.js",
            "React.js",
            "MongoDB",
            "SQL",
            "Figma",
            "SendGrid",
            "Tailwind CSS",
        ],
        order: 2,
        image: <div></div>,
        children: (
            <div className="flex flex-col gap-3">
                <h1>About</h1>
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
                    and modernized the entire codebase using Next.js,
                    replacing SQL with MongoDB for greater flexibility and
                    scalability.
                </p>
                <h1>My Experience</h1>
                <p>
                    I originally joined the project to learn React, contributing
                    minor open-source improvements such as bug fixes and UI
                    enhancements. As I grew more comfortable with the
                    technologies, I took over the project from the previous
                    lead, redesigning and rebuilding the site to improve
                    performance, modernize the interface, and streamline the
                    user experience.
                </p>
            </div>
        ),
    },
    {
        title: "SpreadSim",
        subtitle:
            "An educational simulation game based on computational epidemiology.",
        skills: ["Godot Engine", "GDScript"],
        order: 3,
        image: <div></div>,
        children: <div></div>,
    },
    {
        title: "Portfolio",
        subtitle: "My Porfolio.",
        skills: ["Next.js", "React.js", "Tailwind CSS", "Figma"],
        order: 4,
        image: <div></div>,
        children: <div></div>,
    },
    {
        title: "Learning Projects",
        subtitle: "Learn about my progression and how I got into programming.",
        skills: ["React.js", "HTML", "CSS", "JavaScript"],
        order: 5,
        image: <div></div>,
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
