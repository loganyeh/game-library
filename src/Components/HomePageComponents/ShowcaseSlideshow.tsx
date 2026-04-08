import { useEffect, useState } from "react";
import { fetchGame } from "../../API/HomepageAPI";
import type { Game } from "../../API/HomepageAPI";

function ShowcaseSlideshow(){
    const [loading, setLoading] = useState(true);
    const [showcaseData, setShowcaseData] = useState<Game[]>([]);

    useEffect(() => {
        async function getShowcase(){
            setLoading(true);

            // const data = await fetchGame();
            // setShowcaseData(data);

            setLoading(false);
        }

        getShowcase();
    }, []);

    return(
        <>
            {/* Image Slideshow */}
            <div className={`${loading ? `bg-blue-300` : `bg-gray-300`} aspect-15/16 xl:aspect-16/6 flex justify-center items-center bg-cover bg-center`} 
            style={{ backgroundImage: `${loading ? `` : `url(${showcaseData[8]?.background_image})` }` }}>
                <i className={`${loading ? `bx bx-loader-alt text-4xl animate-spin` : `hidden`}`}></i>
                <div className={`${showcaseData.length === 0 && !loading ? `` : `hidden`} `}>api turned off</div>
            </div>

            {/* Slideshow Preview */}
            <div className="px-4 flex justify-center">
                <div className="border-b border-gray-300 w-full max-w-7xl py-4 md:pb-14 xl:pt-10 flex gap-4 md:gap-6 justify-center items-center">
                    {/* Pause Button */}
                    <i className='bx bx-pause text-white text-4xl bg-red-600 rounded-full'></i>

                    {/* Preview Slides */}
                    {loading
                    ? 
                    ((Array.from({length: 4}).map((_, index) => {
                        return <div key={index} className="p-3 bg-blue-300 flex justify-center items-center rounded-lg bg-center bg-cover">
                            <i className='bx bx-loader-alt text-2xl animate-spin'></i>
                        </div>
                    })))
                    :
                    (showcaseData.length === 0 
                        ?
                        ((Array.from({length: 4}).map((_, index) => {
                            return <div key={index} className="p-6 bg-gray-300 rounded-lg bg-center bg-cover"></div>
                        })))
                        : 
                        ((showcaseData.slice(0, 4).map((game, index) => {
                            return <div key={index} className="p-6 bg-blue-300 rounded-lg bg-center bg-cover" 
                            style={{ backgroundImage: `url(${game.background_image})`}}>
                                
                            </div>
                        })))
                    )
                    }

                </div>
            </div>
        </>
    )
}

export default ShowcaseSlideshow;