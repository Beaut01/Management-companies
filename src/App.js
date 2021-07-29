import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home' 
import { Streets } from './pages/Streets'
import { Clients } from './pages/Clients'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Streets} path='/company/:id' />
        <Route component={Clients} path='/client' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
