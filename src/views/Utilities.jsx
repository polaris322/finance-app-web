import React from 'react';
import Layout from "../layout/Layout";
import {AiOutlineBulb} from "react-icons/ai";
import UtilityCard from "../components/UtilityCard";

export const Utilities = () => {
    return (
        <Layout>
            <h2 className="text-uppercase d-flex align-items-center">
                <AiOutlineBulb className="me-1 text-success" />
                Utilidades
            </h2>
            <div className="row mt-3">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-md-6 my-2">
                            <UtilityCard goal={10000} achieved={2500} title="Fondo de emergencia"/>
                        </div>
                        <div className="col-md-6 my-2">
                            <UtilityCard goal={10000} achieved={2500} title="Ahorro"/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}