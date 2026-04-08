import SectionTitle from "./HomepageSharedComps/SectionTitle";

import type { CharactersData } from "../../Pages/HomePage";

type CharacterProp = {
    characters: CharactersData;
}

function CharactersSection({ characters }: CharacterProp){

    return(
        <>
            <div className="mx-4 lg:mx-6 flex flex-col items-center">

                {/* title */}
                <SectionTitle title="Characters" />

                {/* tiles */}
                <div className="w-full max-w-6xl grid grid-cols-2 gap-4 md:grid-cols-4 2xl:gap-5">
                    {characters.characters.map((character, index) => {
                        return <div key={index} className="flex flex-col gap-2">
                                    <div className="aspect-square bg-blue-300 rounded-lg"></div>
                                    <div className="text-lg md:text-xl font-bold text-zinc-700 break-word">{character || "The Legend of Zelda"}</div>
                                </div>
                    })}
                </div>

                <div className="border-b border-gray-300 w-full mt-8 md:mt-20 lg:mt-14"></div>
            </div>
        
        </>
    )
}

export default CharactersSection;