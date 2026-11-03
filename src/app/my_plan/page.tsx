"use client";
import { LibraryContext } from "@/context/LibraryContext";
import { useContext } from "react";
import MyPlanCard from "./MyPlanCard";
import MyPlanInfo from "./MyPlanInfo";

const Plan = () => {
    const { planToday } = useContext(LibraryContext);

    console.log("PlanToday info in my_plan", planToday);
    // console.log("you're inside my_plan page");
    return (
        <>
            <MyPlanInfo />
            <MyPlanCard />
        </>
    );
};

export default Plan;
