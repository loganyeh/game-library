
// api SHOWCASE
export type Game = {
    id: number;
    name: string;
    background_image: string;
}
type ShowcaseApi = {
    results: Game[];
}
export async function fetchShowcase(){
    const response = await fetch(`https://api.rawg.io/api/games?key=3e947aab0171433bb1b9715a1c39b1fc`);
    const data: ShowcaseApi = await response.json();
    // console.log(data.results);

    return data.results;
}




