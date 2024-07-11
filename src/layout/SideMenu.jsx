import React, {useState} from "react";
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

export const SideMenu = () => {
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(true);

    return (
        <Sidebar
            breakPoint="sm"
            rootStyles={{ border: "none" }}
            className="pt-5 position-relative"
            style={showMenu? {} : {minWidth: '50px', width: '50px'}}
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
                <MenuItem component={<Link to="/dashboard" />} active={location.pathname === '/dashboard'} className={`text-uppercase fw-bold ${showMenu? '' : 'collapsed'}`}>
                    <div className="d-flex align-items-center">
                        <FaHome className="me-1 fs-4" /> {showMenu && 'Inicio'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/expense" />} className={`text-uppercase fw-bold ${showMenu? '' : 'collapsed'}`} active={location.pathname === '/expense'}>
                    <div className="d-flex align-items-center">
                        <BiMoney className="me-1 fs-4" /> {showMenu && 'Egresos'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/history" />} className={`text-uppercase fw-bold ${showMenu? '' : 'collapsed'}`} active={location.pathname === '/history'}>
                    <div className="d-flex align-items-center">
                        <AiOutlineHistory className="me-1 fs-4" /> {showMenu && 'Historico'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/utilities" />} className={`text-uppercase fw-bold ${showMenu? '' : 'collapsed'}`} active={location.pathname === '/utilities'}>
                    <div className="d-flex align-items-center">
                        <AiOutlineBulb className="me-1 fs-4" /> {showMenu && 'Utilidades'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/projects" />} className={`text-uppercase fw-bold ${showMenu? '' : 'collapsed'}`} active={location.pathname === '/projects'}>
                    <div className="d-flex align-items-center">
                        <FaShareAlt className="me-1 fs-4" /> {showMenu && 'Proyectos'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/activities" />} className={`text-uppercase fw-bold ${showMenu? '' : 'collapsed'}`} active={location.pathname === '/activities'}>
                    <div className="d-flex align-items-center">
                        <FaChampagneGlasses className="me-1 fs-4" /> {showMenu && 'Actividades'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/calendar" />} className={`text-uppercase fw-bold ${showMenu? '' : 'collapsed'}`} active={location.pathname === '/calendar'}>
                    <div className="d-flex align-items-center">
                        <AiOutlineCalendar className="me-1 fs-4" /> {showMenu && 'Calendario'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/calculator" />} className={`text-uppercase fw-bold ${showMenu? '' : 'collapsed'}`} active={location.pathname === '/calculator'}>
                    <div className="d-flex align-items-center">
                        <AiOutlineCalculator className="me-1 fs-4" /> {showMenu && 'Calculadora'}
                    </div>
                </MenuItem>
                <MenuItem component={<Link to="/configuration" />} className={`text-uppercase fw-bold ${showMenu? '' : 'collapsed'}`} active={location.pathname === '/configuration'}>
                    <div className="d-flex align-items-center">
                        <AiOutlineSetting className="me-1 fs-4" /> {showMenu && 'Configuración'}
                    </div>
                </MenuItem>
            </Menu>
            <div className="text-end mt-5">
                <button className="bg-transparent border-0">
                    {
                        showMenu ? <span aria-hidden="true" className="carousel-control-prev-icon text-success" onClick={() => setShowMenu(false)}/>
                            : <span aria-hidden="true" className="carousel-control-next-icon text-success" onClick={() => setShowMenu(true)}/>
                    }
                </button>
            </div>
            <div className="px-3 py-5 w-100 position-absolute bottom-0">
                <div className="fs-5 fw-bold">
                    {showMenu && 'Escribenos'}
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
