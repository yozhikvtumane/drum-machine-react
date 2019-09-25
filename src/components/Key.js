import React from "react"



class Key extends React.Component {
	constructor(props) {
		super(props)
		console.log(props)
		this.handleKeyClickEvent = this.handleKeyClickEvent.bind(this)
	}
	
	handleKeyClickEvent(e) {
		console.log(this.props)
		
		const sound = document.querySelector(`audio[data-key="${this.props.keyId}"]`)
		const key = document.querySelector(`div[data-key="${this.props.keyId}"]`)
		if (!sound || !key) return
		
		key.classList.add('key-active')
		
		sound.currentTime = 0
		sound.play().then(sound => key.classList.remove('key-active')).catch(err => console.dir(err))
	}
	
	render() {
		let keyEl
		
		if (this.props.keyName === "modeSwitcher") {
			keyEl =
				<div className="key-modeSwitcher" data-key={this.props.keyId} onClick={this.props.clickHandler}>
					<kbd>MODE</kbd>
					<kbd>Q</kbd>
				</div>
			
		} else {
			keyEl = 
				<div className="key" data-key={this.props.keyId} onClick={this.handleKeyClickEvent}>
					<kbd>{this.props.keyName}</kbd>
				</div>
		}
		
		return keyEl
	}
	
	

}
// class Key extends React.Component {
	
// 	render() {
// 		return (
// 			<div className="key" data-key={this.props.keyId}>
// 				<kbd>{this.props.keyName}</kbd>
// 			</div>
// 		)
// 	}
// }

export default Key
