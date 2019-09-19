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
		return (
			<div>
				<Key />
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