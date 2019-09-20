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
		// console.log(sound.dataset.key)
		if (!sound) return
		sound.currentTime = 0
		// sound.load()
		sound.play() //.then(data=> console.log(data))
		// sound.play().catch(err=> console.log(err))
	}
	
	// componentDidMount() {
	// 	window.addEventListener('keydown' , (e) => this.handleKeyPress(e))
	// 	console.log("Hello from componentDidMount() ")
	// }
	
	
	componentDidMount() {
		window.addEventListener('keydown' , (e) => this.handleKeyPress(e))
	}
	
	
	// componentWillUnmount() {
	// 	window.removeEventListener('keydown' , (e) => this.handleKeyPress(e))
	// }
	
	render() {
		const keys = this.props.keys.map( (key, i, arr) => {
			return (
				<Key keyId={this.props.keyCodes[i]} keyName={key} />
			)
		})
		return (
			<div className="board">
				{keys}
				<ModeSelector />
			</div>
			
		)
	}
}

export default Board