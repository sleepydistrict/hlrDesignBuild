import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Design from './components/design/Design';
import Build from './components/build/Build';
import Teach from './components/teach/Teach';
import Contact from './components/contact/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/build" component={Build} />
          <Route exact path="/teach" component={Teach} />
          <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
