import { HeadshotContainer } from "@/components/about/HeadshotContainer";
import { Header } from "@/components/Header";
import { SkillCard } from "@/components/SkillCard";

export default function AboutPage() {
    return (
        <div className="py-page-mobile-y md:py-page-desktop-y px-mobile-x md:px-desktop-s-x flex flex-col gap-12 text-center md:gap-16 md:text-start">
            <div>
                <Header>About Me</Header>
                <div className="flex flex-col items-center gap-x-10 gap-y-6 md:flex-row md:items-start lg:gap-x-16">
                    <HeadshotContainer src="/kyle_photo.jpg" />
                    <p>
                        Hi, my name is Kyle Chi. I&apos;m a computer science
                        major and mathematics minor at the University of Iowa. I
                        enjoy and have experience with full-stack development,
                        but I am also interested in system design, devops, and
                        machine learning. Currently I&apos;m a Software
                        Development Intern at{" "}
                        <a
                            href="https://www.berkley.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            W.R. Berkley
                        </a>
                        , and I will start my last two semester at UIowa this
                        August.
                    </p>
                </div>
            </div>
            <div>
                <Header>Experience</Header>
                <div></div>
            </div>
            <div>
                <Header>Skills</Header>
                <ul className="flex flex-row flex-wrap gap-3">
                    <SkillCard skill="Next.js" />
                </ul>
            </div>
        </div>
    );
}
