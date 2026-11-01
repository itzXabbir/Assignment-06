"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { IExercise } from "@/type/exercise";
import { useContext } from "react";
import { toast } from "react-toastify";

const AddToButton = ({ data }: { datat: IExercise }) => {
    const { planToday, setPlanToday } = useContext(LibraryContext);
    const handleAddToButton = () => {
        // alert("Add to button clicked");
        toast.success("Added to button ");
        // setPlanToday((prev) => [...prev, data]);
        setPlanToday([...planToday, data]);
        console.log("planToday, ", planToday, "length", planToday.length);
    };
    return (
        <>
            <button
                type="button"
                className="rounded-lg bg-[#c5ff00] cursor-pointer px-4 py-2.5 text-xs font-bold text-black"
                onClick={() => handleAddToButton()}
            >
                Add to today's
            </button>
        </>
    );
};

export default AddToButton;
