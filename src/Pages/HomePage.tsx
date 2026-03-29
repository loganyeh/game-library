import { fetchPlatforms } from "../API/api";
import { useEffect } from "react";

// SHELL comps
import Header from "../Components/Shell/Header";
import Footer from "../Components/Shell/Footer";

// Comps
import ShowcaseSlideshow from "../Components/HomePageComponents/ShowcaseSlideshow";
import FeaturedSection from "../Components/HomePageComponents/FeaturedSection";
import RedButtonBlock from "../Components/HomePageComponents/RedButtonBlock";
import NewsSection from "../Components/HomePageComponents/NewsSection";
import CharactersSection from "../Components/HomePageComponents/CharactersSection";
import DigitalsSection from "../Components/HomePageComponents/DigitalsSection";
import SectionTitle from "../Components/HomePageComponents/HomepageSharedComps/SectionTitle";

//  types
export type RedButtonBlockType = {
    title: string;
    description: string;
    buttonText: string;
    finePrint: string;
    icon: string;
}

export type CharactersData = {
   characters: string[];
};

type NavData = {
    nav: string[];
}

type NavMenuTabType = {
    title: string;
    icon: string;
}

function DashboardPage(){
    const redButtonBlockData: RedButtonBlockType[] = [
        {title: "Nintendo Today!", description: "Your movie companion: Nintendo Today!", buttonText: "Learn more", finePrint: "Nintendo Account, compatible smart device and persistent internet connection required. Data charges may apply. Requires iOS 16.0 or later. Requires Android 10.0 or later.", icon: "" },
        {title: "Nintendo Switch 2", description: "Enjoy ways to play alongside Mario, Peach and many other Mushroom Kingdom friends on the Nintendo Switch 2 system.", buttonText: "Learn more", finePrint: "", icon: ""},
        {title: "Online Store", description: "Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over.", buttonText: "Start shopping", finePrint: "", icon: ""},
        {title: "Nintendo Switch Online + Expansion Pack", description: "Play online, discover the classics, and more", buttonText: "Learn more", finePrint: "*Full version of game required to use the content for that game. Sold separately. For details visit https://support.nintendo.com/switch2/upgradepack. Terms apply. https://www.nintendo.com/us/purchase-terms/", icon: "" },
    ]
    const charactersSectionData: CharactersData = {
        characters: ["Super Mario", "The Legend of Zelda", "Splatoon", "Kirby", "Pikmin", "Animal Crossing", "Metroid", "Pokemon"],
    };
    const navIcons: NavData = {
        nav: ['bx bxs-coin-stack','bx bxs-heart', 'bx bx-search', 'bx bxs-cart', 'bx bxl-reddit']
    }
    const NavMenuTabData: NavMenuTabType[] = [
        {title: "Nintendo Switch 2", icon: 'bx bxs-square'},
        {title: "Nintendo Switch", icon: 'bx bxs-square'},
        {title: "Games", icon: 'bx bx-plus-medical'},
        {title: "Nintendo Switch Online", icon: 'bx bxs-message-detail'},
        {title: "News and events", icon: 'bx bxs-star'},
        {title: "Play Nintendo", icon: 'bx bxs-square'},
        {title: "My Nintendo", icon: 'bx bxs-square'},
        {title: "Apps", icon: 'bx bx-mobile'},
    ]

    // useEffect(() => {
    //     async function getPlatform(){
    //         const data = await fetchPlatforms();
    //         return data.results;

    //     };
    //     // getPlatform();
    // }, [])

    // nav Click function


    return(
        <>
            <div className="h-auto w-screen">

                <Header />

                <ShowcaseSlideshow />

                <FeaturedSection />

                {redButtonBlockData.map((data, index) => {
                    return <RedButtonBlock key={index} data={data} />
                })}

                <NewsSection />

                <CharactersSection characters={charactersSectionData} />

                {/* Digital Best Sellers */}
                <DigitalsSection />

                {/* <div className="border h-auto w-auto bg-blue-300 opacity-0"></div> */}

                <div className="fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50">

                    <div className="absolute bottom-12 h-[740px] w-[375px] bg-gray-100 rounded-t-2xl overflow-y-auto">
                        
                        {/* Nav Header */}
                        <div className="sticky top-0 h-16 w-full flex justify-center items-center bg-red-600 rounded-t-2xl">
                            <div className="border-4 border-white h-8 w-auto px-2 flex justify-center items-center tracking-widest font-semibold text-white rounded-full">Nintendo</div>
                            <div className="absolute right-3 h-[28px] w-[28px] flex justify-center items-center bg-white rounded-full"><i className='bx bx-x text-[26px] text-red-600'></i></div>
                        </div>

                        {/* Nav Tabs */}
                        <div className="h-24 w-full flex items-end bg-white">

                            <div className="border-t border-r border-gray-300 h-22 w-1/3 flex flex-col justify-center items-center bg-gray-100 rounded-t-2xl">
                                <div className="flex justify-center items-center"><i className='bx bx-compass text-3xl text-red-600' ></i></div>
                                <span className="font-bold text-sm text-red-600 tracking-wider">Explore</span>
                            </div>

                            <div className="border-b border-gray-300 h-22 w-1/3 flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center"><i className='bx bxs-shopping-bag text-3xl text-red-600' ></i></div>
                                <span className="font-bold text-sm text-black tracking-wider">Shop</span>
                            </div>

                            <div className="border-b border-gray-300 h-22 w-1/3 flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center"><i className='bx bxs-shield-alt-2 text-3xl text-red-600' ></i></div>
                                <span className="font-bold text-sm text-black tracking-wider">Support</span>
                            </div>
                        </div>

                        {/* Pages */}
                        <div className="h-auto w-full mt-4 flex justify-center items-center">

                            <div className="h-auto w-11/12">
                                <div className="h-14 w-full mb-2 flex justify-start items-center bg-red-600 shadow rounded-lg">
                                    <div className="ml-4 flex justify-center items-center"><i className='bx bx-home-circle text-2xl text-white' ></i></div>
                                    <div className="ml-4 flex justify-center items-center text-base font-bold text-white tracking-wider">Home</div>
                                </div>

                                {NavMenuTabData.map((section, index) => {
                                    return <div key={index} className="border border-gray-300 h-14 w-full mb-2 flex justify-start items-center bg-white shadow rounded-lg">
                                                <div className="ml-4 flex justify-center items-center"><i className={`${section.icon} text-2xl text-red-600`} ></i></div>
                                                <div className="ml-4 flex justify-center items-center text-base font-bold text-zinc-700 tracking-wider">{section.title}</div>
                                            </div>
                                })}
                            </div>
                        </div>

                        {/* Meet the Characters */}
                        <div className="h-auto w-full flex flex-col items-center mb-16">

                            <SectionTitle title="Meet the Characters"/>

                            <div className="h-auto w-11/12 flex flex-wrap justify-between">
                                {charactersSectionData.characters.map((character, index) => {
                                    return <div key={index} className="border border-gray-300 h-18 w-40 mb-3 flex justify-center items-center bg-white shadow-sm rounded-md">
                                        <div className="h-[28px] w-[28px] mx-1 flex justify-center items-center bg-blue-300 rounded shrink-0"></div>
                                        <div className="h-[28px] max-w-32 flex justify-center items-center text-zinc-700 font-semibold text-sm">{character}</div>
                                    </div>
                                })}
                            </div>
                            
                        </div>

                    </div>

                    {/* Nav Icons */}
                    <div className="absolute bottom-0 border border-zinc-300 h-[60px] w-[375px] mb-4 px-3 flex justify-around items-center bg-white shadow-2xl rounded-full">
                        {/* {navIcons.nav.map((nav, index) => {
                            return <div key={index} className="border h-full w-1/6 flex justify-center items-center">
                                <i className={`${nav} text-3xl text-zinc-700`}></i>
                            </div>
                        })} */}
                        {/* ['bx bxs-coin-stack','bx bxs-heart', 'bx bx-search', 'bx bxs-cart', 'bx bxl-reddit'] */}
                        <div className="h-full w-1/6 flex justify-center items-center shrink-0"><i className={`bx bx-menu text-4xl text-zinc-700`}></i></div>
                        <div className="h-full w-1/6 flex justify-center items-center shrink-0"><i className={`bx bxs-heart text-3xl text-zinc-700`}></i></div>

                        <div className="h-16 w-16 mb-4 flex justify-center items-center bg-red-600 rounded-full shrink-0"><i className={`bx bx-search text-4xl text-white`}></i></div>

                        <div className="h-full w-1/6 flex justify-center items-center shrink-0"><i className={`bx bxs-cart text-3xl text-zinc-700`}></i></div>
                        <div className="h-full w-1/6 flex justify-center items-center shrink-0"><i className={`bx bxs-user text-3xl text-zinc-700`}></i></div>

                    </div>


                </div>

                <Footer />
            </div>
        </>
    )
}

export default DashboardPage;