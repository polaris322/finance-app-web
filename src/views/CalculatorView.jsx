import React, {useEffect, useState} from 'react';
import Layout from "../layout/Layout";
import {AiOutlineCalculator} from "react-icons/ai";
import {CalculatorTable} from "../components/CalculatorTable";
import {PAYMENT_FREQUENCY, PAYMENT_FREQUENCY_ENUM} from "../config/enums";

export const CalculatorView = () => {
    const [cuota, setCuota] = useState(0);
    const [balance, setBalance] = useState('');
    const [frequency, setFrequency] = useState(PAYMENT_FREQUENCY_ENUM.MONTHLY);
    const [duration, setDuration] = useState('');
    const [interest, setInterest] = useState(2.5);

    useEffect(() => {
        setCuota(parseFloat(balance * ( interest / 100 ) / (1 - Math.pow(1 + interest / 100, -duration))).toFixed(2));
    }, [balance, interest, duration]);

    return (
        <Layout>
            <h2 className="text-uppercase d-flex align-items-center">
                <AiOutlineCalculator className="me-1 text-success" />
                Calculadora
            </h2>

            <div className="w-100">
                <h5 className="text-uppercase text-end text-white">Tabla de mortización</h5>

                <div className="bg-light-green p-3 rounded-4 shadow-lg">
                    <div className="row fw-bold mb-3">
                        <div className="col-md-4 border-end border-black">
                            <div className="row">
                                <div className="col-md-6 text-end">
                                    Tipo De Calculo:
                                </div>
                                <div className="col-md-6 text-white">
                                    Insoluto
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6 text-end">
                                    Mento:
                                </div>
                                <div className="col-md-6 text-white">
                                    <input type="number" className="fw-bold text-white bg-light-green border-0 rounded-1"
                                           value={balance} onChange={e => setBalance(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 border-end border-black">
                            <div className="row">
                                <div className="col-md-6 text-end">
                                    % Interes:
                                </div>
                                <div className="col-md-6 text-white">
                                    <input type="number" className="fw-bold text-white border-0 bg-light-green border-green rounded-1"
                                           value={interest} onChange={e => setInterest(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6 text-end">
                                    Frecuencia:
                                </div>
                                <div className="col-md-6 text-white">
                                    <select
                                        value={frequency}
                                        onChange={e => setFrequency(e.target.value)}
                                        className="fw-bold text-white border-0 bg-light-green border-green rounded-1">
                                        {
                                            PAYMENT_FREQUENCY.map((item, index) => (
                                                <option value={item.value} key={index} className="bg-secondary">{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-6 text-end">
                                    Tiempo:
                                </div>
                                <div className="col-md-6 text-white">
                                    <input type="number" className="fw-bold text-white border-0 bg-light-green border-green rounded-1"
                                           value={duration} onChange={e => setDuration(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6 text-end">
                                    Cuotas:
                                </div>
                                <div className="col-md-6 text-white">
                                    <input type="number" className="fw-bold text-white border-0 bg-light-green border-green rounded-1"
                                           value={cuota} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <CalculatorTable balance={parseFloat(balance)} duration={parseFloat(duration)} pago={parseFloat(cuota)} interest={parseFloat(interest)} />
                </div>
            </div>
        </Layout>
    )
}