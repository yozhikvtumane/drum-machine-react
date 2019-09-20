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
		keys: ["R", "T", "Y", "U", "F", "G", "H", "J", "V", "B", "N", "M"],
		keyCodes: [82, 84, 89, 85, 70, 71, 72, 74, 86, 66, 78, 77],
		samples: []
	}
}


for (let i in drumSamples) {
	modes.drums.samples.push(drumSamples[i]) 
}

for (let i in synthSamples) {
	modes.synth.samples.push(synthSamples[i]) 
}
console.log(modes)

export default modes