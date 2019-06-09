const persistedState = localStorage.getItem('expense') ? JSON.parse(localStorage.getItem('expense')) : [];

const expenseReducer = ( state = persistedState, action) => {
    switch(action.type) {
        case "ADD_EXPENSE":
            localStorage.setItem("expense", JSON.stringify([...state, action.expense]))
            return [...state, action.expense]
        default: return state
    }
}

export default expenseReducer;

