import React from "react"



class Key extends React.Component {
	constructor(props) {
		super(props)
		
		this.handleKeyClickEvent = this.handleKeyClickEvent.bind(this)
	}
	
	handleKeyClickEvent(e) {
		const sound = document.querySelector(`audio[data-key="${this.props.keyId}"]`)
		const key = document.querySelector(`div[data-key="${this.props.keyId}"]`)
		
		if (!sound || !key) return
		
		key.classList.add('key-active')
		
		sound.currentTime = 0
		sound.play().then(sound => key.classList.remove('key-active')).catch(err => console.log(err))
	}
	
	render() {

		return (
			<div className="key" data-key={this.props.keyId} onClick={this.handleKeyClickEvent}>
				<kbd>{this.props.keyName}</kbd>
			</div>
		)
	
	}
}

export default Key