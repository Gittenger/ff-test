import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'

import CIndex from '../../components/components.index.js'

import {
	BookingPageContainer,
	BookingText,
} from './BookingPageContent.styles.jsx'

import data from './BookingPageData.data.js'

const BookingPageContent = () => {
	const { BookingForm } = CIndex
	const { text } = data

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<BookingPageContainer>
			<BookingText>
				<p>{text.lineOne}</p>
				<p>{text.lineTwo}</p>
			</BookingText>
			<Fade>
				<BookingForm />
			</Fade>
		</BookingPageContainer>
	)
}

export default BookingPageContent
