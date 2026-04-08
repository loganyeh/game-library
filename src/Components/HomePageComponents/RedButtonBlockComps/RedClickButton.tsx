

type RedButtonProp = {
    buttonText: string;
    icon: string;
}

function RedClickButton({ buttonText, icon }: RedButtonProp ){

    return(
        <>
            <div className="w-full max-w-6xl xl:w-fit py-3 xl:bg-white flex justify-center items-center bg-red-600 text-white font-semibold text-base tracking-wider rounded-md xl:shrink-0">
                <i className={`${icon === "" ? "hidden" : `${icon}` } ${icon}`} ></i>
                <div className="md:text-lg xl:bg-red-600 xl:px-5 xl:py-2 xl:rounded-lg">{buttonText || "Learn More"}</div>
            </div>
        </>
    )
}

export default RedClickButton;
