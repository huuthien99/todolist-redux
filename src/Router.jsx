import { Router, Switch, Route } from 'react-router-dom';

import history from './utils/history';

import ToDoListPage from './pages/ToDoList';
import TaskDetailPage from './pages/TaskDetail';


function BrowserRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={ToDoListPage} />
        <Route exact path='/detail/:index' component={TaskDetailPage} />
      </Switch>
    </Router>
  )
}

export default BrowserRouter;