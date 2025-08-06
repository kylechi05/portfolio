import { ExperienceCard } from "./ExperienceCard";
import Image from "next/image";

export function ExperienceList() {
    return (
        <div className="relative z-0 flex flex-col gap-2">
            <ExperienceCard
                title="Software Developer Intern"
                location="W.R. Berkley"
                externalUrl="https://www.berkley.com/"
                date="May &ndash; Aug 2025"
                logo={
                    <Image
                        src="/logos/wrberkley.png"
                        height={128}
                        width={128}
                        alt="W.R. Berkley Logo"
                        className="max-h-full object-contain p-1"
                    />
                }
                logoBackgroundColor="#ffffff"
                description={[
                    "Built admin user monitoring tools integrated with Auth0, accelerating user data retrieval and export workflows.",
                    "Enhanced maintainability by refactoring legacy components and removing incompatible dependencies for compiler upgrades.",
                    "Streamlined microservice development by restructuring repository branches and corresponding CI/CD pipelines.",
                ]}
                skills={[
                    "Next.js",
                    "React.js",
                    "Docker",
                    "GraphQL",
                    "Jenkins",
                    "Jest",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind",
                ]}
            />
            <ExperienceCard
                title="Software Engineer"
                location="SeatStock"
                externalUrl="https://www.seatstock.com/"
                date="May &ndash; Oct 2024"
                logo={
                    <Image
                        src="/logos/seatstock.svg"
                        height={128}
                        width={128}
                        alt="SeatStock logo"
                        className="max-h-full object-contain p-1"
                    />
                }
                logoBackgroundColor="#ffffff"
                description={[
                    "Built and launched a secure startup marketplace for university students to easily buy and sell student tickets for sporting events. Acquired 1,200+ users and facilitated 150+ ticket transactions totaling over $15,000 in Gross Market Value within three weeks of release.",
                ]}
                skills={[
                    "Next.js",
                    "React.js",
                    "Docker",
                    "PostgreSQL",
                    "Playwright",
                    "Drizzle ORM",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind",
                    "Figma",
                ]}
            />
            <ExperienceCard
                title="Research Assistant"
                location="University of Iowa"
                externalUrl="https://uiowa.edu/"
                date="May &ndash; Aug 2024"
                logo={
                    <Image
                        src="/logos/iowa-gold.png"
                        height={128}
                        width={128}
                        alt="University of Iowa Gold Logo"
                        className="max-h-full object-contain"
                    />
                }
                logoBackgroundColor="#000000"
                description={[
                    "Acquired historic Reddit data from 16 mental health-related subreddits spanning 15+ years, speeding up data collection by 50%. Processed and filtered millions of posts to train a mental health NLP model.",
                    "Subreddits explored include: r/Anxiety, r/AnxietyDepression, r/Anxietyhelp, r/bipolar, r/depressed, and others.",
                ]}
                skills={["Python"]}
            />
            <ExperienceCard
                title="Software Engineering Intern"
                location="University of Iowa"
                externalUrl="https://dsri.uiowa.edu/"
                date="June &ndash; Aug 2022"
                logo={
                    <Image
                        src="/logos/iowa-gold.png"
                        height={128}
                        width={128}
                        alt="University of Iowa Gold Logo"
                        className="max-h-full object-contain"
                    />
                }
                logoBackgroundColor="#000000"
                description={[
                    "Collaborated with hardware interns at the University of Iowa Driving Safety Research Institute to program a robotic car using a Raspberry Pi for demonstrations at local elementary schools.",
                    "Configured manual driving via console controller and initiated automation features with OpenCV to maintain lane positioning.",
                ]}
                skills={["Python", "OpenCV", "scikit-image", "Pygame"]}
            />
        </div>
    );
}
