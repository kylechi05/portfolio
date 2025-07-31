import { MouseBorderEffect } from "./MouseBorderEffect";

export function SkillCard({ skill }: { skill: string }) {
    return (
        <div className="relative z-0 w-fit rounded-full">
            <div className="bg-background-light-secondary dark:bg-background-dark-secondary border-border-light dark:border-border-dark relative z-1 w-fit rounded-full px-5 py-1 text-sm">
                {skill}
            </div>
            <MouseBorderEffect
                className="hidden dark:block"
                blur={0}
                inactiveZone={0}
                proximity={32}
                spread={30}
                disabled={false}
                movementDuration={0.15}
                borderWidth={2}
                variant="dark"
            />
            <MouseBorderEffect
                className="block dark:hidden"
                blur={0}
                inactiveZone={0}
                proximity={32}
                spread={80}
                disabled={false}
                movementDuration={0.15}
                borderWidth={2}
                variant="light"
            />
        </div>
    );
}
