import FeatureTile from "./FeaturedComps/FeatureTile";


function FeaturedSection(){

    return(
        <>
            <div className="border-b border-gray-300 h-auto w-full pb-6">     
                {/* title */}
                <div className="h-16 w-full flex justify-start items-end">
                    <span className="ml-4 mb-2 tracking-wider text-xl text-gray-600 font-bold">Featured</span>
                </div>

                {/* Featured Scroll Tiles */}
                <div className="h-80 w-auto flex justify-start items-center overflow-x-auto scroll-smooth">

                    {Array.from({length: 10}).map((_, index) => {
                        return <FeatureTile key={index} />
                    })}

                </div>

            </div>
        
        </>
    )
}

export default FeaturedSection;