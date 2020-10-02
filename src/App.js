import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Helmet titleTemplate="Codenitiva | %s" defaultTitle="Codenitiva">
        <meta name="description" content="Codenitiva, Platform for Developers to sharing knowledge" />
      </Helmet>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
