import React, {useCallback, useEffect, useState} from 'react';
import Layout from "../layout/Layout";
import {BiMoney} from "react-icons/bi";
import {LoanTable} from "../components/LoanTable";
import {useDispatch, useSelector} from "react-redux";
import {fetchOutcomes, updateOutcomeStatus} from "../services/OutcomeService";
import {updateOutcomeList} from "../store/actions/outcomes";
import {OUTCOME_CATEGORY_ENUM} from "../config/enums";

export const ExpenseView = () => {
    const dispatch = useDispatch();
    const { list } = useSelector((state) => state.outcome);

    const [loans, setLoans] = useState([]);
    const [services, setServices] = useState([]);
    const [others, setOthers] = useState([]);

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
        setLoans(list.filter(item => item.category === OUTCOME_CATEGORY_ENUM.LOAN));
        setServices(list.filter(item => item.category === OUTCOME_CATEGORY_ENUM.SERVICE));
        setOthers(list.filter(item => item.category === OUTCOME_CATEGORY_ENUM.OTHER));
    }, [list])

    return (
        <Layout>
            <h2 className="text-uppercase d-flex align-items-center">
                <BiMoney className="me-1 text-success" />
                Egresos
            </h2>

            <div className="w-100">
                <h5 className="text-uppercase text-end">Gastos fljos</h5>

                <div className="bg-light-green p-3 rounded-4 shadow-lg">
                    <LoanTable title="Prestamos"
                               onUpdateStatus={updateOutcomeStatus}
                               data={loans}
                               onUpdate={getOutcomes}/>
                </div>

                <div className="bg-light-green p-3 rounded-4 shadow-lg mt-4">
                    <LoanTable hasCuota={false}
                               title="Servicios"
                               onUpdateStatus={updateOutcomeStatus}
                               data={services}
                               onUpdate={getOutcomes}/>
                </div>

                <div className="bg-light-green p-3 rounded-4 shadow-lg mt-4">
                    <LoanTable hasCuota={false}
                               title="Otros"
                               onUpdateStatus={updateOutcomeStatus}
                               data={others}
                               onUpdate={getOutcomes}/>
                </div>
            </div>
        </Layout>
    )
}