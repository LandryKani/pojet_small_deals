import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet} from "react-router-dom";


function Layout() {
    return (
            <React.Fragment>
                <Header />
                <main className='page-wrapper'>
                <Outlet />
                </main>
                <Footer />
            </React.Fragment>
        )
}

export default Layout;