// src/components/Dashboard.js
import React from 'react';
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

const Dashboard = () => {
    return (
        <Layout>
            <div className="row">
                <div className="col-md-4">
                    <div className="p-3 rounded-4 bg-dark-green shadow-lg">
                        <TileCard income={35000} outcome={32000} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 rounded-4 bg-dark-green shadow-lg">
                        <Carousel interval={null} indicators={false} fade={false}>
                            <CarouselItem>
                                <SaturationChart />
                            </CarouselItem>
                            <CarouselItem>
                                <Cumpliemiento3DChart />
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 rounded-4 bg-dark-green shadow-lg">
                        <Carousel interval={null} indicators={false} fade={false} className="h-100">
                            <CarouselItem>
                                <Ahorro3DChart />
                            </CarouselItem>
                            <CarouselItem>
                                <GastoCategoriesChart />
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
                                <PendingPaymentBarChart />
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
                                <MajorOutBarChart />
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;