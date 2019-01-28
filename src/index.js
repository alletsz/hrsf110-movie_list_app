
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import movies from './data/Movies'

ReactDOM.render(<App movies={movies}/>,document.getElementById('app'))

