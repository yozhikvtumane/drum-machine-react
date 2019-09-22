import React from 'react'
import Key from './Key'
import '../static/styles/Board.css'

class Board extends React.Component {
	constructor(props) {
		super(props)
		this.props = props
		console.log(this.props)
		this.handleKeyPress = this.handleKeyPress.bind(this)
	}
	
	
	handleKeyPress(e) {
		const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
		const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
		if (!sound || !key) return
		
		key.classList.add('key-active')
		
		sound.currentTime = 0
		sound.play().then(sound => key.classList.remove('key-active')).catch(err => console.dir(err))
	}
		
	componentDidMount() {
		window.addEventListener('keydown' , (e) => this.handleKeyPress(e))
	}
			
	render() {
		const keys = this.props.keys.map( (key, i, arr) => {
			return (
				
				<Key keyId={this.props.keyCodes[i]} keyName={key} />
			
			)
		})
		return (
			
			<div className={`board board-${this.props.mode}`}>
				{keys}
				{/* <ModeSelector /> */}
			</div>
			
		)
	}
}

export default Board