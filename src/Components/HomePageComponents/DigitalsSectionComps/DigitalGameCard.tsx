
type DigitalGameCardProp = {
    loading: boolean;
    background_image?: string;
    name?: string;
}

function DigitalGameCard({ loading, background_image, name }:DigitalGameCardProp ) {
    
    return(
        <>
            <div className="border border-gray-400 w-8/12 md:w-[240px] rounded-lg shrink-0">
                {/* Console Exclusive */}
                <div className="bg-red-600 flex justify-center items-center text-sm text-white font-bold rounded-t-lg">2</div>

                {/* Game Image */}
                <div className={`border-t border-white flex justify-center items-center aspect-square ${loading ? `bg-blue-300` : `bg-gray-300`} bg-center bg-cover`}
                style={{ backgroundImage: `url(${background_image})`}}>
                    <i className={`${loading ? 'bx bx-loader-alt text-3xl animate-spin' : `hidden`}`} ></i>
                </div>

                {/* BODY */}
                <div className="w-full pt-3 p-2 flex flex-col items-between">
                    {/* Game Name */}
                    <div className="min-h-20 max-h-20">
                        <div className="flex justify-start items-center font-semibold text-sm text-gray-700 line-clamp-2">{name || "Super Mario Bros. Wonder - Nintendo Switch 2"}</div>
                        <div className="font-light text-[10px] text-gray-600">3/26/26</div>
                    </div>

                    {/* Game Price */}
                    <div className="flex flex-col gap-0.5">
                        {/* New Tag */}
                        <div className="bg-red-600 w-fit px-1.5 text-white text-[10px] rounded-xl">New!</div>
                        {/* Price */}
                        <div className="text-sm font-semibold text-gray-700">$79.99</div>
                        {/* Heart Icon */}
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1">
                                <i className='bx bx-plus-medical text-lg text-gray-600'></i>
                                <div className="text-[11px] text-gray-600">Games</div>
                            </div>
                            <i className='bx bx-heart text-3xl text-red-600' ></i>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default DigitalGameCard;