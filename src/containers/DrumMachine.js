import React from 'react'
import Board from '../components/Board'
import modes from '../misc/modes'
import '../static/styles/DrumMachine.css'

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

	constructor(props) {
		super(props)
		
		this.state = {...modes[this.props.initMode]}
	}
	
	componentDidMount() {
		window.addEventListener('keydown' , (e) => this.changeMode(e))
	}
	
	changeMode(e) {
		if (e.keyCode !== 81) return
		console.log(e.keyCode)
		console.log("state")
		console.dir(this.state)
		
		if (this.state.mode === "synth") {
			this.setState( () => {
				return {...modes.drums}
			})
		} else {
			this.setState( () => {
				return {...modes.synth}
			})
			
		}
	}
	
	render() {
		const keyCodes = [...this.state.keyCodes]
		const keys = [...this.state.keys]
		let mode
		
		const audios = this.state.samples.map( (sample, i, arr) => {
			
			return (
				<audio  data-key={keyCodes[i]} key={keyCodes[i]} src={sample}>
					{/* <source src={sample} type="audio/wav"></source> */}
				</audio>
			)
			
		})
		
		if (this.state.mode === "drums") {
			mode = 	<ul className="modeSelector">
						<li data-mode="drums" className="mode-switcher mode-switcher-active"><span role="img" aria-label="switch">🟢</span> DRUMS</li>
						<li data-mode="synth" className="mode-switcher"><span role="img" aria-label="switch">⚪</span> SYNTH</li>
					</ul>
		} else {
			mode = 	<ul className="modeSelector">
						<li data-mode="drums" className="mode-switcher"><span role="img" aria-label="switch">⚪</span> DRUMS</li>
						<li data-mode="synth" className="mode-switcher mode-switcher-active"><span role="img" aria-label="switch">🟢</span> SYNTH</li>
					</ul>
		}
		
		return (
			
			<div className="drumMachine">
				<div className="modeSelector">
					<span>Mode:</span>
					{mode}
				</div>
				<Board keys={keys} keyCodes={keyCodes} />
				<div className="audios">{audios}</div>
			</div>
		
		)
	}
}
export default DrumMachine
