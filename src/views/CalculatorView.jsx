import React from 'react';
import Layout from "../layout/Layout";
import {AiOutlineCalculator} from "react-icons/ai";
import {CalculatorTable} from "../components/CalculatorTable";
import {NumberFormater} from "../utils";

export const CalculatorView = () => {
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
                            <div className="row">
                                <div className="col-md-6 text-end">
                                    Mento:
                                </div>
                                <div className="col-md-6 text-white">
                                    {NumberFormater.format(459000)}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 border-end border-black">
                            <div className="row">
                                <div className="col-md-6 text-end">
                                    Interes:
                                </div>
                                <div className="col-md-6 text-white">
                                    Insoluto
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 text-end">
                                    Frecuencia:
                                </div>
                                <div className="col-md-6 text-white">
                                    {NumberFormater.format(459000)}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-6 text-end">
                                    Cuotas:
                                </div>
                                <div className="col-md-6 text-white">
                                    Insoluto
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 text-end">
                                    Fecha Inicio:
                                </div>
                                <div className="col-md-6 text-white">
                                    {NumberFormater.format(459000)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <CalculatorTable />
                </div>
            </div>
        </Layout>
    )
}