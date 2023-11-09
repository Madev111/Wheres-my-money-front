import React from "react";
import {Btn} from "../../common/Btn";

export const DeletedSuccess = ()=> {
    return <>
        <div className="deleted_success">
            <h1 className="deleted_title">Selected entry has been deleted!</h1>
            <div className="btn_div">
                <Btn text="Back to home" to="/"/>
            </div>
        </div>
    </>
}