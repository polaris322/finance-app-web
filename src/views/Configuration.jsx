import React from 'react';
import Layout from "../layout/Layout";
import {AiOutlineSetting} from "react-icons/ai";

export const Configuration = () => {
    return (
        <Layout>
            <h2 className="text-uppercase d-flex align-items-center">
                <AiOutlineSetting className="me-1 text-success" />
                Configuración
            </h2>
            <div className="w-100">

            </div>
        </Layout>
    )
}