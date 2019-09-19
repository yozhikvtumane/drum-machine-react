import React from 'react'
import Key from './Key'
import ModeSelector from './ModeSelector'


class Board extends React.Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		console.log(this.props)
		const keys = this.props.keys.map( (key, i, arr) => {
			return (
				<Key keyId={this.props.keyCodes[i]} keyName={key} />
			)
		})
		console.log(keys)
		return (
			<div>
				{keys}
				<ModeSelector />
			</div>
			
		)
	}
}

export default Board