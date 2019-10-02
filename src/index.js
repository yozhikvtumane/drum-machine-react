import React from 'react';
import ReactDOM from 'react-dom';
import DrumMachine from '../src/containers/DrumMachine';
import 'normalize.css'
import './static/styles/index.css'
import './static/styles/responsive.css'
import './static/img/switcherUp.svg'
import './static/img/switcherDown.svg'

ReactDOM.render(<DrumMachine initMode="synth"/>, document.getElementById('drumMachine'));