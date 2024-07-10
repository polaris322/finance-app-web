import React from 'react';
import {NumberFormater} from "../utils";

export const CalculatorTable = ({balance, duration, cutoa, interest}) => {
    let tableData= [];
    let principal = 0;
    let mobiticion= 0;
    let tempBalance = balance;
    for (let i = 0; i < duration; i++) {
        mobiticion = (tempBalance * interest / 100).toFixed(2);
        principal = cutoa - mobiticion;
        if (principal < 0) {
            principal = 0;
            tempBalance += mobiticion - cutoa;
        } else {
            tempBalance -= principal;
        }

        tableData.push({
            id: i,
            pago: cutoa,
            interest: mobiticion,
            principal,
            balance: tempBalance
        });
    }

    return (
        <div>
            <table className="table table-outlined table-bordered bg-transparent border-black table-sm text-uppercase table-no-top-bottom-border">
                <thead>
                    <tr>
                        <th scope="col" className="border-end-0 text-center">Num</th>
                        <th scope="col" className="border-start-0 border-end-0 text-center">Pago</th>
                        <th scope="col" className="border-start-0 border-end-0 text-center">Principal</th>
                        <th scope="col" className="border-start-0 border-end-0 text-center">Interés</th>
                        <th scope="col" className="border-start-0 text-center w-25">Balance del préstamo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                        <td>{NumberFormater.format(balance)}</td>
                    </tr>
                    {
                        tableData.map(item => (
                            <tr>
                                <td>{item.id + 1}</td>
                                <td>{NumberFormater.format(cutoa)}</td>
                                <td>{NumberFormater.format(item.principal)}</td>
                                <td>{NumberFormater.format(item.interest)}</td>
                                <td>{NumberFormater.format(item.balance)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}