import HomePageContent from './HomePageContent/HomePageContent.component.jsx'
import AboutPageContent from './AboutPageContent/AboutPageContent.component.jsx'
import GalleryPageContent from './GalleryPageContent/GalleryPageContent.component.jsx'
import LoginPageContent from './LoginPageContent/LoginPageContent.component.jsx'

import getPage from './PageComponent.jsx'

const pages = {
  HomePage: getPage('Home', HomePageContent),
  AboutPage: getPage('About', AboutPageContent),
  GalleryPage: getPage('Gallery', GalleryPageContent),
  LoginPage: getPage('Login', LoginPageContent),
}

export const { HomePage, AboutPage, GalleryPage, LoginPage } = pages
