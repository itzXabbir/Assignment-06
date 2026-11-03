import { LibraryContext } from "@/context/LibraryContext";
import { IExercise } from "@/type/exercise";
import React, { useContext } from "react";

const MyPlanInfo = () => {
    const { planToday } = useContext(LibraryContext);
    console.log("Here is the info:", planToday);

    return (
        <div className="container mx-auto mt-10">
            <p className="font-oswald font-bold text-3xl mb-4 text-white ">
                MY PLAN
            </p>
            <p className="font-inter text-[#8A92A0] ">
                Cap of five lifts for today. Finish them, then load more.
            </p>
            <div className="mt-9 border border-[#252A35] bg-[#14171E] rounded-[22px] px-8 py-8">
                <div className="grid grid-cols-3">
                    {/* Exercises */}
                    <div className="border-r border-[#252A35]">
                        <p className="font-inter text-[#8A92A0] text-base mb-2">
                            Exercises
                        </p>
                        <p className="font-oswald font-bold text-[40px] leading-none text-[#BFFF00]">
                            {planToday.length}
                        </p>
                    </div>

                    {/* Minutes */}
                    <div className="border-r border-[#252A35] pl-10">
                        <p className="font-inter text-[#8A92A0] text-base mb-2">
                            Minutes
                        </p>
                        <p className="font-oswald font-bold text-[40px] leading-none text-white">
                            {planToday.reduce(
                                (total: number, exercise: IExercise) =>
                                    total + exercise.duration,
                                0,
                            )}
                        </p>
                    </div>

                    {/* Calories */}
                    <div className="pl-10">
                        <p className="font-inter text-[#8A92A0] text-base mb-2">
                            Calories
                        </p>
                        <p className="font-oswald font-bold text-[40px] leading-none text-white">
                            {planToday.reduce(
                                (total: number, exercise: IExercise) =>
                                    total + exercise.caloriesBurned,
                                0,
                            )}
                        </p>
                    </div>
                </div>
            </div>{" "}
        </div>
    );
};

export default MyPlanInfo;
