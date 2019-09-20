import React from 'react'
import Board from '../components/Board'
// import * as samplez from '../static/samples/drums'
import * as drumSamples from '../static/samples/drums/drumSamples'
// import soundsfiles from '../static/samples/drums/*.wav'

console.log('sound: ', drumSamples)


// let drumSamplez = 
// console.log('drumSamplez', drumSamplez)
// import Key from '../components/Key'
// import './App.css'

// DrumMachine (will include Board, Mode switcher, display maybe)
// Board (sl func) > keys (sf class) (Key [data-key] prop) => create with map from data for each mode (json built-in ? json fetch from sources)
// Mode  ( synth / drum / misc (shakers etc) ) + Mode switcher
// • SOUNDS - how to handle sounds
//
//

const modes = {
	drums: {
		keys: ["T", "Y", "U", "G", "H", "J", "B", "N", "M"],
		keyCodes: [84, 89, 85, 71, 72, 74, 66, 78, 77],
		samples: []
	},
	synths: {
		keys: ["T", "Y", "U", "G", "H", "J", "B", "N", "M"],
		keyCodes: [84, 89, 85, 71, 72, 74, 66, 78, 77],
		samples: [],
	}
}

for (let i in drumSamples) {
	modes.drums.samples.push(drumSamples[i])
}

console.log(modes)
// Init component for the app
class DrumMachine extends React.Component {

	constructor(props) {
		super(props)
		this.myRefs = {}
	}
	render() {
		const keyCodes = [...modes.drums.keyCodes]
		const keys = [...modes.drums.keys]
		const audios = modes.drums.samples.map( (sample, i, arr) => {
			// let myRef = React.createRef()
			// console.log(myRef)
			console.log(sample)
			return (
				<audio  data-key={keyCodes[i]} key={keyCodes[i]}>
					{/* <source src={`../public/static/samples/drums/${sample}`} type="audio/wav"></source> */}
					<source src={sample} type="audio/wav"></source>
				</audio>
			)
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
