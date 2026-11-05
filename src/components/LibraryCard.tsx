"use client";
import Image from "next/image";
import { ArrowRight, Clock3, Flame, Star } from "lucide-react";
import { IExercise } from "@/types/exercise";
import Link from "next/link";
import { toast } from "react-toastify";

const ExerciseLibraryCard = ({ exercise }: { exercise: IExercise }) => {
    const showToast = () => {
        // Implement your toast logic here
        toast.info(` ${exercise.name} clicked!`);
    };
    return (
        <Link
            onClick={() => showToast()}
            href={`/workout/${exercise.id}`}
            className="group  flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 transition-all duration-300 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/5"
        >
            {/* Exercise Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-800">
                <Image
                    src={exercise.image}
                    alt={exercise.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Difficulty Badge */}
                <span
                    className={`absolute right-3 top-3 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                        exercise.difficulty === "Beginner"
                            ? "border-green-500/30 bg-green-500/15 text-green-400"
                            : exercise.difficulty === "Intermediate"
                              ? "border-yellow-500/30 bg-yellow-500/15 text-yellow-400"
                              : "border-red-500/30 bg-red-500/15 text-red-400"
                    }`}
                >
                    {exercise.difficulty}
                </span>
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col gap-4 p-4">
                {/* Category Tags */}
                <div className="flex flex-wrap gap-2">
                    {exercise.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-md border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-red-400"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Exercise Name & Equipment */}
                <div>
                    <h3 className="line-clamp-2 text-lg font-extrabold uppercase leading-tight tracking-wide text-white transition-colors group-hover:text-red-400">
                        {exercise.name}
                    </h3>

                    <p className="mt-2 flex items-center gap-2 text-sm text-neutral-400">
                        <span className="text-neutral-500">⚙</span>
                        {exercise.equipment}
                    </p>
                </div>

                {/* Workout Details */}
                <div className="mt-auto grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                    {/* Duration */}
                    <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1.5 text-neutral-300">
                            <Clock3 className="h-4 w-4 text-red-400" />
                            <span className="text-sm font-bold tabular-nums">
                                {exercise.duration}
                            </span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                            Minutes
                        </span>
                    </div>

                    {/* Calories */}
                    <div className="flex flex-col items-center gap-1 border-x border-white/10">
                        <div className="flex items-center gap-1.5 text-neutral-300">
                            <Flame className="h-4 w-4 text-red-400" />
                            <span className="text-sm font-bold tabular-nums">
                                {exercise.caloriesBurned}
                            </span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                            Kcal
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1.5 text-neutral-300">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-bold tabular-nums">
                                {exercise.rating.toFixed(1)}
                            </span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                            Rating
                        </span>
                    </div>
                    {/* After your stats section */}

                    <span className="mt-3 flex items-center gap-2 text-sm font-semibold text-red-400 transition-all group-hover:gap-3">
                        View Exercise
                        <ArrowRight className="h-4 w-4" />
                    </span>
                </div>
            </div>
        </Link>
    );
};
export default ExerciseLibraryCard;
