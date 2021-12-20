import React, { useContext } from 'react';

import AddCategory from './AddCategory';
import Loading from './Loading';
import GifContainer from './GifContainer';

import titleImage from '../assets/images/giphy.png';

import InputValueContext from '../context/InputValueContext';

import useFetchGifs from '../hooks/useFetchGifs';



const MyGifApp = () => {
    const { categories } = useContext( InputValueContext );
    const { images , loading } = useFetchGifs(categories);
    return (
        <>
            <section className = "container px-0 header">
                <div className='row mx-0'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 header_titleContainer'>
                        <img src={titleImage} alt='My Gif App'/>
                        <h4 className='mb-0 mx-1'>MyGifApp</h4>
                    </div>
                </div>
                <div className='row mx-0'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 header_searchBarContainer'>
                        <AddCategory />
                    </div>
                </div>
            </section>
            { loading ? <Loading /> :  <GifContainer images = { images } />}
        </>
    )
}

export default MyGifApp;