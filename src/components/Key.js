import React from "react"

class Key extends React.Component {
	
	render() {
		return (
			<div className="key" data-key={this.props.keyId}>
				<kbd>{this.props.keyName}</kbd>
			</div>
		)
	}
}

export default Key
