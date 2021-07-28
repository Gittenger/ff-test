import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'

import CIndex from '../../components/components.index.js'

import {
	ProductionsPageContentContainer,
	InfoSection,
} from './ProductionsPageContent.styles.jsx'

import Img1 from '../../assets/productions.jpeg'

const ProductionsPageContent = () => {
	const {
		ImageBox,
		TComp: { H2, PSmall },
	} = CIndex

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<ProductionsPageContentContainer>
			<H2>Film Productions...</H2>
			<Fade>
				<ImageBox className="image-box">
					<img src={Img1} alt="" />
				</ImageBox>
			</Fade>
			<Fade>
				<InfoSection>
					<PSmall>
						Fantastic Flames has entered the world of media production. we want you to
						look your best in full costume on site of the most mystical places in the
						world. and we want to capture your <span>fire</span>...
					</PSmall>
					<PSmall>
						Whether it be photoshoots, clips, commercials or full blown choreographed
						video productions - we want to shoot it all and capture you or your crew's
						most fierce and brutal moments.
					</PSmall>
					<PSmall>
						Our editing team stays behind the desk clipping away every{' '}
						<span>frame</span> to perfect every <span>flame</span>. This is media at
						its hottest. And we want to boost your promotionals with material you (and
						your audience) will never forget. This is how hot media was meant to be.
					</PSmall>
				</InfoSection>
			</Fade>
		</ProductionsPageContentContainer>
	)
}

export default ProductionsPageContent
