import * as drumSamples from '../static/samples/drums/drumSamples'
import * as synthSamples from '../static/samples/synths/synthSamples'

const modes = {
	drums: {
		mode: "drums",
		keys: ["T", "Y", "U", "G", "H", "J", "B", "N", "M"],
		keyCodes: [84, 89, 85, 71, 72, 74, 66, 78, 77],
		samples: []
	},

	synth: {
		mode: "synth",
		keys: ["T", "Y", "U", "G", "H", "J", "B", "N", "M"],
		keyCodes: [84, 89, 85, 71, 72, 74, 66, 78, 77],
		samples: []
	}
}


for (let i in drumSamples) {
	modes.drums.samples.push(drumSamples[i]) 
}

for (let i in synthSamples) {
	modes.synth.samples.push(synthSamples[i]) 
}


export default modes