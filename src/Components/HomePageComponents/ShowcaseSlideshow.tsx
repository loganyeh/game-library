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

    console.log(showcaseData.slice(0, 10));

    return(
        <>
            <div className="h-auto w-full">
                {/* Image Slideshow */}
                <div className="h-[425px] w-full bg-blue-300">
                    {loading ?
                        (<div className="h-full flex justify-center">
                            <div className="flex justify-center items-center animate-spin"><i className='bx bx-loader-alt text-4xl'></i></div>
                        </div>) 
                        :
                        (showcaseData.slice(8, 9).map((game, _) => {
                            return <div key={game.id} className={`h-full w-full bg-center bg-cover`} style={{backgroundImage: `url(${game.background_image})`}}>
                                
                            </div>
                        }))
                    }
                    
                </div>

                {/* Slideshow Preview */}
                <div className="h-20 w-full flex flex-col justify-center items-center">
                    <div className="h-full w-9/12 flex justify-between items-center">
                        <div className="h-8 w-8 flex justify-center items-center bg-red-600 rounded-full"><i className='bx bx-pause text-white text-4xl'></i></div>
                        {/* {Array.from({length: 4}).map((_, index) => {
                            return <div key={index} className="h-12 w-12 bg-blue-300 rounded-lg"></div>
                        })} */}
                        {Array.from({length: 4}).map((_, index) => {
                            return <div key={index} className="h-12 w-12 bg-blue-300 rounded-lg"></div>
                        })}
                    </div>
                    <div className="border-b border-gray-300 h-auto w-11/12"></div>
                </div>

            </div>
        </>
    )
}

export default ShowcaseSlideshow;