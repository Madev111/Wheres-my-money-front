import React from "react";
import {Btn} from "../../common/Btn";

import './HomeView.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoneyBill1Wave} from "@fortawesome/free-solid-svg-icons";

export const HomeView = ()=> {

    return <>
        <div className="home_view">
            <h1>Welcome to app which help you to manage your finances</h1>
            <div className="home_btn">
                <div className="add_btn">
                    <h2>Add your financial data</h2>
                    <Btn text={`Add expense`} to="/expenses"/>
                    <Btn text="Add earning" to="/earnings"/>
                </div>
                <div className="history_btn">
                    <h2>Check your financial history</h2>
                    <Btn text="Expenses history" to="/expenses/search"/>
                    <Btn text="Earnings history" to="/earnings/search"/>
                </div>

            </div>
        </div>

    </>
}
