import React, { useState, useEffect, useCallback } from 'react'
import 'react-gallery-carousel/dist/index.css'

import { sizes } from '../../styles/css/utils.styles.js'

import {
  PortfolioPageContainer,
  StyledCarousel,
} from './PortfolioPageContent.styles'

import { API, PUBLIC } from '../../env.js'

const Portfolio = () => {
  const [images, setImages] = useState([])
  const [navMobileActive, setNavMobileActive] = useState(false)

  // BREAKPOINT
  const { tabletMM } = sizes
  const mobileBreakpoint = parseInt(tabletMM.match(/[0-9]+/)[0])

  // WINDOW WIDTH EVENT LISTENER
  const checkNavMobileActive = useCallback(() => {
    if (window.innerWidth <= mobileBreakpoint) {
      setNavMobileActive(true)
    } else setNavMobileActive(false)
  }, [mobileBreakpoint])

  // ON COMPONENT RENDER
  useEffect(() => {
    checkNavMobileActive()
    if (window.screen.width <= mobileBreakpoint) {
      setNavMobileActive(true)
    }
    window.addEventListener('resize', checkNavMobileActive)
    return () => {
      window.removeEventListener('resize', checkNavMobileActive)
    }
  }, [navMobileActive, checkNavMobileActive, mobileBreakpoint])

  useEffect(() => {
    fetch(`${API}/images`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ images }) => {
        setImages(
          images.map((img) => ({
            src: `${PUBLIC}/img/${img.name}`,
          }))
        )
      })
      .catch((err) => console.error(err))
    window.scrollTo(0, 0)
  }, [])

  return (
    <PortfolioPageContainer>
      <StyledCarousel
        images={images}
        isAutoPlaying={true}
        hasIndexBoard={false}
        hasThumbnailsAtMax={false}
        hasThumbnails={navMobileActive ? false : true}
        hasRightButton={navMobileActive ? 'bottomRight' : 'centerRight'}
        hasLeftButton={navMobileActive ? 'bottomLeft' : 'centerLeft'}
      />
    </PortfolioPageContainer>
  )
}

export default Portfolio
