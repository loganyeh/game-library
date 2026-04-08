

type RedButtonProp = {
    buttonText: string;
    icon: string;
}

function RedClickButton({ buttonText, icon }: RedButtonProp ){

    return(
        <>
            <div className="w-full max-w-6xl py-3 flex justify-center items-center bg-red-600 text-white font-semibold text-base tracking-wider rounded-md">
                <i className={`${icon === "" ? "hidden" : `${icon}` } ${icon}`} ></i>
                <div className="">{buttonText || "Learn More"}</div>
            </div>
        </>
    )
}

export default RedClickButton;
