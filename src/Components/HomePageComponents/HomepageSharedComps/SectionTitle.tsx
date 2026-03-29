

type SectionTitleProp = {
    title: string;
}

function SectionTitle({ title }: SectionTitleProp){

    return(
        <>
            <div className="h-16 w-full flex justify-start items-end">
                <span className="ml-4 mb-2 tracking-wider text-xl text-gray-600 font-bold">{title || "Featured"}</span>
            </div>
        </>
    )
}

export default SectionTitle;