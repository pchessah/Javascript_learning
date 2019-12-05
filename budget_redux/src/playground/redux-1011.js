import {createStore} from 'redux';

const defaultState = { count: 0};

const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
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
                count:action.count
            }
        default:
            return state;
    }
}
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState());
})

const incrementCount = (payload = {}) => ({
    type: 'INCREMENT',
    incrementBy: payload.incrementBy ? payload.incrementBy : 1
})
store.dispatch(incrementCount());
const decrementCount = (payload = []) => ({
    type: 'DECREMENT',
    decrementBy: payload.decrementBy ? payload.decrementBy : 1
})
// store.dispatch({
//     type: 'DECREMENT',
    
// });
store.dispatch(decrementCount({decrementCount}))
store.dispatch({
    type: 'SET',
    count: 250});

store.dispatch({
        type: 'DECREMENT',
        decrementBy: 5
    });
const payload = { incrementBy : 55}
store.dispatch(incrementCount(payload))

// //Action creators - functions that return objects/actions
// // const incrementCount =(payload = {}) => {
// //     return {
// //         type: 'INCREMENT',
// //         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy: 1
// //     };
// // };
// //const decrementCount = (payload = {}) => {
//     //     return{
//     //         type: 'DECREMENT',
//     //         decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy: 1
//     //     };
//     // };

// const incrementCount = ({incrementBy= 1} = {}) => ({
//     type: 'INCREMENT',
//     incrementBy
// })

// const decrementCount = ({decrementBy=1} = {}) => ({
//     type: 'DECREMENT',
//     decrementBy
// })

// const setCount = ({count}) => {
//     return{
//         type: 'SET',
//         count
//     };
// };

// const resetCount = () => {
//     return {
//         type: 'RESET'
//     }
// };

// //reducers are pure functions

// const countReducer= (state = {count: 0}, action) => {
//     switch( action.type){
//         case 'INCREMENT' :
//            return {
//                count: state.count +action.incrementBy
//            }        

//         case 'DECREMENT':
//             return {
//                 count: state.count - action.decrementBy
//             }
//         case 'SET':
//             return{
//                 count:action.count
//             };
//         case 'RESET':
//                 return{
//                     count:0
//                 };
            
//         default:
//             return state;
//     }
// }
// const store = createStore (countReducer);

// store.subscribe(() => {
//     console.log(store.getState());
// });

// //Actions - an object that gets sent to the store

// //increment count
// store.dispatch(incrementCount({ incrementBy: 5}));

// store.dispatch(incrementCount());

// store.dispatch(resetCount());

// store.dispatch(decrementCount());

// store.dispatch(decrementCount({ decrementBy: 10}));

// store.dispatch(setCount({count: 101}));


// // store.dispatch({
// //     type: 'INCREMENT',
// //     incrementBy: 5

// // });

// // store.dispatch({
// //     type: 'INCREMENT'
// // });

// // store.dispatch({
// //     type: 'RESET'
// // });




// // store.dispatch({
// //     type: 'DECREMENT'
// // });

// // store.dispatch({
// //     type: 'DECREMENT',
// //     decrementBy: 10
// // });

// // store.dispatch({
// //     type: 'SET',
// //     count: 101
// // });

// // console.log(store.getState());