import React from "react";

interface Props {
    values: number[];
}
export const Calc = (props: Props)=> {


        const sum = props.values.reduce((prev, curr) => prev + curr,0);

        return <>
            <h2 style={{color: "white"}}>TOTAL: {sum} PLN.</h2>
        </>

}