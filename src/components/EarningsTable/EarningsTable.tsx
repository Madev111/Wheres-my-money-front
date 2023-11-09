import React from "react";
import { EarningsEntity } from "types";
import {EarningsTableRow} from "./EarningsTableRow";

interface Props {
    earnings: EarningsEntity[],
}
export const EarningsTable = (props: Props) => {


    return (
        <table>
            <thead>
            <tr>
                <th>How much?</th>
                <th>When?</th>
                <th>From where?</th>
            </tr>
            </thead>
            <tbody>
            {
                props.earnings.map(earning => (
                    <EarningsTableRow key={earning.id} earning={earning}/>
                ))
            }
            </tbody>
        </table>
    )
}