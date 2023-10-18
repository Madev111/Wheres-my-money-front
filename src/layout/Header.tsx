import React from "react";

import './Header.css';

export const Header = ()=> {
    return <>
        <header>
            <div className="title_container">
                <h2>Where's my <strong>money</strong>?</h2>
            </div>
            <div className="btn_container">
                <button>Log in</button>
                <button>Register</button>
            </div>

        </header>

    </>
}