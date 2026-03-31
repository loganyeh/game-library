

function Header(){

    return(
        <>
            <div className="h-12 w-full flex justify-between items-center bg-red-600">
                <div className="border-3 border-white h-6 w-auto ml-4 px-1 flex justify-center items-center text-white text-base font-bold rounded-2xl">Nintendo</div>
                <div className="h-auto w-auto mr-4 flex justify-center items-center text-3xl md:text-2xl">🇺🇸</div>
            </div>
        </>
    )
}

export default Header;