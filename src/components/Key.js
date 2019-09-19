import React from "react"



function Key(props) {
	return (
			<div className="key" data-key={props.keyId}>
				<kbd>{props.keyName}</kbd>
			</div>
	)
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
