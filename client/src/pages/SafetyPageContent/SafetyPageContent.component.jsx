import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'

import CIndex from '../../components/components.index.js'

import {
	SafetyPageContentContainer,
	MainContent,
	LeadingTitles,
	LeadTitle,
	LeadSubtitle,
	SafetyClassInfo,
	SafetyClassList,
	SafetyClassListText,
	SafetyHireInfo,
} from './SafetyPageContent.styles.jsx'

import Img1 from '../../assets/safety-1.jpeg'
import Img2 from '../../assets/safety-2.jpeg'
import ListIcon from '../../assets/icons/flame.svg'

const SafetyPageContent = () => {
	const {
		ImageBox,
		TComp: { H2, P },
	} = CIndex

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<SafetyPageContentContainer>
			<MainContent>
				<LeadingTitles>
					<Fade>
						<LeadTitle>Are you an inspiring performer?</LeadTitle>
					</Fade>
					<Fade>
						<LeadSubtitle>
							Do you have experience with flow arts props or the circus world and want
							to take it to the next level?
						</LeadSubtitle>
					</Fade>
					<Fade>
						<p>Well, look no further!</p>
					</Fade>
				</LeadingTitles>
				<Fade>
					<ImageBox>
						<img src={Img1} alt="" />
					</ImageBox>
				</Fade>
				<Fade>
					<SafetyClassInfo>
						<P>
							Fantastic Flames hosts a fire safety for performing artists class, and
							we'd love to see you attending it. In this class we go over:
						</P>
						<SafetyClassList>
							<li>
								<img src={ListIcon} alt="" />
								<SafetyClassListText>
									Fire science, fuel science, and spotting science
								</SafetyClassListText>
							</li>
							<li>
								<img src={ListIcon} alt="" />
								<SafetyClassListText>Proper clothing</SafetyClassListText>
							</li>
							<li>
								<img src={ListIcon} alt="" />
								<SafetyClassListText>
									Proper procedure from start to finish
								</SafetyClassListText>
							</li>
							<li>
								<img src={ListIcon} alt="" />
								<SafetyClassListText>Fuel setup</SafetyClassListText>
							</li>
							<li>
								<img src={ListIcon} alt="" />
								<SafetyClassListText>Fire extinguisher use</SafetyClassListText>
							</li>
							<li>
								<img src={ListIcon} alt="" />
								<SafetyClassListText>Fire blanket use</SafetyClassListText>
							</li>
							<li>
								<img src={ListIcon} alt="" />
								<SafetyClassListText>How to control a fire</SafetyClassListText>
							</li>
							<li>
								<img src={ListIcon} alt="" />
								<SafetyClassListText>
									Dealing with YOU being on fire
								</SafetyClassListText>
							</li>
							<li>
								<img src={ListIcon} alt="" />
								<SafetyClassListText>
									Dealing with your performer being on fire
								</SafetyClassListText>
							</li>
							<li>
								<Fade>
									<img src={ListIcon} alt="" />
								</Fade>
								<SafetyClassListText>Crowd control</SafetyClassListText>
							</li>
						</SafetyClassList>
						<P>
							This course comes complete with a certificate and the oppertunity to
							purchase an extinguisher and a premium fire safety blanket by our very
							own official sponsor - Matrix Fire Safety. Learn how to be fire safe
							while spinning and book an appointment! Entry level is just $20!
						</P>
						<P>
							<span>Note:</span> This is a general course and does not include fire
							eating or fire breathing. You will need this basic experience before
							learning more about these dangerous arts.
						</P>
					</SafetyClassInfo>
				</Fade>
				<Fade>
					<ImageBox>
						<img src={Img2} alt="" />
					</ImageBox>
				</Fade>
				<Fade>
					<SafetyHireInfo>
						<H2>Got a gig?</H2>
						<P>
							Fantastic Flames wants to be your safety. Our safeties don't just endorse
							Matrix professional fire safety blankets, we're an official sponsor of
							them. That means we know how to use 'em! Our safeties are trained to use
							a fire blanket to keep your show lit (not your clothes)...
						</P>
						<P>
							We act as security for your spin space to keep drunks and creeps off your
							show floor. We'll even manage your fuel for you. Fantastic Flames shows
							up with an ABC fire extinguisher, even if you don't have one.
						</P>
						<P>
							You will want to book us again and again with our professionalism. We
							take safety seriously because you and your gig matter to us!
						</P>
					</SafetyHireInfo>
				</Fade>
			</MainContent>
		</SafetyPageContentContainer>
	)
}

export default SafetyPageContent
