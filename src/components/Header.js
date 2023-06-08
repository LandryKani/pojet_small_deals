import React, {useState} from 'react';
import '../assets/css/header.css';
import MobileMenu from './pages/header/MobileMenu';

import HeaderLogo from './pages/header/HeaderLogo';
import HeaderMenu from './pages/header/HeaderMenu';
import HeaderSearch from './pages/header/HeaderSearch';
import HeaderAccount from './pages/header/HeaderAccount';


function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const handleDisplayMobile = () => {
        setShowMobileMenu(prevState => !prevState);
    }

    return (
        <>
            <header className="nav">
                <HeaderLogo />
                <HeaderMenu />
                <HeaderSearch />
                <HeaderAccount handleDisplayMobile={handleDisplayMobile}/>
                <MobileMenu 
                    handleDisplayMobile={handleDisplayMobile} 
                    showMobileMenu={showMobileMenu}
                />
            </header>
        </>
    )
}

export default Header