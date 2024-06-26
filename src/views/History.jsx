import React from 'react';
import Layout from "../layout/Layout";
import {BiHistory, BiMoney} from "react-icons/bi";
import {HistoryTable} from "../components/HistoryTable";
import {NavDropdown} from "react-bootstrap";
import {FaShareAlt} from "react-icons/fa";
import {LiaRecycleSolid} from "react-icons/lia";
import {FaChampagneGlasses} from "react-icons/fa6";
import {AiFillFilter} from "react-icons/ai";

export const HistoryView = () => {
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
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <BiMoney /> Gasto
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <LiaRecycleSolid /> Ingreso
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <FaShareAlt /> Proyectos
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <FaChampagneGlasses /> Actividades
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
            <div className="w-100 mt-4">
                <div className="bg-light-green p-3 rounded-4 shadow-lg">
                    <HistoryTable />
                </div>
            </div>
        </Layout>
    )
}