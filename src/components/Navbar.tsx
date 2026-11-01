"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
    const [isActive, setIsActive] = useState("workouts");

    return (
        <div className="w-full bg-[#0C0D10] text-white border  border-b-zinc-800 font-inter">
            <section className="container mx-auto flex h-auto min-h-20 w-full flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:flex-nowrap lg:px-8">
                {/* Logo */}
                <div className="flex flex-row items-center gap-2 font-oswald">
                    <Image
                        src="/logo.png"
                        width={28}
                        height={28}
                        alt="Logo img"
                    />
                    <span className="text-2xl font-bold">FITLOG</span>
                </div>

                {/* Navigation */}
                <ul className="flex items-center font-inter font-bold gap-3 text-xs sm:gap-5">
                    <li>
                        <Link
                            href="/"
                            onClick={() => setIsActive("workouts")}
                            className={`${
                                isActive === "workouts"
                                    ? "rounded-full bg-[#1B2610] px-8 py-2 text-[#C2F800]"
                                    : "rounded-full px-8 py-2 text-[#9CA3AF]"
                            }`}
                        >
                            Workouts
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/my_plan"
                            onClick={() => setIsActive("my-plan")}
                            className={`${
                                isActive === "my-plan"
                                    ? "rounded-full bg-[#1B2610] px-8 py-2 text-[#C2F800]"
                                    : "rounded-full px-8 py-2 text-[#9CA3AF]"
                            }`}
                        >
                            My Plan
                        </Link>
                    </li>
                </ul>

                {/* Plan and Saved */}
                <ul className="flex items-center gap-2 text-xs sm:gap-4">
                    <li className="rounded-2xl px-2 text-white sm:px-3">
                        <a href="#">Plan</a>{" "}
                        <span className="rounded-xl bg-[#c2f800] px-1 text-xs text-black">
                            0
                        </span>
                    </li>

                    <li className="text-[#9CA3AF]">
                        <a href="#">Saved</a>{" "}
                        <span className="rounded-xl border border-zinc-400 px-1 text-xs text-zinc-400">
                            0
                        </span>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Navbar;
