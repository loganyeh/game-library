import { useState, useEffect } from "react";
import FeatureTile from "./FeaturedComps/FeatureTile";
import { fetchGame } from "../../API/HomepageAPI";
import type { Game } from "../../API/HomepageAPI";


function FeaturedSection(){
    const [loading, setLoading] = useState(true);
    const [featureData, setFeatureData] = useState<Game[]>([]);

    useEffect(() => {
        async function getGame(){
            setLoading(true);

            const data: Game[] = await fetchGame();
            setFeatureData(data);

            setLoading(false);
        }

        getGame();
    }, [])

    return(
        <>
            <div className="border-b border-gray-300 pb-10 2xl:pb-12">     
                {/* title */}
                <div className="mx-4 flex 2xl:justify-center">
                    <div className="w-full max-w-7xl pt-8 pb-5 tracking-wider text-xl md:text-[28px] text-zinc-700 font-bold">Featured</div>
                </div>

                {/* Featured Scroll Tiles */}
                <div className="px-4 pb-5 md:pl-8 md:pb-8 flex gap-6 md:gap-8 xl:gap-12 overflow-x-auto scroll-smooth">
                    {loading
                    ?
                    ((Array.from({length: 10}).map((_, index) => {
                        return <FeatureTile key={index} loading={loading}/>
                    })))
                    :
                    (featureData.length === 0 
                        ? 
                        ((Array.from({length: 10}).map((_, index) => {
                            return <FeatureTile key={index} loading={loading}/>
                        })))
                        : 
                        ((featureData.slice(0, 10).map((game, index) => {
                            return <FeatureTile key={index} name={game.name} background_image={game.background_image} platform={game.platforms[0].platform.name} />
                        })))
                    )
                    }
                </div>

            </div>
        
        </>
    )
}

export default FeaturedSection;