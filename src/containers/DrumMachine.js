import React from 'react'
import Board from '../components/Board'
import Key from '../components/Key'
import modes from '../misc/modes'
import '../static/styles/DrumMachine.css'
import '../static/styles/Board.css'

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
// • ADD STATE
// • Conditional grid render for keys (3/4 in row) - Board property
// Add Key click event

class DrumMachine extends React.Component {

	constructor(props) {
		super(props)
		
		this.state = {...modes[this.props.initMode]}
		this.changeMode = this.changeMode.bind(this)
	}
	
	componentDidMount() {
		window.addEventListener('keydown' , (e) => this.changeMode(e))
	}
	
	changeMode(e) {
		// console.log(e.nativeEvent.type)
		console.log(e)
		// if (e.nativeEvent.type === undefined) {
			
		// }
		
		if (e.keyCode !== 81) return
		const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
		console.log("key" , key)
		key.classList.add('key-active')
		
		console.log(e.keyCode)
		console.log("state")
		console.dir(this.state)
		
		if (this.state.mode === "synth") {
			this.setState( () => {
				key.classList.remove('key-active')
				return {...modes.drums}
			})
		} else {
			this.setState( () => {
				key.classList.remove('key-active')
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
				<audio  data-key={keyCodes[i]} key={keyCodes[i]} src={sample}></audio>
			)
			
		})
		
		if (this.state.mode === "drums") {
			mode = 	<ul className="modeSelectorLED">
						<li data-mode="drums" className="mode-switcher mode-switcher-active"><span role="img" aria-label="switch">🟢</span> DRUMS</li>
						<li data-mode="synth" className="mode-switcher"><span role="img" aria-label="switch">⚪</span> SYNTH</li>
					</ul>
		} else {
			mode = 	<ul className="modeSelectorLED">
						<li data-mode="drums" className="mode-switcher"><span role="img" aria-label="switch">⚪</span> DRUMS</li>
						<li data-mode="synth" className="mode-switcher mode-switcher-active"><span role="img" aria-label="switch">🟢</span> SYNTH</li>
					</ul>
		}
		
		return (
			
			<React.Fragment>
				<h1 className="title">Reactive DM 3000</h1>
				<div className="modeSelector">
					<Key keyName="modeSwitcher" keyId={81} clickHandler={this.changeMode}/>
					{mode}
				</div>
				<Board keys={keys} keyCodes={keyCodes} mode={this.state.mode}/>
				<div className="audios">{audios}</div>
			</React.Fragment>
			
			// <div className="drumMachine">
			// 	<div className="modeSelector">
			// 		<span>Mode:</span>
			// 		{mode}
			// 	</div>
			// 	<Board keys={keys} keyCodes={keyCodes} />
			// 	<div className="audios">{audios}</div>
			// </div>
		
		)
	}
}
export default DrumMachine
