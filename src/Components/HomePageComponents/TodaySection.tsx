
import SectionTitle from "./HomepageSharedComps/SectionTitle";

function TodaySection(){

    return(
        <>
            <div className="border-b border-gray-300 h-auto w-full">
                {/* title */}
                <SectionTitle title="Nintendo Today!" />

                {/* nintendo today image */}
                <div className="h-auto w-full flex justify-center items-start">
                    <div className="h-44 w-11/12 bg-blue-300 rounded-lg">
                        <div className="h-36 bg-blue-300 rounded-t-lg"></div>
                        <div className="h-8 bg-red-600 flex justify-center items-center rounded-b-lg">
                            <div className="h-5 w-5 mr-2 flex justify-center items-center bg-yellow-400 rounded-sm"><i className='bx bx-question-mark text-xl text-white' ></i></div>
                            <div className="text-white text-sm font-medium tracking-wider">Nintendo Today!</div>
                        </div>
                    </div>
                </div>

                <div className="h-28 w-full flex justify-center items-center">
                    <span className="h-auto w-11/12 text-lg font-bold text-gray-700 tracking-wider">Your movie companion: Nintendo Today!</span>
                </div>

                <div className="h-auto w-full flex justify-center items-center">
                    <div className="h-12 w-11/12 flex justify-center items-center bg-red-600 text-white font-semibold text-base tracking-wider rounded-lg">Learn More</div>
                </div> 

                <div className="h-24 w-full flex justify-center items-start">
                    <span className="mt-4 pl-4 text-[10px] text-gray-700 font-light">
                        Nintendo Account, compatible smart device and persistent internet connection required. Data charges may apply. Requires iOS 16.0 or later. Requires Android 10.0 or later.
                    </span>
                </div>

            </div>
        </>
    )
}

export default TodaySection;