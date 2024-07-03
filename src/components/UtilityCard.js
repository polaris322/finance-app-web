import {NumberFormater} from "../utils";
import React from "react";

const UtilityCard = ({goal, achieved, title }) => {
    return (
        <div className="p-3">
            <h4>{title}</h4>
            <div className="bg-light-green p-3 rounded-4 shadow-lg border-dashed">
                <div className="d-flex align-items-center text-white my-1">
                    <span className="fw-bold fs-6 text-dark me-2">Meta:</span> RD{NumberFormater.format(goal)}
                </div>
                <div className="d-flex align-items-center text-white my-1">
                    <span className="fw-bold fs-6 text-dark me-2">Alcanzado:</span> RD{NumberFormater.format(achieved)}
                </div>
                <div className="d-flex align-items-center text-white my-1">
                    <span className="fw-bold fs-6 text-dark me-2">Restante:</span> RD{NumberFormater.format(goal - achieved)}
                </div>
                <div className="mt-4">
                    <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={100 - achieved / goal * 100}
                         aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-success" style={{width: `${100 - achieved / goal * 100}%`}}>{100 - (achieved / goal) * 100}%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UtilityCard;