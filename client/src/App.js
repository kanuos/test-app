import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Main from './components/Main';
import ErrorPage from './components/Error';
function App() {

  return (
    <main>
        <BrowserRouter>
          <Switch>
              <Route path='/' exact component={Main}/>
              <Route component={ErrorPage}/>
          </Switch>
        </BrowserRouter>
    </main>
  );
}

export default App;

