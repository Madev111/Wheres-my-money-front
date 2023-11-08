import React from "react";
import { ExpensesEntity } from "types";
import {DeleteLink} from "../../common/DeleteLink";

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
            <td><DeleteLink data={props.expense}/></td>
        </tr>

    )}