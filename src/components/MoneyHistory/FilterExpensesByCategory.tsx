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
        <ul>
            {
                categories.map(category => <li key={category.id}><Btn text={category.name} to={`/expenses/search/${category.name}`}/></li>)
            }
        </ul>
    </>
}