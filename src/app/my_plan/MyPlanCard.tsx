import { LibraryContext } from "@/context/LibraryContext";
import { IExercise } from "@/types/exercise";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const MyPlanCard = () => {
    const { planToday, planSaved } = useContext(LibraryContext);
    const { setPlanToday, setPlanSaved } = useContext(LibraryContext);
    const { isActive, setIsActive } = useContext(LibraryContext);
    const [completedIds, setCompletedIds] = useState<number[]>([]);
    const [sortBy, setSortBy] = useState<
        "duration" | "caloriesBurned" | "rating"
    >("duration");

    // statement 1 — ends at the closing `;` after `b[sortBy] - a[sortBy])`
    const sortExercises = (list: IExercise[]) =>
        [...list].sort((a, b) => b[sortBy] - a[sortBy]);

    // statement 2 — ends at its own `;`
    const sortedPlanToday = sortExercises(planToday);

    // statement 3 — ends at its own `;`
    const sortedPlanSaved = sortExercises(planSaved);

    console.log("Here is the card:", planToday);
    console.log("Here is the Saved plan:", planSaved);

    const handleToastRemove1 = (id: number) => {
        setPlanToday((prev: IExercise[]) =>
            prev.filter((item: IExercise) => item.id !== id),
        );
        toast.info("Your card has been removed.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    const handleToastRemove2 = (id: number) => {
        setPlanSaved((prev: IExercise[]) =>
            prev.filter((item: IExercise) => item.id !== id),
        );
        toast.info("Your card has been removed.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    const handleMarkDone = (id: number) => {
        setCompletedIds((prev) => [...prev, id]);
        toast.info("You have completed your workout.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <div className="container mx-auto  my-8">
            <section className="flex px-3 justify-between items-center ">
                <div className="my-2 inline-flex rounded-full bg-[#151820] p-2">
                    <button
                        onClick={() => setIsActive("Today's_plan")}
                        className={` rounded-full rounded-r-none ${isActive === "Today's_plan" ? "btn btn-success" : "btn"}`}
                    >
                        Today's Plan
                    </button>
                    <button
                        onClick={() => setIsActive("Saved")}
                        className={`  rounded-full rounded-l-none ${isActive === "Saved" ? "btn btn-success" : "btn"}`}
                    >
                        Saved
                    </button>
                </div>
                <div className="my-2 inline-flex rounded-xl bg-[#151820] p-2">
                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(
                                e.target.value as
                                    | "duration"
                                    | "caloriesBurned"
                                    | "rating",
                            )
                        }
                        className="select select-bordered select-sm w-25 "
                    >
                        <option value="duration">Duration</option>
                        <option value="caloriesBurned">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </section>
            {isActive === "Today's_plan" && sortedPlanToday.length > 0
                ? sortedPlanToday.map((plans: IExercise) => {
                      return (
                          <div key={plans.id} className="space-y-5">
                              <div
                                  key={plans.id}
                                  className="flex flex-col md:flex-row md:items-center gap-5 p-4 rounded-[22px] border border-slate-800 bg-[#151820] hover:border-slate-700 transition-colors"
                              >
                                  {/* Exercise Image */}
                                  <Image
                                      src={plans.image}
                                      alt={plans.name}
                                      width={400}
                                      height={400}
                                      className="w-full md:w-44 h-28 object-cover rounded-xl"
                                  />

                                  {/* Exercise Information */}
                                  <div className="flex-1 min-w-0 space-y-2">
                                      <h3 className="text-lg font-extrabold uppercase text-white tracking-wide">
                                          {plans.name}
                                      </h3>

                                      <p className="text-sm text-slate-400">
                                          {plans.equipment}
                                      </p>

                                      {/* Workout Stats */}
                                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                                          <span className="flex items-center gap-1.5">
                                              <span className="text-lime-400">
                                                  ◷
                                              </span>
                                              {plans.duration} min
                                          </span>

                                          <span className="flex items-center gap-1.5">
                                              <span className="text-lime-400">
                                                  ♨
                                              </span>
                                              {plans.caloriesBurned} kcal
                                          </span>

                                          <span className="flex items-center gap-1.5">
                                              <span className="text-lime-400">
                                                  ☆
                                              </span>
                                              {plans.rating}
                                          </span>
                                      </div>
                                  </div>

                                  {/* Action Buttons */}
                                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:ml-auto shrink-0">
                                      <Link href={`workout/${plans.id}`}>
                                          <button className="px-3 py-2 sm:px-5 sm:py-2.5 rounded-full border border-slate-700 text-xs sm:text-sm font-medium text-white hover:bg-slate-800 transition-colors">
                                              View Details
                                          </button>
                                      </Link>

                                      <button
                                          onClick={() =>
                                              handleMarkDone(plans.id)
                                          }
                                          disabled={completedIds.includes(
                                              plans.id,
                                          )}
                                          className={`flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors ${
                                              completedIds.includes(plans.id)
                                                  ? "bg-slate-700 text-slate-300 cursor-not-allowed"
                                                  : "bg-lime-400 text-black hover:bg-lime-300"
                                          }`}
                                      >
                                          <span>
                                              {completedIds.includes(plans.id)
                                                  ? "✓"
                                                  : "✓"}
                                          </span>
                                          {completedIds.includes(plans.id)
                                              ? "Completed"
                                              : "Mark as Done"}
                                      </button>

                                      <button
                                          onClick={() =>
                                              handleToastRemove1(plans.id)
                                          }
                                          className="px-1 text-slate-500 text-xl hover:text-white transition-colors"
                                      >
                                          <Trash2 size={18} />
                                      </button>
                                  </div>
                              </div>
                          </div>
                      );
                  })
                : ""}

            {isActive === "Saved" && sortedPlanSaved.length > 0
                ? sortedPlanSaved.map((plans: IExercise) => {
                      return (
                          <div key={plans.id} className="space-y-5">
                              <div
                                  key={plans.id}
                                  className="flex flex-col md:flex-row md:items-center gap-5 p-4 rounded-[22px] border border-slate-800 bg-[#151820] hover:border-slate-700 transition-colors"
                              >
                                  {/* Exercise Image */}
                                  <Image
                                      src={plans.image}
                                      alt={plans.name}
                                      width={400}
                                      height={400}
                                      className="w-full md:w-44 h-28 object-cover rounded-xl"
                                  />

                                  {/* Exercise Information */}
                                  <div className="flex-1 min-w-0 space-y-2">
                                      <h3 className="text-lg font-extrabold uppercase text-white tracking-wide">
                                          {plans.name}
                                      </h3>

                                      <p className="text-sm text-slate-400">
                                          {plans.equipment}
                                      </p>

                                      {/* Workout Stats */}
                                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                                          <span className="flex items-center gap-1.5">
                                              <span className="text-lime-400">
                                                  ◷
                                              </span>
                                              {plans.duration} min
                                          </span>

                                          <span className="flex items-center gap-1.5">
                                              <span className="text-lime-400">
                                                  ♨
                                              </span>
                                              {plans.caloriesBurned} kcal
                                          </span>

                                          <span className="flex items-center gap-1.5">
                                              <span className="text-lime-400">
                                                  ☆
                                              </span>
                                              {plans.rating}
                                          </span>
                                      </div>
                                  </div>

                                  {/* Action Buttons */}
                                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:ml-auto shrink-0">
                                      <Link href={`workout/${plans.id}`}>
                                          <button className="px-3 py-2 sm:px-5 sm:py-2.5 rounded-full border border-slate-700 text-xs sm:text-sm font-medium text-white hover:bg-slate-800 transition-colors">
                                              View Details
                                          </button>
                                      </Link>

                                      <button
                                          onClick={() =>
                                              handleToastRemove2(plans.id)
                                          }
                                          className="px-1 text-slate-500 text-xl hover:text-white transition-colors"
                                      >
                                          <Trash2 size={18} />
                                      </button>
                                  </div>
                              </div>
                          </div>
                      );
                  })
                : ""}

            {isActive === "Today's_plan" && sortedPlanToday.length === 0 && (
                <div className="container mx-auto my-8 ">
                    <div className="flex min-h-[365px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#252830] bg-[#0C0D10] px-4 text-center">
                        <h2 className="font-display text-2xl font-bold text-white">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-2 font-inter text-sm text-[#9CA3AF]">
                            Browse the library and add a lift to get today
                            moving.
                        </p>

                        <Link
                            href="/"
                            className="mt-7 rounded-full bg-[#C2F800] px-8 py-3 font-inter text-sm font-bold text-black transition hover:bg-[#a9d900]"
                        >
                            Go to workouts
                        </Link>
                    </div>
                </div>
            )}

            {isActive === "Saved" && sortedPlanSaved.length === 0 && (
                <div className="container mx-auto my-8 ">
                    <div className="flex min-h-[365px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#252830] bg-[#0C0D10] px-4 text-center">
                        <h2 className="font-display text-2xl font-bold text-white">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-2 font-inter text-sm text-[#9CA3AF]">
                            Browse the library and add a lift to get today
                            moving.
                        </p>

                        <Link
                            href="/"
                            className="mt-7 rounded-full bg-[#C2F800] px-8 py-3 font-inter text-sm font-bold text-black transition hover:bg-[#a9d900]"
                        >
                            Go to workouts
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyPlanCard;
