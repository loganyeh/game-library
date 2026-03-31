

function Header(){

    return(
        <>
            {/* Header for Mobile up to MD Breakpoint */}
            <div className="lg:hidden h-12 w-full flex justify-between items-center bg-red-600">
                <div className="border-3 border-white h-6 w-auto ml-4 px-1 flex justify-center items-center text-white text-base font-bold rounded-2xl">Nintendo</div>
                <div className="h-auto w-auto mr-4 flex justify-center items-center text-3xl md:text-2xl">🇺🇸</div>
            </div>

            {/* ------------------------ */}

            {/* Header for LG and above breakpoints */}
            <div className="md:hidden lg:flex border bg-white h-[60px] w-full lg:justify-end">

                {/* Logo */}
                <div className="h-[60px] w-32 flex justify-center items-center bg-red-600">
                    <div className="border-3 border-white h-6 w-auto px-2 py-1 flex justify-center items-center text-white tracking-widest text-base font-bold rounded-2xl">Nintendo</div>
                </div>

                {/* Explore Pages */}
                <div className="border h-[60px] w-auto flex ">
                    {Array.from({length: 3}).map((_, index) => {
                        return <div className="border h-full w-28 flex justify-center items-center">
                            <div className="mr-1 flex justify-center items-center"><i className='bx bx-compass text-zinc-800 text-lg'></i></div>
                            <div className="text-zinc-800 text-[15px] font-semibold">Explore</div>
                        </div>
                    })}
                </div>

                {/* <div className="border h-full w-96"></div> */}

                {/* Search */}
                <div className="border h-full w-auto flex justify-end">
                    <div className="border h-full w-20">Search</div>
                    <div className="border h-full w-20">Heart</div>
                    <div className="border h-full w-20">Shopping Cart</div>
                    <div className="border h-full w-20">Login Signup</div>
                    <div className="border-2 border-red-600 h-auto w-20 flex justify-center items-center text-3xl">🇺🇸</div>
                </div>

            </div>
        </>
    )
}

export default Header;