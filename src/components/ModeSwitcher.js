import React from 'react'

class ModeSwitcher extends React.Component {
	render() {
		console.log(this.props)
		let mode
		if (this.props.mode === "drums") {
			mode = <ul>
						<li data-mode="drums" className="mode-switcher mode-switcher-active"><span role="img" aria-label="switch">🟢</span> DRUMS</li>
						<li data-mode="synth" className="mode-switcher"><span role="img" aria-label="switch">⚪</span> SYNTH</li>
					</ul>
		}
		
		if (this.props.mode === "synth") {
			mode = <ul>
						<li data-mode="drums" className="mode-switcher"><span role="img" aria-label="switch">⚪</span> DRUMS</li>
						<li data-mode="synth" className="mode-switcher mode-switcher-active"><span role="img" aria-label="switch">🟢</span> SYNTH</li>
					</ul>
		}
		return(
			<div className="modeSelector">
				<span className="modeTag">MODE(Q)</span>
				<div className={`modeSwitcher ${this.props.mode}Switcher`} data-id="modeSwitcher" onClick={(e)=> {this.props.clickHandler(e)}}></div>
				<div className="modeSelectorLED">
					{mode}
				</div>
			</div>
		)
	}
}

export default ModeSwitcher