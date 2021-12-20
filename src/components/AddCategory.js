import React, { useContext } from 'react';

import InputValueContext from '../context/InputValueContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const AddCategory = () => {
    const { inputValue , handleFormSubmit , handleInputValue } = useContext( InputValueContext );
    return (
        <form   
            className='header_searchBarContainer--form'
            onSubmit = { handleFormSubmit }
        >
            <input
                type = "text"
                placeholder = "Buscar Giff..."
                value = { inputValue }
                onChange = { handleInputValue }
            />
            <button 
                className='mx-1' type = "submit">
                <FontAwesomeIcon icon={ faSearch }
            />
            </button>
        </form>
    );
}
export default AddCategory;