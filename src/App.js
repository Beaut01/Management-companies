import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home' 
import { Streets } from './pages/Streets'
import { Clients } from './pages/Clients'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' />
        <Route component={Streets} path='/street' />
        <Route component={Clients} path='/client' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
