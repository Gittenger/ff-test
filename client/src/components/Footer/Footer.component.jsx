import React from 'react'

import { FooterContainer, Copyright, Links, Credits } from './Footer.styles.jsx'

import { ReactComponent as EmailImg } from '../../assets/icons/email.svg'
import { ReactComponent as FacebookImg } from '../../assets/icons/facebook.svg'
import { ReactComponent as InstagramImg } from '../../assets/icons/instagram.svg'
import { EMAIL } from '../../env.js'

const Footer = () => (
	<FooterContainer>
		<Copyright>&copy; 2021 Fantastic Flames Entertainment</Copyright>
		<Links>
			<ul>
				<li>
					<a href={`mailto:${EMAIL}`}>
						<EmailImg />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.facebook.com/pages/category/Arts---Entertainment/Fantastic-Flames-Entertainment-104675824508061/"
					>
						<FacebookImg />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.instagram.com/fantastic_flames_crew/"
					>
						<InstagramImg />
					</a>
				</li>
			</ul>
		</Links>
		<Credits>
			<div>
				Orange flame icon made by{' '}
				<a
					href="https://www.flaticon.com/authors/vectors-market"
					title="Vectors Market"
				>
					Vectors Market
				</a>{' '}
			</div>
			<div>
				from{' '}
				<a href="https://www.flaticon.com/" title="Flaticon">
					www.flaticon.com
				</a>
			</div>
			<div>
				Website made by{' '}
				<a href="http://www.johnpittenger.com/" title="Vectors Market">
					John Pittenger
				</a>{' '}
				Website design © John Pittenger
			</div>
		</Credits>
	</FooterContainer>
)

export default Footer
