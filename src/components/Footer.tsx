import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div className="w-full shrink-0  bg-[#0C0D10] border  border-zinc-900 font-inter">
            <section className="bottom-0 left-0 flex flex-col items-center justify-center gap-2 px-5 py-3 right-0 h-auto min-h-15 container mx-auto text-center sm:flex-row sm:justify-between sm:gap-3 sm:py-0 sm:text-left">
                <div className="flex gap-3">
                    <Image
                        alt="logo-png"
                        width={28}
                        height={28}
                        src="/logo.png"
                    ></Image>
                    <span className="text-white font-display text-xl font-bold">
                        FITLOG
                    </span>
                </div>
                <p className="text-xs text-[#6B7280] font-normal font-inter ">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </section>
        </div>
    );
};

export default Footer;

// import Image from "next/image";
// import React from "react";

// const Footer = () => {
//     return (
//         <div className="w-full shrink-0  bg-[#0C0D10] border  border-zinc-900 font-inter">
//             <section className=" bottom-0 left-0 flex items-center justify-between px-5 right-0 h-15   container mx-auto ">
//                 <div className="flex gap-3">
//                     <Image
//                         alt="logo-png"
//                         width={28}
//                         height={28}
//                         src="/logo.png"
//                     ></Image>
//                     <span className="text-white font-display text-xl font-bold">
//                         FITLOG
//                     </span>
//                 </div>
//                 <p className="text-xs text-[#6B7280] font-normal font-inter ">
//                     © 2026 FitLog — Workout Library. Train hard, log honest.
//                 </p>
//             </section>
//         </div>
//     );
// };

// export default Footer;
