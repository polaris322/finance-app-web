import React, {useContext} from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
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

const HeaderBar = () => {
    const { user, logout } = useContext(AuthContext);

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
                        <ProyectosDialog />
                        <ActividadesDialog />
                    </NavDropdown>
                    <Nav.Item>
                        <button className="btn">
                            <AiFillBell className="fs-4" />
                        </button>
                        <button className="btn">
                            <FaShareAlt className="fs-4" />
                        </button>
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
