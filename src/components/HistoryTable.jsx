import React from 'react';
import {NumberFormater} from "../utils";
import {format} from 'date-fns';

export const HistoryTable = ({data}) => {
    return (
        <div>
            <table className="table bg-transparent no-border table-responsive-sm table-hover table-sm text-uppercase">
                <thead>
                <tr>
                    <th scope="col" className="text-decoration-underline">Fecha</th>
                    <th scope="col" className="text-decoration-underline">Ingreso RD$</th>
                    <th scope="col" className="text-decoration-underline">Egreso RD$</th>
                    <th scope="col" className="text-decoration-underline">Ahorro RD$</th>
                    <th scope="col" className="text-decoration-underline">Inversión RD$</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{format(new Date(item.date), 'MM-dd')}</td>
                            <td>{NumberFormater.format(item.income)}</td>
                            <td>{NumberFormater.format(item.outcome)}</td>
                            <td>{NumberFormater.format(item.project + item.activity)}</td>
                            <td>{NumberFormater.format(item.income - item.outcome - item.project - item.activity)}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}