import React, {useEffect, useState} from 'react';
import Layout from "../layout/Layout";
import {BiHistory} from "react-icons/bi";
import {HistoryTable} from "../components/HistoryTable";
import {NavDropdown} from "react-bootstrap";
import {AiFillFilter} from "react-icons/ai";
import {fetchDailyStatistics} from "../services/StatisticsService";

export const HistoryView = () => {
    const [historyData, setHistoryData] = useState([]);
    const [days, setDays] = useState(7);

    useEffect(()=>{
        fetchDailyStatistics(days).then(res => {
            if (res.success) {
                setHistoryData(res.data);
            }
        });
    }, [days]);

    return (
        <Layout>
            <div className="d-flex align-items-center justify-content-between">
                <h2 className="text-uppercase d-flex align-items-center">
                    <BiHistory className="me-1 text-success" />
                    Historicos
                </h2>
                <NavDropdown
                    className="no-caret"
                    title={
                        <span className="d-flex align-items-center">
                                <div className="fw-bold fs-5 text-uppercase me-1 d-flex align-items-center">
                                    <AiFillFilter className="me-1 text-success" /> Filtro
                                </div>
                            </span>
                    }>
                    <NavDropdown.Item
                        href="#"
                        className="text-uppercase"
                        onClick={(e) => {
                            e.preventDefault();
                            setDays(7);
                        }}
                    >
                        la semana pasada
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        href="#"
                        className="text-uppercase"
                        onClick={(e) => {
                            e.preventDefault();
                            setDays(30);
                        }}
                    >
                        el mes pasado
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        href="#"
                        className="text-uppercase"
                        onClick={(e) => {
                            e.preventDefault();
                            setDays(120);
                        }}
                    >
                        último trimestre del año
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
            <div className="w-100 mt-4">
                <div className="bg-light-green p-3 rounded-4 shadow-lg">
                    <HistoryTable data={historyData}/>
                </div>
            </div>
        </Layout>
    )
}