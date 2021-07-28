import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'

import CIndex from '../../components/components.index.js'

import {
	HomePageContainer,
	HeroContainer,
	HeroImg,
	PoemSection,
	PoemContainer,
	CTASection,
	ContactTitle,
	CTASectionText,
} from './HomePageContent.styles.jsx'

import Hero from '../../assets/hero.jpeg'
import Img1 from '../../assets/home-1.jpeg'
import Img2 from '../../assets/home-2.jpeg'
import data from './HomePageContentData.js'

const { email, poem } = data

const PoemContent = () => (
	<PoemContainer>
		{poem.main.map((line, i) => (
			<span key={i}>{line}</span>
		))}
		<span className="final-line">{poem.final}</span>
	</PoemContainer>
)

const HomePageContent = () => {
	const {
		ImageBox,
		TComp: { PSmall },
	} = CIndex

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		const heroImg = document.querySelector('.hero-image')
		heroImg.classList.add('show')
	}, [])

	return (
		<HomePageContainer>
			<Fade>
				<HeroContainer>
					<HeroImg className="hero-image" imageUrl={Hero} />
				</HeroContainer>
			</Fade>
			<PoemSection>
				<Fade>
					<PoemContent />
				</Fade>
				<Fade>
					<ImageBox className="image-box">
						<img src={Img1} alt="" />
					</ImageBox>
				</Fade>
			</PoemSection>
			<CTASection>
				<Fade>
					<ContactTitle>Contact Us</ContactTitle>
				</Fade>
				<Fade>
					<ImageBox className="image-box">
						<img src={Img2} alt="" />
					</ImageBox>
				</Fade>
				<Fade>
					<CTASectionText>
						<PSmall>Want us to come spice up your party or event?</PSmall>
						<span>Email us:</span>
						<a href={`mailto:${email}`}>{`${email}`}</a>
					</CTASectionText>
				</Fade>
			</CTASection>
		</HomePageContainer>
	)
}

export default HomePageContent
