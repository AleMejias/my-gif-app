import React from "react";

const NoDataContainer = () => {
    return (
        <section className="container noDataContainer mt-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 noDataContainer__message">
                    <h4>No se encontraron resultados</h4>
                </div>
            </div>
        </section>
    );
}

export default NoDataContainer;