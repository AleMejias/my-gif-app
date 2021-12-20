import React, { useContext } from "react";

import { Link, useParams } from "react-router-dom";

import InputValueContext from "../context/InputValueContext";

import useFetchGifs from "../hooks/useFetchGifs";

const GifDetail = () => {
    
    const { id } = useParams();
    const { categories } = useContext( InputValueContext );
    const { images } = useFetchGifs(categories);
    const response  = images.filter(img => img.id === id);
    return (
        <section className="container detail mt-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 detail_container">
                    {
                        response.map(img => (
                            <img 
                                className="animate__animated animate__fadeIn animate__fast" 
                                key = { img.id } 
                                src={ img.originalSize } 
                                alt={ img.title }
                            />
                        ))
                    }
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-12 detail_btnBack animate__animated animate__fadeIn animate__slow">
                    <Link to='/'>
                        <button title="Volver a la pagina principal">Volver</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default GifDetail;