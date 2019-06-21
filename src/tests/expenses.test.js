import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpenseFB, addExpense  } from '../actions/expenses';
import expenses from '../tests/testdata/expenses';
import database from '../firebase/firebase';

const createMockStore = configureMockStore([thunk]);


test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

// ASYNC

test("should add expence to the db and store", (done) =>{
    const store = createMockStore({});
    const expenseData = { description: "Koala", amount:3, show:false};

    store.dispatch(addExpenseFB(expenseData)).then( () =>{
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            expense: {
                ...expenseData,
                id: expect.any(String)
                },
            type: "ADD_EXPENSE",
        });
        database.ref(`expenses/${actions[0].expense.id}`)
            .once("value")
            .then((snapshot)=> {
                expect(snapshot.val()).toEqual(expenseData);
            })
        done();
    } );   
} );



// test('should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });
