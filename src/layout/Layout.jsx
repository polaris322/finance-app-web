import React, {useState} from 'react';
import Header from './Header';
import SideMenu from "./SideMenu";

const Layout = ({ children, className = '' }) => {
    const [showMenu, setShowMenu] = useState(true);

    return (
        <>
            <Header />
            <div className="d-flex w-100">
                {
                    showMenu && <SideMenu onHide={() => setShowMenu(false)} />
                }
                <div className={`w-100 page-content-wrapper main-background ${className}`}>
                    {
                        !showMenu && <button className="bg-transparent border-0" onClick={() => setShowMenu(true)}>
                            <span aria-hidden="true" className="carousel-control-next-icon text-success btn-show-menu"/>
                        </button>
                    }
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;