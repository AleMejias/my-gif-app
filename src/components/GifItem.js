import React from 'react';
import { Link } from 'react-router-dom';


const GifItem = ( { id ,index, smallSize ,title } ) => {
    
    return (
            <article 
                key = { id } 
                className = {
                    `col-6 col-md-4 col-sm-4 col-lg-3 col-xl-3 body_card animate__animated animate__fadeIn animate__fast 
                    ${(index % 2) ? 'alineado' : '' }`
                }>
                <Link to={`/detail/${id}`}>
                    <img src={ smallSize } alt = { title }/>    
                </Link>
            </article>


    );
}

export default GifItem;