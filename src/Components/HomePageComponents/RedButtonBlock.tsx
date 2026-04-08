import { useEffect, useState } from "react";
// import { useEffect } from "react";

import SectionTitle from "./HomepageSharedComps/SectionTitle";
import RedClickButton from "./RedButtonBlockComps/RedClickButton";

import type { RedButtonBlockType } from "../../Pages/HomePage";
// import { type RedButtonImg } from "../../API/HomepageAPI";
// import { fetchRedButtonImg, type RedButtonImg } from "../../API/HomepageAPI";

type RedButtonBlockProp = {
    data: RedButtonBlockType;
}

function RedButtonBlock({ data }: RedButtonBlockProp){
    const [loading, setLoading] = useState(true);
    // const [redData, setRedData] = useState<RedButtonImg[]>([]);

    // useEffect(() => {
    //     async function getRedButton(){
    //         setLoading(true); 

    //         const data = await fetchRedButtonImg();
    //         setRedData(data);

    //         setLoading(false);
    //     }

    //     getRedButton();
    // }, [])

    useEffect(() => {
        setLoading(false);
    }, [])

    return(
        <>
            <div className="mx-4 lg:mx-6 pb-6 md:pb-14 flex flex-col items-center">

                {/* Title */}
                <SectionTitle title={data.title} />

                {/* nintendo today image */}
                <div className="aspect-19/9 md:aspect-[16/2.5] w-full max-w-6xl bg-gray-300 rounded-lg"></div>

                {/* Description & Button Text */}
                <div className=" w-full max-w-6xl xl:flex xl:gap-8">
                    <div className="w-full xl:w-fit my-8 text-lg md:text-xl font-bold text-gray-700 tracking-wider">{data.description || "Your movie companion: Nintendo Today!"}</div>
                    <RedClickButton buttonText={data.buttonText} icon={data.icon} />
                </div>

                {/* Fine Print */}
                <div className="w-full max-w-6xl mt-4 text-[10px] md:text-[12px] text-gray-700 font-light">
                    {data.finePrint || ""}
                </div>

            </div>

            {/* Section Bottom Border */}
            <div className="border-b border-gray-300"></div>
        </>
    )
}

export default RedButtonBlock;