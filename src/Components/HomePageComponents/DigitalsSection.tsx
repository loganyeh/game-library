import { useState, useEffect } from "react";
import SectionTitle from "./HomepageSharedComps/SectionTitle";
import {type Game, fetchCharacters } from "../../API/HomepageAPI";
import DigitalGameCard from "./DigitalsSectionComps/DigitalGameCard";

function DigitalsSection(){
    const digitalSectionTitles = ["best sellers", "new releases"];
    // const digitalSectionTitles = ["best sellers"];

    const [loading, setLoading] = useState(true);
    const [digitalData, setDigitalData] = useState<Game[]>([]);

    useEffect(() => {
        async function getDigital(){
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
                                    {digitalData.length === 0 
                                    ?
                                    (Array.from({length: 10}).map((_, index) => {
                                        return <DigitalGameCard key={index} loading={loading} />
                                    }))
                                    :
                                    (digitalData.slice(0, 4).map((data, index) => {
                                        return <DigitalGameCard key={index} loading={loading} background_image={data.background_image} name={data.name} />
                                    }))
                                    }
                                    
                                    <div className="h-auto mt-5 px-6 flex items-center bg-red-600 text-white font-semibold tracking-wide rounded-md shrink-0">See full list</div>

                                </div>
                            
                            </div>
                            })}
            </div>
        </>
    )
}

export default DigitalsSection;