import React, { useEffect, useState } from 'react';

import Pagination from './Pagination';
import GifItem from './GifItem';
import NoDataContainer from './NoDataContainer';

const GifContainer = ( { images } ) => {
    const itemsPerPage = 12;
    const [ paginationItems , setPaginationItems ] = useState([]);
    const [ currentPage , setCurrentPage ] = useState(0);

    useEffect(() => {
        setPaginationItems([ ...images ].slice(0,itemsPerPage));
        setCurrentPage(1);
    },[images])
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
                            setCurrentPage = { setCurrentPage }
                        />
                    : ""
                }
            </section>
        :
            <NoDataContainer />
    );
}

export default GifContainer;