import React from 'react'
import Board from '../components/Board'
// import Key from '../components/Key'
// import './App.css'

// DrumMachine (will include Board, Mode switcher, display maybe)
// Board (sl func) > keys (sf class) (Key [data-key] prop) => create with map from data for each mode (json built-in ? json fetch from sources)
// Mode  ( synth / drum / misc (shakers etc) ) + Mode switcher
// SOUNDS - how to handle sounds????
//
//

const modes = {
	drums: {
		keys: ["T", "Y", "U", "G", "H", "J", "B", "N", "M"],
		keyCodes: [84, 89, 85, 71, 72, 74, 66, 78, 77],
		samples: [
			"78K.wav",
			"78MBEAT_C.wav",
			"78OHH.wav",
			"78TAMB.wav",
			"808CLAP.wav",
			"808K_A.wav",
			"808S_A.wav",
			"808T_B.wav",
			"909S.wav,"
		]
	},
	synths: {
		keys: ["T", "Y", "U", "G", "H", "J", "B", "N", "M"],
		keyCodes: [84, 89, 85, 71, 72, 74, 66, 78, 77],
		samples: [],
	}
}

// Init component for the app
class DrumMachine extends React.Component {

	// constructor(props) {
	// 	super(props)
	// 	this.myRefs = {}
	// }
	render() {
		const keyCodes = [...modes.drums.keyCodes]
		const keys = [...modes.drums.keys]
		const audios = modes.drums.samples.map( (sample, i, arr) => {
			
			return <audio ref="audio_tag" src={`/public/static/samples/drums/${sample}`} data-key={keyCodes[i]} key={keyCodes[i]}></audio>
		})
		
		
		
		return (
			<div className="drumMachine">
				<Board keys={keys} keyCodes={keyCodes} />
				<div className="audios">{audios}</div>
			</div>
		)
	}
}
export default DrumMachine
