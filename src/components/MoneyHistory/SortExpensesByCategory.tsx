import React, {useEffect, useState} from "react";
import { CategoryEntity } from "types";

export const SortExpensesByCategory = ()=> {

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
                categories.map(category => <li key={category.id}>{category.name}</li>)
            }
        </ul>
    </>
}