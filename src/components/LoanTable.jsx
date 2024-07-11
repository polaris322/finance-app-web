import React from 'react';
import {PAYMENT_METHOD, PAYMENT_STATUS_ENUM} from "../config/enums";
import {
    AiFillFilePdf,
    AiOutlineCheck,
    AiOutlineClockCircle, AiOutlineMessage
} from "react-icons/ai";
import {getNextPaymentDate, getObjectByValue, NumberFormater} from "../utils";
import { format } from "date-fns";
import {DOMAIN} from "../config/API";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

export const LoanTable = ({hasCuota = true, title, data = [], onUpdateStatus, onUpdate}) => {
    const updateStatus = (id, status) => {
        onUpdateStatus(id, status).then((res) => {
            if (res.success) {
                onUpdate();
            }
        });
    }

    return (
        <div>
            <h5 className="text-uppercase">*{title}</h5>
            <table className="table bg-transparent no-border table-responsive-sm table-hover table-sm text-uppercase">
                <thead>
                <tr>
                    <th scope="col" className="text-decoration-underline w-35">Descripción</th>
                    <th scope="col" className="text-decoration-underline">Monto RD$</th>
                    {hasCuota && <th scope="col" className="text-decoration-underline">Plazo</th>}
                    <th scope="col" className="text-decoration-underline">Ultima Pago</th>
                    <th scope="col" className="text-decoration-underline">Metodo De Pago</th>
                    <th scope="col" className="text-decoration-underline">Proximo Pago</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div>-{item.name}</div>
                                    {
                                        item.note && (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                trigger={['hover', 'focus', 'click']}
                                                overlay={<Tooltip id="button-tooltip">{item.note}</Tooltip>}
                                            >
                                                <button className="ms-2 border-0 m-0 p-0 bg-transparent d-flex align-items-center">
                                                    <AiOutlineMessage className="text-white" />
                                                </button>
                                            </OverlayTrigger>
                                        )
                                    }
                                </div>
                            </td>
                            <td>{NumberFormater.format(item.amount)}</td>
                            {hasCuota && <td>{item.cuotas}</td>}
                            <td>
                                <div className="d-flex align-items-center">
                                    {format(new Date(item.payment_date), 'MM-dd-yy')}
                                    {item.attachment && (
                                        <a rel="noreferrer" className="m-0 p-0 border-0 bg-transparent ms-2" target="_blank" href={`${DOMAIN}/storage/${item.attachment}`}>
                                            <AiFillFilePdf className="text-success"/>
                                        </a>
                                    )}
                                </div>
                            </td>
                            <td className="d-flex align-items-center">
                                {getObjectByValue(PAYMENT_METHOD, item.payment_method).name}
                                { getObjectByValue(PAYMENT_METHOD, item.payment_method).icon && (
                                    <img className="ms-1 img-xs"
                                         src={getObjectByValue(PAYMENT_METHOD, item.payment_method).icon}
                                         alt={getObjectByValue(PAYMENT_METHOD, item.payment_method).name} />
                                )}
                            </td>
                            <td>
                                <div className="d-flex align-items-center justify-content-between">
                                    {
                                        item.status === PAYMENT_STATUS_ENUM.PENDING ? format(item.payment_date, 'MM-dd-y')
                                            : format(getNextPaymentDate(item.frequency, item.payment_date), 'MM-dd-y')
                                    }
                                    <button
                                        onClick={(e) => {
                                            // pending
                                            if (item.status === PAYMENT_STATUS_ENUM.PENDING) {
                                                updateStatus(item.id, PAYMENT_STATUS_ENUM.FINISHED);
                                            } else {
                                                updateStatus(item.id, PAYMENT_STATUS_ENUM.PENDING);
                                            }
                                        }}
                                        className="bg-transparent p-0 border-0 d-flex align-items-center align-content-center ms-2">
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
    )
}