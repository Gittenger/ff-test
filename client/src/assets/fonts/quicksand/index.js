import normal from './Quicksand-Regular.ttf'
import light from './Quicksand-Light.ttf'
import bold from './Quicksand-Bold.ttf'

export const quicksand = {
	name: 'Quicksand',
	format: 'truetype',
	styles: {
		normal: {
			weight: '400',
			style: 'normal',
			font: normal,
		},
		bold: {
			weight: '700',
			style: 'normal',
			font: bold,
		},
		light: {
			weight: '300',
			style: 'normal',
			font: light,
		},
	},
}

export default quicksand
