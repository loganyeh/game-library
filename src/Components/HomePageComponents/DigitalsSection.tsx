import { useState, useEffect } from "react";
import SectionTitle from "./HomepageSharedComps/SectionTitle";
import {type Game, fetchCharacters } from "../../API/HomepageAPI";

function DigitalsSection(){
    const digitalSectionTitles = ["best sellers", "new releases"];
    // const digitalSectionTitles = ["best sellers"];

    const [loading, setLoading] = useState(true);
    const [digitalData, setDigitalData] = useState<Game[]>([]);

    useEffect(() => {
        async function getDigital(){
            // const response = await fetch(`https://api.rawg.io/api/games?key=3e947aab0171433bb1b9715a1c39b1fc&search=Pokemon`);
            // const data: GameApi[] = await response.json();
            setLoading(true);

            // const data = await fetchCharacters();
            // setDigitalData(data);

            setLoading(false);
        }

        getDigital();
    }, [])


    return(
        <>
            <div className="mx-4 lg:mx-6 flex flex-col items-center">
                {digitalSectionTitles.map((title, index) => {
                    return <div key={index} className="w-full max-w-6xl">
                                {/* Section Title */}
                                <SectionTitle title={`Digital ${title}`} />
                                <div className="border-b-3 border-red-600 w-fit font-semibold text-red-600 text-sm md:text-base tracking-wide">See full list</div>
                                
                                <div className="w-full max-w-6xl mt-4 pl-5 pb-6 flex gap-6 overflow-x-auto scroll-smooth">
                                    {digitalData.slice(0, 10).map((digital, index) => {
                                        return <div key={index} className="border border-gray-400 w-8/12 md:w-[240px] rounded-lg shrink-0">
                                                    {/* Console Exclusive */}
                                                    <div className="bg-red-600 flex justify-center items-center text-sm text-white font-bold rounded-t-lg">2</div>

                                                    {/* Game Image */}
                                                    <div className="border-t border-white aspect-square bg-blue-300 bg-center bg-cover"
                                                    style={{ backgroundImage: `url(${digital.background_image})`}}>

                                                    </div>
                                                    {/* <div className="h-52 md:h-[255px] w-full bg-blue-300"></div> */}

                                                    {/* BODY */}
                                                    <div className="w-full pt-3 p-2 flex flex-col items-between">
                                                        {/* Game Name */}
                                                        <div className="min-h-20 max-h-20">
                                                            <div className="flex justify-start items-center font-semibold text-sm text-gray-700 line-clamp-2">{digital.name || "Super Mario Bros. Wonder - Nintendo Switch 2"}</div>
                                                            <div className="font-light text-[10px] text-gray-600">3/26/26</div>
                                                        </div>

                                                        {/* Game Price */}
                                                        <div className="flex flex-col gap-0.5">
                                                            {/* New Tag */}
                                                            <div className="bg-red-600 w-fit px-1.5 text-white text-[10px] rounded-xl">New!</div>
                                                            {/* Price */}
                                                            <div className="text-sm font-semibold text-gray-700">$79.99</div>
                                                            {/* Heart Icon */}
                                                            <div className="flex justify-between items-center">
                                                                <div className="flex gap-1">
                                                                    <i className='bx bx-plus-medical text-lg text-gray-600'></i>
                                                                    <div className="text-[11px] text-gray-600">Games</div>
                                                                </div>
                                                                <i className='bx bx-heart text-3xl text-red-600' ></i>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                    })}
                                    
                                    

                                    <div className="h-auto mt-5 px-6 flex items-center bg-red-600 text-white font-semibold tracking-wide rounded-md shrink-0">See full list</div>

                                </div>
                            
                            </div>
                            })}
            </div>
        </>
    )
}

export default DigitalsSection;