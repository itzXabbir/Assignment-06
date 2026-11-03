"use client";

import { LibraryContext } from "@/context/LibraryContext";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useContext } from "react";
import { usePathname } from "next/navigation";

const NavButton = () => {
    const pathname = usePathname();
    return (
        <ul className="flex items-center font-inter font-bold gap-3 text-xs sm:gap-5">
            <li>
                <Link
                    href="/"
                    className={`rounded-full px-8 py-2 ${
                        pathname === "/"
                            ? "bg-[#1B2610] text-[#C2F800]"
                            : "text-[#9CA3AF]"
                    }`}
                >
                    Workouts
                </Link>
            </li>

            <li>
                <Link
                    href="/my_plan"
                    className={`rounded-full px-8 py-2 ${
                        pathname === "/my_plan"
                            ? "bg-[#1B2610] text-[#C2F800]"
                            : "text-[#9CA3AF]"
                    }`}
                >
                    My Plan
                </Link>
            </li>
        </ul>
    );
};

const Navbar = () => {
    const { planToday, planSaved } = useContext(LibraryContext);

    return (
        <div className="w-full bg-[#0C0D10] text-white border border-zinc-900 font-inter">
            <section className="container mx-auto flex h-auto min-h-20 w-full flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:flex-nowrap lg:px-8">
                {/* Logo */}
                <div className="flex flex-row items-center gap-2 font-oswald">
                    <Image
                        src="/logo.png"
                        width={28}
                        height={28}
                        alt="Logo img"
                    />
                    <span className="text-xl font-bold">FITLOG</span>
                </div>

                {/* Navigation */}
                <Suspense fallback={<h2>Loading... Button</h2>}>
                    <NavButton />
                </Suspense>

                {/* Plan and Saved */}
                <ul className="flex items-center gap-2 text-xs sm:gap-4">
                    <li className="rounded-2xl px-2 text-white sm:px-3">
                        <a href="#">Plan</a>{" "}
                        <span className="rounded-xl bg-[#c2f800] px-1 text-xs text-black">
                            {planToday.length}
                        </span>
                    </li>

                    <li className="text-[#9CA3AF]">
                        <a href="#">Saved</a>{" "}
                        <span className="rounded-xl border border-zinc-400 px-1 text-xs text-zinc-400">
                            {planSaved.length}
                        </span>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Navbar;
