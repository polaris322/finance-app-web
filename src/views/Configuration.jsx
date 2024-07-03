import React from 'react';
import Layout from "../layout/Layout";
import {AiOutlineSetting} from "react-icons/ai";
import PersonalDetailCard from "../components/PersonalDetailCard";
import {NumberFormater} from "../utils";

export const Configuration = () => {
    return (
        <Layout>
            <h2 className="text-uppercase d-flex align-items-center">
                <AiOutlineSetting className="me-1 text-success" />
                Configuración
            </h2>
            <div className="row mt-3">
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-md-6 my-2">
                            <PersonalDetailCard />
                        </div>
                        <div className="col-md-6 my-2">
                            <div className="p-3">
                                <h4>Fondo de empergenica</h4>
                                <div className="bg-light-green p-3 rounded-4 shadow-lg border-dashed text-white h5">
                                    RD{NumberFormater.format(10000)}
                                </div>
                            </div>

                            <div className="p-3">
                                <h4>Meta de ahorro</h4>
                                <div className="bg-light-green p-3 rounded-4 shadow-lg border-dashed text-white h5">
                                    RD{NumberFormater.format(5000)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}