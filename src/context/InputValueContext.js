import React, { createContext , useState } from "react";

const InputValueContext = createContext();

const InputProvider = ( {children} ) => {
    const [inputValue , setInputValue] = useState('Buscar Gif...');
    const handleInputValue = ( e ) => {
        setInputValue(e.target.value);
    }
    const data = { inputValue ,setInputValue ,handleInputValue};
    return (
        <InputValueContext.Provider value= { data }> 
            { children }
        </InputValueContext.Provider>
    );
};
export { InputProvider };
export default InputValueContext;