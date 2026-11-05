"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { IExercise } from "@/types/exercise";
import { Bookmark } from "lucide-react";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";

const SavedButton = ({ data }: { data: IExercise }) => {
    const { planSaved, setPlanSaved } = useContext(LibraryContext);
    useEffect(() => {
        console.log("Updated saved plans:", planSaved);
    }, [planSaved]);
    const handleAddToButton = () => {
        const alreadySaved = planSaved.some((item) => item.id === data.id);
        if (alreadySaved) {
            toast.error("Already saved!");
            return;
        }
        setPlanSaved((prev) => [...prev, data]);
        toast.success("Saved button successfully");
    };
    return (
        <>
            <button
                type="button"
                className="flex items-center gap-2 rounded-lg border cursor-pointer border-[#343946] px-4 py-2.5 text-xs font-medium text-gray-300"
                onClick={() => handleAddToButton()}
            >
                <Bookmark size={14} />
                Save for later
            </button>
        </>
    );
};

export default SavedButton;
