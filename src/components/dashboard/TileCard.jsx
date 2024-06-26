import React from 'react';
import {NumberFormater} from "../../utils";

export const TileCard = ({income, outcome}) => {
    return (
        <div className="w-100 p-4">
            <div className="">
                <h5 className="fw-bold">Ingresos</h5>
                <div className="position-relative d-flex mb-3">
                    <div className="circle bg-green d-flex align-items-center px-4">
                        <span className="fw-bold fs-1 text-white m-auto line-height-1">+$</span>
                    </div>
                    <div className="left-rectangle border-green shadow-green d-flex align-items-center">
                        <span className="fw-bold fs-4 m-auto">RD {NumberFormater.format(income)}</span>
                    </div>
                </div>
            </div>
            <div>
                <h5 className="fw-bold">Egresos</h5>
                <div className="position-relative mb-3">
                    <div className="right-rectangle border-red d-flex align-items-center">
                        <span className="fw-bold fs-4 m-auto">RD {NumberFormater.format(outcome)}</span>
                    </div>
                    <div className="right-circle red-gradient bg-green d-flex align-items-center px-4">
                        <span className="fw-bold fs-1 text-white m-auto line-height-1">-$</span>
                    </div>
                </div>
            </div>
            <div>
                <h5 className="fw-bold">Disponible</h5>
                <div className="position-relative d-flex mb-2">
                    <div className="circle yellow-gradient bg-green d-flex align-items-center px-4">
                        <span className="fw-bold fs-1 text-white m-auto line-height-1">=$</span>
                    </div>
                    <div className="left-rectangle border-yellow d-flex align-items-center">
                        <span className="fw-bold fs-4 m-auto">RD {NumberFormater.format(income - outcome)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}