import Image from "next/image";
import { EmailIcon } from "@/components/icons";

const ScalingHoverContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={`${className} rounded-full p-3 transition-transform duration-100 ease-in-out hover:scale-110`}
        >
            {children}
        </div>
    );
};

export function SocialMediaBar() {
    return (
        <>
            <div className="flex flex-row items-baseline gap-3 dark:hidden">
                <a href="https://www.linkedin.com/in/kyle-chi/" target="_blank">
                    <ScalingHoverContainer className="bg-background-light-secondary cursor-pointer">
                        <div className="w-[21px]">
                            <Image
                                className="cursor-pointer"
                                src="/icons/In-Black-21.png"
                                alt="Linkedin Logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </ScalingHoverContainer>
                </a>
                <a href="https://github.com/kylechi05" target="_blank">
                    <ScalingHoverContainer className="bg-background-light-secondary cursor-pointer">
                        <div className="w-[21px]">
                            <Image
                                className="cursor-pointer"
                                src="/icons/github-mark-black.png"
                                alt="Linkedin Logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </ScalingHoverContainer>
                </a>
                <a href="mailto:kylechi2157@gmail.com" target="_blank">
                    <ScalingHoverContainer className="bg-background-light-secondary cursor-pointer">
                        <div className="w-[21px] stroke-black">
                            <EmailIcon />
                        </div>
                    </ScalingHoverContainer>
                </a>
            </div>
            <div className="hidden flex-row items-baseline gap-3 dark:flex">
                <a href="https://www.linkedin.com/in/kyle-chi/" target="_blank">
                    <ScalingHoverContainer className="bg-background-dark-secondary cursor-pointer">
                        <div className="w-[21px]">
                            <Image
                                className="cursor-pointer"
                                src="/icons/In-White-21.png"
                                alt="Linkedin Logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </ScalingHoverContainer>
                </a>
                <a href="https://github.com/kylechi05" target="_blank">
                    <ScalingHoverContainer className="bg-background-dark-secondary cursor-pointer">
                        <div className="w-[21px]">
                            <Image
                                className="cursor-pointer"
                                src="/icons/github-mark-white.png"
                                alt="Linkedin Logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </ScalingHoverContainer>
                </a>
                <a href="mailto:kylechi2157@gmail.com" target="_blank">
                    <ScalingHoverContainer className="bg-background-dark-secondary cursor-pointer">
                        <div className="w-[21px] stroke-white">
                            <EmailIcon />
                        </div>
                    </ScalingHoverContainer>
                </a>
            </div>
        </>
    );
}
