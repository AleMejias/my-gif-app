import React, { useContext } from 'react';
import InputValueContext from '../context/InputValueContext';

const AddCategory = ( {setCategories} ) => {
    const { inputValue ,setInputValue ,handleInputValue } = useContext(InputValueContext);
    const handleFormSubmit = ( e ) => {
        e.preventDefault();
        setCategories(category => [ ...category , inputValue ] );
        setInputValue('Buscar Gif...');
    }
    return (
        <form onSubmit = { handleFormSubmit }>
            <input
                type = "text"
                value = { inputValue }
                onChange = { handleInputValue }
            />
        </form>
    );
}
export default AddCategory;