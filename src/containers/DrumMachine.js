import React from 'react'
import Board from '../components/Board'
import ModeSwitcher from '../components/ModeSwitcher'
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
// • Add Key click event
// • Redo ModeSwitcher from Key component to standalone component
// • MOVE SWITCHER AND LEDS TO STANDALONE COMPONENTS


class DrumMachine extends React.Component {

	constructor(props) {
		super(props)
		
		this.state = {...modes[this.props.initMode]}
		this.changeMode = this.changeMode.bind(this)
		// this.handleChangeMode = this.handleChangeMode.bind(this)
		// this.changeModeOnClick = this.changeModeOnClick.bind(this)
	}
	
	handleChangeMode() {
		// e.preventDefault()
		if (this.state.mode === "synth") {
			this.setState( () => {
		// 		key.classList.remove('key-active')
				return {...modes.drums}
			})
		} else {
			this.setState( () => {
		// 		key.classList.remove('key-active')
				return {...modes.synth}
			})
		}
		console.log(this.state)
	}
	changeMode(e) {
		// console.log(e.nativeEvent.type)
		// if (e.nativeEvent.type === undefined) {
		// console.dir(e.target)
		// e.stopPropagation()
		console.log(this)
		console.log(e.target)
		console.log(e)
		console.log('e.type', e.type)
		if (e.type === "keydown" && e.keyCode === 81 ) {
			this.handleChangeMode()
		}
		
		if (e.type === "click" && e.target.dataset.id === "modeSwitcher") {
			console.log("modeSwitcher", e.target.dataset.id)
			this.handleChangeMode()
		}
	}
		componentDidMount() {
			window.addEventListener('keydown' , (e) => this.changeMode(e))
		}
		componentWillUnmount() {
			window.removeEventListener('keydown' , (e) => this.changeMode(e))
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
		
			return (
				
				<React.Fragment>
					<h1 className="title">Reactive DM 3000</h1>
					<ModeSwitcher mode={this.state.mode} clickHandler={this.changeMode}/>
					<Board keys={keys} keyCodes={keyCodes} mode={this.state.mode}/>
					<div className="audios">{audios}</div>
				</React.Fragment>
			
			)
	}
}

export default DrumMachine
