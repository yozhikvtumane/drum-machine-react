import React from "react"



function Key(props) {
	console.log(props)
	
	if (props.keyName === "modeSwitcher") {
		return (
			<div className="key-modeSwitcher" data-key={props.keyId}>
				<kbd>MODE</kbd>
				<kbd>Q</kbd>
			</div>
		)		
	} else {
		return (
			<div className="key" data-key={props.keyId}>
				<kbd>{props.keyName}</kbd>
			</div>
		)			
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
