import React, {useEffect, useState} from "react";
import { CategoryEntity } from "types";
import {Btn} from "../../common/Btn";

export const FilterExpensesByCategory = ()=> {

    const [categories, setCategories] = useState<CategoryEntity[]>([]);

    useEffect(() => {
        (async ()=> {
            const res = await fetch('http://localhost:3001/categories/search');
            const {categoriesList} = await res.json();
            setCategories(categoriesList);
        })();
    }, []);

    return <>
        <div className="categories">
            <h2 className="categories_title">Select category</h2>
            <ul className="category_list">
                {
                    categories.map(category => <li key={category.id}><Btn text={category.name} to={`/expenses/search/${category.name}`}/></li>)
                }
            </ul>
            <Btn text="Back home" to="/"/>
        </div>
    </>
}