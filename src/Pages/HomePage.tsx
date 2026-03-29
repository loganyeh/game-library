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

//  types
type RedButtonBlockType = {
    title: string;
    description: string;
    buttonText: string;
    finePrint: string;
    icon: string;
}

type charactersSectionDataType = {
   characters: string[];
};

function DashboardPage(){
    const redButtonBlockData: RedButtonBlockType[] = [
        {title: "Nintendo Today!", description: "Your movie companion: Nintendo Today!", buttonText: "Learn more", finePrint: "Nintendo Account, compatible smart device and persistent internet connection required. Data charges may apply. Requires iOS 16.0 or later. Requires Android 10.0 or later.", icon: "" },
        {title: "Nintendo Switch 2", description: "Enjoy ways to play alongside Mario, Peach and many other Mushroom Kingdom friends on the Nintendo Switch 2 system.", buttonText: "Learn more", finePrint: "", icon: ""},
        {title: "Online Store", description: "Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over.", buttonText: "Start shopping", finePrint: "", icon: ""},
        {title: "Nintendo Switch Online + Expansion Pack", description: "Play online, discover the classics, and more", buttonText: "Learn more", finePrint: "*Full version of game required to use the content for that game. Sold separately. For details visit https://support.nintendo.com/switch2/upgradepack. Terms apply. https://www.nintendo.com/us/purchase-terms/", icon: "" },
    ]

    const charactersSectionData: charactersSectionDataType = {
        characters: ["Super Mario", "The Legend of Zelda", "Splatoon", "Kirby", "Pikmin", "Animal Crossing", "Metroid", "Pokemon"],
    };

    const footerData = [
        {title: "About Nintendo", links: ["Careers", "Corporate Responsibility"]},
        {title: "Shop", links: ["Games", "Hardware", "Merchandise", "Sales and deals", "Exclusives", "Nintendo Switch Online", "Nintendo Store US"]},
        {title: "Orders", links: ["Order details", "Shipping info", "Refunds and returns", "FAQ"]},
        {title: "Support", links: ["Nintendo Switch 2", "Nintendo Switch", "Nintendo Account", "Apps and other products", "Other systems", "Service Center", "Nintendo product recycling", "Warranty", "Licensed product information"]},
        {title: "Parents", links: ["Info for parents", "Parental controls"]},
        {title: "Privacy", links: ["Privacy policy", "Parental controls"]},
        {title: "Community guidelines", links: ["Community guidelines", "Online safety"]},
        {title: "Documents and policies", links: ["Health and safety precautions", "Wireless regulatory info", "Supply chain transparency"]},
    ];

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

                <Header />

                <ShowcaseSlideshow />

                <FeaturedSection />

                {redButtonBlockData.map((data, index) => {
                    return <RedButtonBlock key={index} title={data.title} description={data.description} buttonText={data.buttonText} finePrint={data.finePrint} icon={data.icon} />
                })}

                {/* News Block */}
                <NewsSection />

                {/* Characters Block */}
                <CharactersSection data={charactersSectionData} />

                {/* Digital Best Sellers */}
                {Array.from({length: 2}).map((_, index) => {
                    return <div key={index} className="h-auto w-full">
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
                <Footer />
            </div>
        </>
    )
}

export default DashboardPage;