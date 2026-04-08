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
            <div className="mx-4 pb-6 flex flex-col items-center">

                {/* title */}
                <SectionTitle title={data.title} />

                {/* nintendo today image */}
                <div className="aspect-19/9 w-full max-w-6xl bg-gray-300 rounded-lg"></div>

                {/* Description */}
                <div className="w-full max-w-6xl my-8 text-lg md:text-xl font-bold text-gray-700 tracking-wider">{data.description || "Your movie companion: Nintendo Today!"}</div>

                {/* Button Text */}
                <RedClickButton buttonText={data.buttonText} icon={data.icon} />

                {/* Breakpoint XL for Description and Button Text */}
                <div className="hidden xl:w-[1200px] xl:mt-8 xl:flex xl:justify-start xl:items-center">
                    {/* Description */}
                    <div className="h-auto w-full xl:w-auto xl:mr-2 flex justify-center items-center">
                        <span className="h-auto w-11/12 md:w-[740px] lg:w-[990px] xl:w-auto my-6 text-[17px] md:text-xl font-bold text-gray-700 tracking-wider">{data.description || "Your movie companion: Nintendo Today!"}</span>
                    </div>

                    {/* Button Text */}
                    <RedClickButton buttonText={data.buttonText} icon={data.icon} />
                </div>

                {/* Fine Print */}
                {/* <div className="h-auto w-full mt-4 flex justify-center"> */}
                    <div className="border w-full max-w-6xl mt-4 text-[10px] md:text-[12px] text-gray-700 font-light">
                        {data.finePrint || ""}
                    </div>
                {/* </div> */}

            </div>
            <div className="border-b border-gray-300"></div>
        </>
    )
}

export default RedButtonBlock;