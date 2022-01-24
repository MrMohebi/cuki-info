import React from 'react';
import logo from '../images/logo.png'
import phone from '../images/social/phone.png'
import instagram from '../images/social/instagram.png'
import location from '../images/social/location.png'
import {ButtonBase} from "@mui/material";

const socials = [
    {
        image: instagram,
        link: "https://instagram.com"
    },
    {
        image: phone,
        link: "https://instagram.com"
    },
    {
        image: location,
        link: "https://instagram.com"
    },

]

const Footer = () => {
    return (
        <section className={'w-100 h-50 footer'}>
            <div className={'w-100 footer d-flex  justify-content-around align-items-center h-100'}>
                <div className={'d-flex flex-column justify-content-center align-items-center '}>
                    <img className={'f-logo mb-2'} src={logo} alt="cuki"/>
                    <p className={'IranSansUltraLight w-100 text-center my-0 fs-5'}>تیم کوکی با ساخت منوی آنلاین</p>
                    <p className={'IranSansUltraLight w-100 text-center my-0 fs-5'}>صمیمانه همراه شما</p>
                    <p className={'IranSansUltraLight w-100 text-center my-0 fs-5'}>برای داشتن کسب کاری موفق، خواهد
                        بود</p>
                    <div className={'social w-100 d-flex flex-row-reverse justify-content-center align-items-center mt-3'}>
                        {socials.map(social =>
                            <ButtonBase className={'mx-3'}
                                style={{
                                    height: 40,
                                    width: 40,
                                    borderRadius: '50%',
                                    backgroundImage: `url(${social.image})`,
                                    backgroundSize: '70%',
                                    backgroundPosition: 'center',
                                    backgroundRepeat:'no-repeat'
                                }}>
                            </ButtonBase>
                                )}



                            </div>
                            </div>
                            <div className={'d-flex flex-column justify-content-center align-items-center'}>
                            <p dir={'rtl'} className={'IranSansBold'}>آدرس:</p>
                            <p className={'IranSansUltraLight'}> کرمان-خیابان 24 آذر-برج تاج-طبقه 5-واحد 502
                            </p>
                            </div>
                            </div>
                            </section>
                            );
                        };

                        export default Footer;