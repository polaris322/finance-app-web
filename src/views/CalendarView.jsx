import React from 'react';
import {format, subMonths} from "date-fns";
import Layout from "../layout/Layout";
import {BiCalendar} from "react-icons/bi";
import {AppCalendar} from "../components/dashboard/AppCalendar";

export const CalendarView = () => {
    return (
        <Layout>
            <h2 className="text-uppercase d-flex align-items-center">
                <BiCalendar className="me-1 text-success" />
                Calendar
            </h2>

            <div className="w-100 mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bg-light-green px-3 py-4 rounded-4 shadow-lg">
                            <AppCalendar current={format(subMonths(new Date(), 1), 'yyyy-MM-dd')}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg-light-green px-3 py-4 rounded-4 shadow-lg">
                            <AppCalendar />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}