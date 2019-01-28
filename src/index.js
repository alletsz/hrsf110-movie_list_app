
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import movies from './Movies.js'



ReactDOM.render(<App movies={movies}/>,document.getElementById('app'))

