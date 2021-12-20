export const getGifs = async ( category ) => {

    const url = category === '' 
                ? 'https://api.giphy.com/v1/gifs/trending?api_key=2I3HqLpalnG5ItcS5DWv2eH7fBn8yryI'
                : `https://api.giphy.com/v1/gifs/search?q=${ category }&api_key=2I3HqLpalnG5ItcS5DWv2eH7fBn8yryI`;
    const request = await fetch(url);
    
    const { data } = await request.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title:img.title,
            originalSize: img.images.original.url,
            smallSize: img.images.downsized.url,
        }
    })
    return gifs;
}