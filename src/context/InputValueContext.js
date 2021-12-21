import React, { createContext , useState } from "react";

const InputValueContext = createContext();

const InputProvider = ( {children} ) => {
    const [inputValue , setInputValue] = useState('');
    const [ categories , setCategories ] = useState('');
    const [ currentPage , setCurrentPage ] = useState(1);

    const handleFormSubmit = ( e ) => {
        e.preventDefault();
        setCategories( inputValue );
        setInputValue('');
    } 
    const handleInputValue = ( e ) => {
        setInputValue(e.target.value);
    }
    const data = { 
                    inputValue ,
                    setInputValue ,
                    handleInputValue,
                    handleFormSubmit,
                    categories,
                    setCategories,
                    currentPage,
                    setCurrentPage
                };
    return (
        <InputValueContext.Provider value= { data }> 
            { children }
        </InputValueContext.Provider>
    );
};
export { InputProvider };
export default InputValueContext;