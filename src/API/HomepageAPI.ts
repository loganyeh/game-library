
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
    const response = await fetch(`https://api.rawg.io/api/games?key=59f33c3c1f1b42118f8f6fcd1cbb7e80`);
    const data: ShowcaseApi = await response.json();
    // console.log(data.results);

    return data.results;
}

// api FEATURED
export type FeatureDM = {
    id: number;
    name: string;
    background_image: string;
    // platforms?: PlatformsDM;
}
// export type PlatformsDM = {
//     platforms: [
//         {
//             platform: {
//                 name: string;
//             }
//         }
//     ]
// }
type FeatureApi = {
    results: FeatureDM[];
}
export async function fetchFeature(){
    const response = await fetch(`https://api.rawg.io/api/games?key=59f33c3c1f1b42118f8f6fcd1cbb7e80`);
    const data: FeatureApi = await response.json();
    // console.log(data.results);

    return data.results;
}




