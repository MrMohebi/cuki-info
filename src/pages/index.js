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

const IndexPage = () => {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.to(['.absolute-wrapper', '#background-svg'], {
            y: '-100%',
            opacity:0,
            // filter: 'blur(10px)',
            scrollTrigger: {
                trigger: '#c-plans',
                start: 'top bottom',
                end: 'top -=50',
                scrub: true
            }
        })

        // gsap.to('.c-intro',{
        //     scrollTrigger:{
        //         trigger:'#intro-trigger',
        //         scrub:true
        //     },
        //     left:'5%',
        //     transform:'translateX(0%)',
        //     marginLeft:'0%',
        //     marginRight:'0%',
        //     // textAlign:'right'
        // })
        // gsap.to('#intro-first-part',{
        //     scrollTrigger:{
        //         trigger:'#intro-trigger',
        //         scrub:true,
        //         start:'100 top'
        //     },
        //     marginLeft:'0%',
        //     marginRight:'0%',
        //     // textAlign:'right'
        // })
        window.scrollBy(0, 1)
    }, [])


    let plans_button_handler = () => {
        window.scrollTo(0, document.getElementById("c-plans").offsetTop);
        // window.scrollTo(0, 2800)
    }
    return (
        <div dir={'ltr'} id={'wrapper'}>
            <div id={'main-svg'}
                 style={{
                     width: 1800,
                     right: 0
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
        </div>
    )
}

export default IndexPage
