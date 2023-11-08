import React, {FormEvent, useEffect, useState} from "react";
import { EarningsEntity } from "types";

import './EarningsForm.css';
import {Btn} from "../../common/Btn";

export const EarningsForm = ()=> {

    const [form, setForm] = useState<EarningsEntity>({
        value: 0,
        date: new Date(),
        source: '',
    });
    const [resultInfo, setResultInfo] = useState<string | null>(null);

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))};
    const sendForm = async (e: FormEvent)=> {
        e.preventDefault();

        const res = await fetch('http://localhost:3001/earnings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        const data: EarningsEntity = await res.json();

        setResultInfo(`Added earning of value: ${data.value} PLN.`);
        setForm({
            ...form,
            value: 0,
            source: '',
        })
    }


    if(resultInfo !== null) {
        return <div className="info_result">
            <h2 className="info_title">{resultInfo}</h2>
            <div className="btn_div">
                <button onClick={()=> setResultInfo(null)}>Add another one</button>
                <Btn text="Back home" to="/"/>
            </div>
        </div>;
    }

    return <>
        <form onSubmit={sendForm} className="add_form">
            <h2 className="form_title">Add your money</h2>
            <label>
                <p>How much money you got:</p> <br/>
                <input
                    type="number"
                    name="price"
                    required
                    value={form.value}
                    onChange={e => updateForm('value', e.target.value)}
                />
            </label>
            <label>
                <p>Date:</p> <br/>
                <input
                    type="date"
                    name="date"
                    required
                    onChange={e => updateForm('date', e.target.value)}
                />
            </label>
            <label>
                <p>Where did you get this money:</p> <br/>
                <input
                    type="text"
                    name="name"
                    required
                    maxLength={99}
                    value={form.source}
                    onChange={e => updateForm('source', e.target.value)}
                />
            </label>
            <div className="btn_div">
                <button type="submit">Add</button>
                <Btn text="Back home" to="/"/>
            </div>
        </form>
    </>
}