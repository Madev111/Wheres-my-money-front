import React from "react";
import {Btn} from "../../common/Btn";

export const NotFound = () => (
    <>
        <div className="not_found">
            <h1>You are lost</h1>
            <Btn text="Back to home" to="/"/>
        </div>
    </>
)