type FeatureTileProp = {
    id?: number;
    name: string;
    background_image: string;
}

function FeatureTile({ name, background_image }: FeatureTileProp){

    return(
        <>
            <div className="border border-gray-300 h-auto w-52 md:w-[275px] mx-4 md:mx-5 rounded-lg shrink-0">

                <div className="h-28 md:h-44 w-full rounded-t-lg bg-cover" style={{ backgroundImage: `url(${background_image})`}}></div>

                <div className="h-36 md:h-40 w-full flex flex-col justify-between md:justify-around items-center rounded-b-lg">
                    <div className="h-11 flex justify-center items-center tracking-wide font-bold text-sm text-gray-700">{name || "Play the free demo today!"}</div>
                    <div className="h-auto w-full">
                        <span className="h-auto w-auto ml-2 px-2 py-0.5 bg-blue-700 text-white text-[10px] font-medium rounded-xl">Pre-order now</span>
                        <div className="h-8 w-full mt-1 flex justify-start items-start"><span className="border-l-2 border-red-600 ml-2 pl-1 text-[10px] text-gray-600">Nintendo Switch</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureTile;