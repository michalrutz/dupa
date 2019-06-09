import React from "react";

const EditItem = ( {expense} ) => (
    <div>
        <p>{expense.description}</p>
        <p>{expense.amount}</p>
    </div>
)

export default EditItem;