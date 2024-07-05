import React, {useEffect, useState} from 'react';
import {format} from 'date-fns';
import Layout from "../layout/Layout";
import {AiOutlineBulb} from "react-icons/ai";
import UtilityCard from "../components/UtilityCard";
import {useDispatch, useSelector} from "react-redux";
import {getConfiguration} from "../services/ConfigService";
import {fetchUtilities} from "../services/UtilityService";
import {updateUtilityList} from "../store/actions/utility";
import {fetchOutcomes} from "../services/OutcomeService";
import {PAYMENT_METHOD_ENUM} from "../config/enums";
import SaturationCard from "../components/SaturationCard";

export const Utilities = () => {
    const dispatch = useDispatch();
    const { list: utilities } = useSelector((state) => state.utility);
    const [outcomes, setOutcomes] = useState([]);
    const [config, setConfig] = useState({
        emergency: 0,
        ahorro: 0
    });
    const [emergencyList, setEmergencyList] = useState([]);
    const [ahorroList, setAhorroList] = useState([]);

    useEffect(() => {
        getConfiguration().then(res => {
            if (res.success) {
                setConfig(res.data);
            }
        });
        fetchUtilities().then(res => {
            if (res.success) {
                dispatch(updateUtilityList(res.data));
            }
        });
        fetchOutcomes().then(res => {
            if (res.success) {
                setOutcomes(res.data);
            }
        });
    }, [dispatch]);

    useEffect(() => {
        let emergency = [];
        let ahorro = [];

        utilities.forEach(item => {
            if (item.emergency) {
                emergency.push({date: format(item.created_at, 'y-MM-dd'), amount: -item.emergency});
            } else {
                ahorro.push({date: format(item.created_at, 'y-MM-dd'), amount: -item.ahorro});
            }
        });
        outcomes.forEach(item => {
            if (item.payment_method === PAYMENT_METHOD_ENUM.EMERGENCY) {
                emergency.push({date: format(item.payment_date, 'y-MM-dd'), amount: item.amount});
                return;
            }
            if (item.payment_method === PAYMENT_METHOD_ENUM.AHORRO) {
                ahorro.push({date: format(item.payment_date, 'y-MM-dd'), amount: item.amount});
            }
        });
        setEmergencyList(emergency.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
        setAhorroList(ahorro.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    }, [outcomes, utilities]);

    return (
        <Layout>
            <h2 className="text-uppercase d-flex align-items-center">
                <AiOutlineBulb className="me-1 text-success" />
                Utilidades
            </h2>
            <div className="row mt-3">
                <div className="col-md-4 my-2">
                    <UtilityCard goal={config.emergency} data={emergencyList} title="Fondo de emergencia"/>
                </div>
                <div className="col-md-4 my-2">
                    <UtilityCard goal={config.ahorro} data={ahorroList} title="Ahorro"/>
                </div>
                <div className="col-md-4 my-2">
                    <SaturationCard />
                </div>
            </div>
        </Layout>
    )
}