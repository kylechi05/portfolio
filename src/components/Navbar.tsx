"use client";

import { useTheme } from "@/context/ThemeContext";

export default function NavBar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="flex flex-row">
            <div>testing</div>
            <div>{theme === "light" ? "light mode" : "dark mode"}</div>
            <button onClick={toggleTheme}>CLICK HERE</button>
        </nav>
    );
}
