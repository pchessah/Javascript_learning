import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

const expenseData = {
    id: '123abc',
    description: 'Rent',
    amount: 564400,
    createdAt: 600000,
    note: 'Payment for January'
};
//adding 
test('should add expense action object with provided values', () => {
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenseData
    });
});
//removing
test('should remove expense action object with provided values', () => {
    const action = removeExpense(expenseData);
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: expenseData.id
    });
});
//editing
test('should edit expense action object with provided values', () => {
    const action = editExpense( expenseData.id, { note: 'trip to Chiang Mai'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: expenseData.id,
        updates: {
            note: 'trip to Chiang Mai'
        }
    });
});