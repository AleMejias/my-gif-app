import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './assets/scss/index.scss';

import MyGifApp from './components/MyGifApp';
import GifDetail from './components/GifDetail';

import { InputProvider } from './context/InputValueContext';


ReactDOM.render(
<InputProvider>
    <Router>
        <Routes>
            <Route exact path="/" element= { <MyGifApp /> }></Route>
            <Route exact path ="/detail/:id" element = { <GifDetail /> }></Route>
        </Routes>
    </Router>
</InputProvider>,document.querySelector('#root'));

