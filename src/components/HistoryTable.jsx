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
                    <th scope="col" className="text-decoration-underline">Fundo de Emergencia RD$</th>
                    <th scope="col" className="text-decoration-underline">Proyecto RD$</th>
                    <th scope="col" className="text-decoration-underline">Actividade RD$</th>
                    <th scope="col" className="text-decoration-underline">Inversión RD$</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{format(new Date(item.date), 'MM-dd')}</td>
                            <td>{NumberFormater.format(item.income.amount)}</td>
                            <td>{NumberFormater.format(item.outcome.amount)}</td>
                            <td>{NumberFormater.format(item.ahorro.amount)}</td>
                            <td>{NumberFormater.format(item.emergency.amount)}</td>
                            <td>{NumberFormater.format(item.project.amount)}</td>
                            <td>{NumberFormater.format(item.activity.amount)}</td>
                            <td>
                                {NumberFormater.format(
                                    item.income.total + item.income.amount -
                                    (item.outcome.amount + item.project.amount + item.activity.amount + item.ahorro.amount + item.emergency.amount) -
                                    (item.outcome.total + item.project.total + item.activity.total + item.ahorro.total + item.emergency.total)
                                )}
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}