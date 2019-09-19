import React from 'react'
import Key from './Key'
import ModeSelector from './ModeSelector'


class Board extends React.Component {
	constructor(props) {
		super(props)
		this.props = props
		
		
		this.handleKeyPress = this.handleKeyPress.bind(this)
	}
	handleKeyPress(e) {
		console.log(e)
		const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
		console.log(sound)
		if (!sound) return
		sound.play().catch(err=> console.dir(err))
	}
	
	componentDidMount() {
		window.addEventListener('keydown' , (e) => this.handleKeyPress(e))
		console.log("Hello from componentDidMount() ")
	}
	
	
	componentWillUnmount() {
		window.addEventListener('keydown' , (e) => this.handleKeyPress(e))
		console.log("Hello from componentWillUnmount() ")
	}
	
	render() {
		console.log(this.props)
		const keys = this.props.keys.map( (key, i, arr) => {
			return (
				<Key keyId={this.props.keyCodes[i]} keyName={key} />
			)
		})
		console.log(keys)
		return (
			<div className="board">
				{keys}
				<ModeSelector />
			</div>
			
		)
	}
}

export default Board