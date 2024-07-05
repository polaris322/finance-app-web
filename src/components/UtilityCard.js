import {NumberFormater} from "../utils";
import React from "react";

const UtilityCard = ({goal, data, title }) => {
    const result = data.reduce((acc, curr) => {
        if (curr.amount > 0) {
            acc.positiveSum += curr.amount;
        } else {
            acc.negativeSum += curr.amount;
        }
        return acc;
    }, { positiveSum: 0, negativeSum: 0 });
    const utilidades = result.negativeSum;
    const achieved = result.positiveSum;

    return (
        <div className="p-3">
            <h4>{title}</h4>
            <div className="bg-light-green p-3 rounded-4 shadow-lg border-dashed h5 fw-normal">
                <div className="d-flex align-items-center text-white my-2">
                    <span className="fw-bold fs-6 text-dark me-2">Meta:</span> RD{NumberFormater.format(goal)}
                </div>
                <div className="d-flex align-items-center text-white my-2">
                    <span className="fw-bold fs-6 text-dark me-2">Alcanzado:</span> RD{NumberFormater.format(achieved)}
                </div>
                <div className="d-flex align-items-center text-white my-21">
                    <span className="fw-bold fs-6 text-dark me-2">Utilidades:</span> RD{NumberFormater.format(utilidades)}
                </div>
                <div className="d-flex align-items-center text-white my-2">
                    <span className="fw-bold fs-6 text-dark me-2">Restante:</span> RD{NumberFormater.format(goal - achieved - utilidades)}
                </div>
                <div className="mt-3">
                    <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={(achieved + utilidades) / goal * 100}
                         aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-success" style={{width: `${(achieved + utilidades) / goal * 100}%`}}>
                            {(achieved + utilidades) / goal * 100}%
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 mt-4">
                <table className="table bg-transparent no-border table-responsive-sm table-hover table-sm text-uppercase">
                    <thead>
                    <tr>
                        <th scope="col" className="text-decoration-underline w-35">Fecha</th>
                        <th scope="col" className="text-decoration-underline">Monto</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((item, index) => (
                            <tr key={index}>
                                <td className={item.amount < 0 ? 'text-danger h6' : 'h6'}>{item.date}</td>
                                <td className={item.amount < 0 ? 'text-danger h6' : 'h6'}>{NumberFormater.format(item.amount)}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UtilityCard;