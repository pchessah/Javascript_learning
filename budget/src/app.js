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
//import './firebase/firebase';

const store = configureStore ();

store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt: 2000 }));
store.dispatch(addExpense({description: 'Gas bill', amount: 5789, createdAt: 11000 }));
store.dispatch(addExpense({description: 'Visit Pakistan', amount: 7000, createdAt: 9000 }))
const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app')); 
    

