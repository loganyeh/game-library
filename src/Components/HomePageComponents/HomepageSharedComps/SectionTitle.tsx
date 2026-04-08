

type SectionTitleProp = {
    title: string;
}

function SectionTitle({ title }: SectionTitleProp){

    return(
        <>  
            <div className="w-full max-w-6xl pt-8 pb-4 tracking-wider text-xl md:text-[28px] text-zinc-700 font-bold">{title}</div>
        </>
    )
}

export default SectionTitle;