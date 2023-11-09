import React from "react";
import { ExpensesEntity } from "types";
import {ExpensesTableRow} from "./ExpensesTableRow";

interface Props {
    expenses: ExpensesEntity[],
}
export const ExpensesTable = (props: Props)=> {

    return <>
        <table>
            <thead>
            <tr>
                <th>For what?</th>
                <th>When?</th>
                <th>Where?</th>
                <th>How much?</th>
            </tr>
            </thead>
            <tbody>
            {
                props.expenses.map(expense => (
                    <ExpensesTableRow key={expense.id} expense={expense}/>
                ))
            }
            </tbody>
        </table>

    </>
}