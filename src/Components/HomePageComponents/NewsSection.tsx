import SectionTitle from "./HomepageSharedComps/SectionTitle";
import RedClickButton from "./RedButtonBlockComps/RedClickButton";

function NewsSection(){
    const bigNewsArticleImages = [`/images/pokemon_champions.avif`, `/images/profile_icon_markers.avif`];
    const smallNewsArticleImages = [`/images/small_news1.avif`, `/images/small_news2.avif`, `/images/small_news3.avif`, `/images/small_news4.avif`];

    return(
        <>
            <div className="mx-4 lg:mx-6 pb-8 md:pb-14 flex flex-col items-center">

                {/* title */}
                <SectionTitle title="News" />

                {/* Big Articles 2x */}
                <div className="w-full max-w-6xl md:grid md:grid-cols-2 md:gap-8">
                    {bigNewsArticleImages.map((img, index) => {
                        return <div key={index} className="mb-8">
                                    
                                    {/* Image */}
                                    <div className="aspect-[16/8] rounded-xl bg-cover bg-center"
                                    style={{ backgroundImage: `url(${img})`}}></div>
    
                                    {/* Icon & Date */}
                                    <div className="py-3 flex gap-2 justify-start items-center">
                                        <i className='bx bx-plus-medical text-red-600 text-2xl' ></i>
                                        <div className="text-gray-700 font-light text-sm md:text-base">03/27/26</div>
                                    </div>
    
                                    <div className="text-gray-800 font-semibold text-base md:text-lg tracking-wide line-clamp-2">Get ready for some wondrous new content for Super Mario Bros. Wonder—exclusive to Nintendo Switch 2!</div>
    
                                    <div className="mt-2 md:mt-3 text-gray-800 line-clamp-2 text-sm md:text-base font-light">The Super Mario Bros.™ Wonder – Nintendo Switch™ 2 Edition + Meetup in Bellabel Park game is out now and brings a bouquet of new experiences to the Flower Kingdom. Nintendo Switch 2 players will be able to check out Bellabel Park and visit the new a…</div>
    
                                    <div className="border-b-2 border-red-600 w-fit mt-2 pb-0.5 text-red-600 text-base tracking-wider font-semibold">Read More</div>
    
                                </div>
                    })}
                </div>

                {/* Small Articles 2x2 */}
                <div className="w-full max-w-6xl mb-6 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                    {smallNewsArticleImages.map((img, index) => {
                        return <div key={index}>

                                    <div className="border border-gray-200 aspect-video rounded-lg bg-cover bg-center"
                                    style={{ backgroundImage: `url(${img})` }}></div>
                                    {/* <div className="border border-gray-200 h-24 md:h-28 lg:h-32 xl:h-36 w-full bg-red-600 rounded-lg"></div> */}

                                    <div className="mt-2 md:mt-3 flex items-center">
                                        <i className='bx bxs-square text-red-600 text-2xl' ></i>
                                        <div className="ml-1 text-gray-700 text-sm md:text-base font-light">03/26/26</div>
                                    </div>

                                    <div className="mt-2 md:mt-3 line-clamp-3 text-sm md:text-base xl:text-lg text-gray-700 font-bold">Here’s the latest Nintendo Switch Online news from March</div>

                                    <div className="border-b-2 border-red-600 w-fit mt-2 text-red-600 font-bold tracking-wide">Read More</div>

                                </div>
                    })}
                </div>

                {/* Red Button */}
                <div className="w-full max-w-6xl flex xl:justify-start">
                    <RedClickButton buttonText="See all news articles" icon="bx bxs-message text-xl text-white" />
                </div>

            </div>

            {/* Bottom Border */}
            <div className="border-b border-gray-300"></div>
        </>
    )
}

export default NewsSection;