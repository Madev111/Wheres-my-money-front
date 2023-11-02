import React, {useEffect, useState} from "react";
import { EarningsEntity } from "types";
import {EarningsTable} from "./EarningsTable";
import {Btn} from "../../common/Btn";
import {Calc} from "../../common/Calc";

export const EarningsList = ()=> {

    const [earningsList, setEarningsList] = useState<EarningsEntity[] | null>(null);
    const [earningsValue, setEarningsValue] = useState<number[] | null>(null);

    useEffect(() => {
        (async ()=> {
            const res = await fetch('http://localhost:3001/earnings/search');
            const {earningsList} = await res.json();
            setEarningsList(earningsList);
        })();
    }, []);

    useEffect(() => {
        (async()=> {
            if(earningsList !== null) {
                const values = earningsList.map(earning => earning.value);
                if(values.length > 0) {
                    setEarningsValue(values);
                }
            }
        })();
    }, [earningsList]);

    if(earningsList === null) {
        return <h1>wait...</h1>
    }

    return <>
        <h2>Earnings</h2>
        <EarningsTable earnings={earningsList}/>
        <div>
            <Btn text="Filter by date" to="/dates/earnings"/>
            <Btn text="Back to home" to="/"/>
            {earningsValue === null? <p>Loading...</p> : <Calc values={earningsValue}/>}
        </div>
    </>

}