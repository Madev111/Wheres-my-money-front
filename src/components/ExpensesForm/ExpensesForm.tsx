import React from "react";

import './ExpensesForm.css';
export const ExpensesForm = ()=> {
    return <>
        <form action="" className="expenses_form">
            <label>
                Name: <br/>
                <input
                    type="text"
                    name="name"
                    required
                    maxLength={99}
                />
            </label>
            <label>
                Date: <br/>
                <input
                    type="date"
                    name="date"
                    required
                />
            </label>
            <label>
                Category: <br/>
                <input
                    type="text"
                    name="category"
                    required
                    maxLength={99}
                />
            </label>
            <label>
                Price: <br/>
                <input
                    type="number"
                    name="price"
                    required
                />
            </label>
            <button type="submit">Spend</button>
        </form>
    </>
}