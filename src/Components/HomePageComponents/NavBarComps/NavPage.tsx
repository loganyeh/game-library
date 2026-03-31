import SectionTitle from "../SharedHomepageComps/SectionTitle";
import type { NavMenuTabType } from "../NavBar";
import type { CharactersData } from "../../../Pages/HomePage";

type NavProps = {
    tabName: string;
    pageBoolean: boolean; 
    data: NavMenuTabType[];
    characters?: CharactersData;
}

function NavPage({ tabName, pageBoolean, data, characters}: NavProps){

    return(
        <>
            <div className={`${pageBoolean ? "block" : "hidden"} ${tabName === "Support" || "Shop" ? "mb-16" : ""} h-auto w-full`}>
                <div className="h-auto w-full mt-4 flex justify-center items-center">
                    <div className="h-auto w-11/12">
                        <div className="h-14 w-full mb-2 flex justify-start items-center bg-red-600 shadow rounded-lg">
                            <div className="ml-4 flex justify-center items-center"><i className='bx bx-home-circle text-2xl text-white' ></i></div>
                            <div className="ml-4 flex justify-center items-center text-base font-bold text-white tracking-wider">Home</div>
                        </div>

                        {data.map((data, index) => {
                            return <div key={index} className="border border-gray-300 h-14 w-full mb-2 flex justify-start items-center bg-white shadow rounded-lg">
                                        <div className="ml-4 flex justify-center items-center"><i className={`${data.icon} text-2xl text-red-600`} ></i></div>
                                        <div className="ml-4 flex justify-center items-center text-base font-bold text-zinc-700 tracking-wider">{data.title}</div>
                                    </div>
                        })}
                    </div>
                </div>

                {/* Meet the Characters */}
                <div className={`${tabName === "Explore" ? "" : "hidden"} h-auto w-full flex flex-col items-center mb-16`}>

                    <SectionTitle title="Meet the Characters"/>

                    <div className="h-auto w-11/12 flex flex-wrap justify-between">
                        {characters?.characters.map((character, index) => {
                            return <div key={index} className="border border-gray-300 h-18 w-40 mb-3 flex justify-center items-center bg-white shadow-sm rounded-md">
                                <div className="h-[28px] w-[28px] mx-1 flex justify-center items-center bg-blue-300 rounded shrink-0"></div>
                                <div className="h-[28px] max-w-32 flex justify-center items-center text-zinc-700 font-semibold text-sm">{character}</div>
                            </div>
                        })}
                    </div>
                    
                </div>

             </div>
        </>
    )
}

export default NavPage;