import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './static/styles/index.css'
import DrumMachine from '../src/containers/DrumMachine';
import './static/img/switcherUp.svg'
import './static/img/switcherDown.svg'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<DrumMachine initMode="synth"/>, document.getElementById('drumMachine'));

// If you want your DrumMachine to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
