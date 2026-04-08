import SectionTitle from "./HomepageSharedComps/SectionTitle";

function DigitalsSection(){
    // const digitalSectionTitles = ["best sellers", "new releases"];
    const digitalSectionTitles = ["best sellers"];

    return(
        <>
            <div className="border mx-4 lg:mx-6 flex flex-col items-center">
                {digitalSectionTitles.map((title, index) => {
                    return <div key={index} className="border w-full max-w-6xl">
                                <div className="flex flex-col">
                                    <SectionTitle title={`Digital ${title}`} />
                                    {/* <div className="md:border-l-2 md:border-gray-300 h-auto w-full -ml-25 lg:-ml-100 xl:-ml-140 mt-4 hidden md:flex"> */}
                                    <div className="border-b-3 border-red-600 w-fit font-semibold text-red-600 text-sm md:text-base tracking-wide">See full list</div>
                                    {/* </div> */}
                                </div>
                                
                                <div className="border w-full max-w-6xl mt-4 pl-5 pb-6 flex gap-6 overflow-x-auto scroll-smooth">
                                    {Array.from({length: 1}).map((_, index) => {
                                        return <div key={index} className="border border-gray-400 min-h-96 w-56 rounded-lg shrink-0">
                                                    <div className="bg-red-600 flex justify-center items-center text-sm text-white font-bold rounded-t-lg">2</div>

                                                    <div className="aspect-19/17 bg-blue-300"></div>
                                                    {/* <div className="h-52 md:h-[255px] w-full bg-blue-300"></div> */}

                                                    <div className="border h-auto md:h-52 w-full flex flex-col justify-between">

                                                        <div className="border flex justify-start items-center font-semibold text-base text-gray-700 line-clamp-2">Super Mario Bros. Wonder - Nintendo Switch 2</div>

                                                        <div className="border font-light text-[11px] text-gray-600">3/26/26</div>


                                                        {/*  */}

                                                        <div className="border border-black bg-red-600 text-white text-[12px] rounded-xl">New!</div>

                                                        <div className="border flex justify-start items-center text-sm font-semibold text-gray-700">$79.99</div>

                                                        <div className="border flex justify-center items-center">
                                                            <div className="h-full w-1/2 flex justify-start items-center">
                                                                <div className="flex justify-center items-center"><i className='bx bx-plus-medical text-lg text-gray-600'></i></div>
                                                                <div className="text-[11px] text-gray-600">Games</div>
                                                            </div>
                                                            <div className="h-full w-1/2 flex justify-end items-center">
                                                                <div className="flex justify-center items-center"><i className='bx bx-heart text-3xl text-red-600' ></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                    })}

                                    <div className="h-auto w-40 flex items-end shrink-0">
                                        <div className="h-[364px] md:h-[465px] w-full flex justify-center items-center bg-red-600 text-white font-semibold text-base tracking-wide rounded-md">See full list</div>
                                    </div>

                                </div>
                            
                            </div>
                            })}
            </div>
        </>
    )
}

export default DigitalsSection;