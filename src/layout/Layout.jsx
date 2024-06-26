import React from 'react';
import Header from './Header';
import SideMenu from "./SideMenu";

const Layout = ({ children, className = '' }) => {
    return (
        <>
            <Header />
            <div className="d-flex w-100">
                <SideMenu />
                <div className={`w-100 page-content-wrapper main-background ${className}`}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;