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
            <div className="border-b border-gray-300 h-auto w-full flex flex-col items-center pb-6">

                {/* title */}
                <div className="w-full xl:w-[1200px]">
                    <SectionTitle title={data.title} />
                </div>

                {/* nintendo today image */}
                <div className="h-auto w-full flex justify-center items-start">
                    <div className="h-40 w-11/12 md:w-[740px] lg:w-[990px] xl:w-[1200px] rounded-lg">
                        {loading ? 
                            (<div className="h-full md:w-full flex justify-center items-center bg-blue-300 rounded-lg">
                                <div className="flex justify-center items-center"><i className='bx bx-loader-alt text-2xl'></i></div>
                            </div>)
                            :
                            (<div className="h-full md:w-full w-full bg-gray-300 rounded-lg bg-cover bg-center"></div>)
                            // (<div className="h-full md:w-full w-full bg-gray-300 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${redData[Math.ceil(Math.random() * 19)]?.background_image})` }}></div>)
                        }
                    </div>
                </div>

                {/* Description */}
                <div className="h-auto w-full flex xl:hidden justify-center items-center">
                    <span className="h-auto w-11/12 md:w-[740px] lg:w-[990px] xl:w-[1200px] my-6 text-[17px] md:text-xl font-bold text-gray-700 tracking-wider">{data.description || "Your movie companion: Nintendo Today!"}</span>
                </div>

                {/* Button Text */}
                <div className="flex w-full xl:hidden">
                    <RedClickButton buttonText={data.buttonText} icon={data.icon} />
                </div>

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
                <div className="h-auto w-full mt-4 flex justify-center">
                    <div className="w-11/12 md:w-[740px] lg:w-[990px] xl:w-[1200px] text-[10px] md:text-[12px] text-gray-700 font-light">
                        {data.finePrint || ""}
                    </div>
                </div>

            </div>
        </>
    )
}

export default RedButtonBlock;