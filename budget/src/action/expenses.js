import uuid from 'uuid';

//add expense
 export const addExpense = ({
     description = '',
     note = '',
     amount = 0,
     createdAt = 0
 } = {}) => ({
     type: 'ADD_EXPENSE',
     expense: {
         id: uuid(),
         description,
         note,
         amount,
         createdAt
     }
 });

 //remove expense
export const removeExpense = ( expense ={}) => ({
     type: 'REMOVE_EXPENSE',
     id: expense.id
 });

 //edit expense
 export const editExpense = (id, updates) => ({
     type: 'EDIT_EXPENSE',
     id,
     updates
 });
