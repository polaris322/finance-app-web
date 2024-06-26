import React from 'react';
import Layout from "../layout/Layout";
import {BiMoney} from "react-icons/bi";
import {LoanTable} from "../components/LoanTable";

export const ExpenseView = () => {
    return (
        <Layout>
            <h2 className="text-uppercase d-flex align-items-center">
                <BiMoney className="me-1 text-success" />
                Egresos
            </h2>

            <div className="w-100">
                <h5 className="text-uppercase text-end">Gastos fljos</h5>

                <div className="bg-light-green p-3 rounded-4 shadow-lg">
                    <LoanTable title="Prestamos"/>
                </div>

                <div className="bg-light-green p-3 rounded-4 shadow-lg mt-4">
                    <LoanTable hasCuota={false} title="Servicios"/>
                </div>

                <div className="bg-light-green p-3 rounded-4 shadow-lg mt-4">
                    <LoanTable hasCuota={false} title="Otros"/>
                </div>
            </div>
        </Layout>
    )
}