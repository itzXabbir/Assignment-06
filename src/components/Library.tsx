import type { IExercise } from "@/types/exercise";
import { Suspense } from "react";
import Loading from "../app/loading";
import ExerciseLibraryCard from "@/components/LibraryCard";

const FitnessCard = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    // console.log("API responded with", data);

    return (
        <div
            id="FitnessInfo"
            className="container border-2 border-red-500 my-10 mx-auto grid w-full grid-cols-1 items-stretch gap-5 px-4 py-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:px-0"
        >
            {data.map((exercise: IExercise) => (
                <ExerciseLibraryCard key={exercise.id} exercise={exercise} />
            ))}
        </div>
    );
};

const Fitness = async () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <FitnessCard />
            </Suspense>
        </>
    );
};
export default Fitness;
