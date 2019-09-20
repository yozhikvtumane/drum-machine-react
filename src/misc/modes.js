import * as drumSamples from '../static/samples/drums/drumSamples'
import * as synthSamples from '../static/samples/synths/synthSamples'

const modes = {
	drums: {
		keys: ["T", "Y", "U", "G", "H", "J", "B", "N", "M"],
		keyCodes: [84, 89, 85, 71, 72, 74, 66, 78, 77],
		samples: []
	},

	synths: {
		keys: ["T", "Y", "U", "G", "H", "J", "B", "N", "M"],
		keyCodes: [84, 89, 85, 71, 72, 74, 66, 78, 77],
		samples: []
	}
}


for (let i in drumSamples) {
	modes.drums.samples.push(drumSamples[i]) 
}

for (let i in synthSamples) {
	modes.synths.samples.push(synthSamples[i]) 
}


export default modes