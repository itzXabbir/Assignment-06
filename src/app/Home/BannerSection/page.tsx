import Image from "next/image";

const Banner = () => {
    return (
        <div className="container mx-auto my-10 sm:my-14 lg:my-20 w-full px-4 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16 text-white font-inter border border-zinc-800 rounded-2xl grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-6 lg:gap-10 bg-[#15171d]">
            <div>
                <p className="text-xm text-[#c2f800] mb-5 font-semibold">
                    WORKOUT LIBRARY
                </p>
                <p className="text-5xl font-oswald font-bold mb-5">
                    TRAIN WITH INTENT. LOG <br /> EVERY SET.
                </p>
                <p className="text-xm font-inter text-[#9CA3AF] mb-5">
                    FitLog is a dark, no-nonsense gym companion: pick a lift,
                    lock it <br />
                    into today's plan, and watch the week's work add up.
                </p>
                <button className="btn text-[#15171d] font-semibold font-inter  bg-[#c2f800]">
                    BROWSE SUCCESS
                </button>
            </div>
            <Image
                src="/banner.png"
                width={250}
                height={250}
                alt="hero_image"
                loading="eager"
            ></Image>
        </div>
    );
};

export default Banner;
