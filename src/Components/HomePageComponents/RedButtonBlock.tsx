import { useState, useEffect } from "react";

import SectionTitle from "./HomepageSharedComps/SectionTitle";
import RedClickButton from "./RedButtonBlockComps/RedClickButton";

import type { RedButtonBlockType } from "../../Pages/HomePage";
import { fetchRedButtonImg, type RedButtonImg } from "../../API/HomepageAPI";

type RedButtonBlockProp = {
    data: RedButtonBlockType;
}

function RedButtonBlock({ data }: RedButtonBlockProp){
    const [loading, setLoading] = useState(true);
    const [redData, setRedData] = useState<RedButtonImg[]>([]);

    useEffect(() => {
        async function getRedButton(){
            setLoading(true); 

            const data = await fetchRedButtonImg();
            setRedData(data);

            setLoading(false);
        }

        getRedButton();
    }, [])


    return(
        <>
            <div className="border-b border-gray-300 h-auto w-full flex flex-col items-center pb-6">

                {/* title */}
                <SectionTitle title={data.title} />

                {/* nintendo today image */}
                <div className="h-auto w-full flex justify-center items-start">
                    <div className="h-40 w-11/12 md:w-[740px] rounded-lg">
                        {loading ? 
                            (<div className="h-full md:w-full flex justify-center items-center bg-gray-300 rounded-lg">
                                <div className="flex justify-center items-center animate-spin"><i className='bx bx-loader-alt text-2xl'></i></div>
                            </div>)
                            :
                            (<div className="h-full md:w-full w-full bg-gray-300 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${redData[Math.ceil(Math.random() * 19)]?.background_image})` }}></div>)
                        }
                        {/* <div className="h-full bg-gray-300 rounded-t-lg bg-cover" style={{ backgroundImage: `url(${redData[Math.ceil(Math.random() * 20)]?.background_image})` }}></div> */}
                        
                        {/* <div className={` h-8 bg-red-600 flex justify-center items-center rounded-b-lg`}>
                            <div className="h-5 w-5 mr-2 flex justify-center items-center bg-yellow-400 rounded-sm"><i className='bx bx-question-mark text-xl text-white' ></i></div>
                            <div className="text-white text-sm font-medium tracking-wider">Red Button Block</div>
                        </div> */}
                    </div>
                </div>

                {/* Description */}
                <div className="h-auto w-full flex justify-center items-center">
                    <span className="h-auto w-11/12 md:w-[740px] my-6 text-[17px] md:text-xl font-bold text-gray-700 tracking-wider">{data.description || "Your movie companion: Nintendo Today!"}</span>
                </div>

                {/* Button Text */}
                <RedClickButton buttonText={data.buttonText} icon={data.icon} />

                {/* Fine Print */}
                <div className="h-auto w-full mt-4 flex justify-center">
                    <div className="w-11/12 md:w-[740px] text-[10px] md:text-[12px] text-gray-700 font-light">
                        {data.finePrint || ""}
                    </div>
                </div>

            </div>
        </>
    )
}

export default RedButtonBlock;