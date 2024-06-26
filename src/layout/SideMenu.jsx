import React from "react";
import {Menu, MenuItem, Sidebar} from "react-pro-sidebar";
import {Link} from "react-router-dom";
import {FaHome, FaShareAlt} from "react-icons/fa";
import {BiMoney} from "react-icons/bi";
import {
    AiFillMail,
    AiOutlineCalculator,
    AiOutlineCalendar,
    AiOutlineHistory,
    AiOutlineSetting
} from "react-icons/ai";
import {FaChampagneGlasses} from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import {BsWhatsapp} from "react-icons/bs";

export const SideMenu = () => {
    const location = useLocation();

    return (
        <Sidebar
            breakPoint="sm"
            rootStyles={{ border: "none" }}
            className="pt-5 position-relative"
        >
            <Menu
                menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                        return {
                            backgroundColor: active ? '#00b0ac' : undefined,
                        };
                    },
                }}
            >
                <MenuItem component={<Link to="/dashboard" />} active={location.pathname === '/dashboard'} className="text-uppercase fw-bold">
                    <div className="d-flex align-items-center">
                        <FaHome className="me-1" /> Inicio
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/expense" />} className="text-uppercase fw-bold" active={location.pathname === '/expense'}>
                    <div className="d-flex align-items-center">
                        <BiMoney className="me-1" /> Egresos
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/history" />} className="text-uppercase fw-bold" active={location.pathname === '/history'}>
                    <div className="d-flex align-items-center">
                        <AiOutlineHistory className="me-1" /> Historico
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/projects" />} className="text-uppercase fw-bold" active={location.pathname === '/projects'}>
                    <div className="d-flex align-items-center">
                        <FaShareAlt className="me-1" /> Proyectos
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/activities" />} className="text-uppercase fw-bold" active={location.pathname === '/activities'}>
                    <div className="d-flex align-items-center">
                        <FaChampagneGlasses className="me-1" /> Actividades
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/calendar" />} className="text-uppercase fw-bold" active={location.pathname === '/calendar'}>
                    <div className="d-flex align-items-center">
                        <AiOutlineCalendar className="me-1" /> Calendario
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/calculator" />} className="text-uppercase fw-bold" active={location.pathname === '/calculator'}>
                    <div className="d-flex align-items-center">
                        <AiOutlineCalculator className="me-1" /> Calculadora
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/configuration" />} className="text-uppercase fw-bold" active={location.pathname === '/configuration'}>
                    <div className="d-flex align-items-center">
                        <AiOutlineSetting className="me-1" /> Configuración
                    </div>
                </MenuItem>
            </Menu>
            <div className="px-3 py-5 w-100 position-absolute bottom-0">
                <div className="fs-5 fw-bold">
                    Escribenos
                </div>
                <div className="d-flex px-4">
                    <AiFillMail className="social-icon-sm me-3" />
                    <BsWhatsapp className="social-icon-sm"/>
                </div>
            </div>
        </Sidebar>
    );
}

export default SideMenu;
