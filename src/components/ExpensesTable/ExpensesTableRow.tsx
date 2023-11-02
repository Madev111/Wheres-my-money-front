import React from "react";
import { ExpensesEntity } from "types";

interface Props {
    expense: ExpensesEntity,
}
export const ExpensesTableRow = (props: Props)=> {

    return (
        <tr>
            <td>{props.expense.name}</td>
            <td>{(new Date(props.expense.date)).toLocaleDateString()}</td>
            <td>{(props.expense.category).toLowerCase()}</td>
            <td>{props.expense.price} PLN</td>
        </tr>

    )}