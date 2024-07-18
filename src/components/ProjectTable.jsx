import React from 'react';
import {getObjectByValue, NumberFormater} from "../utils";
import {PAYMENT_METHOD, PAYMENT_STATUS_ENUM} from "../config/enums";
import {AiOutlineCheck, AiOutlineClockCircle} from "react-icons/ai";
import {format} from "date-fns";
import GanttChart from "./GanttChart";

export const ProjectTable = ({data, id, onUpdateStatus, onUpdate}) => {
    const updateStatus = (taskId, status) => {
        onUpdateStatus(id, taskId, status).then((res) => {
            if (res.success) {
                onUpdate();
            }
        });
    }

    return (
        <div className="row">
            <div className="col-md-8">
                <table className="table bg-transparent no-border table-responsive-sm table-hover table-sm text-uppercase">
                    <thead>
                    <tr>
                        <th scope="col" className="text-decoration-underline w-35">Descripción</th>
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
                                </td>
                                <td>{format(new Date(item.start_date), 'MM-dd-yy')}</td>
                                <td>{format(new Date(item.end_date), 'MM-dd-yy')}</td>
                                <td>{NumberFormater.format(item.amount)}</td>
                                <td>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            {getObjectByValue(PAYMENT_METHOD, item.payment_method).name}
                                            { getObjectByValue(PAYMENT_METHOD, item.payment_method).icon && (
                                                <img className="ms-1 img-xs"
                                                     src={getObjectByValue(PAYMENT_METHOD, item.payment_method).icon}
                                                     alt={getObjectByValue(PAYMENT_METHOD, item.payment_method).name} />
                                            )}
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                // pending
                                                if (item.status === PAYMENT_STATUS_ENUM.PENDING) {
                                                    updateStatus(item.id,PAYMENT_STATUS_ENUM.FINISHED);
                                                } else {
                                                    updateStatus(item.id, PAYMENT_STATUS_ENUM.PENDING);
                                                }
                                            }}
                                            className="bg-transparent p-0 border-0 d-flex align-items-center align-content-center">
                                            {
                                                item.status === PAYMENT_STATUS_ENUM.PENDING ? <AiOutlineClockCircle className="text-white fs-5" /> : <AiOutlineCheck className="text-white fs-5" />
                                            }
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div className="col-md-4">
                <GanttChart data={data}/>
            </div>
        </div>
    )
}