import { createStore } from 'redux'; //creates a redux store


const defaultState = { count: 0} //defaultstate

const counterReducer = (state = defaultState, action) => {  //reducer
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = action.incrementBy ? action.incrementBy : 1;
                return {
                count: state.count + incrementBy //returns new state
            }
        case 'DECREMENT':
            const decrementBy = action.decrementBy ? action.decrementBy : 1;
                return {
                count: state.count - decrementBy //returns new state
            }
        case 'SET':
            return {
                count: action.count //returns new state
            }
              
        default:
            return state;
    }
}

const store = createStore (counterReducer); //the store is created and stores state returned by the reducer


store.subscribe(() => { //called everytime an action is dispatched, listens for changes
    console.log(store.getState()); //return current state
});
//ACTION CREATOR BELOW
const incrementCount = ({incrementBy =1} = {}) => ({ //creating action creator, destructured default payload 1
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({ //action creator, default payload is 1
    type: 'DECREMENT',
    decrementBy
})

store.dispatch (incrementCount());    //dispatching an action,,trigger state change based on type


store.dispatch (decrementCount()); //dispatching an action,,trigger state change based on type

store.dispatch ({    //dispatching an action,,trigger state change based on type
    type: 'SET',
    count: 250
});

store.dispatch ( decrementCount ({ decrementBy: 5 }));    //dispatching an action,,trigger state change based on type

store.dispatch ( incrementCount ({ incrementBy: 55 }));    //dispatching an action,,trigger state change based on type
   





