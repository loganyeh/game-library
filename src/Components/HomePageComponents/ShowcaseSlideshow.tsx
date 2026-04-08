import { useEffect, useState } from "react";
import { fetchShowcase } from "../../API/HomepageAPI";

import type { Game } from "../../API/HomepageAPI";

function ShowcaseSlideshow(){
    const [loading, setLoading] = useState(true);
    const [showcaseData, setShowcaseData] = useState<Game[]>([]);

    // change api fetch function name
    useEffect(() => {
        async function getShowcase(){
            setLoading(true);

            // const data = await fetchShowcase();
            // setShowcaseData(data);

            setLoading(false);
        }

        getShowcase();
    }, []);

    return(
        <>
            {/* Image Slideshow */}
            <div className="aspect-15/16 xl:aspect-16/6 flex justify-center items-center bg-blue-300">
                {/* add api stuff here */}
            </div>

            {/* Slideshow Preview */}
            <div className="px-4 flex justify-center">
                <div className="border-b border-gray-300 w-full max-w-7xl py-4 md:pb-14 xl:pt-10 flex gap-4 md:gap-6 justify-center items-center">
                    {/* Pause Button */}
                    <i className='bx bx-pause text-white text-4xl bg-red-600 rounded-full'></i>

                    {/* Preview Slides */}
                    {Array.from({length: 4}).map((_, index) => {
                        return <div key={index} className="p-6 bg-blue-300 rounded-lg bg-center bg-cover"></div>
                    })}

                </div>
            </div>
        </>
    )
}

export default ShowcaseSlideshow;