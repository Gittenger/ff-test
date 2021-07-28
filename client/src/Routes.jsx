import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CIndex from './components/components.index.js'

import {
  HomePage,
  PortfolioPage,
  LoginPage,
  BookingPage,
  SafetyPage,
  ProductionsPage,
  LegalPage,
} from './pages/pages-index.js'

const Routes = () => {
  const {
    AdminRoute,
    AdminDashboard,
    UploadImage,
    DeleteImage,
    ForgotPassword,
  } = CIndex
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/portfolio" exact component={PortfolioPage} />
        <Route path="/booking" exact component={BookingPage} />
        <Route path="/safety" exact component={SafetyPage} />
        <Route path="/productions" exact component={ProductionsPage} />
        <Route path="/legal" exact component={LegalPage} />
        <AdminRoute path="/admin" exact component={AdminDashboard} />
        <AdminRoute path="/upload-images" exact component={UploadImage} />
        <AdminRoute path="/delete-images" exact component={DeleteImage} />
        <AdminRoute path="/forgot-password" exact component={ForgotPassword} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
