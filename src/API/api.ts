

export async function fetchPlatforms(){
    const response = await fetch(`https://api.rawg.io/api/games?key=59f33c3c1f1b42118f8f6fcd1cbb7e80`);
    const data = await response.json();
    // console.log(data.results.slice(0, 6));

    return data.results;
    
}

fetchPlatforms();


