

type SectionTitleProp = {
    title: string;
}

function SectionTitle({ title }: SectionTitleProp){

    return(
        <>
            <div className="min-h-18 w-full flex justify-start items-center">
                <div className="w-11/12 ml-4 mt-7 mb-4 tracking-wider text-xl text-gray-600 font-bold">{title || "Red Button Block"}</div>
            </div>
        </>
    )
}

export default SectionTitle;