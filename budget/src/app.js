import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './Routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './action/expenses';
import { setTextFilter } from './action/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore ();

store.dispatch(addExpense({description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({description: 'Gas bill', amount: 5789 }));
store.dispatch(setTextFilter('water'));

setTimeout (()  => {
    store.dispatch(setTextFilter('bill'));
}, 4000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses); 

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app')); 
    

