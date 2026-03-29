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

import NavBar from "../Components/HomePageComponents/NavBar";
import NavBarFix from "../Components/NavBarFix";

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

                <NavBar boolean={false} />
                {/* <NavBarFix /> */}

                <Footer />
            </div>
        </>
    )
}

export default DashboardPage;