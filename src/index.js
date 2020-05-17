import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './Todos';
import './index.css';

var destination = document.querySelector('#content');

ReactDOM.render(
    <Todos />,
    destination
);