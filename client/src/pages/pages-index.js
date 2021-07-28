import HomePageContent from './HomePageContent/HomePageContent.component.jsx'
import PortfolioPageContent from './PortfolioPageContent/PortfolioPageContent.component.jsx'
import LoginPageContent from './LoginPageContent/LoginPageContent.component.jsx'
import BookingPageContent from './BookingPageContent/BookingPageContent.component.jsx'

import getPage from './PageComponent.jsx'

const pages = {
  HomePage: getPage('Home', HomePageContent),
  PortfolioPage: getPage('Portfolio', PortfolioPageContent),
  LoginPage: getPage('Login', LoginPageContent),
  BookingPage: getPage('Booking', BookingPageContent),
}

export const { HomePage, PortfolioPage, LoginPage, BookingPage } = pages
