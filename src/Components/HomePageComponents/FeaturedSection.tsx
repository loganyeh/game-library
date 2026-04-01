import { useState, useEffect } from "react";
import SectionTitle from "./SharedHomepageComps/SectionTitle";
import FeatureTile from "./FeaturedComps/FeatureTile";
import { fetchFeature } from "../../API/HomepageAPI";
import type { FeatureDM } from "../../API/HomepageAPI";

function FeaturedSection(){
    const [loading, setLoading] = useState(true);
    const [featureData, setFeatureData] = useState<FeatureDM[]>([]);

    // useEffect(() => {
    //     async function getFeature(){
    //         setLoading(true);

    //         const data = await fetchFeature();
    //         setFeatureData(data);

    //         setLoading(false);
    //     }

    //     getFeature();
    // }, []);

    // console.log(featureData[0]?.platforms[0]?.platform.name);

    return(
        <>
            <div className="border-b border-gray-300 h-auto w-full pb-6 md:pb-12">     
                {/* title */}
                {/* <div className="xl:pl-5">
                    <SectionTitle title="Featured"/>
                </div> */}
                <SectionTitle title="Featured"/>

                {/* Featured Scroll Tiles */}
                <div className="h-auto w-auto py-1 pb-5 flex justify-start items-start overflow-x-auto scroll-smooth">
                    {loading ?
                        (Array.from({length: 10}).map((_, index) => {
                            return <div key={index} className="border border-gray-300 h-auto w-52 md:w-[275px] mx-4 md:mx-5 rounded-lg shrink-0">
                                        <div className="h-28 md:h-44 w-full flex justify-center items-center bg-blue-300 rounded-t-lg">
                                            <div className=""><i className='bx bx-loader-alt text-2xl'></i></div>
                                        </div>
                                        <div className="h-36 md:h-40 w-full flex flex-col justify-between md:justify-around items-center rounded-b-lg"></div>
                                    </div>
                        }))
                        :
                        (featureData.slice(0, 10).map((game, index) => {
                            return <FeatureTile key={index} name={game.name} background_image={game.background_image} />
                        }))
                    }
                </div>

            </div>
        
        </>
    )
}

export default FeaturedSection;