import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import AuthProvider from './contexts/AuthContext';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import {ExpenseView} from "./views/Expense";
import {IncomeView} from "./views/Igresos";
import {HistoryView} from "./views/History";
import {CalculatorView} from "./views/CalculatorView";
import {CalendarView} from "./views/CalendarView";
import {ProjectsView} from "./views/ProjectsView";
import {Configuration} from "./views/Configuration";
import {Utilities} from "./views/Utilities";
import {ActivitiesView} from "./views/Activities";
import {store} from "./store";

const App = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        } />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        <Route path="/dashboard" element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        } />
                        <Route path="/income" element={
                            <PrivateRoute>
                                <IncomeView />
                            </PrivateRoute>
                        } />
                        <Route path="/expense" element={
                            <PrivateRoute>
                                <ExpenseView />
                            </PrivateRoute>
                        } />
                        <Route path="/history" element={
                            <PrivateRoute>
                                <HistoryView />
                            </PrivateRoute>
                        } />
                        <Route path="/calculator" element={
                            <PrivateRoute>
                                <CalculatorView />
                            </PrivateRoute>
                        } />
                        <Route path="/calendar" element={
                            <PrivateRoute>
                                <CalendarView />
                            </PrivateRoute>
                        } />
                        <Route path="/projects" element={
                            <PrivateRoute>
                                <ProjectsView />
                            </PrivateRoute>
                        } />
                        <Route path="/configuration" element={
                            <PrivateRoute>
                                <Configuration />
                            </PrivateRoute>
                        } />
                        <Route path="/utilities" element={
                            <PrivateRoute>
                                <Utilities />
                            </PrivateRoute>
                        } />
                        <Route path="/activities" element={
                            <PrivateRoute>
                                <ActivitiesView />
                            </PrivateRoute>
                        } />
                    </Routes>
                </Router>
            </AuthProvider>
        </Provider>
    );
};

export default App;
