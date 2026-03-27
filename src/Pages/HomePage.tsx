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
            <div className="border-2 border-green-500 h-auto w-screen">

                {/* Page Header */}
                <div className="border-2 border-red-600 h-12 w-full">header</div>

                {/* Showcase Slideshow */}
                <div className="border h-auto w-full">
                    {/* Image Slideshow */}
                    <div className="border h-[425px] w-full">
                        image slideshow
                    </div>
                    {/* Slideshow Preview */}
                    <div className="border h-20 w-full">slidershow preview images</div>
                </div>

                {/* Featured Block */}
                <div className="border-2 border-red-600 h-[400px] w-full">Featured</div>

                {/* Today! Block */}
                <div className="border-2 border-red-600 h-[500px] w-full">Today! Block</div>

                {/* Nintendo Switch 2 Block */}
                <div className="border-2 border-red-600 h-[500px] w-full">Nintendo Switch 2 Block</div>

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