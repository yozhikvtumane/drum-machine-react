import React from 'react'

class ModeSwitcher extends React.Component {
	render() {
		let mode = this.props.mode
		console.log(mode)
		if (mode === "synth") {
			mode = "rotate(90deg)"
		} else {
			mode = "rotate(-90deg)"
		}
		console.log(this.props)
		return(
			<span className="modeSwitcher" data-id="modeSwitcher" onClick={(e)=> this.props.clickHandler(e)}>
			
			</span>
			// <button data-id="modeSwitcher" onClick={(e)=> this.props.clickHandler(e)}>ModeSwitcher</button>
		)
	}
}

export default ModeSwitcher