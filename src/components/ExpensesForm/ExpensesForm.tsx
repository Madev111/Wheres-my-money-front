import React, {FormEvent, useEffect, useState} from "react";
import {ExpensesEntity} from 'types'



import './ExpensesForm.css';


export const ExpensesForm = ()=> {

    const [categories, setCategories] = useState<string[] | [] >([]);
    const [form, setForm] = useState<ExpensesEntity>({
        name: '',
        date: new Date(),
        category: '',
        price: 0,
    });
    const downloadCategories = async ()=> {

        const res = await fetch('http://localhost:3001/categories/search');
        const data = await res.json();
        setCategories(data);
    }
    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))};

    const sendForm = async (e: FormEvent)=> {
        e.preventDefault();

        const res = await fetch('http://localhost:3001/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });

    }

    useEffect(() => {
        downloadCategories();
    }, []);


    return <>
        <form onSubmit={sendForm} className="expenses_form">
            <label>
                Name: <br/>
                <input
                    type="text"
                    name="name"
                    required
                    maxLength={99}
                    value={form.name}
                    onChange={e => updateForm('name', e.target.value)}
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
                Category: <br/>
                <select
                    onChange={e => updateForm('category', e.target.value)}>
                    {
                        categories.map(
                            category => (
                                <option
                                    key={category}
                                    value={category}>
                                    {category}
                                </option>
                            )
                        )
                    }
                </select>
            </label>
            <label>
                Price: <br/>
                <input
                    type="number"
                    name="price"
                    required
                    value={form.price}
                    onChange={e => updateForm('price', e.target.value)}
                />
            </label>
            <button type="submit">Spend</button>
        </form>
    </>
}