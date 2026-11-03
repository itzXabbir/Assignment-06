"use client";
import { IExercise } from "@/type/exercise";
import React, { createContext, ReactNode, useState } from "react";
export interface ILibraryType {
    planToday: IExercise[];
    setPlanToday: React.Dispatch<React.SetStateAction<IExercise[]>>;
    planSaved: IExercise[];
    setPlanSaved: React.Dispatch<React.SetStateAction<IExercise[]>>;
}

const defaultLibrary: ILibraryType = {
    planToday: [],
    setPlanToday: () => {},
    planSaved: [],
    setPlanSaved: () => {},
};

export const LibraryContext = createContext<ILibraryType>(defaultLibrary);

const LibraryProvider = ({ children }: { children: ReactNode }) => {
    const [planToday, setPlanToday] = useState<IExercise[]>([]);
    const [planSaved, setPlanSaved] = useState<IExercise[]>([]);
    const sharedData: ILibraryType = {
        planToday,
        setPlanToday,

        planSaved,
        setPlanSaved,
    };
    return (
        <LibraryContext.Provider value={sharedData}>
            {children}
        </LibraryContext.Provider>
    );
};

export default LibraryProvider;
