import { useState } from "react";

import SectionTitle from "./HomepageSharedComps/SectionTitle";

import type { CharactersData } from "../../Pages/HomePage";

type NavData = {
    nav: string[];
}
export type NavMenuTabType = {
    title: string;
    icon: string;
}

function NavBar(){
    const [isExplore, setIsExplore] = useState(true);
    const [isShop, setIsShop] = useState(false);
    const [isSupport, setIsSupport] = useState(false);
    const ExploreData: NavMenuTabType[] = [
        {title: "Nintendo Switch 2", icon: 'bx bxs-square'},
        {title: "Nintendo Switch", icon: 'bx bxs-square'},
        {title: "Games", icon: 'bx bx-plus-medical'},
        {title: "Nintendo Switch Online", icon: 'bx bxs-message-detail'},
        {title: "News and events", icon: 'bx bxs-star'},
        {title: "Play Nintendo", icon: 'bx bxs-square'},
        {title: "My Nintendo", icon: 'bx bxs-square'},
        {title: "Apps", icon: 'bx bx-mobile'},
    ]
    const ShopData: NavMenuTabType[] = [
        {title: "My Nintendo Store", icon: "bx-bx-cloud"},
        {title: "Games", icon: "bx-bx-cloud"},
        {title: "Hardware", icon: "bx-bx-cloud"},
        {title: "Merchandise", icon: "bx-bx-cloud"},
        {title: "Sales and deals", icon: "bx-bx-cloud"},
        {title: "Exclusives", icon: "bx-bx-cloud"},
        {title: "Characters", icon: "bx-bx-cloud"},
    ]
    const SupportData: NavMenuTabType[] = [
        {title: "Support Home", icon: "bx-bx-cloud"},
        {title: "My Support Dashboard", icon: "bx-bx-cloud"},
        {title: "Accounts & Purchases", icon: "bx-bx-cloud"},
        {title: "Nintendo Switch 2", icon: "bx-bx-cloud"},
        {title: "Nintendo Switch", icon: "bx-bx-cloud"},
        {title: "Nintendo Switch Online", icon: "bx-bx-cloud"},
        {title: "Apps & Other Products", icon: "bx-bx-cloud"},
        {title: "Service Center", icon: "bx-bx-cloud"},
    ]
    const charactersSectionData: CharactersData = {
        characters: ["Super Mario", "The Legend of Zelda", "Splatoon", "Kirby", "Pikmin", "Animal Crossing", "Metroid", "Pokemon"],
    };

    return(
        <>
            <div className="fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50">

                <div className="absolute bottom-12 h-[740px] w-[375px] bg-gray-100 rounded-t-2xl overflow-y-auto">
                    
                    {/* Nav Header */}
                    <div className="sticky top-0 h-16 w-full flex justify-center items-center bg-red-600 rounded-t-2xl">
                        <div className="border-4 border-white h-8 w-auto px-2 flex justify-center items-center tracking-widest font-semibold text-white rounded-full">Nintendo</div>
                        <div className="absolute right-3 h-[28px] w-[28px] flex justify-center items-center bg-white rounded-full"><i className='bx bx-x text-[26px] text-red-600'></i></div>
                    </div>

                    {/* Nav Tabs */}
                    <div className="h-24 w-full flex items-end bg-white">

                        <div onClick={() => {
                            setIsShop(false);
                            setIsSupport(false);
                            setIsExplore(true);
                        }} className={`${isExplore ? "bg-gray-100 border-t border-r border-gray-300" : "bg-white border-b border-gray-300"} h-22 w-1/3 flex flex-col justify-center items-center rounded-t-2xl`}>
                            <div className="flex justify-center items-center"><i className='bx bx-compass text-3xl text-red-600' ></i></div>
                            <span className={`font-bold text-sm ${isExplore ? "text-red-600" : "text-zinc-700"} tracking-wider`}>Explore</span>
                        </div>

                        <div onClick={() => {
                            setIsExplore(false);
                            setIsSupport(false);
                            setIsShop(true);
                        }} className={`${isShop ? "bg-gray-100 border-l border-t border-r border-gray-300" : "bg-white border-b border-gray-300"} h-22 w-1/3 flex flex-col justify-center items-center rounded-t-2xl`}>
                            <div className="flex justify-center items-center"><i className='bx bxs-shopping-bag text-3xl text-red-600' ></i></div>
                            <span className={`${isShop ? "text-red-600" : "text-zinc-700"} font-bold text-sm tracking-wider`}>Shop</span>
                        </div>

                        <div onClick={() => {
                            setIsExplore(false);
                            setIsShop(false);
                            setIsSupport(true);
                        }} className={`${isSupport ? "bg-gray-100 border-l border-t border-gray-400" : "bg-white border-b border-gray-100"} h-22 w-1/3 flex flex-col justify-center items-center rounded-t-2xl`}>
                            <div className="flex justify-center items-center"><i className='bx bxs-shield-alt-2 text-3xl text-red-600' ></i></div>
                            <span className={`font-bold text-sm ${isSupport ? "text-red-600" : "text-zinc-700"} tracking-wider`}>Support</span>
                        </div>
                    </div>

                    {/* Pages */}
                    {/* Explore */}
                    <div className={`${isExplore ? "block" : "hidden"} h-auto w-full`}>
                        <div className="h-auto w-full mt-4 flex justify-center items-center">
                            <div className="h-auto w-11/12">
                                <div className="h-14 w-full mb-2 flex justify-start items-center bg-red-600 shadow rounded-lg">
                                    <div className="ml-4 flex justify-center items-center"><i className='bx bx-home-circle text-2xl text-white' ></i></div>
                                    <div className="ml-4 flex justify-center items-center text-base font-bold text-white tracking-wider">Home</div>
                                </div>

                                {ExploreData.map((section, index) => {
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

                    {/* Shop */}
                    <div className={`${isShop ? "block" : "hidden"} h-auto w-full`}>
                        <div className="h-auto w-full mt-4 flex justify-center items-center">
                            <div className="h-auto w-11/12">
                                <div className="h-14 w-full mb-2 flex justify-start items-center bg-red-600 shadow rounded-lg">
                                    <div className="ml-4 flex justify-center items-center"><i className='bx bx-home-circle text-2xl text-white' ></i></div>
                                    <div className="ml-4 flex justify-center items-center text-base font-bold text-white tracking-wider">Home</div>
                                </div>

                                {ShopData.map((section, index) => {
                                    return <div key={index} className="border border-gray-300 h-14 w-full mb-2 flex justify-start items-center bg-white shadow rounded-lg">
                                                <div className="ml-4 flex justify-center items-center"><i className={`${section.icon} text-2xl text-red-600`} ></i></div>
                                                <div className="ml-4 flex justify-center items-center text-base font-bold text-zinc-700 tracking-wider">{section.title}</div>
                                            </div>
                                })}
                            </div>
                        </div>

                    </div>

                    {/* Support */}
                    <div className={`${isSupport ? "block" : "hidden"} h-auto w-full`}>
                        <div className="h-auto w-full mt-4 flex justify-center items-center">
                            <div className="h-auto w-11/12">
                                <div className="h-14 w-full mb-2 flex justify-start items-center bg-red-600 shadow rounded-lg">
                                    <div className="ml-4 flex justify-center items-center"><i className='bx bx-home-circle text-2xl text-white' ></i></div>
                                    <div className="ml-4 flex justify-center items-center text-base font-bold text-white tracking-wider">Home</div>
                                </div>

                                {SupportData.map((section, index) => {
                                    return <div key={index} className="border border-gray-300 h-14 w-full mb-2 flex justify-start items-center bg-white shadow rounded-lg">
                                                <div className="ml-4 flex justify-center items-center"><i className={`${section.icon} text-2xl text-red-600`} ></i></div>
                                                <div className="ml-4 flex justify-center items-center text-base font-bold text-zinc-700 tracking-wider">{section.title}</div>
                                            </div>
                                })}
                            </div>
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
        
        </>
    )
}

export default NavBar;