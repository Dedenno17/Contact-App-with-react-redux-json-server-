import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/add'>
            <Add />
          </Route>
          <Route path='/edit/:id'>
            <Edit />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
