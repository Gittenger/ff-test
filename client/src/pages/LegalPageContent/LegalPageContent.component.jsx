import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'

import CIndex from '../../components/components.index.js'

import {
	LegalPageContentContainer,
	LeadingText,
	InfoSection,
} from './LegalPageContent.styles.jsx'

import data from './LegalPageData.data.js'

import Img1 from '../../assets/legal-insured.jpeg'

const LegalPageContent = () => {
	const {
		ImageBox,
		TComp: { P, H2 },
	} = CIndex

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<LegalPageContentContainer>
			<H2>Legality & Liability</H2>
			<Fade>
				<LeadingText>{data.text1}</LeadingText>
			</Fade>
			<Fade>
				<ImageBox className="image-box">
					<img src={Img1} alt="" />
				</ImageBox>
			</Fade>
			<Fade>
				<InfoSection>
					<P>{data.text2}</P>
					<P>{data.text3}</P>
					<P>{data.text4}</P>
				</InfoSection>
			</Fade>
		</LegalPageContentContainer>
	)
}

export default LegalPageContent
