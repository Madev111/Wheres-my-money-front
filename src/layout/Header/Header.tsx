import React from "react";

import './Header.css'
import {Btn} from "../../common/Btn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSackDollar} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

export const Header = ()=> {
    return <>
        <header>
            <div className="title_container">
                <NavLink to="/"><h2>Where's my <FontAwesomeIcon icon={faSackDollar} /></h2></NavLink>
            </div>
            <div className="user_container">
                <Btn text="Add expense" to="/expenses"/>
                <Btn text="Expenses history" to="/expenses/search"/>
                <Btn text="Add earning" to="/earnings"/>
                <Btn text="Earnings history" to="/earnings/search"/>
            </div>
            <div className="log_container">
                <Btn text="Log in"/>
                <Btn text="Register"/>

            </div>

        </header>

    </>
}