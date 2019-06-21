import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addExpenseFB } from "./actions/expenses";
import Hello from "./comp/Hello";

const Dashboard = ( props ) => (
    <div>
    <form onSubmit={(e) => {
        e.preventDefault();
        props.dispatch(addExpenseFB ( {description: document.getElementById("addedEx").value} ))
        } } > 
        <input type="text" id="addedEx"/>
        <button type="submit">submit</button>
    </form>
    <div>
            {props.expense.map( (expense) => { return (
                <Link to={`/${expense.id}`} key={expense.id} description={expense.description}>
                    <p>{expense.description}</p>
                </Link>
            )}
            )}
        </div>
        <Hello><p>send</p></Hello>
    </div>
)
const mapStateToProps = (state) => ({
    expense:state.expense
})

export default connect(mapStateToProps)(Dashboard);