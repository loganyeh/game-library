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
                    return <RedButtonBlock key={index} data={data} />
                })}

                <NewsSection />

                <CharactersSection characters={charactersSectionData} />

                {/* Digital Best Sellers */}
                <DigitalsSection />

                <div className="fixed bottom-0 h-24 w-full flex justify-center items-center">

                    <div className="border border-zinc-300 h-[60px] w-[375px] px-3 flex justify-around items-center bg-white shadow-2xl rounded-full">
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