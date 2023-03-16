import React from "react";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
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
        <Route path="/tasks/:id">
          <TaskPage />
        </Route>
        <Route path="/tasks">
          <TasksPage />
        </Route>
        <Route path="/author">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/tasks" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
