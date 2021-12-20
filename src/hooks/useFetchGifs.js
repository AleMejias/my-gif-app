import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";


const useFetchGifs = ( category ) => {
    const [ images , setImages ] = useState({
        images: [],
        loading : true
    });
    useEffect(() => {
        getGifs( category )
        .then( (imgs) => {
            setImages({
                images: imgs,
                loading: false
            });
        })
    },[category])
    return images;
}

export default useFetchGifs;