import React from 'react';
import HeaderLast from '../HeaderLast/HeaderLast';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="">
            <div className="header-main">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            </div>
            <HeaderLast></HeaderLast>
        </div>
    );
};

export default Header;