import { useState } from "react";

function NavBarFix(){
    const [isOpen, setIsOpen] = useState(true);

    return(
        <>
            <div className="fixed inset-0 h-full w-auto bg-black/50"></div>

            <div onClick={() => {setIsOpen(!isOpen)}} className={`fixed bottom-50 left-0 w-full h-96 bg-white z-50 transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "translate-y-full"}`}>

            </div>

        
        </>
    )
}

export default NavBarFix;