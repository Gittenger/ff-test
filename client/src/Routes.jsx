import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CIndex from './components/components.index.js'

const Routes = () => {
  const { Home, Login, Gallery, AdminRoute, AdminDashboard } = CIndex
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/gallery" exact component={Gallery} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
