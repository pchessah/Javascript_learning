//use different action creators to increment, decrement, set a value(e.g 500), reset value to 0
//dispatch the action creators to the reducer and change the state
//to do thiis import the createStore module and use subsccribe to note state changes with each dispatch
 import {createStore} from 'redux';

 const status = {count: 0}

 const countReducer = (state=status, action) => {
     switch(action.type){
         case 'INCREMENT':
            const incrementBy = action.incrementBy ? action.incrementBy : 1
            return{
             count: state.count + incrementBy
             }
         case 'DECREMENT':
             const decrementBy = action.decrementBy ? action.decrementBy : 1
             return{
                 count: state.count - decrementBy
             }
         case 'SET':
             return{
                 count: action.count
             }
         case 'RESET':
             return{
                 count:0
             }
         default: {
             return state
         }
     }
 }

const store = createStore(countReducer);

store.subcribe(() => {
    console.log(store.getState());
});

const countPlus = (payload={})=>({
    type: 'INCREMENT',
    incrementBy: payload.incrementBy ? payload.incrementBy : 1
})
store.dispatch(countPlus({incrementBy:8}));

const countMinus = (payload={})=>({
    type: 'DECREMENT',
    decrementBy: payload.decrementBy ? payload.decrementBy : 1
})
store.dispatch(countMinus());

store.dispatch({
    type: 'SET',
    count: 500
});

store.dispatch({
    type: 'RESET'
})
