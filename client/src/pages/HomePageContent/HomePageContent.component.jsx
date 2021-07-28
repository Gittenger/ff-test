import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'

import CIndex from '../../components/components.index.js'

import {
	HomePageContainer,
	HeroContainer,
	HeroImg,
	HeroTwo,
	BottomImg,
	ContactTitle,
	CTASectionText,
} from './HomePageContent.styles.jsx'

import Hero from '../../assets/hero.jpeg'
import Img1 from '../../assets/home-1.jpeg'
import Img2 from '../../assets/home-2.jpeg'

const HomePageContent = () => {
	const { ImageBox } = CIndex

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
			<HeroTwo>
				<Fade>
					<ImageBox className="image-box">
						<img src={Img1} alt="" />
					</ImageBox>
				</Fade>
			</HeroTwo>
			<BottomImg>
				<Fade>
					<ImageBox className="image-box">
						<img src={Img2} alt="" />
					</ImageBox>
				</Fade>
			</BottomImg>
		</HomePageContainer>
	)
}

export default HomePageContent
