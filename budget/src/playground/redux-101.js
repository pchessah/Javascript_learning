import { createStore } from 'redux'; //creates a redux store

const defaultState = { count: 0} //defaultstate

const counterReducer = (state = defaultState, action) => {  //reducer
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1 //returns new state
            }
        case 'DECREMENT':
            return {
                count: state.count - 1 //returns new state
            }
        default:
            return state;
    }
}

const store = createStore (counterReducer); //the store is created and stores state returned by the reducer


store.subscribe(() => { //called everytime an action is dispatched, listens for changes
    console.log(store.getState()); //return current state
});

store.dispatch ({    //dispatching an action,,trigger state change based on type
    type: 'INCREMENT'
});

store.dispatch ({    //dispatching an action,,trigger state change based on type
    type: 'DECREMENT'
});