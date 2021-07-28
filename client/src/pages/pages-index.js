import HomePageContent from './HomePageContent/HomePageContent.component.jsx'
import PortfolioPageContent from './PortfolioPageContent/PortfolioPageContent.component.jsx'
import LoginPageContent from './LoginPageContent/LoginPageContent.component.jsx'
import BookingPageContent from './BookingPageContent/BookingPageContent.component.jsx'
import SafetyPageContent from './SafetyPageContent/SafetyPageContent.component.jsx'
import ProductionsPageContent from './ProductionsPageContent/ProductionsPageContent.component.jsx'
import LegalPageContent from './LegalPageContent/LegalPageContent.component.jsx'

import getPage from './PageComponent.jsx'

const pages = {
  HomePage: getPage('Home', HomePageContent),
  PortfolioPage: getPage('Portfolio', PortfolioPageContent),
  LoginPage: getPage('Login', LoginPageContent),
  ProductionsPage: getPage('Productions', ProductionsPageContent),
  BookingPage: getPage('Booking', BookingPageContent),
  LegalPage: getPage('Legal', LegalPageContent),
  SafetyPage: getPage('Safety', SafetyPageContent),
}

export const {
  HomePage,
  PortfolioPage,
  LoginPage,
  BookingPage,
  LegalPage,
  SafetyPage,
  ProductionsPage,
} = pages
