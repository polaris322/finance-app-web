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
    AiOutlineSetting,
    AiOutlineBulb
} from "react-icons/ai";
import {FaChampagneGlasses} from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import {BsWhatsapp} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {updateSidemenuStatus} from "../store/actions/layout";

export const SideMenu = () => {
    const location = useLocation();
    const { showSideMenuText } = useSelector((state) => state.layout);
    const dispatch = useDispatch();

    return (
        <Sidebar
            breakPoint="sm"
            rootStyles={{ border: "none" }}
            className="pt-5 position-relative"
            style={showSideMenuText? {} : {minWidth: '50px', width: '50px'}}
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
                <MenuItem component={<Link to="/dashboard" />} active={location.pathname === '/dashboard'} className={`text-uppercase fw-bold ${showSideMenuText? '' : 'collapsed'}`}>
                    <div className="d-flex align-items-center">
                        <FaHome className="me-1 fs-4" /> {showSideMenuText && 'Inicio'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/expense" />} className={`text-uppercase fw-bold ${showSideMenuText? '' : 'collapsed'}`} active={location.pathname === '/expense'}>
                    <div className="d-flex align-items-center">
                        <BiMoney className="me-1 fs-4" /> {showSideMenuText && 'Egresos'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/history" />} className={`text-uppercase fw-bold ${showSideMenuText? '' : 'collapsed'}`} active={location.pathname === '/history'}>
                    <div className="d-flex align-items-center">
                        <AiOutlineHistory className="me-1 fs-4" /> {showSideMenuText && 'Historico'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/utilities" />} className={`text-uppercase fw-bold ${showSideMenuText? '' : 'collapsed'}`} active={location.pathname === '/utilities'}>
                    <div className="d-flex align-items-center">
                        <AiOutlineBulb className="me-1 fs-4" /> {showSideMenuText && 'Utilidades'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/projects" />} className={`text-uppercase fw-bold ${showSideMenuText? '' : 'collapsed'}`} active={location.pathname === '/projects'}>
                    <div className="d-flex align-items-center">
                        <FaShareAlt className="me-1 fs-4" /> {showSideMenuText && 'Proyectos'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/activities" />} className={`text-uppercase fw-bold ${showSideMenuText? '' : 'collapsed'}`} active={location.pathname === '/activities'}>
                    <div className="d-flex align-items-center">
                        <FaChampagneGlasses className="me-1 fs-4" /> {showSideMenuText && 'Actividades'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/calendar" />} className={`text-uppercase fw-bold ${showSideMenuText? '' : 'collapsed'}`} active={location.pathname === '/calendar'}>
                    <div className="d-flex align-items-center">
                        <AiOutlineCalendar className="me-1 fs-4" /> {showSideMenuText && 'Calendario'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/calculator" />} className={`text-uppercase fw-bold ${showSideMenuText? '' : 'collapsed'}`} active={location.pathname === '/calculator'}>
                    <div className="d-flex align-items-center">
                        <AiOutlineCalculator className="me-1 fs-4" /> {showSideMenuText && 'Calculadora'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/configuration" />} className={`text-uppercase fw-bold ${showSideMenuText? '' : 'collapsed'}`} active={location.pathname === '/configuration'}>
                    <div className="d-flex align-items-center">
                        <AiOutlineSetting className="me-1 fs-4" /> {showSideMenuText && 'Configuración'}
                    </div>
                </MenuItem>
            </Menu>
            <div className="text-end mt-5">
                <button className="bg-transparent border-0">
                    {
                        showSideMenuText ?
                            <span aria-hidden="true" className="carousel-control-prev-icon text-success"
                                  onClick={() => dispatch(updateSidemenuStatus(false))}/>
                            : <span aria-hidden="true" className="carousel-control-next-icon text-success"
                                    onClick={() => dispatch(updateSidemenuStatus(true))}/>
                    }
                </button>
            </div>
            <div className="px-3 py-5 w-100 position-absolute bottom-0">
                <div className="fs-5 fw-bold">
                    {showSideMenuText && 'Escribenos'}
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
