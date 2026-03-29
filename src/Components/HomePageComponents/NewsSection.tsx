import SectionTitle from "./HomepageSharedComps/SectionTitle";
import RedClickButton from "./RedButtonBlockComps/RedClickButton";

function NewsSection(){

    return(
        <>
            <div className="border-b border-gray-300 h-auto w-full pb-8">

                {/* title */}
                <SectionTitle title="News" />

                {/* Big Articles 2x */}
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

                {/* Small Articles 2x2 */}
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

                {/* Red Button */}
                <RedClickButton buttonText="See all news articles" icon="bx bxs-message text-xl text-white" />

            </div>
        </>
    )
}

export default NewsSection;