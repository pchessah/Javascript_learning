import{ sortByAmount } from '../../actions/filters';
 
test('should generate action object for sort by amount', () =>{
   const action = sortByAmount();
   expect(action).toEqual({type: 'SORT_BY_AMOUNT'});
});
