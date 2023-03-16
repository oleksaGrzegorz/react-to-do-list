import React from "react";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/AuthorPage";
import { Link, Switch, Route, HashRouter, Redirect } from "react-router-dom";
const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/tasks">Zadania</Link>
        </li>
        <li>
          <Link to="/author">O autorze</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/author">
          <Author />
        </Route>
        <Route path="/">
          <Redirect to="/tasks" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
