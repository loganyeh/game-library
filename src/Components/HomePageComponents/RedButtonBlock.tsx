


type RedButtonBlockProp = {
    title: string;
}

function RedButtonBlock({ title }: RedButtonBlockProp){

    return(
        <>
            <div className="border-2 border-blue-600 h-auto w-full pb-6">
            {/* <div className="border-b border-gray-300 h-auto w-full"> */}

                {/* title */}
                <div className="min-h-18 w-full flex justify-start items-start">
                    <span className="ml-4 mt-8 mb-4 tracking-wider text-xl text-gray-600 font-bold">{title || "Red Button Block"}</span>
                </div>

                {/* nintendo today image */}
                <div className="h-auto w-full flex justify-center items-start">
                    <div className="h-auto w-11/12 rounded-lg">
                        <div className="h-32 bg-blue-300 rounded-t-lg"></div>
                        <div className="h-8 bg-red-600 flex justify-center items-center rounded-b-lg">
                            <div className="h-5 w-5 mr-2 flex justify-center items-center bg-yellow-400 rounded-sm"><i className='bx bx-question-mark text-xl text-white' ></i></div>
                            <div className="text-white text-sm font-medium tracking-wider">Red Button Block</div>
                        </div>
                    </div>
                </div>

                {/* Middle Text */}
                <div className="h-auto w-full flex justify-center items-center">
                    <span className="border h-auto w-11/12 my-6 text-lg font-bold text-gray-700 tracking-wider">Your movie companion: Nintendo Today!</span>
                </div>

                {/* Button */}
                <div className="h-auto w-full flex justify-center items-center">
                    <div className="h-12 w-11/12 flex justify-center items-center bg-red-600 text-white font-semibold text-base tracking-wider rounded-md">Learn More</div>
                </div> 

                {/* Fine Print Text */}
                <div className="border h-auto w-full mt-4 flex justify-center items-start">
                    <span className="borderpl-4 text-[10px] text-gray-700 font-light">
                        Nintendo Account, compatible smart device and persistent internet connection required. Data charges may apply. Requires iOS 16.0 or later. Requires Android 10.0 or later.
                    </span>
                </div>

            </div>
        </>
    )
}

export default RedButtonBlock;