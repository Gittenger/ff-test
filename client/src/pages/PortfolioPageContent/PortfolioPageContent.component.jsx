import React, { useState, useEffect } from 'react'
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'

import {
  PortfolioPageContainer,
  StyledCarousel,
} from './PortfolioPageContent.styles'

const Portfolio = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/images', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ images }) => {
        setImages(
          images.map((img) => ({
            src: `http://localhost:8080/img/${img.name}`,
          }))
        )
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <PortfolioPageContainer>
      <StyledCarousel images={images} />
    </PortfolioPageContainer>
  )
}

export default Portfolio
