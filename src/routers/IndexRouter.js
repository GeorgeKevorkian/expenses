import React from 'react';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/dashboard';
import AddExpensePage from '../components/create';
import EditExpensePage from '../components/edit';
import HelpPage from '../components/help';
import NotFoundPage from '../components/notfound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const IndexRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default IndexRouter;
