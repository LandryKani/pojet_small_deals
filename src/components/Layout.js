import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


function Layout() {
    return (
        <React.Fragment>
            <Header />
            <div className='page__wrapper'>
            <Outlet />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;