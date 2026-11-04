import FitnessCard from "./FitnessInfo/page";
import Banner from "../components/Homepage/Banner";

// const DataSet = async () => {};

const Home = async () => {
    return (
        <div className="text-white">
            <Banner />
            <div className="container mx-auto   ">
                <p className=" font-oswald text-2xl font-bold">THE LIBRARY</p>
                <p className=" text-normal mt-2 text-[#969797]">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* <div className="text-4xl text-white">Whatever....</div> */}
            <FitnessCard />
        </div>
    );
};
export default Home;
//
