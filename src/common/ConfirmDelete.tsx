import React, {MouseEvent} from "react";
import {Link, useLocation} from "react-router-dom";
import {Btn} from "./Btn";


export const ConfirmDelete = ()=> {

    const location = useLocation();
    const {data} = location.state;
    console.log(data)

    const deleteData = async(e: MouseEvent)=> {

        e.preventDefault()

        const res = await fetch(`${data.value? 
            `http://localhost:3001/earnings/${data.id}` 
            : `http://localhost:3001/expenses/${data.id}`}`, {
            method: 'DELETE'
        });


        if([400,500].includes(res.status)) {
            const error = await res.json();
            alert(`Error occurred: ${error.message} `)
            return
        }

    }

    return <>
        <div className="confirm_delete">
            <h1 className="confirm_title">Are you sure you want to delete this {data.value ? data.value : data.price} PLN entry from {(new Date(data.date)).toLocaleDateString()}?</h1>
            <div className="btn_div">
                <button className="btn" onClick={deleteData}><Link to="/delete/success">Delete</Link></button>
                <Btn text="Back to home" to="/"/>
            </div>

        </div>
    </>
}