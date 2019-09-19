import React from 'react'
import Key from './Key'
import ModeSelector from './ModeSelector'


class Board extends React.Component {
	constructor(props) {
		super(props)
		this.props = props
	}
	// let props = {
	// 	keyId: "123",
	// }
	render() {
		console.log(this.props)
		let keys = this.props.keys.map( (key, i, arr) => {
			return (
				<Key keyId={this.props.keyCodes[i]} keyName={key} />
			)
		})
		{/* let keyCodes = this.props.keyCodes.map(keyCode => keyCode) */}
		console.log(keys)
		return (
			<div>
				{keys}
				<ModeSelector />
			</div>
			
		)
	}
}

// const Board = () => {
// 	return (
// 		<React.Fragment>
// 			<Key />
// 		</React.Fragment>
// 	)
	
// }


export default Board