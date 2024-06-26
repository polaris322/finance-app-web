import React from 'react';
import {getObjectByValue, NumberFormater} from "../utils";
import {PAYMENT_METHOD} from "../config/enums";
import {AiOutlineCheck, AiOutlineClockCircle} from "react-icons/ai";

export const ProjectTable = ({data, id, onUpdateStatus, onUpdate}) => {
    const updateStatus = (taskId, status) => {
        onUpdateStatus(id, taskId, status).then((res) => {
            if (res.success) {
                onUpdate();
            }
        });
    }

    return (
        <div>
            <table className="table bg-transparent no-border table-responsive-sm table-hover table-sm text-uppercase">
                <thead>
                    <tr>
                        <th scope="col" className="text-decoration-underline">Descripción</th>
                        <th scope="col" className="text-decoration-underline">Fecha Inicio</th>
                        <th scope="col" className="text-decoration-underline">Fecha Fin</th>
                        <th scope="col" className="text-decoration-underline">Gasto RD$</th>
                        <th scope="col" className="text-decoration-underline">Cuenta/Banco</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((item, index) => (
                        <tr key={index}>
                            <td className="d-flex align-items-center align-content-center">
                                -{item.name}
                                <button
                                    onClick={(e) => {
                                        // pending
                                        if (item.status === "0") {
                                            updateStatus(item.id,"1");
                                        } else {
                                            updateStatus(item.id, "0");
                                        }
                                    }}
                                    className="bg-transparent p-0 border-0 d-flex align-items-center align-content-center ms-2">
                                    {
                                        item.status === "0" ? <AiOutlineClockCircle className="text-white fs-5" /> : <AiOutlineCheck className="text-white fs-5" />
                                    }
                                </button>
                            </td>
                            <td>{item.start_date}</td>
                            <td>{item.end_date}</td>
                            <td>{NumberFormater.format(item.amount)}</td>
                            <td className="d-flex align-items-center">
                                {getObjectByValue(PAYMENT_METHOD, item.payment_method).name}
                                { getObjectByValue(PAYMENT_METHOD, item.payment_method).icon && (
                                    <img className="ms-1 img-xs"
                                         src={getObjectByValue(PAYMENT_METHOD, item.payment_method).icon}
                                         alt={getObjectByValue(PAYMENT_METHOD, item.payment_method).name} />
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