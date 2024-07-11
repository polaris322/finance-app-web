import React, {useContext, useEffect, useState} from "react";
import {Navbar, Nav, NavDropdown, Tooltip, OverlayTrigger} from "react-bootstrap";
import logo from "../assets/images/logo-banner.png";
import avatar from "../assets/images/user.png";
import {AuthContext} from "../contexts/AuthContext";
import {FaPlusCircle, FaShareAlt} from "react-icons/fa";
import {GoSignOut} from "react-icons/go";
import {AiFillBell} from "react-icons/ai";
import {EgresoDialog} from "./EgresoDialog";
import {IgresoDialog} from "./IgresoDialog";
import {ProyectosDialog} from "./ProyectosDialog";
import {ActividadesDialog} from "./ActividadesDialog";
import {UtilidadesDialog} from "./UtilidadesDialog";
import {
    OUTCOME_CATEGORY_ENUM,
    PAYMENT_FREQUENCY_ENUM,
    PAYMENT_METHOD_ENUM,
    PAYMENT_STATUS_ENUM,
    PAYMENT_TYPE_ENUM
} from "../config/enums";
import {getBalanceByMonth} from "../services/StatisticsService";
import {createOutcome, fetchOutcomes} from "../services/OutcomeService";
import {updateOutcomeList} from "../store/actions/outcomes";
import {getFirstErrorMessage} from "../utils";
import {useDispatch} from "react-redux";
import {format} from "date-fns";

const HeaderBar = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const [balance, setBalance] = useState();

    useEffect(() => {
        getBalanceByMonth().then(res => {
            if (res.success) {
                setBalance(res.data.balance);
            }
        });
    }, []);

    const saveEmergency = () => {
        if (balance === 0) {
            return;
        }

        const formData = new FormData();
        formData.append('name', 'Fondo de emergencia');
        formData.append('amount', balance);
        formData.append('cuotas', 1);
        formData.append('category', OUTCOME_CATEGORY_ENUM.OTHER);
        formData.append('status', PAYMENT_STATUS_ENUM.PENDING);
        formData.append('type', PAYMENT_TYPE_ENUM.FIXED);
        formData.append('frequency', PAYMENT_FREQUENCY_ENUM.ONE_TIEM);
        formData.append('payment_method', PAYMENT_METHOD_ENUM.EMERGENCY);
        formData.append('start_date', format(new Date(), 'y-MM-dd'));

        setLoading(true);
        createOutcome(formData).then(res => {
            if (res.success) {
                fetchOutcomes().then(res => {
                    getBalanceByMonth().then(balanceRes => {
                        if (balanceRes.success) {
                            setBalance(balanceRes.data.balance);
                        }

                        if (res.success) {
                            dispatch(updateOutcomeList(res.data));
                        } else {
                            console.log(getFirstErrorMessage(res.data));
                        }
                    });
                    setLoading(false);
                }).catch(e => {
                    console.log(getFirstErrorMessage(e.data));
                    setLoading(false);
                });
            }
        }).catch(e => {
            console.log(getFirstErrorMessage(e.data));
            setLoading(false);
        });
    }

    const saveAhorro= () => {
        if (balance === 0) {
            return;
        }

        const formData = new FormData();
        formData.append('name', 'Ahorro');
        formData.append('amount', balance);
        formData.append('cuotas', 1);
        formData.append('category', OUTCOME_CATEGORY_ENUM.OTHER);
        formData.append('status', PAYMENT_STATUS_ENUM.PENDING);
        formData.append('type', PAYMENT_TYPE_ENUM.FIXED);
        formData.append('frequency', PAYMENT_FREQUENCY_ENUM.ONE_TIEM);
        formData.append('payment_method', PAYMENT_METHOD_ENUM.AHORRO);
        formData.append('start_date', format(new Date(), 'y-MM-dd'));

        setLoading(true);
        createOutcome(formData).then(res => {
            if (res.success) {
                fetchOutcomes().then(res => {
                    getBalanceByMonth().then(balanceRes => {
                        if (balanceRes.success) {
                            setBalance(balanceRes.data.balance);
                        }

                        if (res.success) {
                            dispatch(updateOutcomeList(res.data));
                        } else {
                            console.log(getFirstErrorMessage(res.data));
                        }
                    });
                    setLoading(false);
                }).catch(e => {
                    console.log(getFirstErrorMessage(e.data));
                    setLoading(false);
                });
            }
        }).catch(e => {
            console.log(getFirstErrorMessage(e.data));
            setLoading(false);
        });
    }

    return (
        <Navbar bg="light" variant="light" expand="lg" className="bg-white">
            <Navbar.Brand href="/">
                <div className="d-flex align-items-center ms-md-5 ms-1">
                    <img src={logo} alt="logo" className="logo"/>
                </div>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex justify-content-between align-items-center float-end w-75 text-uppercase">
                    <NavDropdown
                        className="no-caret"
                        title={
                            <span className="d-flex align-items-center">
                                <div className="fw-bold text-uppercase me-1 d-flex align-items-center">
                                    Agrega <FaPlusCircle className="ms-1 text-success" />
                                </div>
                            </span>
                        }>
                        <EgresoDialog />
                        <IgresoDialog />
                        <UtilidadesDialog />
                        <ProyectosDialog />
                        <ActividadesDialog />
                    </NavDropdown>
                    <Nav.Item>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            trigger={['hover', 'focus', 'click']}
                            overlay={<Tooltip id="button-tooltip">Transferencia de ingresos directamente a fondo de emergencia.</Tooltip>}
                        >
                            <button className="btn" disabled={loading} onClick={saveEmergency}>
                                <AiFillBell className="fs-4" />
                            </button>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            trigger={['hover', 'focus', 'click']}
                            overlay={<Tooltip id="button-tooltip">Transferencia de ingresos directamente an ahorro.</Tooltip>}
                        >
                            <button className="btn" disabled={loading} onClick={saveAhorro}>
                                <FaShareAlt className="fs-4" />
                            </button>
                        </OverlayTrigger>
                    </Nav.Item>
                    <NavDropdown
                        className="no-caret"
                        title={
                                <span className="d-flex align-items-center">
                                    <div className="text-uppercase me-2">
                                        <div className="text-uppercase fs-small">bienvenido</div>
                                        <div className="fw-bold">{user ? `${user.first_name} ${user.last_name}` : 'Guest'}</div>
                                    </div>
                                    <img alt="avatar" width={60} src={avatar} />
                                </span>
                            }>
                        <NavDropdown.Item href="#" onClick={(e) => {
                            e.preventDefault();
                            logout();
                        }}>
                            <GoSignOut /> Sign Out
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HeaderBar;
