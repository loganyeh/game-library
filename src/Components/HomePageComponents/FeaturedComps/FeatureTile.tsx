

type FeatureTileProp = {
    loading?: boolean
    name?: string;
    background_image?: string;
}

function FeatureTile({ loading, name, background_image }: FeatureTileProp){

    return(
        <>
            <div className="border border-gray-300 rounded-lg">
                <div className="px-[104px] py-14 md:px-32 md:py-20 rounded-t-lg bg-blue-300 bg-cover" style={{ backgroundImage: `url(${background_image})`}}></div>

                <div className="min-h-36 md:min-h-40 px-2 py-4 flex flex-col justify-between rounded-b-lg">
                    <div className="tracking-wide font-bold text-sm md:text-base text-gray-700">{name || "Play the free demo today!"}</div>

                    <div className="flex flex-col gap-1.5 text-[10px] md:text-xs">
                        <div className="bg-blue-700 w-fit px-2 text-white font-medium rounded-xl">Pre-order now</div>
                        <div className="border-l-2 border-red-600 px-1.5 text-gray-600">Nintendo Switch</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FeatureTile;