
function Header(){
    const XLHeaderData = [
        {page: "Explore", icon: "bx bx-compass"},
        {page: "Shop", icon: "bx bxs-shopping-bag"},
        {page: "Support", icon: "bx bxs-shield-alt-2"},
    ];

    return(
        <>
            {/* Red Header for Mobile 📱 up to LG Breakpoint */}
            <div className="xl:hidden border-b border-white px-4 py-2 w-full flex justify-between items-center bg-red-600">
                <div className="border-3 border-white w-auto px-1 flex justify-center items-center text-white text-sm font-bold tracking-widest rounded-2xl">Nintendo</div>
                <div className="h-auto w-auto flex justify-center items-center text-3xl md:text-2xl">🇺🇸</div>
            </div>

            {/* ------------------------ */}

            {/* White  Header for XL 🖥 and above breakpoints */}
            <div className="hidden border-b border-white xl:flex justify-between">

                {/* Left Side of Header */}
                <div className="flex">
                    {/* Logo */}
                    <div className="flex items-center px-5 py-4 bg-red-600"> 
                        <div className="border-3 border-white w-auto px-2 text-white tracking-widest font-bold rounded-2xl">Nintendo</div>
                    </div> 

                    {/* Explore Pages */}
                    {XLHeaderData.map((data, index) => {
                        return <div key={index} className="flex gap-1 items-center px-6">
                            <i className={`${data.icon} text-red-600 text-lg`}></i>
                            <div className="text-zinc-800 font-semibold">{data.page}</div>
                        </div>
                    })}
                </div>
                    
                {/* Right Half of Header */}
                <div className="flex items-center gap-5 px-5">
                        {/* Search */}
                        <div className="flex gap-1.5 px-5 py-1 bg-gray-200 text-zinc-700 rounded-full">
                            <i className='bx bx-search text-xl' ></i>
                            <div className="font-bold text-sm">Search</div>
                        </div>
                        
                        {/* Heart */}
                        <i className='bx bxs-heart px-2 py-1 text-xl text-zinc-700 bg-gray-200 rounded-full' ></i>

                        {/* Shopping Cart */}
                        <i className='bx bxs-cart bg-gray-200 px-2 py-1 text-xl text-zinc-700 rounded-full' ></i>
                        
                        {/* Log in/Sign up */}
                        <div className="border border-red-600 px-4 py-1 flex gap-2 items-center text-red-600 rounded-2xl">
                            <i className='bx bxs-user text-xl' ></i>
                            <div className="font-bold text-sm">Log in / Sign up</div>
                        </div>

                        {/* Flag */}
                        <div className="text-2xl">🇺🇸</div>
                </div>

            </div>
        </>
    )
}

export default Header;