import React from 'react'
import Board from './Board'
import './App.css'

// DrumMachine (will include Board, Mode switcher, display maybe)
// Board (sl func) > keys (sf class) (Key [data-key] prop) => create with map from data for each mode (json built-in ? json fetch from sources)
// Mode  ( synth / drum / misc (shakers etc) ) + Mode switcher
// SOUNDS - how to handle sounds????
//


const modes = {
	drums: {
		keys: ["T", "Y", "U", "G", "H", "J", "B", "N", "M"],
		keyCodes: [84, 89, 85, 71, 72, 74, 66, 78, 77, 91],
		samples: [],
	},
	synths: {
		keys: ["T", "Y", "U", "G", "H", "J", "B", "N", "M"],
		keyCodes: [84, 89, 85, 71, 72, 74, 66, 78, 77, 91],
		samples: [],
	}
}

// Init component for the app
class DrumMachine extends React.Component {
	render() {
		<div className="drumMachine"></div>
	}
}
export default DrumMachine
