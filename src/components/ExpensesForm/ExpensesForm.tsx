import React, {FormEvent, useEffect, useState} from "react";
import {CategoryEntity, ExpensesEntity} from 'types'



import './ExpensesForm.css';
import {Btn} from "../../common/Btn";


export const ExpensesForm = ()=> {

    const [categories, setCategories] = useState<CategoryEntity[]| [] >([]);
    const [form, setForm] = useState<ExpensesEntity>({
        name: '',
        date: new Date(),
        category: '',
        price: 0,
    });
    const downloadCategories = async ()=> {

        const res = await fetch('http://localhost:3001/categories/search');
        const {categoriesList} = await res.json();
        setCategories(categoriesList);
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

        <form onSubmit={sendForm} className="add_form">
            <h2 className="form_title">Add your spend</h2>
            <label>
                <p>Name:</p> <br/>
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
                <p>Date:</p> <br/>
                <input
                    type="date"
                    name="date"
                    required
                    onChange={e => updateForm('date', e.target.value)}

                />
            </label>
            <label>
                <p>Category:</p> <br/>
                <select
                    onChange={e => updateForm('category', e.target.value)}>
                    {
                        categories.map(
                            category => (
                                <option
                                    key={category.id}
                                    value={category.name}>
                                    {category.name}
                                </option>
                            )
                        )
                    }
                </select>
            </label>
            <label>
                <p>Price:</p> <br/>
                <input
                    type="number"
                    name="price"
                    required
                    value={form.price}
                    onChange={e => updateForm('price', e.target.value)}
                />
            </label>
            <div className="btn_div">
                <button type="submit">Add</button>
                <Btn text="Back home" to="/"/>
            </div>

        </form>
    </>
}