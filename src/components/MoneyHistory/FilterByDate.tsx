import React, {FormEvent, useState} from "react";
import {Btn} from "../../common/Btn";

interface Props {
    filter: string;
}
export const FilterByDate = (props: Props)=> {

    const [dates, setDates] = useState({
        startDate: null,
        endDate: null,
    });

    const updateDates = (key: string, value: any) => {
        setDates(form => ({
            ...dates,
            [key]: value,
        }))};

    const sendForm = async (e: FormEvent)=> {
        e.preventDefault();

       console.log(dates);

    }



    return <>
        <form onSubmit={sendForm}>
            <label>
                Start date: <br/>
                <input
                    type="date"
                    name="startDate"
                    required
                    onChange={e => updateDates('startDate', e.target.value)}

                />
            </label>
            <label>
                End date: <br/>
                <input
                    type="date"
                    name="endDate"
                    required
                    onChange={e => updateDates('endDate', e.target.value)}
                />
            </label>
            <Btn text="Search" to={`/${props.filter}/search/${dates.startDate}/${dates.endDate}`}/>
        </form>
    </>
}