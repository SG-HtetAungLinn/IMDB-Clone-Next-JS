import React from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import DarkModeSwitch from "./DarkModeSwitch";
const Header = () => {
    return (
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
            <div className="flex gap-3">
                <MenuItem title="Home" address="/" Icon={FaHome} />
                <MenuItem title="About" address="/about" Icon={FaInfoCircle} />
            </div>

            <div className="flex items-center gap-4">
                <DarkModeSwitch />
                <Link href={"/"} className="flex gap-1 items-center">
                    <span className="text-2xl font-bold bg-amber-500 py-1 px-1 rounded-lg text-white">
                        IMDB
                    </span>
                    <span className="text-xl hidden sm:inline">Clone</span>
                </Link>
            </div>
        </div>
    );
};

export default Header;
