import FitnessCard from "./Home/FitnessInfo/page";
import Banner from "./Home/BannerSection/page";

// const DataSet = async () => {};

const Home = async () => {
    return (
        <div className="text-white">
            <Banner />
            <div className="container mx-auto  ">
                <p className=" font-oswald text-3xl font-bold">THE LIBRARY</p>
                <p className=" text-xs mt-2 text-[#9CA3AF]">
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
