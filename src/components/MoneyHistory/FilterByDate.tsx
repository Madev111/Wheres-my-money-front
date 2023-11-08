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
        setDates(dates => ({
            ...dates,
            [key]: value,

        }))};

    const sendForm = async (e: FormEvent)=> {
        e.preventDefault();




    }



    return <>
        <div className="dates_filter">
            <h2 className="dates_title">Select date range</h2>
            <form className="dates_form" onSubmit={sendForm}>
                <label>
                    <p>Start date:</p> <br/>
                    <input
                        type="date"
                        name="startDate"
                        required
                        onChange={e => updateDates('startDate', e.target.value)}

                    />
                </label>
                <label>
                    <p>End date:</p> <br/>
                    <input
                        type="date"
                        name="endDate"
                        required
                        onChange={e => updateDates('endDate', e.target.value)}
                    />
                </label>
                {
                    (dates.startDate === null) || (dates.endDate === null) ? <div className="incorrect_dates">Please select date range</div> : <Btn text="Search" to={`/${props.filter}/search/${dates.startDate}/${dates.endDate}`}/>
                }

            </form>
            <Btn text="Back home" to="/"/>
        </div>
    </>
}