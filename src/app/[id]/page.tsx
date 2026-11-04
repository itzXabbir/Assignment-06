import React, { ReactNode, Suspense } from "react";
import type { IExercise } from "@/type/exercise";
import Loading from "../loading";
import AddToButton from "@/components/Hooks/AddToButton";
import SavedButton from "@/components/Hooks/SaveButton";
interface IParamsProps {
    params: Promise<{ id: string }>;
}

const IndividualCard = async ({ params }: IParamsProps) => {
    const { id } = await params;
    console.log("This is id", id);
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const data: IExercise = await res.json();

    console.log("Here is the data", data);
    return (
        <div className="w-full border border-[#222630] bg-[#0d0f13] p-5 sm:p-6">
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
                {/* Image */}
                <div className="w-full overflow-hidden rounded-xl bg-[#171a22]">
                    <img
                        src={data.image}
                        alt={data.name}
                        className="h-full max-h-[490px] min-h-[300px] w-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-3xl">
                        {data.name}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                        {data.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-4">
                        <span className="inline-block rounded-full bg-[#c5ff00] px-3 py-1 text-xs font-semibold text-black">
                            {data.muscleGroups.join(" · ")}
                        </span>
                    </div>

                    {/* Exercise Details */}
                    <div className="mt-5 overflow-hidden rounded-xl border border-[#252a35] bg-[#151820]">
                        <div className="flex justify-between border-b border-[#252a35] px-4 py-3 text-xs">
                            <span className="font-semibold uppercase text-gray-400">
                                Equipment
                            </span>
                            <span className="text-gray-200">
                                {data.equipment}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#252a35] px-4 py-3 text-xs">
                            <span className="font-semibold uppercase text-gray-400">
                                Difficulty
                            </span>
                            <span className="text-gray-200">
                                {data.difficulty}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#252a35] px-4 py-3 text-xs">
                            <span className="font-semibold uppercase text-gray-400">
                                Sets
                            </span>
                            <span className="text-gray-200">{data.sets}</span>
                        </div>

                        <div className="flex justify-between border-b border-[#252a35] px-4 py-3 text-xs">
                            <span className="font-semibold uppercase text-gray-400">
                                Reps
                            </span>
                            <span className="text-gray-200">{data.reps}</span>
                        </div>

                        <div className="flex justify-between border-b border-[#252a35] px-4 py-3 text-xs">
                            <span className="font-semibold uppercase text-gray-400">
                                Duration
                            </span>
                            <span className="text-gray-200">
                                {data.duration} min
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#252a35] px-4 py-3 text-xs">
                            <span className="font-semibold uppercase text-gray-400">
                                Calories
                            </span>
                            <span className="text-gray-200">
                                {data.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex justify-between px-4 py-3 text-xs">
                            <span className="font-semibold uppercase text-gray-400">
                                Rating
                            </span>
                            <span className="text-gray-200">
                                {data.rating.toFixed(1)}
                            </span>
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="mt-6">
                        <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                            Instructions
                        </h3>

                        <p className="mt-3 whitespace-pre-line text-xs leading-relaxed text-gray-400">
                            {data.instructions.join("\n")}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                        <AddToButton data={data} />

                        <SavedButton data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const DynamicCard = async ({ params }: IParamsProps) => {
    return (
        <Suspense fallback={<Loading />}>
            <IndividualCard params={params} />
        </Suspense>
    );
};

export default DynamicCard;
