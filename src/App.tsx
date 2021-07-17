import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fetch from './views/fetch';
import Home from './views/home';
import NoMatch from './views/no_match';
import TodoList from './views/todolist';

const App = () => (
  <BrowserRouter basename="/curso-react">
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/todolist" component={TodoList} />

      <Route exact path="/fetch" component={Fetch} />

      <Route path="*" component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default App;
