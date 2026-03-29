

function FeatureTile(){

    return(
        <>
            <div className="border border-gray-300 h-auto w-52 mx-4 rounded-lg shrink-0">

                <div className="h-28 w-full bg-blue-300 rounded-t-lg"></div>

                <div className="h-36 w-full flex flex-col justify-between items-center rounded-b-lg">
                    <div className="h-11 flex justify-center items-center tracking-wide font-bold text-sm text-gray-700">Play the free demo today!</div>
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