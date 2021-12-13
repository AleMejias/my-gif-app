import React from 'react';
import ReactDOM from 'react-dom';
    //Hoja de estilos
import './assets/scss/index.scss';
    //Components
import MyGifApp from './components/MyGifApp';
import { InputProvider } from './context/InputValueContext';

ReactDOM.render(
<InputProvider>
    <MyGifApp/>
</InputProvider>,document.querySelector('#root'));

