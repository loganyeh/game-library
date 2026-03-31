import { useState, useEffect } from "react";
import { fetchShowcase } from "../../API/HomepageAPI";

import type { Game } from "../../API/HomepageAPI";

function ShowcaseSlideshow(){
    const [loading, setLoading] = useState(true);
    const [showcaseData, setShowcaseData] = useState<Game[]>([]);

    useEffect(() => {
        async function getShowcase(){
            setLoading(true);

            const data = await fetchShowcase();
            setShowcaseData(data);

            setLoading(false);
        }

        getShowcase();
    }, []);

    return(
        <>
            <div className="h-auto w-full">
                {/* Image Slideshow */}
                <div className="h-[425px] md:h-[875px] w-full flex justify-center items-center bg-gray-300">
                    {loading ?
                        (<div className="flex justify-center items-center animate-spin"><i className='bx bx-loader-alt text-4xl'></i></div>)
                        :
                        (showcaseData.slice(8, 9).map((game, _) => {
                            // return <div key={game.id} className={`h-full w-full bg-center bg-cover`} style={{backgroundImage: `url(${game.background_image})`}}>
                            return <div key={game.id} className={`h-full w-full bg-center bg-gray-300`}>
                                
                            </div>
                        }))
                    }
                </div>

                {/* Slideshow Preview */}
                <div className="h-20 md:h-36 w-full flex flex-col justify-center items-center">
                    <div className="h-full w-9/12 md:w-5/12 md:pt-6 flex justify-between items-center md:items-start">
                        <div className="h-8 w-8 flex justify-center items-center bg-red-600 rounded-full"><i className='bx bx-pause text-white text-4xl'></i></div>
                        {loading ?
                            (Array.from({length: 4}).map((_, index) => {
                                return <div key={index} className="h-12 w-12 flex justify-center items-center bg-gray-300 rounded-lg">
                                    <div className="flex justify-center items-center animate-spin"><i className='bx bx-loader-alt'></i></div>
                                </div>
                            })) 
                            :
                            (showcaseData.slice(0, 4).map((game, index) => {
                                return <div key={index} className="h-12 w-12 bg-gray-300 rounded-lg bg-center bg-cover" style={{backgroundImage: `url(${game.background_image})`}}></div>
                            }))
                        }
                    </div>
                    <div className="border-b border-gray-300 h-auto w-11/12"></div>
                </div>

            </div>
        </>
    )
}

export default ShowcaseSlideshow;