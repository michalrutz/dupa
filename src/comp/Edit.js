import React from "react";
import { connect } from "react-redux";
import EditItem from "./EditItem";

export const Edit = (props) => {
    return(
        <div>
            <EditItem key={props.expense.id} expense={props.expense}/>       
        </div> 
        )
}   
const mapStateToProps = (state, props) => ({
    expense:state.expense.find(
        (expense) => expense.id === props.match.params.id)
})

export default connect(mapStateToProps)(Edit);

// {props.expense.map(
//     (item) => {
//         if (item.id === props.match.params.id)
//         return <EditItem key={props.match.params.id} description={item.description} amount={item.amount}/>
//     } )}