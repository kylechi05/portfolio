import Link from "next/link";

export function HoverLink({
    href,
    children,
    className,
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <Link
            href={href}
            className={`group hover:text-text-dark-primary dark:hover:text-text-light-primary relative ${className}`}
        >
            {children}
            <span className="bg-text-dark-primary dark:bg-text-light-primary absolute inset-x-0 bottom-0 h-[1px] w-full scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
        </Link>
    );
}
