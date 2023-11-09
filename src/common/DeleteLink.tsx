import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import { EarningsEntity, ExpensesEntity } from "types";

interface Props {
    data: EarningsEntity | ExpensesEntity;
}

export const DeleteLink = (props: Props)=> {

    return <Link className="delete_link" to="/delete" state={{data: props.data}}><FontAwesomeIcon icon={faTrash} /></Link>

}