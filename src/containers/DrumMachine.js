import React from 'react'
import Board from '../components/Board'
import ModeSwitcher from '../components/ModeSwitcher'
import modes from '../misc/modes'
import '../static/styles/DrumMachine.css'
import '../static/styles/Board.css'

class DrumMachine extends React.Component {

	constructor(props) {
		super(props)
		
		this.state = {...modes[this.props.initMode]}
		this.changeMode = this.changeMode.bind(this)
	}
	
	handleChangeMode() {
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
	
	changeMode(e) {
		if (e.type === "keydown" && e.keyCode === 81 ) {
			this.handleChangeMode()
		}
		
		if (e.type === "click" && e.target.dataset.id === "modeSwitcher") {
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
