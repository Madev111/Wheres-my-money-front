import React, {useEffect, useState} from "react";
import { EarningsEntity } from "types";
import {EarningsTable} from "./EarningsTable";

export const EarningsList = ()=> {

    const [earningsList, setEarningsList] = useState<EarningsEntity[] | null>(null)

    useEffect(() => {
        (async ()=> {
            setEarningsList(null);
            const res = await fetch('http://localhost:3001/earnings/search');
            const {earningsList} = await res.json();
            setEarningsList(earningsList);
        })();
    }, []);

    if(earningsList === null) {
        return <h1>wait...</h1>
    }

    return <>
        <h2>Earnings</h2>
        <EarningsTable earnings={earningsList}/>
    </>

}