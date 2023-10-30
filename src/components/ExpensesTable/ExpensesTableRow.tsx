import React from "react";
import { ExpensesEntity } from "types";

interface Props {
    expense: ExpensesEntity,
}
export const ExpensesTableRow = (props: Props)=> {

    return (
        <tr>
            <td>{props.expense.name}</td>
            <td>{(props.expense.date).toString()}</td>
            <td>{props.expense.category}</td>
            <td>{props.expense.price}</td>
        </tr>

    )}