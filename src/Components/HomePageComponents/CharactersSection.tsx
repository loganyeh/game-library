import SectionTitle from "./HomepageSharedComps/SectionTitle";

import type { CharactersData } from "../../Pages/HomePage";

type CharacterProp = {
    characters: CharactersData;
}

function CharactersSection({ characters }: CharacterProp){

    return(
        <>
            <div className="border-b border-gray-300 h-auto w-full pb-3 md:pb-14 flex flex-col justify-start items-center">

                {/* title */}
                <SectionTitle title="Characters" />

                {/* tiles */}
                <div className="h-auto w-11/12 md:w-[740px] flex flex-wrap justify-between">
                    {characters.characters.map((character, index) => {
                        return <div key={index} className="h-auto w-40 md:w-[168px]">
                                    <div className="h-40 md:h-44 w-40 md:w-[168px] bg-blue-300 rounded-lg"></div>
                                    <div className="h-auto w-full mt-2 mb-3 flex justify-start items-center text-lg md:text-xl font-bold text-gray-600 break-word">{character || "The Legend of Zelda"}</div>
                                </div>
                    })}
                </div>

                </div>
        
        </>
    )
}

export default CharactersSection;