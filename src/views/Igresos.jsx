import React, {useCallback, useEffect, useState} from 'react';
import Layout from "../layout/Layout";
import {LoanTable} from "../components/LoanTable";
import {useDispatch, useSelector} from "react-redux";
import {Tabs} from "react-bootstrap";
import {Tab} from "bootstrap/js/index.esm";
import {BsPiggyBank} from "react-icons/bs";
import {updateIncomeList} from "../store/actions/incomes";
import {fetchIncomes, updateIncomeStatus} from "../services/IncomeService";

export const IncomeView = () => {
    const dispatch = useDispatch();
    const { list } = useSelector((state) => state.income);

    const [fixed, setFixed] = useState([]);
    const [dynamic, setDynamic] = useState([]);

    const getOutcomes = useCallback(() => {
        fetchIncomes().then(res => {
            if (res.success) {
                dispatch(updateIncomeList(res.data));
            }
        });
    }, [dispatch]);

    useEffect(() => {
        getOutcomes();
    }, [getOutcomes]);

    useEffect(() => {
        setFixed(list.fixed);
        setDynamic(list.dynamic);
    }, [list])

    return (
        <Layout>
            <h2 className="text-uppercase d-flex align-items-center">
                <BsPiggyBank className="me-1 text-success" />
                Igresos
            </h2>

            <Tabs
                defaultActiveKey="fixed"
                variant="underline"
                className="justify-content-end mb-2 h5 text-uppercase"
            >
                <Tab eventKey="fixed" title="Ingresos fljos">
                    <div className="w-100">
                        <div className="bg-light-green p-3 rounded-4 shadow-lg">
                            <LoanTable title=""
                                       onUpdateStatus={updateIncomeStatus}
                                       data={fixed}
                                       hasCuota={false}
                                       onUpdate={getOutcomes}/>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="dynamic" title="Ingresos Dynamico">
                    <div className="w-100">
                        <div className="bg-light-green p-3 rounded-4 shadow-lg">
                            <LoanTable title="Prestamos"
                                       onUpdateStatus={updateIncomeStatus}
                                       hasCuota={false}
                                       data={dynamic}
                                       onUpdate={getOutcomes}/>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </Layout>
    )
}