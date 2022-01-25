import * as React from "react"
import gsap from 'gsap'
import '../styles/index.css'
import '../styles/fonts/fonts.css'
import ScrollTrigger from "gsap/ScrollTrigger";
import {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Header from "../components/header";
import Cards from "../components/cards";
import Plans from "../components/plans";
import Questions from "../components/questions";
import Footer from "../components/footer";
import {mainSvg} from "../images/SVG";
import Intro from "../components/intro";
import MobileCards from "../components/mobileCards";
import SiteLoadFunction from "../components/siteLoadFunction";

const IndexPage = () => {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

    }, [])


    let plans_button_handler = () => {
        window.scrollTo(0, document.getElementById("c-plans").offsetTop);
    }
    return (<div dir={'ltr'} id={'wrapper'}>
        <div id={'main-svg'}
             style={{
                 width: 1800, right: 0
             }}>
            {mainSvg}
        </div>
        <Header/>
        <div className={'trigger'} id={'trigger'}/>
        <div dir={'rtl'} className={'absolute-wrapper w-100 '}>
            <Cards/>
            <Intro plans_button_handler={plans_button_handler}/>

            <MobileCards/>

        </div>
        <Plans/>
        <Questions/>
        <Footer/>
        <SiteLoadFunction/>
    </div>)
}

export default IndexPage
