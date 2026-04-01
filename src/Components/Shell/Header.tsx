

function Header(){
    const XLHeaderData = [
        {page: "Explore", icon: "bx bx-compass"},
        {page: "Shop", icon: "bx bxs-shopping-bag"},
        {page: "Support", icon: "bx bxs-shield-alt-2"},
    ]


    return(
        <>

            {/* Header for Mobile up to LG Breakpoint */}
            <div className="xl:hidden border-b border-white h-12 w-full flex justify-between items-center bg-red-600">
                <div className="border-3 border-white h-6 w-auto ml-4 px-1 flex justify-center items-center text-white text-base font-bold rounded-2xl">Nintendo</div>
                <div className="h-auto w-auto mr-4 flex justify-center items-center text-3xl md:text-2xl">🇺🇸</div>
            </div>


            {/* ------------------------ */}

            {/* Header for XL and above breakpoints */}
            <div className="hidden xl:flex h-[60px] w-full">

                {/* Left Side of Header */}
                <div className="h-full w-1/2 flex">
                    {/* Logo */}
                    <div className="h-[60px] w-36 flex justify-center items-center bg-red-600">
                        <div className="border-3 border-white h-6 w-auto px-2 py-1 flex justify-center items-center text-white tracking-widest text-base font-bold rounded-2xl">Nintendo</div>
                    </div>

                    {/* Explore Pages */}
                    <div className="h-[60px] flex ">
                        {XLHeaderData.map((data, index) => {
                            return <div key={index} className="h-full w-28 flex justify-center items-center">
                                <div className="mr-1 flex justify-center items-center"><i className={`${data.icon || "bx bx-compass"} text-red-600 text-lg`}></i></div>
                                <div className="text-zinc-800 text-[15px] font-semibold">{data.page || "Explore"}</div>
                            </div>
                        })}
                    </div>
                </div>
                    
                {/* Right Half of Header */}
                <div className="h-full w-1/2 flex justify-end">
                        {/* Search */}
                        <div className="h-full w-auto flex justify-center items-center">
                            <div className="flex justify-center items-center px-4 bg-gray-200 rounded-l-2xl rounded-r-2xl">
                                <div className="h-8 px-1 flex justify-center items-center"><i className='bx bx-search text-lg text-zinc-700' ></i></div>
                                <div className="px-1 font-semibold text-zinc-700 text-sm">Search</div>
                            </div>
                        </div>
                        
                        {/* Heart */}
                        <div className="h-full w-16 flex justify-center items-center">
                            <div className="h-8 w-[36px] flex justify-center items-center bg-gray-200 rounded-l-2xl rounded-r-2xl"><i className='bx bxs-heart text-xl text-zinc-600' ></i></div>
                        </div>

                        {/* Shopping Cart */}
                        <div className="h-full w-16 flex justify-center items-center">
                            <div className="h-8 w-[36px] flex justify-center items-center bg-gray-200 rounded-l-2xl rounded-r-2xl"><i className='bx bxs-cart text-xl text-zinc-600' ></i></div>
                        </div>
                        
                        {/* Log in/Sign up */}
                        <div className="h-full ml-1 flex justify-center items-center">
                            <div className="border border-red-600 h-8 w-full px-4 flex rounded-2xl">
                                <div className="mr-1 flex justify-center items-center"><i className='bx bxs-user text-xl text-red-600' ></i></div>
                                <div className="flex justify-center items-center text-red-600 font-bold text-sm">Log in / Sign up</div>
                            </div>
                        </div>

                        {/* Flag */}
                        <div className="h-auto w-18 flex justify-center items-center text-2xl">🇺🇸</div>
                </div>

            </div>
        </>
    )
}

export default Header;