import {NumberFormater} from "../utils";
import React, {useEffect, useState} from "react";
import {fetchTotalBalance} from "../services/StatisticsService";
import StrikeButton from '../assets/images/strike_button.png';

const UtilityCard = () => {
    const [income, setIncome] = useState(0);
    const [outcome, setOutcome] = useState(0);

    useEffect(() => {
        fetchTotalBalance().then(res => {
            if (res.success) {
                setIncome(res.data.income);
                setOutcome(res.data.outcome);
            }
        });
    }, []);

    return (
        <div className="p-3">
            <h4>% Saturacion general</h4>
            <div className="bg-light-green p-3 rounded-4 shadow-lg border-dashed h5 fw-normal">
                <div className="d-flex align-items-center text-white my-2">
                    <span className="fw-bold fs-6 text-dark me-2">Ingresos Totales:</span> RD{NumberFormater.format(income)}
                </div>
                <div className="d-flex align-items-center text-white my-2">
                    <span className="fw-bold fs-6 text-dark me-2">Egresos Totales:</span> RD{NumberFormater.format(outcome)}
                </div>
                <div className="d-flex align-items-center text-white my-2">
                    <span className="fw-bold fs-6 text-dark me-2">Restante:</span> RD{NumberFormater.format(income - outcome)}
                </div>
                <div className="mt-3">
                    <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={outcome / income * 100}
                         aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-success" style={{width: `${outcome / income * 100}%`}}>
                            {(outcome / income * 100).toFixed(1)}%
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <img src={StrikeButton} alt="button" className="img img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default UtilityCard;