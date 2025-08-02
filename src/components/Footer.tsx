import { Suspense } from "react";

import { SocialMediaBar } from "./SocialMediaBar";
import { SpotifyWidget } from "./SpotifyWidget";

export default async function Footer() {
    return (
        <footer className="relative z-0 text-text-dark-secondary border-border-light dark:border-border-dark dark:text-text-light-secondary px-mobile-header-footer-x md:px-desktop-s-x lg:px-desktop-l-x xl:px-desktop-xl-x bg-background-light-primary dark:bg-background-dark-primary flex w-full flex-col items-center justify-between gap-6 border-t-1 py-8 md:flex-row md:py-16">
            <Suspense fallback={<div>Loading Spotify Info...</div>}>
                <SpotifyWidget />
            </Suspense>
            <SocialMediaBar />
        </footer>
    );
}
