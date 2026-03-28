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

                {/* Today! Block ✅ */}
                <div className="border-b border-gray-300 h-auto w-full">

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
                        <span className="mt-4 pl-4 text-[10px] text-gray-700 font-light">
                            Nintendo Account, compatible smart device and persistent internet connection required. Data charges may apply. Requires iOS 16.0 or later. Requires Android 10.0 or later.
                        </span>
                    </div>

                </div>


                {/* Nintendo Switch 2 Block */}
                <div className="border-b border-gray-300 h-auto w-full">

                    {/* title */}
                    <div className="h-16 w-full flex justify-start items-end">
                        <span className="ml-4 mb-2 tracking-wider text-xl text-gray-600 font-bold">Nintendo Switch 2</span>
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

                    <div className="h-28 w-full mt-8 flex justify-center items-center">
                        <span className="h-auto w-11/12 text-lg font-bold text-gray-700 tracking-wider">Enjoy ways to play alongside Mario, Peach and many other Mushroom Kingdom friends on the Nintendo Switch 2 system.</span>
                    </div>

                   <div className="h-auto w-full mt-6 mb-8 flex justify-center items-center">
                        <div className="h-12 w-11/12 flex justify-center items-center bg-red-600 text-white font-semibold text-base tracking-wider rounded-lg">Learn More</div>
                    </div> 

                </div>

                {/* Online Store */}
                <div className="border-b border-gray-300 h-auto w-full">

                    {/* title */}
                    <div className="h-16 w-full flex justify-start items-end">
                        <span className="ml-4 mb-2 tracking-wider text-xl text-gray-600 font-bold">Online Store</span>
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

                    <div className="h-28 w-full mt-8 flex justify-center items-center">
                        <span className="h-auto w-11/12 text-lg font-bold text-gray-700 tracking-wider">Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over.</span>
                    </div>

                   <div className="h-auto w-full mt-6 mb-8 flex justify-center items-center">
                        <div className="h-12 w-11/12 flex justify-center items-center bg-red-600 text-white font-semibold text-base tracking-wider rounded-lg">Start Shopping</div>
                    </div> 

                </div>

                {/* Nintendo Switch Online + Expansion Pack */}
                <div className="border-b border-gray-300 h-auto w-full">

                    {/* title */}
                    <div className="h-16 w-full mt-6 flex justify-start items-end">
                        <span className="w-10/12 ml-4 mb-2 tracking-wider text-xl text-gray-600 font-bold">Nintendo Switch Online + Expansion Pack</span>
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

                    <div className="h-28 w-full mt-2 flex justify-center items-center">
                        <span className="h-auto w-11/12 text-lg font-bold text-gray-700 tracking-wider">Play online, discover the classics, and more</span>
                    </div>

                   <div className="h-auto w-full mt-2 my-4 flex justify-center items-center">
                        <div className="h-12 w-11/12 flex justify-center items-center bg-red-600 text-white font-semibold text-base tracking-wider rounded-lg">Learn More</div>
                    </div> 

                    <div className="h-24 w-full flex justify-center items-start">
                        <span className=" pl-4 text-[10px] text-gray-700 font-light">
                            *Full version of game required to use the content for that game. Sold separately. For details visit https://support.nintendo.com/switch2/upgradepack. Terms apply. https://www.nintendo.com/us/purchase-terms/
                        </span>
                    </div>


                </div>

                {/* News Block */}
                <div className="h-auto w-full">

                    {/* title */}
                    <div className="h-16 w-full flex justify-start items-end">
                        <span className="w-10/12 ml-4 mb-2 tracking-wider text-xl text-gray-600 font-bold">News</span>
                    </div>

                    {/* New Article 1 Big */}
                    <div className="h-auto w-full">
                        {Array.from({length: 2}).map((_, index) => {
                            return <div key={index} className="h-auto w-full mb-8 flex flex-col justify-center items-center">

                                        <div className="h-auto w-11/12 rounded-lg">
                                            <div className="h-48 bg-blue-300 rounded-lg"></div>
                                        </div>

                                        <div className="h-11 w-11/12 flex justify-start items-center">
                                            <div className="mr-1 flex justify-center items-center"><i className='bx bx-plus-medical text-red-600 text-2xl' ></i></div>
                                            <div className="text-gray-700 font-light text-sm">03/27/26</div>
                                        </div>

                                        <div className="h-auto w-11/12 text-gray-800 font-semibold text-base tracking-wide line-clamp-2">Get ready for some wondrous new content for Super Mario Bros. Wonder—exclusive to Nintendo Switch 2!</div>

                                        <div className="h-auto w-11/12 mt-2 text-gray-800 line-clamp-2 text-sm font-light">The Super Mario Bros.™ Wonder – Nintendo Switch™ 2 Edition + Meetup in Bellabel Park game is out now and brings a bouquet of new experiences to the Flower Kingdom. Nintendo Switch 2 players will be able to check out Bellabel Park and visit the new a…</div>

                                        <div className="h-auto w-11/12 mt-1">
                                            <span className="border-b-2 border-red-600 pb-0.5 text-red-600 text-base tracking-wider font-semibold">Read More</span>
                                        </div>

                                    </div>
                        })}
                    </div>

                    {/* new articles titles 2x2 */}
                    <div className="h-auto w-full flex justify-center items-center">

                        <div className="h-full w-11/12 flex flex-wrap justify-between">
                            {Array.from({length: 4}).map((_, index) => {
                                return <div key={index} className="h-auto w-40 mb-6">

                                            <div className="border border-gray-200 h-24 w-full bg-red-600 rounded-lg"></div>

                                            <div className="h-auto w-full mt-2 flex">
                                                <div className="flex justify-center items-center"><i className='bx bxs-square text-red-600 text-2xl' ></i></div>
                                                <div className="h-auto w-auto ml-1 flex justify-center items-center text-gray-700 text-sm font-light">03/26/26</div>
                                            </div>

                                            <div className="h-auto w-full mt-2 line-clamp-3 text-sm text-gray-700 font-bold">Here’s the latest Nintendo Switch Online news from March</div>

                                            <div className="mt-2">
                                                <span className="border-b-2 border-red-600 h-auto w-auto text-red-600 font-bold tracking-wide">Read More</span>
                                            </div>

                                        </div>
                            })}
                        </div>

                    </div>

                    {/* See all news articles BUTTON */}
                    <div className="border-b border-gray-300 h-24 w-full flex justify-center items-start">
                        <div className="h-12 w-11/12 mt-2 flex justify-center items-center bg-red-600 rounded-md">
                            <div className="mr-4 flex justify-center items-center"><i className='bx bxs-message text-xl text-white' ></i></div>
                            <div className="text-white text-base tracking-wider font-semibold">See all news articles</div>
                        </div>
                    </div>


                </div>

                {/* Characters Block */}
                <div className="border-b border-gray-300 h-auto w-full flex flex-col justify-start items-center">

                    {/* title */}
                    <div className="h-16 w-11/12 flex justify-start items-end">
                        <span className="w-full mb-2 tracking-wider text-xl text-gray-600 font-bold">Characters</span>
                    </div>

                    {/* tiles */}
                    <div className="h-auto w-11/12 flex flex-wrap justify-between items-center">
                        {Array.from({length: 8}).map((_, index) => {
                            return <div key={index} className="h-auto w-40 mb-6">
                                        <div className="border h-40 w-40 bg-blue-300 rounded-lg"></div>
                                        <div className="min-h-8 w-full my-1 flex justify-star items-center text-xl font-bold text-gray-600 break-word"> Super Mario</div>
                                    </div>
                        })}
                    </div>
                    
                </div>

                {/* Digital Best Sellers */}
                {Array.from({length: 2}).map((_, index) => {
                    return <div key={index} className="border h-auto w-full pb-10">
                                <div className="h-28 w-full flex justify-center">
                                    <div className="h-28 w-11/12 flex flex-col justify-end items-start">
                                        <span className="w-full mb-2 tracking-wider text-xl text-gray-600 font-bold">Digital Best Sellers</span>
                                        <div className="border-b-2 border-red-600 mb-3">
                                            <span className="text-sm text-red-600 font-semibold tracking-wide">See full list</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="h-auto w-auto mt-2 pl-5 pb-12 flex overflow-x-auto scroll-smooth">
                                    {Array.from({length: 5}).map((_, index) => {
                                        return <div key={index} className="border border-gray-600 min-h-96 w-64 mx-4 rounded-lg shrink-0">
                                                    <div className="h-5 w-full bg-red-600 flex justify-center items-center text-white font-bold rounded-t-lg">2</div>

                                                    <div className="h-52 w-full bg-blue-300"></div>

                                                    <div className="h-auto w-full flex flex-col justify-center items-center">
                                                        <div className="h-auto w-11/12 mt-3 flex justify-start items-center font-semibold text-base text-gray-700 line-clamp-2">Super Mario Bros. Wonder - Nintendo Switch 2</div>
                                                        <div className="h-auto w-11/12 font-light text-[11px] text-gray-600">3/26/26</div>

                                                        <div className="h-auto w-11/12">
                                                            <span className="px-2 bg-red-600 text-white text-[12px] rounded-xl">New!</span>
                                                        </div>

                                                        <div className="w-11/12 flex justify-start items-center text-sm font-semibold text-gray-700">$79.99</div>

                                                        <div className="h-auto w-11/12 flex justify-center items-center">
                                                            <div className="h-full w-1/2 flex justify-start items-center">
                                                                <div className="mx-1 flex justify-center items-center"><i className='bx bx-plus-medical text-lg text-gray-600'></i></div>
                                                                <div className="text-[11px] text-gray-600">Games</div>
                                                            </div>
                                                            <div className="h-full w-1/2 flex justify-end items-center">
                                                                <div className="mr-2 flex justify-center items-center"><i className='bx bx-heart text-3xl text-red-600' ></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                    })}

                                    <div className="h-96 w-40 flex items-end shrink-0">
                                        <div className="h-[364px] w-full flex justify-center items-center bg-red-600 text-white font-semibold text-base tracking-wide rounded-md">See full list</div>
                                    </div>

                                </div>
                            
                            </div>
                            })}

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