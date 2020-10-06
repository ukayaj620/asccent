import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Helmet titleTemplate="Asccent | %s" defaultTitle="Asccent">
        <meta name="description" content="Amazing Asccent" />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
