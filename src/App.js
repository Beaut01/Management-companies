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
        <Route component={Home} path='/' />
        <Route component={Streets} path='/companies' />
        <Route component={Clients} path='/client' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
