// src/components/Dashboard.js
import React, {useEffect, useState} from 'react';
import Layout from "../layout/Layout";
import {TileCard} from "../components/dashboard/TileCard";
import {AppCalendar} from "../components/dashboard/AppCalendar";
import {Carousel, CarouselItem} from 'react-bootstrap';
import {Cumpliemiento3DChart} from "../components/dashboard/charts/Cumpliemiento3DChart";
import {SaturationChart} from "../components/dashboard/charts/IgresoVsEgresoChart";
import {Ahorro3DChart} from "../components/dashboard/charts/Ahorro3DChart";
import {GastoCategoriesChart} from "../components/dashboard/charts/GastoCategoriesChart";
import PendingPaymentBarChart from "../components/dashboard/charts/PendingPaymentBarChart";
import MajorOutBarChart from "../components/dashboard/charts/MajorOutBarChart";
import {
    fetchGrossOutcomeStatistics,
    fetchGrossStatistics, fetchMajorOutcomeStatistics,
    fetchOutcomeByCategoryStatistics, fetchOutcomePendingStatistics
} from "../services/StatisticsService";

const Dashboard = () => {
    const [grossIncome, setGrossIncome] = useState(0);
    const [grossOutcome, setGrossOutcome] = useState(0);
    const [grossAhorro, setGrossAhorro] = useState(0);
    const [grossOutcomePending, setGrossOutcomePending] = useState(0);
    const [grossOutcomeFinished, setGrossOutcomeFinished] = useState(0);
    const [outcomeByCategory, setOutcomeByCategory] = useState([]);
    const [pendingOutcome, setPendingOutcome] = useState([]);
    const [majorOutcome, setMajorOutcome] = useState([]);

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;

    useEffect(() => {
        fetchGrossStatistics(year, month).then(res => {
            if (res.success) {
                setGrossIncome(res.data.income);
                setGrossOutcome(res.data.outcome - res.data.ahorro);
                setGrossAhorro(res.data.ahorro);
            }
        });
        fetchGrossOutcomeStatistics(year, month).then(res => {
            if (res.success) {
                setGrossOutcomePending(res.data.pending);
                setGrossOutcomeFinished(res.data.paid);
            }
        });
        fetchOutcomeByCategoryStatistics(year, month).then(res => {
            if (res.success) {
                setOutcomeByCategory(res.data);
            }
        });
        fetchOutcomePendingStatistics(year, month).then(res => {
            if (res.success) {
                setPendingOutcome(res.data);
            }
        });
        fetchMajorOutcomeStatistics(year, month).then(res => {
            if (res.success) {
                setMajorOutcome(res.data);
            }
        });
    }, [month, year]);

    return (
        <Layout>
            <div className="row">
                <div className="col-md-4">
                    <div className="p-3 rounded-4 bg-dark-green shadow-lg">
                        <TileCard income={grossIncome} outcome={grossOutcome} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 rounded-4 bg-dark-green shadow-lg">
                        <Carousel interval={null} indicators={false} fade={false}>
                            <CarouselItem>
                                <SaturationChart income={grossIncome} outcome={grossOutcome}/>
                            </CarouselItem>
                            <CarouselItem>
                                <Cumpliemiento3DChart paid={grossOutcomeFinished} pending={grossOutcomePending} />
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 rounded-4 bg-dark-green shadow-lg">
                        <Carousel interval={null} indicators={false} fade={false} className="h-100">
                            <CarouselItem>
                                <Ahorro3DChart income={grossIncome} outcome={grossOutcome} ahorro={grossAhorro} />
                            </CarouselItem>
                            <CarouselItem>
                                <GastoCategoriesChart data={outcomeByCategory} />
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="bg-dark-green rounded-4 p-3 shadow-lg">
                        <Carousel interval={null} indicators={false} fade={false} className="h-100">
                            <CarouselItem>
                                <PendingPaymentBarChart data={pendingOutcome} />
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="bg-dark-green rounded-4 p-3 shadow-lg h-100 align-items-center d-flex">
                        <Carousel interval={null} indicators={false} fade={false}>
                            <CarouselItem>
                                <AppCalendar />
                            </CarouselItem>
                            <CarouselItem>
                                <MajorOutBarChart data={majorOutcome}/>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;