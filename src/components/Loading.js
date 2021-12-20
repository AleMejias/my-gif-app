import React from "react";


const Loading = () => {
    return(
        <section className="container loading">
            <div className="row loading__container">
                <div className="spinner-grow text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </section>
    );
}
export default Loading;