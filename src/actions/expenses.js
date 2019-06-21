import database from "../firebase/firebase";
import 'firebase/database'


export const addExpense = ( 
    {description="",amount=0,show=false, id} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        description,
        amount,
        show,
        id }
})

export const addExpenseFB = (exData={}) => {
    return (dispatch) => {
        const {description="",amount=0, show=false} = exData
        const expense = { description, amount, show };

        return database.ref('expenses').push(expense)             //pushes to db
        .then((ref) => { 
          dispatch( addExpense( { ...expense, id: ref.key} ) )    //localStorage Redux
    })
  }
} 