import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Fetch, Home, TodoList, NoMatch } from './views';

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
