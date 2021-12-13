import React, { useContext, useState } from 'react';
    //Context
import InputValueContext from '../context/InputValueContext';
    //Components
import AddCategory from './AddCategory';
import GifContainer from './GifContainer';

const MyGifApp = () => {
    const [categories , setCategories] = useState(['Two and a Half men','The big bang Theory','The last Dance']);
    const { inputValue ,setInputValue}  = useContext( InputValueContext );
    const handleAdd = () => {
        //Recibo un callback como primer parametro, el primer arugmento es el valor del estado anterior y regresare el nuevo estado
        setCategories( category => [ ...category , inputValue ] );
        setInputValue('Buscar Gif...');
        
    }
    return (
        <>
            <h2>MyGifApp</h2>
            <hr/>
            <AddCategory setCategories = { setCategories }/>
            <GifContainer />
        </>
    )
}

export default MyGifApp;