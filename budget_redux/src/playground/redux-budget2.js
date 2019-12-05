import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
 
//add expense
const addExpense = (expense = {}) => ({// action creator
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description: expense.description,
        note: expense.note,
        amount: expense.amount,
        createdAt: expense.createdAt
    }
});
 
//remove expense
const removeExpense = ( expense ={}) => ({
    type: 'REMOVE_EXPENSE',
    id: expense.id
});
 
//edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
 
//set_text_filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
 
//sort_by_date
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});
 
//sort_by_amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});
 
//Set_start_date
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
 
//set_end_date
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
 
//expenses reducer
const expensesReducerDefaultState = [];
 
const expensesReducer = (state = expensesReducerDefaultState, action) => {
   switch(action.type) {
       case 'ADD_EXPENSE':
           return [
               ...state,
               action.expense
           ];
       case 'EDIT_EXPENSE':
       return state.map((expense) => {
           if (expense.id === action.id) {
               return {
                   ...expense,
                   ...action.updates
               }
           } else {
               return expense;
           }
       })
       case 'REMOVE_EXPENSE':
           return state.filter((expense) => expense.id !==action.id);
       default:
       return state;
   }
}
 
//filter reducer
const filtersReducerDefaultState = {
   text: '',
   sortBy: 'date',
   startDate: undefined,
   endDate: undefined
}
 
const filtersReducer = (state = filtersReducerDefaultState, action) => {
   switch (action.type) {
       case 'SET_TEXT_FILTER':
           return {
               ...state,
               text: action.text
           };
       case 'SORT_BY_AMOUNT':
           return {
               ...state,
               sortBy: 'amount'
           };
       case 'SORT_BY_DATE':
           return {
               ...state,
               sortBy: 'date'
           };
       case 'SET_START_DATE':
           return {
               ...state,
               startDate: action.startDate
           };
       case 'SET_END_DATE':
           return {
               ...state,
               endDate: action.endDate
           }
       default:
           return state;
   }
}
 //get Visible expenses (SELECTORS)
const getVisibleExpenses = ( expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch =typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch= typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
 
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
 };
//store creation
const store = createStore(
   combineReducers ({
       expenses: expensesReducer,
       filters: filtersReducer
   })
);
 
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
   console.log(visibleExpenses);
});
 
const expenseOne = store.dispatch(addExpense ({ description: 'Travelling', amount: 6000}));
const expenseTwo = store.dispatch(addExpense ({ description: 'Swimming', amount: 1500}));
const expenseThree = store.dispatch(addExpense ({description: 'Driving', amount: 800}));
const expenseFour = store.dispatch(addExpense ({description: 'Living', amount: 1300, createdAt: 11000}));
store.dispatch(setTextFilter('abe'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
 
 

 
// store.dispatch(removeExpense({ id: expenseOne.expense.id}));
 
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5989, description: 'mountain climbing'}));
 
// store.dispatch(sortByAmount());
// store.dispatch(setTextFilter('Travelling'));
 
// store.dispatch(setStartDate(1000));
// store.dispatch(setEndDate(2500));
 

