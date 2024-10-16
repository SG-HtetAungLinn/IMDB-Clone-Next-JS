"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const DarkModeSwitch = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === "system" ? systemTheme : theme;
    useEffect(() => setMounted(true), []);
    return (
        <div>
            {mounted &&
                (currentTheme === "light" ? (
                    <MdDarkMode
                        onClick={(e) => setTheme("dark")}
                        className="text-xl cursor-pointer hover:text-amber-500"
                    />
                ) : (
                    <MdLightMode
                        onClick={(e) => setTheme("light")}
                        className="text-xl cursor-pointer hover:text-amber-500"
                    />
                ))}
        </div>
    );
};

export default DarkModeSwitch;
