import React, {useEffect, useState} from "react";
import { EarningsEntity } from "types";
import {useParams} from "react-router-dom";
import {EarningsTable} from "./EarningsTable";
import {Btn} from "../../common/Btn";

export const EarningsListByDate = ()=> {

    const [earningsList, setEarningsList] = useState<EarningsEntity[] | null>(null);

    const {startDate, endDate} = useParams();

    useEffect(() => {
        (async()=> {
            setEarningsList(null);
            const res = await fetch(`http://localhost:3001/earnings/search/${startDate}/${endDate}`);
            const {earningsList} = await res.json();
            setEarningsList(earningsList);
        })();
    }, []);

    if(earningsList === null) {
        return <h1>wait...</h1>
    }



    return <>
        <h2>Earnings from {startDate} to {endDate}</h2>
        <EarningsTable earnings={earningsList}/>
        <Btn text="Change dates" to="/dates/earnings"/>
        <Btn text="Back to home" to="/"/>
    </>
}