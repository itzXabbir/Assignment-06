import type { IExercise } from "@/type/exercise";
import ExerciseCard from "../ExerciseCard/page";
import { Suspense } from "react";
import Loading from "../loading";

const FitnessCard = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    // console.log("API responded with", data);

    return (
        <div className="container my-20 mx-auto grid w-full grid-cols-1 items-stretch gap-5 px-4 py-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:px-0">
            {data.map((exercise: IExercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
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
