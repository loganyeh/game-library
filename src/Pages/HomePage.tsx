import { fetchPlatforms } from "../API/api";
import { useEffect } from "react";

function DashboardPage(){

    useEffect(() => {
        async function getPlatform(){
            const data = await fetchPlatforms();
            return data.results;

        };
        // getPlatform();
    }, [])
    

    return(
        <>
            <div className="h-auto w-screen">

                {/* Page Header ✅ */}
                <div className="border-b border-white h-12 w-full flex justify-between items-center bg-red-600">
                    <div className="border-3 border-white h-6 w-auto ml-4 px-1 flex justify-center items-center text-white text-base font-bold rounded-2xl">Nintendo</div>
                    <div className="h-auto w-auto mr-4 flex justify-center items-center text-3xl">🇺🇸</div>
                </div>

                {/* Showcase Slideshow ✅ */}
                <div className="h-auto w-full">

                    {/* Image Slideshow */}
                    <div className="h-[425px] w-full bg-blue-300">
                        image slideshow 
                        {/* <i className='bx bx-pause'></i> */}
                    </div>

                    {/* Slideshow Preview */}
                    <div className="h-20 w-full flex flex-col justify-center items-center">
                        <div className="h-full w-9/12 flex justify-between items-center">
                            <div className="h-8 w-8 flex justify-center items-center bg-red-600 rounded-full"><i className='bx bx-pause text-white text-4xl'></i></div>
                            {Array.from({length: 4}).map((_, index) => {
                                return <div key={index} className="h-12 w-12 bg-blue-300 rounded-lg"></div>
                            })}
                        </div>
                        <div className="border-b border-gray-300 h-auto w-11/12"></div>
                    </div>

                </div>

                {/* Featured Block ✅ */}
                <div className="border-b border-gray-300 h-[400px] w-full">
                    
                    {/* title */}
                    <div className="h-[60px] w-full flex justify-start items-end">
                        <span className="ml-4 mb-2 tracking-wider text-xl text-gray-600 font-bold">Featured</span>
                    </div>

                    {/* Featured Scroll Tiles */}
                    <div className="h-[290px] w-auto flex justify-start items-center overflow-x-auto scroll-smooth">

                        {Array.from({length: 10}).map((_, index) => {
                            return <div key={index} className="border border-gray-300 h-[250px] w-52 mx-4 rounded-lg shrink-0">

                                        <div className="h-[115px] w-full bg-blue-300 rounded-t-lg"></div>
                                        
                                        <div className="h-[135px] w-full flex flex-col justify-between items-center rounded-b-lg">
                                            <div className="h-11 flex justify-center items-center tracking-wide font-bold text-sm text-gray-700">Play the free demo today!</div>
                                            <div className="h-auto w-full">
                                                <span className="h-auto w-auto ml-2 px-2 py-0.5 bg-blue-700 text-white text-[10px] font-medium rounded-xl">Pre-order now</span>
                                                <div className="h-8 w-full mt-1 flex justify-start items-start"><span className="border-l-2 border-red-600 ml-2 pl-1 text-[10px] text-gray-600">Nintendo Switch</span></div>
                                            </div>
                                        </div>
                                    </div>
                        })}

                    </div>

                </div>
                {/* PRIOR MORE PRECISE H/W PIXELS */}

                {/* Today! Block */}
                <div className="border-b border-gray-300 h-auto w-full">
                {/* <div className="border-b border-gray-300 h-[500px] w-full"> */}

                    {/* title */}
                    <div className="h-16 w-full flex justify-start items-end">
                        <span className="ml-4 mb-2 tracking-wider text-xl text-gray-600 font-bold">Nintendo Today!</span>
                    </div>

                    {/* nintendo today image */}
                    <div className="h-auto w-full flex justify-center items-start">
                        <div className="h-44 w-11/12 rounded-lg">
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
                        <span className="mt-4 pl-4 text-[10px] text-gray-700">
                            Nintendo Account, compatible smart device and persistent internet connection required. Data charges may apply. Requires iOS 16.0 or later. Requires Android 10.0 or later.
                        </span>
                    </div>

                </div>

                {/* Nintendo Switch 2 Block */}
                <div className="h-[500px] w-full">Nintendo Switch 2 Block</div>

                {/* Online Store */}
                <div className="border-2 border-red-600 h-[475px] w-full">Online Store</div>

                {/* Nintendo Switch Online + Expansion Pack */}
                <div className="border-2 border-red-600 h-[550px] w-full">Nintendo Switch Online + Expansion Pack</div>

                {/* News Block */}
                <div className="border-2 border-orange-500 h-auto w-full">

                    {/* New Article 1 Big */}
                    <div className="border h-[450px] w-full">news article 1</div>

                    {/* New Article 2 Big */}
                    <div className="border h-[450px] w-full">news article 2</div>

                    {/* News Arrticle Small 2x2 */}
                    <div className="border h-[550px] w-full flex flex-wrap">
                        <div className="border border-red-600 h-1/2 w-1/2">1</div>
                        <div className="border border-red-600 h-1/2 w-1/2">2</div>
                        <div className="border border-red-600 h-1/2 w-1/2">3</div>
                        <div className="border border-red-600 h-1/2 w-1/2">4</div>
                    </div>

                    {/* See all news articles BUTTON */}
                    <div className="border h-20 w-full">see all news articles</div>
                </div>

                {/* Characters Block */}
                <div className="border-2 border-blue-600 h-auto w-full flex flex-wrap justify-around items-center">

                    {/* title */}
                    <div className="border border-red-600 h-20 w-full">character title</div>

                    {/* tiles */}
                    {Array.from({length: 8}).map((_, index) => {
                        return <div key={index} className="border h-40 w-40 my-4"></div>
                    })}
                    
                </div>

                {/* Digital Best Sellers */}
                <div className="border h-auto w-full pb-20">
                    
                    <div className="border border-red-600 h-[525px] w-full">Digital Best Sellers</div>
                
                {/* Digital New Releases */}
                    <div className="border border-red-600 h-[525px] w-full">Digital New Releases</div>
                </div>

                {/* Footer */}
                <div className="border-2 border-purple-600 h-auto w-full">
                    
                    {/* Logo */}
                    <div className="h-32 w-full">Footer Head Block</div>

                    {/* Links */}
                    <div className="border h-[1250px] w-full">link columns</div>

                    {/* Copyrights */}
                    <div className="border-2 border-red-600 h-[360px] w-full">copyright</div>

                </div>

            </div>
        </>
    )
}

export default DashboardPage;