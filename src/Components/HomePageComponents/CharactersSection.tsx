import SectionTitle from "./HomepageSharedComps/SectionTitle";

import type { CharactersData } from "../../Pages/HomePage";

type CharacterProp = {
    characters: CharactersData;
}

function CharactersSection({ characters }: CharacterProp){

    return(
        <>
            <div className="border-b border-gray-300 h-auto w-full pb-3 flex flex-col justify-start items-center">

                {/* title */}
                <SectionTitle title="Characters" />

                {/* tiles */}
                <div className="h-auto w-11/12 flex flex-wrap justify-between">
                    {characters.characters.map((character, index) => {
                        return <div key={index} className="h-auto w-40">
                                    <div className="h-40 w-40 bg-blue-300 rounded-lg"></div>
                                    <div className="h-auto w-full mt-2 mb-3 flex justify-start items-center text-lg font-bold text-gray-600 break-word">{character || "The Legend of Zelda"}</div>
                                </div>
                    })}
                </div>

                </div>
        
        </>
    )
}

export default CharactersSection;