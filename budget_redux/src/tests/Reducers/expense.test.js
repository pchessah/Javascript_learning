import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test ('should test default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test ('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test ('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'laptop',
        note: 'great',
        createdAt: 9000,
        amount: 45000
    }    

    const action = {
        type: 'ADD_EXPENSE',
        expense       
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})