import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Character from './pages/Character'

const Routes: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/:id' component={Character} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;