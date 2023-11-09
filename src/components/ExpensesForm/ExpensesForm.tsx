import React, {FormEvent, useEffect, useState} from "react";
import {CategoryEntity, ExpensesEntity} from 'types'
import {Btn} from "../../common/Btn";

import './ExpensesForm.css';



export const ExpensesForm = ()=> {

    const [categories, setCategories] = useState<CategoryEntity[]| [] >([]);
    const [form, setForm] = useState<ExpensesEntity>({
        name: '',
        date: new Date(),
        category: '',
        price: 0,
    });
    const [resultInfo, setResultInfo] = useState<string | null>(null);



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

        const data: ExpensesEntity = await res.json();

        setResultInfo(`Added ${data.category} expense of value: ${data.price} PLN.`);
        setForm({
            ...form,
            name: '',
            category: '',
        })

    }

    useEffect(() => {
        downloadCategories();
    }, []);


    if(resultInfo !== null) {
        return <>
            <div className="info_result">
                <h2 className="info_title">{resultInfo}</h2>
                <div className="btn_div">
                    <button onClick={()=> setResultInfo(null)}>Add another one</button>
                    <Btn text="Back home" to="/"/>
                </div>
            </div>;
        </>

    }



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
                    required
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
                    onChange={e => updateForm('price', e.target.value)}
                />
            </label>
            <div className="btn_div">
                {
                    (form.price <= 0 || form.date === undefined || form.category === undefined || form.name === undefined) ?
                        <Btn text="Add" to="#"/>
                        : <button type="submit">Add</button>
                }
                <Btn text="Back home" to="/"/>
            </div>

        </form>
    </>
}