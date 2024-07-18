import React, {useCallback, useEffect, useState} from 'react';
import Layout from "../layout/Layout";
import {BiMoney} from "react-icons/bi";
import {LoanTable} from "../components/LoanTable";
import {useDispatch, useSelector} from "react-redux";
import {fetchOutcomes, updateOutcomeStatus} from "../services/OutcomeService";
import {updateOutcomeList} from "../store/actions/outcomes";
import {OUTCOME_CATEGORY_ENUM} from "../config/enums";
import {Tabs} from "react-bootstrap";
import {Tab} from "bootstrap/js/index.esm";

export const ExpenseView = () => {
    const dispatch = useDispatch();
    const { list } = useSelector((state) => state.outcome);

    const [fixedLoan, setFixedLoan] = useState([]);
    const [fixedServices, setFixedServices] = useState([]);
    const [fixedOthers, setFixedOthers] = useState([]);
    const [dynamicLoan, setDynamicLoan] = useState([]);
    const [dynamicServices, setDynamicServices] = useState([]);
    const [dynamicOthers, setDynamicOthers] = useState([]);

    const getOutcomes = useCallback(() => {
        fetchOutcomes().then(res => {
            if (res.success) {
                dispatch(updateOutcomeList(res.data));
            }
        });
    }, [dispatch]);

    useEffect(() => {
        getOutcomes();
    }, [getOutcomes]);

    useEffect(() => {
        setFixedLoan(list.fixed.filter(item => item.category === OUTCOME_CATEGORY_ENUM.LOAN));
        setFixedServices(list.fixed.filter(item => item.category === OUTCOME_CATEGORY_ENUM.SERVICE));
        setFixedOthers(list.fixed.filter(item => item.category === OUTCOME_CATEGORY_ENUM.OTHER));
        setDynamicLoan(list.dynamic.filter(item => item.category === OUTCOME_CATEGORY_ENUM.LOAN));
        setDynamicServices(list.dynamic.filter(item => item.category === OUTCOME_CATEGORY_ENUM.SERVICE));
        setDynamicOthers(list.dynamic.filter(item => item.category === OUTCOME_CATEGORY_ENUM.OTHER));
    }, [list])

    return (
        <Layout>
            <h2 className="text-uppercase d-flex align-items-center">
                <BiMoney className="me-1 text-success" />
                Egresos
            </h2>

            <Tabs
                defaultActiveKey="fixed"
                variant="underline"
                className="justify-content-end mb-2 h5 text-uppercase"
            >
                <Tab eventKey="fixed" title="Gastos fljos">
                    <div className="w-100">
                        <div className="bg-light-green p-3 rounded-4 shadow-lg">
                            <LoanTable title="Prestamos"
                                       onUpdateStatus={updateOutcomeStatus}
                                       data={fixedLoan}
                                       onUpdate={getOutcomes}/>
                        </div>

                        <div className="bg-light-green p-3 rounded-4 shadow-lg mt-4">
                            <LoanTable hasCuota={false}
                                       title="Servicios"
                                       onUpdateStatus={updateOutcomeStatus}
                                       data={fixedServices}
                                       onUpdate={getOutcomes}/>
                        </div>

                        <div className="bg-light-green p-3 rounded-4 shadow-lg mt-4">
                            <LoanTable hasCuota={false}
                                       title="Otros"
                                       onUpdateStatus={updateOutcomeStatus}
                                       data={fixedOthers}
                                       onUpdate={getOutcomes}/>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="dynamic" title="Gastos dynamico">
                    <div className="w-100">
                        <div className="bg-light-green p-3 rounded-4 shadow-lg">
                            <LoanTable title="Prestamos"
                                       onUpdateStatus={updateOutcomeStatus}
                                       data={dynamicLoan}
                                       onUpdate={getOutcomes}/>
                        </div>

                        <div className="bg-light-green p-3 rounded-4 shadow-lg mt-4">
                            <LoanTable hasCuota={false}
                                       title="Servicios"
                                       onUpdateStatus={updateOutcomeStatus}
                                       data={dynamicServices}
                                       onUpdate={getOutcomes}/>
                        </div>

                        <div className="bg-light-green p-3 rounded-4 shadow-lg mt-4">
                            <LoanTable hasCuota={false}
                                       title="Otros"
                                       onUpdateStatus={updateOutcomeStatus}
                                       data={dynamicOthers}
                                       onUpdate={getOutcomes}/>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </Layout>
    )
}