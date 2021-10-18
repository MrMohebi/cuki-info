import React, {useEffect, useLayoutEffect, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import * as ReactDOMServer from "react-dom/server";
import {cardElements} from "../cards/cards";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import * as plansGen from '../functions/plansGen'
import {Helmet} from "react-helmet";
import UserInfoDialog from "../Components/UserInfoDialog/UserInfoDialog";
import lottie from "lottie-web";

let links = require('../assets/links')
let extraFunctions = require('../functions/externalFunctions')
let _ = require('lodash')


const Mobile = () => {

    let allowForNextCard = true;
    let [plans, setPlans] = React.useState(<div/>)
    let [scrollSectionsClass, setSSClass] = React.useState('')
    let [plansButtonContent, setPlansButtonContent] = React.useState('پلن ها')
    let [userInfoDialog, setUserInfoDialog] = React.useState(false)
    let [basePrice, setBP] = React.useState(0)
    let [pickedPlanId, setPickedPlanId] = React.useState(false);
    let reachedBottom = useRef(false)
    let introHide = useRef(false)
    let headerClosedByPlansBtn = useRef(false)

    let cardsPrepared = false;
    let touchStartScroll = useRef(0);
    let logoIMG = "/img/cuki.png";



    let planSubmitFunction = (planId) => {
        setUserInfoDialog(true)
        setPickedPlanId(planId)
    }

    let changeScrollStatus = (state) => {
        if (state) {
            document.body.style.overflowY = 'scroll'
        } else {
            document.body.style.overflowY = 'hidden'
        }
    }

    let closePlansSection = () => {
        let intro = document.getElementById('intro-mobile')
        if (headerClosedByPlansBtn.current&&intro.classList.contains('close-intro-mobile')){
            intro.classList.remove('close-intro-mobile')
        }
        gsap.to('.main-desktop-wrapper', {
            y: '0',
        })
        gsap.to('.plans-section', {
            height: '0vh'
        })
        gsap.to('.plans-container ', {
            opacity: '0',
            y: '200',
            duration: '0.2',
            onComplete: () => {
                gsap.to('.plans-container', {
                    display: 'none'
                })
                window.scrollBy(0, -2000)
            }
        })
    }

    let openPlansSection = () => {
        let intro = document.getElementById('intro-mobile')
        if (!intro.classList.contains('close-intro-mobile')){
            intro.classList.add('close-intro-mobile')
            headerClosedByPlansBtn.current = true
        }
        gsap.to('.plans-container ', {
            opacity: '1',
            y: '0',
            duration: '0.2',
        })
        gsap.to('.plans-section', {
            height: '100vh',
            width: '100vw',
            onComplete: () => {
                let plansContainer = document.querySelector('.plans-container');
                gsap.to(plansContainer, {
                    flexFlow: 'column',
                    duration: 0
                })
                gsap.to(plansContainer, {
                    display: 'flex',
                    opacity: '1',
                    overflowY: 'scroll',
                })
            },
            ease: 'power2.out'
        })
    }

    function isPlansSectionOpened() {
        return !!parseInt(document.getElementsByClassName('plans-section')[0].style.height);
    }

    let openPlansSectionHandler = () => {
        if (isPlansSectionOpened()) {
            extraFunctions.changePlansButtonContent(false, setPlansButtonContent)
            closePlansSection()
            a.stop()
            changeScrollStatus(true)
            allowForNextCard = true;
        } else {
            extraFunctions.changePlansButtonContent(true, setPlansButtonContent)
            openPlansSection()
            if (document.querySelector('#congrats svg')) {
                a.stop()
                a.play()
            }
            changeScrollStatus(false)
            allowForNextCard = false;
        }
    }


    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(ScrollToPlugin)

    let a = lottie;
    let afterPlansGot = (plans) => {
        setPlans(plans)
        a.loadAnimation({
                container: document.getElementById('congrats'),
                loop: false,
                autoplay: true,
                renderer: 'svg',
                path: '/lottie/congrats.json'
            }
        )
        a.stop()
    }

    useEffect(() => {
        window.addEventListener('resize', _.debounce(() => {
            extraFunctions.checkScreenSize()
        }, 100))
        plansGen.plansGen(afterPlansGot, planSubmitFunction)
        for (let i = 0; i < cardElements.length; i++) {
            document.querySelector('#m-trigger-' + i).append(document.createRange().createContextualFragment(ReactDOMServer.renderToStaticMarkup(cardElements[i])));
        }
        if (!cardsPrepared) {
            cardsPrepared = true;
        }
        setSSClass('vw-100 h-999 ')
    }, [])

    return (
        <main className={'main-desktop main-mobile vw-100'}>
            <Helmet>
                <title>Cuki</title>
            </Helmet>
            <UserInfoDialog setUserInfoDialog={setUserInfoDialog} show={userInfoDialog} price={basePrice} pickedPlanId={pickedPlanId}/>

            <div  className={'top-header-white'}/>
            <div style={{
                background:'#fcfcfc'
            }} className={'plans-section d-flex justify-content-center align-items-center '}>
                <div style={{minHeight:'108px'}}></div>

                <div style={{
                }} className={'plans-container w-100 '}>
                    <div style={{minHeight:'100px'}}></div>
                    {plans}
                </div>
            </div>
            <button onKeyDown={() => {
            }} className={'demo-button-desktop'} style={{zIndex: '100'}} onClick={() => {
                window.location.assign(links.demoURL);
            }}>
                        <span
                            style={{fontSize: "0.8rem", marginRight: '5px', marginTop: '5px', opacity: '0'}}> ;) </span>
                دمو
            </button>
            <div className={'cuki-info align-items-center'} style={{zIndex: '100'}}>
                <img src={logoIMG} className={'cuki-image-desktop'} alt="Cuki Online menu "/>
                <span className={'IransansBold info-margin mt-2'}>Cuki</span>
                <span className={'Iransans info-margin mt-2'}>online</span>
                <span className={'Iransans info-margin mt-2'}>menu</span>
            </div>
            <div style={{
                pointerEvents: 'none',
                zIndex: '99'
            }}
                 className={'d-flex flex-column main-desktop-wrapper vh-100 vw-100 position-fixed '}>
                <div style={{
                    transition: '0.4s ease',
                    paddingTop: '80px',
                    height: '35vh',
                    background: 'rgba(255,255,255,0.84)',
                }} id={'intro-mobile'} className={'w-100 mobile-container'}>
                    <div className={'intro-desktop-texts w-100 '}>
                        <h2 className={'intro-desktop-head mb-2 text-center IransansBold'}>
                            دیگه وقت <br/> راحت تر شدن کارهاست
                        </h2>
                        <h5 className={' Iransans intro-desktop-title text-center'}>
                            کوکی برای رفع نیاز ها و سرعت دهی به
                            کار
                            ها طراحی شده
                            <br/>
                            که هم مشتری ها راضی باشن هم صاحبان کسب وکار
                        </h5>
                    </div>
                </div>
            </div>
            <button style={{}} role={'button'}
                    className={' plans-toggle-button plans-button  d-flex justify-content-center align-content-center'}
                    onClick={() => {
                        openPlansSectionHandler()
                    }}>
                <span className={'Iransans '}>
                    {plansButtonContent}
                </span>
            </button>
            <div style={{
                position: 'absolute',
                bottom: '0'
            }}>
                <div onTouchStart={(e) => {
                    touchStartScroll.current = e.changedTouches[0].clientY
                }}
                     onTouchMove={(e) => {
                         if (reachedBottom.current && touchStartScroll.current > 0 && touchStartScroll.current > e.changedTouches[0].clientY) {
                             reachedBottom.current = false;
                             openPlansSectionHandler()
                         }
                     }}
                     onScroll={(event) => {
                         if (event.target.scrollTop > 0) {
                             if (!introHide.current) {
                                 document.getElementById('intro-mobile').classList.add('close-intro-mobile')
                                 let cards = Array.from(document.getElementById('scroller').children)

                                 headerClosedByPlansBtn.current = false;
                                 introHide.current = true
                             }
                         } else {
                             if (introHide.current) {
                                 document.getElementById('intro-mobile').classList.remove('close-intro-mobile')
                                 let cards = Array.from(document.getElementById('scroller').children)
                                 cards.forEach(card => {
                                     card.classList.remove('center-snap')
                                 })
                                 introHide.current = false
                             }
                         }

                         if (event.target.scrollTop + event.target.clientHeight === event.target.scrollHeight) {
                             reachedBottom.current = true;
                         } else {
                             reachedBottom.current = false;
                         }
                     }} id={'scroller'} className={'scroller'} style={{
                    // scrollSnapType: 'y proximity',
                    height: '100vh',
                    overflowY: 'scroll',
                    position: 'relative',
                    bottom: '0'
                }}>

                    {/*__________ Just For Scroll Section __________*/}
                    <div style={{
                        height: '35vh'
                    }} id={'m-trigger'} className={scrollSectionsClass + " " + "mobile-triggers mt-first"}/>
                    <div id={'m-trigger-0'} className={scrollSectionsClass + " " + "mobile-triggers"}/>
                    <div id={'m-trigger-1'} className={scrollSectionsClass + " " + "mobile-triggers"}/>
                    <div id={'m-trigger-2'} className={scrollSectionsClass + " " + "mobile-triggers"}/>
                    <div id={'m-trigger-3'} className={scrollSectionsClass + " " + "mobile-triggers"}/>
                    <div id={'m-trigger-4'} className={scrollSectionsClass + " " + "mobile-triggers"}/>
                    <div id={'m-trigger-5'} className={scrollSectionsClass + " " + "mobile-triggers"}/>
                    <div id={'m-trigger-6'} className={scrollSectionsClass + " " + "mobile-triggers"}/>
                    <div style={{
                        // height:'50vh'
                    }} id={'m-trigger-7'} className={scrollSectionsClass + " " + "mobile-triggers"}/>

                </div>
            </div>


        </main>
    )
}
export default Mobile
