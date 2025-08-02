import { MouseBorderEffect } from "./effects/MouseBorderEffect";

export function SkillCard({ skill }: { skill: string }) {
    return (
        <div className="relative z-0 w-fit rounded-full tracking-normal">
            <div className="bg-background-light-secondary dark:bg-background-dark-secondary border-border-light dark:border-border-dark relative z-1 w-fit rounded-full px-3 py-1 text-xs">
                {skill}
            </div>
            <MouseBorderEffect
                blur={0}
                inactiveZone={0}
                proximity={48}
                spread={60}
                disabled={false}
                movementDuration={0.15}
                borderWidth={2}
            />
        </div>
    );
}
