import { ExperienceList } from "@/components/about/ExperienceList";
import { HeadshotContainer } from "@/components/about/HeadshotContainer";
import { Header } from "@/components/Header";

export default function AboutPage() {
    return (
        <div className="py-page-mobile-y md:py-page-desktop-y px-mobile-x md:px-desktop-s-x flex flex-col gap-12 text-center md:gap-16 md:text-start">
            <div>
                <Header>About Me</Header>
                <div className="flex flex-col items-center gap-x-10 gap-y-6 md:flex-row md:items-start lg:gap-x-16">
                    <HeadshotContainer src="/kyle_photo.jpg" />
                    <p>
                        Hi, I&apos;m Kyle Chi, a computer science major and
                        mathematics minor at the University of Iowa. I have
                        experience in full-stack development and a growing
                        interest in system design, DevOps, and machine learning.
                        Currently, I&apos;m a Software Development Intern at{" "}
                        <a
                            href="https://www.berkley.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            W.R. Berkley
                        </a>
                        , and I will begin my final two semesters at UIowa this
                        Fall.
                    </p>
                </div>
            </div>
            <div>
                <Header>Experience</Header>
                <ExperienceList />
            </div>
            <div></div>
        </div>
    );
}
