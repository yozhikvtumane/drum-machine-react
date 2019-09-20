import React from 'react'
import Board from '../components/Board'
import modes from '../misc/modes'

// console.log('sound: ', drumSamples)


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
// ADD STATE

class DrumMachine extends React.Component {

	
	render() {
		const keyCodes = [...modes.drums.keyCodes]
		const keys = [...modes.drums.keys]
		const audios = modes.drums.samples.map( (sample, i, arr) => {
			
			return (
				<audio  data-key={keyCodes[i]} key={keyCodes[i]}>
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
