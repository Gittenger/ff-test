import { css } from 'styled-components'

import fontsIndex from '../../assets/fonts/index'
const { orbitron, quicksand, karla } = fontsIndex

export const fontVars = {
	fontMain: css`
		--fontMain: '${quicksand.name}', sans-serif;
		--fontSecondary: '${karla.name}', sans-serif;
		--fontHeading: '${orbitron.name}', sans-serif;
		--globalScale: 1;
	`,
}

export default fontVars
