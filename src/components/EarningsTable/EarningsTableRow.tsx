import React from "react";
import { EarningsEntity } from "types";

interface Props {
    earning: EarningsEntity,
}
export const EarningsTableRow = (props: Props) => {

    return <>
        <tr>
            <td>{props.earning.value} PLN</td>
            <td>{(new Date(props.earning.date)).toLocaleDateString()}</td>
            <td>{(props.earning.source).toLowerCase()}</td>
        </tr>
    </>
}