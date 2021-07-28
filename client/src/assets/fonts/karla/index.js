import normal from './Karla-Regular.ttf'
import italic from './Karla-Italic.ttf'
import bold from './Karla-Bold.ttf'

export const karla = {
	name: 'Karla',
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
		italic: {
			weight: '400',
			style: 'italic',
			font: italic,
		},
	},
}

export default karla
