import SectionTitle from "./HomepageSharedComps/SectionTitle";
import { useState, useEffect } from "react";

import type { CharactersData } from "../../Pages/HomePage";
import type { Game } from "../../API/HomepageAPI";
import { fetchCharacters } from "../../API/HomepageAPI";

type CharacterProp = {
    characters: CharactersData;
}

function CharactersSection({ characters }: CharacterProp){
    const [loading, setLoading] = useState(true);
    const [characterData, setCharacterData] = useState<Game[]>([]);

    useEffect(() => {
        async function getCharacters(){
            setLoading(true);

            // const data = await fetchCharacters();
            // setCharacterData(data);

            setLoading(false);
        }
        
        getCharacters();
    }, [])

    return(
        <>
            <div className="mx-4 lg:mx-6 flex flex-col items-center">

                {/* title */}
                <SectionTitle title="Characters" />

                {/* tiles */}
                <div className="w-full max-w-6xl grid grid-cols-2 gap-4 md:grid-cols-4 2xl:gap-5">
                    {loading
                        ? 
                        (characters.characters.map((character, index) => {
                            return <div key={index} className="flex flex-col gap-2">
                                        <div className="aspect-square bg-blue-300 flex justify-center items-center rounded-lg">
                                            <i className='bx bx-loader-alt text-4xl animate-spin'></i>
                                        </div>
                                        {/* <div className="text-lg md:text-xl font-bold text-zinc-700 break-word">{character}</div> */}
                                        <div className="text-lg md:text-xl font-bold text-zinc-700 break-word">
                                            {loading
                                                ? 
                                                <i className='bx bx-dots-horizontal-rounded text-2xl animate-pulse' ></i>
                                                :
                                                `${character}`
                                            }
                                        </div>
                                    </div>
                        }))
                        :
                        (characterData.length === 0
                            ?
                            (characters.characters.map((character, index) => {
                                return <div key={index} className="flex flex-col gap-2">
                                            <div className="aspect-square bg-gray-300 rounded-lg"></div>
                                            <div className="text-lg md:text-xl font-bold text-zinc-700 break-word">{character}</div>
                                        </div>
                            }))
                            :
                            (characterData.slice(0, 8).map((character, index) => {
                                return <div key={index} className="flex flex-col gap-2">
                                            <div className="aspect-square rounded-lg bg-cover bg-center" 
                                            style={{ backgroundImage: `url(${character.background_image})`}}></div>
                                            <div className="text-lg md:text-xl font-bold text-zinc-700 break-word">{character.name}</div>
                                        </div>
                            }))
                        )
                    }

                </div>

                <div className="border-b border-gray-300 w-full mt-8 md:mt-20 lg:mt-14"></div>
            </div>
        
        </>
    )
}

export default CharactersSection;