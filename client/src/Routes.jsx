import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CIndex from './components/components.index.js'

import {
  HomePage,
  AboutPage,
  GalleryPage,
  LoginPage,
} from './pages/pages-index.js'

const Routes = () => {
  const { AdminRoute, AdminDashboard, UploadImage, DeleteImage } = CIndex
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/gallery" exact component={GalleryPage} />
        <Route path="/about" exact component={AboutPage} />
        <AdminRoute path="/admin" exact component={AdminDashboard} />
        <AdminRoute path="/upload-images" exact component={UploadImage} />
        <AdminRoute path="/delete-images" exact component={DeleteImage} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
