import { useState } from "react";
import { useEffect } from "react";
import SectionTitle from "./HomepageSharedComps/SectionTitle";
import FeatureTile from "./FeaturedComps/FeatureTile";
// import { fetchFeature } from "../../API/HomepageAPI";
// import type { FeatureDM } from "../../API/HomepageAPI";
// import { useFetcher } from "react-router-dom";

function FeaturedSection(){
    const [loading, setLoading] = useState(true);
    // const [featureData, setFeatureData] = useState<FeatureDM[]>([]);

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
            <div className="border-b border-gray-300 pb-10 2xl:pb-12">     
                {/* title */}
                <div className="mx-4 flex 2xl:justify-center">
                    <div className="w-full max-w-7xl pt-8 pb-5 tracking-wider text-xl md:text-[28px] text-zinc-700 font-bold">Featured</div>
                </div>

                {/* Featured Scroll Tiles */}
                {/* <div className="border flex overflow-x-auto scroll-smooth"> */}
                <div className="px-4 pb-5 md:pl-8 md:pb-8 flex gap-6 md:gap-8 xl:gap-12 overflow-x-auto scroll-smooth">
                    {Array.from({length: 10}).map((_, index) => {
                        return <FeatureTile key={index} />
                    })}
                </div>

            </div>
        
        </>
    )
}

export default FeaturedSection;