import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ExpenseDashboardPage from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFound';

const Approuter = () =>(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage} />
        </Switch>
    </div></BrowserRouter>
);

export default Approuter;