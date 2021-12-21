import React, { useContext, useEffect, useState } from 'react';

import Pagination from './Pagination';
import GifItem from './GifItem';
import NoDataContainer from './NoDataContainer';

import InputValueContext from '../context/InputValueContext';

const GifContainer = ( { images } ) => {
    const itemsPerPage = 12;
    const [ paginationItems , setPaginationItems ] = useState([]);
    const { currentPage } = useContext( InputValueContext );
    const lastIndex = currentPage * itemsPerPage;
    useEffect(() => { 
        setPaginationItems([ ...images ].slice(lastIndex - itemsPerPage,lastIndex));
    },[images,lastIndex])
    return (
        images.length !== 0 
        ?
            <section className = "container body mt-5">
                <div className = "row">
                    {
                            paginationItems.map((img , index) =>(<GifItem
                                                            key = { img.id }
                                                            index = { index }
                                                            id = { img.id }
                                                            smallSize = {img.smallSize}
                                                            title = {img.title} 
                                                        /> ) 
                        )
                    }
                </div>
                {
                    images.length > 11 
                    ?
                        <Pagination 
                            currentPage = { currentPage } 
                            images = { images } 
                            setPaginationItems = { setPaginationItems }
                            // setCurrentPage = { setCurrentPage }
                        />
                    : ""
                }
            </section>
        :
            <NoDataContainer />
    );
}

export default GifContainer;