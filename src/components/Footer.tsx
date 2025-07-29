import { SocialMediaBar } from "./SocialMediaBar";

export default function Footer() {
    return (
        <footer className="justify-center text-text-dark-secondary border-border-light dark:border-border-dark dark:text-text-light-secondary px-mobile-header-footer-x md:px-desktop-s-x lg:px-desktop-l-x xl:px-desktop-xl-x bg-background-light-primary dark:bg-background-dark-primary flex w-full flex-col flex-row border-t-1 py-3 md:py-6">
            <SocialMediaBar />
        </footer>
    );
}
