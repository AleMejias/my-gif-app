
const itemsPerPage = 12;


export const handleBtnsCurrentPage = ( currentPage , setPaginationItems , images , setCurrentPage ) => {
    const lastIndexPerPage = currentPage * itemsPerPage;
    const firstIndexPage = lastIndexPerPage - itemsPerPage;
    setPaginationItems( [...images].slice(firstIndexPage,lastIndexPerPage));
    setCurrentPage(currentPage);
}
export const handleBtnPrevious = ( currentPage , setPaginationItems , images , setCurrentPage ) => {

    if(currentPage !== 1)
    {
        const previousPage = currentPage - 1;
        const lastIndexPerPage = previousPage * itemsPerPage;
        const firstIndexPage = lastIndexPerPage - itemsPerPage;

        setPaginationItems( [...images].slice(firstIndexPage,lastIndexPerPage));
        setCurrentPage(previousPage);
    }
}
export const handleBtnNext = ( currentPage , setPaginationItems , images , setCurrentPage ) => {
    const nextPage = currentPage + 1;
    const lastIndexPerPage = nextPage * itemsPerPage;
    const firstIndexPage = lastIndexPerPage - itemsPerPage;

    if( firstIndexPage < images.length ){
        setPaginationItems( [...images].slice(firstIndexPage,lastIndexPerPage));
        setCurrentPage(nextPage);
    }
}