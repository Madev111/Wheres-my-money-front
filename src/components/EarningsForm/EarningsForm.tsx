import React, {FormEvent, useState} from "react";
import { EarningsEntity } from "types";

export const EarningsForm = ()=> {

    const [form, setForm] = useState<EarningsEntity>({
        value: 0,
        date: new Date(),
        source: '',
    });

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
    }
    return <>
        <form onSubmit={sendForm} className="earnings_form">
            <label>
                How much money you got: <br/>
                <input
                    type="number"
                    name="price"
                    required
                    value={form.value}
                    onChange={e => updateForm('value', e.target.value)}
                />
            </label>
            <label>
                Date: <br/>
                <input
                    type="date"
                    name="date"
                    required
                    onChange={e => updateForm('date', e.target.value)}
                />
            </label>
            <label>
                Where did you get this money: <br/>
                <input
                    type="text"
                    name="name"
                    required
                    maxLength={99}
                    value={form.source}
                    onChange={e => updateForm('source', e.target.value)}
                />
            </label>
            <button type="submit">Spend</button>
        </form>
    </>
}