"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { IExercise } from "@/types/exercise";
import { Plus } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

const AddToButton = ({ data }: { data: IExercise }) => {
    const { planToday, setPlanToday } = useContext(LibraryContext);
    const handleAddToButton = () => {
        const alreadyAdded = planToday.some((item) => item.id === data.id);
        if (alreadyAdded) {
            toast.error("Already added to today's plan.");
            return;
        }
        setPlanToday((prev) => [...prev, data]);
        toast.success("Added button successfully");
    };
    return (
        <>
            <button
                type="button"
                className="flex items-center gap-2 rounded-lg bg-[#c5ff00] cursor-pointer px-4 py-2.5 text-xs font-bold text-black"
                onClick={() => handleAddToButton()}
            >
                <Plus size={14} />
                Add to today's
            </button>
        </>
    );
};

export default AddToButton;
