import database from '../firebase/firebase';

 
//add expense
export const addExpense =(expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense= (expenseData = {}) => {
    return(dispatch) => {
        const {
            description= '',
            note= '',
            amount= 0,
            createdAt= 0
        } = expenseData;
        const expense = {description, note, amount, createdAt};

        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    }
};
 
//remove expense
export const removeExpense = ( expense ={}) => ({
    type: 'REMOVE_EXPENSE',
    id: expense.id
});

export const startRemoveExpense = ({ id } =  {}) => {
    return(dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense ({id}))
        })
    }
}
 
//edit expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense =(id, updates) => {
    return (dispatch) => {
       return database.ref(`expenses/${id}`).update (updates).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}

//set expenses
export const setExpenses =(expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {  //creating an action that returns a function
    return (dispatch) => {  //function that takes parameter dispatch
        return database.ref('expenses').once('value').then((snapshot) => { // ref is method to location of database, once fetches data from database ,then is a promise
            const expenses =[] //empty array where we will put all the expenses

            snapshot.forEach((childSnapshot) => { //performing function on each item in array, passing childsnapshot as parameter
                expenses.push({                    //returning new array where we push each expense into array
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })

            dispatch(setExpenses(expenses))
        })
    }
}