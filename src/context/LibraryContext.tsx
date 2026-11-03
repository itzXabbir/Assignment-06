"use client";
import { IExercise } from "@/type/exercise";
import React, { createContext, ReactNode, useState } from "react";
export interface ILibraryType {
    planToday: IExercise[];
    setPlanToday: React.Dispatch<React.SetStateAction<IExercise[]>>;
    planSaved: IExercise[];
    setPlanSaved: React.Dispatch<React.SetStateAction<IExercise[]>>;
    isActive: string;
    setIsActive: React.Dispatch<React.SetStateAction<string>>;
}

const defaultLibrary: ILibraryType = {
    planToday: [],
    setPlanToday: () => {},
    planSaved: [],
    setPlanSaved: () => {},
    isActive: "Today's_plan",
    setIsActive: () => {},
};

export const LibraryContext = createContext<ILibraryType>(defaultLibrary);

const LibraryProvider = ({ children }: { children: ReactNode }) => {
    const [planToday, setPlanToday] = useState<IExercise[]>([]);
    const [planSaved, setPlanSaved] = useState<IExercise[]>([]);
    const [isActive, setIsActive] = useState("Today's_plan");

    const sharedData: ILibraryType = {
        planToday,
        setPlanToday,
        planSaved,
        setPlanSaved,
        isActive,
        setIsActive,
    };
    return (
        <LibraryContext.Provider value={sharedData}>
            {children}
        </LibraryContext.Provider>
    );
};

export default LibraryProvider;
