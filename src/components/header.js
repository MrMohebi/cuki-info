import React from 'react';
import logo from '../images/logo.png'
import '../styles/header.css'
import '../styles/fonts/fonts.css'
const Header = () => {
    return (
        <div className={'header-wrapper'}>
            <div className={'h-left d-flex flex-row'}>
                <div className={'h-left d-flex flex-row align-items-center ps-3 '}>
                    <img src={logo} alt="Cuki Logo" className={'c-logo'}/>
                    <span className={'IranSansMedium pt-3 ps-1'} >Online Menu</span>
                </div>
                <a href="" className={'nav-links pt-3 mx-4 pb-1'}> معرفی کوکی</a>
                <a href="" className={'nav-links pt-3 mx-4 pb-1'}>پکیج ها</a>
                <a href="" className={'nav-links pt-3 mx-4 pb-1'}>ارتباط با ما</a>

            </div>
            <div className={'h-right d-flex flex-row align-items-center pe-5'}>
                <button  className={'demo-btn IranSans pt-1'}>
                    دمو  کوکی
                </button>
            </div>
        </div>
    );
};

export default Header;