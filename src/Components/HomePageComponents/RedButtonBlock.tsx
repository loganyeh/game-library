


type RedButtonBlockProp = {
    title: string;
    description: string;
    buttonText: string;
    finePrint: string;
}

function RedButtonBlock({ title, description, buttonText, finePrint }: RedButtonBlockProp){

    return(
        <>
            {/* <div className="border-2 border-blue-600 h-auto w-full pb-6"> */}
            <div className="border-b border-gray-300 h-auto w-full pb-6">

                {/* title */}
                <div className="min-h-18 w-full flex justify-start items-center">
                    <div className="w-11/12 ml-4 mt-7 mb-4 tracking-wider text-xl text-gray-600 font-bold">{title || "Red Button Block"}</div>
                </div>

                {/* nintendo today image */}
                <div className="h-auto w-full flex justify-center items-start">
                    <div className="h-40 w-11/12 bg-blue-300 rounded-lg">
                        <div className="h-32 bg-blue-300 rounded-t-lg"></div>
                        {/* <div className="h-8 bg-red-600 flex justify-center items-center rounded-b-lg">
                            <div className="h-5 w-5 mr-2 flex justify-center items-center bg-yellow-400 rounded-sm"><i className='bx bx-question-mark text-xl text-white' ></i></div>
                            <div className="text-white text-sm font-medium tracking-wider">Red Button Block</div>
                        </div> */}
                    </div>
                </div>

                {/* Description */}
                <div className="h-auto w-full flex justify-center items-center">
                    <span className="h-auto w-11/12 my-6 text-[17px] font-bold text-gray-700 tracking-wider">{description || "Your movie companion: Nintendo Today!"}</span>
                </div>

                {/* Button Text */}
                <div className="h-auto w-full flex justify-center items-center">
                    <div className="h-12 w-11/12 flex justify-center items-center bg-red-600 text-white font-semibold text-base tracking-wider rounded-md">{buttonText || "Learn More"}</div>
                </div> 

                {/* Fine Print */}
                <div className="h-auto w-full mt-4 flex justify-center">
                    <div className="w-11/12 text-[10px] text-gray-700 font-light">
                        {finePrint || ""}
                    </div>
                </div>

            </div>
        </>
    )
}

export default RedButtonBlock;