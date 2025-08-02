import { ExperienceCard } from "./ExperienceCard";
import Image from "next/image";

export function ExperienceList() {
    return (
        <div className="relative z-0 flex flex-col gap-2">
            <ExperienceCard
                title="Software Developer Intern"
                location="W.R. Berkley"
                externalUrl="https://www.berkley.com/"
                date="May – Aug 2025"
                logo={
                    <Image
                        src="/logos/wrberkley.png"
                        height={128}
                        width={128}
                        alt="W.R. Berkley Logo"
                        className="object-contain p-1 max-h-full"
                    />
                }
                logoBackgroundColor="#ffffff"
                description={[
                    "Developed support for admin user monitoring tools linked with Auth0 to expedite user information pulling and exporting speed.",
                    "Improved maintainability by refactoring legacy components and removing incompatible libraries and tools for compiler upgrades.",
                    "Improved microservice development logic by reorganizing repository branches and corresponding CI/CD pipelines.",
                ]}
                skills={[
                    "Next.js",
                    "React.js",
                    "Docker",
                    "GraphQL",
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
                date="May – Oct 2024"
                logo={
                    <Image
                        src="/logos/seatstock.svg"
                        height={128}
                        width={128}
                        alt="SeatStock logo"
                        className="object-contain p-1 max-h-full"
                    />
                }
                logoBackgroundColor="#ffffff"
                description={[
                    "Built and released a secure startup marketplace designed for university students to buy and sell student tickets hassle-free for various sporting events. Aquired 1,200+ users and transacted 150+ tickets totaling over $15,000 Gross Market Value within 3 weeks of launch.",
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
                date="May - Aug 2024"
                logo={
                    <Image
                        src="/logos/iowa-gold.png"
                        height={128}
                        width={128}
                        alt="University of Iowa Gold Logo"
                        className="object-contain max-h-full"
                    />
                }
                logoBackgroundColor="#000000"
                description={[
                    "Acquired historic Reddit data from 16 mental health-related subreddits dating back 15+ years, speeding up data collection by 50%. Processed and filtered millions of posts used to train a mental health NLP model.",
                    "Subreddits explored include: r/Anxiety, r/AnxietyDepression, r/Anxietyhelp, r/bipolar, r/depressed, etc.",
                    
                ]}
                skills={["Python"]}
            />
            <ExperienceCard
                title="Software Engineering Intern"
                location="University of Iowa"
                externalUrl="https://dsri.uiowa.edu/"
                date="June - Aug 2022"
                logo={
                    <Image
                        src="/logos/iowa-gold.png"
                        height={128}
                        width={128}
                        alt="University of Iowa Gold Logo"
                        className="object-contain max-h-full"
                    />
                }
                logoBackgroundColor="#000000"
                description={[
                    "Collaborated with hardware interns at the University of Iowa Driving Safety Research Institute to program a robotic car using a Raspberry Pi for demonstrations at local elementary schools.",
                    "Configured manual driving via console controller and initiated automation to keep the car within lanes using OpenCV.",
                ]}
                skills={["Python", "OpenCV", "scikit-image", "Pygame"]}
            />
        </div>
    );
}
