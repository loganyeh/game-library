

type RedButtonProp = {
    buttonText: string;
    icon: string;
}

function RedClickButton({ buttonText, icon }: RedButtonProp ){

    return(
        <>
            <div className="h-auto w-full xl:w-auto flex justify-center items-center">
                <div className="h-12 w-11/12 md:w-[740px] lg:w-[990px] xl:w-auto flex justify-center items-center bg-red-600 text-white font-semibold text-base tracking-wider rounded-md">
                    <div className={`${icon === "" ? "hidden" : "" } mr-4 flex justify-center items-center`}><i className={icon} ></i></div>
                    <div className="xl:px-4 flex justify-center items-center">{buttonText || "Learn More"}</div>
                </div>
            </div> 
        </>
    )
}

export default RedClickButton;
