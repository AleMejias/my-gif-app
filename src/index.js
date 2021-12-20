import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/scss/index.scss';

import MyGifApp from './components/MyGifApp';
import GifDetail from './components/GifDetail';

import { InputProvider } from './context/InputValueContext';


ReactDOM.render(
<InputProvider>
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element= { <MyGifApp /> }></Route>
            <Route exact path ="/detail/:id" element = { <GifDetail /> }></Route>
        </Routes>
    </BrowserRouter>
</InputProvider>,document.querySelector('#root'));

