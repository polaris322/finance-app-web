import React, {useEffect, useState} from 'react';
import Layout from "../layout/Layout";
import {AiOutlineSetting} from "react-icons/ai";
import PersonalDetailCard from "../components/PersonalDetailCard";
import {NumberFormater} from "../utils";
import {FaPencil} from "react-icons/fa6";
import {FaSave} from "react-icons/fa";
import {getConfiguration, updateAhorroFund, updateEmergencyFund} from "../services/ConfigService";

export const Configuration = () => {
    const [editEmergency, setEditEmergency] = useState(false);
    const [editAhorro, setEditAhorro] = useState(false);
    const [config, setConfig] = useState({
        emergency: 0,
        ahorro: 0
    });
    const [emergency, setEmergency] = useState(0);
    const [ahorro, setAhorro] = useState(0);

    useEffect(() => {
        fetchConfigurations();
    }, []);

    const fetchConfigurations = () => {
        getConfiguration().then(res => {
            if (res.success) {
                setConfig({
                    emergency: res.data.emergency,
                    ahorro: res.data.ahorro
                })
            }
        });
    }

    const updateEmergency = () => {
        setConfig({
            ...config,
            emergency: emergency
        });
        updateEmergencyFund(emergency).then(() => fetchConfigurations());
        setEditEmergency(false);
    }

    const updateAhorro = () => {
        setConfig({
            ...config,
            ahorro: ahorro
        });
        updateAhorroFund(ahorro).then(() => fetchConfigurations());
        setEditAhorro(false);
    }


    return (
        <Layout>
            <h2 className="text-uppercase d-flex align-items-center">
                <AiOutlineSetting className="me-1 text-success" />
                Configuración
            </h2>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-md-6 my-2">
                            <PersonalDetailCard />
                        </div>
                        <div className="col-md-6 my-2">
                            <div className="p-3">
                                <h4>Fondo de empergenica</h4>
                                <div className="bg-light-green p-3 rounded-4 shadow-lg border-dashed text-white">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="h5 mb-0">
                                            {
                                                editEmergency? (
                                                    <input type="number"
                                                           value={emergency}
                                                           onChange={e => setEmergency(e.target.value)}
                                                           className="bg-light-green border-green form-control" step="0.1"/>
                                                ) : (
                                                    <>
                                                        RD{NumberFormater.format(config.emergency)}
                                                    </>
                                                )
                                            }
                                        </div>
                                        {
                                            editEmergency? (
                                                <button
                                                    onClick={updateEmergency}
                                                    className="btn bg-transparent border-0">
                                                    <FaSave />
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => setEditEmergency(true)}
                                                    className="btn bg-transparent border-0">
                                                    <FaPencil />
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="p-3">
                                <h4>Meta de ahorro</h4>
                                <div className="bg-light-green p-3 rounded-4 shadow-lg border-dashed text-white">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="h5 mb-0">
                                            {
                                                editAhorro? (
                                                    <input type="number"
                                                           value={ahorro}
                                                           onChange={e => setAhorro(e.target.value)}
                                                           className="bg-light-green border-green form-control" step="0.1"/>
                                                ) : (
                                                    <>
                                                        RD{NumberFormater.format(config.ahorro)}
                                                    </>
                                                )
                                            }
                                        </div>
                                        {
                                            editAhorro? (
                                                <button
                                                    onClick={updateAhorro}
                                                    className="btn bg-transparent border-0">
                                                    <FaSave />
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => setEditAhorro(true)}
                                                    className="btn bg-transparent border-0">
                                                    <FaPencil />
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}