import React, { useContext } from "react";

import { handleBtnPrevious , handleBtnNext, handleBtnsCurrentPage } from '../helpers/currentPage';

import InputValueContext from "../context/InputValueContext";


const Pagination = ( { images , setPaginationItems } ) => {

    const { currentPage , setCurrentPage } = useContext(InputValueContext);

    return (
        <section className="container paginationContainer mt-4">
            <div className="row">
                <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-lg pagination-sm justify-content-center paginationContainer__ul">
                        <button 
                                title="Página Anterior"
                                className={`page-link ${currentPage === 1 ? 'hide' : 'show'}` }
                                onClick={ () => 
                                handleBtnPrevious(
                                    currentPage , 
                                    setPaginationItems , 
                                    images , 
                                    setCurrentPage
                                )
                            }>Atras</button>
                            <li 
                                className= {`page-item page-link ${ currentPage === 1 ? 'paginationActivated' : 'paginationDeactivated' }`}
                                onClick={ () => 
                                    handleBtnsCurrentPage(
                                        1 , 
                                        setPaginationItems , 
                                        images , 
                                        setCurrentPage
                                ) 
                            }>
                                1
                            </li>
                            <li 
                            className={`page-item page-link  ${ currentPage === 2 ? 'paginationActivated' : 'paginationDeactivated' }`}
                            onClick={ () => 
                                handleBtnsCurrentPage(
                                    2 , 
                                    setPaginationItems , 
                                    images , 
                                    setCurrentPage
                                )
                            }
                            >
                                2
                            </li>
                            <li 
                            className={`page-item page-link  ${ currentPage === 3 ? 'paginationActivated' : 'paginationDeactivated' }`}
                            onClick={ () =>
                                handleBtnsCurrentPage(
                                    3 , 
                                    setPaginationItems , 
                                    images , 
                                    setCurrentPage
                                )
                            }
                            >
                                3
                            </li>
                            <li 
                            className={`page-item page-link  ${ currentPage === 4 ? 'paginationActivated' : 'paginationDeactivated' }`}
                            onClick={ () => 
                                handleBtnsCurrentPage(
                                    4 , 
                                    setPaginationItems , 
                                    images , 
                                    setCurrentPage 
                                )
                            }
                            >
                                4
                            </li>
                            <li 
                            className={`page-item page-link  ${ currentPage === 5 ? 'paginationActivated' : 'paginationDeactivated' }`}
                            onClick={ () => 
                                handleBtnsCurrentPage(
                                    5 , 
                                    setPaginationItems , 
                                    images , 
                                    setCurrentPage
                                )
                            }
                            >
                                5
                            </li>
                        <button 
                                title="Página Siguiente"
                                className={`page-link ${currentPage === 5 ? 'hide' : 'show'}` } 
                                onClick={ () => 
                                handleBtnNext(
                                    currentPage , 
                                    setPaginationItems , 
                                    images , 
                                    setCurrentPage
                                )
                        }>Siguiente</button>
                    </ul>
                </nav>      
            </div>
        </section>
    );
}

export default Pagination;