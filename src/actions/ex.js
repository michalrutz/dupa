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

export const addExpenseFB = (Data={}) => {
    return (dispatch) => {
        const {description="",amount=0, show=false} = Data
        const expense = { description, amount, show };

        database.ref('expenses').push(expense).then((ref) => {
          dispatch({
            type: "ADD_EXPENSE",
            expense: {
              description,
              amount,
              show,
              id: ref.key
            }
          }        )})

    }
}

