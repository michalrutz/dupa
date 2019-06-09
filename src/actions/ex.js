export const addExpense = ( {
    description="",
    amount=0,
    show=false,
    id= (new Date().getTime()+description) } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        description,
        id,
        amount,
        show    }
})