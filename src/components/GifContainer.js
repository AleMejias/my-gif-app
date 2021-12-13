import React from 'react';

const GifContainer = () => {
    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Batman&limit=10&api_key=2I3HqLpalnG5ItcS5DWv2eH7fBn8yryI';
        const request = await fetch(url);
        const { data }= await request.json();
        console.log(data);
    }
    getGifs();
    return (
        <h2>test</h2>
    );
}

export default GifContainer;