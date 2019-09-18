import React from 'react'
import Key from './Key'
import ModeSelector from './ModeSelector'


class Board extends React.Component {
	render() {
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