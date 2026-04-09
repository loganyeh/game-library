
// api SHOWCASE
export type Game = {
    id: number;
    name: string;
    background_image: string;
    platforms: Platform[];
}

type Platform = {
    platform: {
        id: number;
        name: string;
    }
}

type GameApi = {
    results: Game[];
}
export async function fetchGame(){
    const response = await fetch(`https://api.rawg.io/api/games?key=3e947aab0171433bb1b9715a1c39b1fc`);
    const data: GameApi = await response.json();
    // console.log(data.results.slice(0, 10));

    return data.results;
}

export async function fetchCharacters(){
    const response = await fetch(`https://api.rawg.io/api/games?key=3e947aab0171433bb1b9715a1c39b1fc&search=Pokemon`);
    const data: GameApi = await response.json();

    // console.log(data.results.slice(0, 10));

    return data.results;
}




