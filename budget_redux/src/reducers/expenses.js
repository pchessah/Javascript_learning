//expenses reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
        
        case 'SET_EXPENSES':
            return action.expenses
        default:
        return state;
    }
 }