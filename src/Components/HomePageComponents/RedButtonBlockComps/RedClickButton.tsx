

type RedButtonProp = {
    buttonText: string;
    icon: string;
}

function RedClickButton({ buttonText, icon }: RedButtonProp ){

    return(
        <>
            <div className="w-full max-w-6xl xl:w-fit py-3 flex gap-4 xl:gap-0 justify-center items-center bg-red-600 xl:bg-white text-white font-semibold tracking-wider rounded-md xl:shrink-0">
                {/* <i className={`${icon === "" ? "hidden" : `${icon} xl:bg-red-600 xl:py-3 xl:rounded-l-lg`}`} ></i> */}
                <div className="md:text-lg xl:bg-red-600 xl:px-5 xl:py-2 xl:rounded-lg">{buttonText || "Learn More"}</div>
            </div>
        </>
    )
}

export default RedClickButton;
