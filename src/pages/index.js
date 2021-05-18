//react
import React, {useEffect, useRef} from "react";
//plugins
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollTo from "gsap/ScrollToPlugin";
import TextPlugin from "gsap/TextPlugin";
import Lottie from 'react-lottie';
import * as svgs from '../svg/svgs'

//css files
import '../css/MainComponent.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Helmet} from "react-helmet";


const IndexPage = () => {
    let dialog = useRef(null);
    let ShowTheDemo = () => {
    }
    //main texts
    let texts = [["واریز وجه 2 تا 4 روز ", "بعد از پرداخت مشتری حداکثر 2 تا 4 روز <br>مبلغ به حساب شما واریز میشود", "1.svg"], ["باشگاه مشتریان", "بانک جامع اطلاعاتی و تحلیل داده های موجود مشتریان<br> برای خدمات ویژه", "2.svg"], ["منوی همراه مشتری", "مشتریان میتوانند با اسکن کد موجود روی <br> کارت ویزیت اختصاصی شما <br> همیشه و همه جا به منو دسترسی داشته باشند", "3.svg"], ["متصل به نرم افزار های حسابداری", "سفارشات تایید شده در کوکی به صورت خودکار<br> در نرم افزار حسابداری شما ثبت خواهد شد", "4.svg"], ["سرعت بالا در سفارش غذا", "کاربر برای ثبت سفارش نیاز به انتظار های خسته کننده<br> وطولانی نخواهد داشت", "5.svg"], ["پرداخت دونگی", "این ویژگی جدید و خلاقانه برای پرداخت های گروهی<br> و جمع های دوستانه بسیار کاربردی است و باعث<br> تقسیم حساب بسیار راحت تر مشتریان میشود<br> پای صندوقتون هم خلوت تر میشه :)", "6.svg"], ["تور مجازی", "کاربر برای ثبت سفارش نیاز به انتظار های خسته کننده<br> وطولانی نخواهد داشت", "7.svg"], ["تخفیف های استثنایی", "جوایز و تخفیف های متنوع از طرف کوکی به مشتریان<br> و صاحبان رستوران", "8.svg"], ["سفارش بدون ثبت نام", "برای یک سفارش معمولی اجبار به ثبت نام و طی کردن<br> یک روند خسته کننده وجود ندارد", "9.svg"], ["رابط کاربری زیبا و ساده", "طراحی اپیکیشن به صورتی بوده که کاربر به راحتی بتواند<br> سفارش خود را ثبت کند", "10.svg"], ["جزعیات در اپیکیشن", "قبل از هر سفارش کاربر میتواند عکس هر غذا را<br> با بالاترین کیفیت ببیند، جزییات هر غذا را بداند<br> و از نظرات و تجربه ی سایر کاربران آگاه شود", "11.svg"], ["پشتیبانی سریع و 24 ساعته", "تیم کوکی در هر زمانی برای پشتیبانی همراه شماست", "12.svg"], []]
    let allowToScroll = true;
    let lastScrollPosition = 0;
    let currentSlide = 0;
    let [svg, setSvg] = React.useState(<svg/>);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: svgs.upButton,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    //register Gsap Plugins
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(ScrollTo)
    gsap.registerPlugin(TextPlugin)


    useEffect(() => {
        gsap.set(".intro-logo", {
            right: "50%"
        })
        gsap.set(".main-dialog", {
            height: "0vh"
        })
        let dialogTL = gsap.timeline({
            scrollTrigger: {
                trigger: '#trigger0',
                scrub: 0.2,
                start: 0,
                end: "100",
            },
        })
        dialogTL.to('.main-dialog', {
            height: '75vh'
        }, "-=0.2")

        let LogoTL = gsap.timeline({
            scrollTrigger: {
                trigger: '#trigger0',
                scrub: 1,
                start: 0,
                end: "100",
            },
        })
        LogoTL.to('.intro-logo', {
            right: "10%",
            top: -55,
            scale: 0.3,
            rotateZ: 360,
            onReverseComplete:()=>{
                gsap.to(".each-slide-title-text", {
                    text: '',
                    duration: 0.2,
                    ease: "steps(1)"
                })
                gsap.to(".each-slide-head-text", {
                    text: '',
                    duration: 0.2,
                    ease: "steps(1)"
                })
                setSvg('')
            }
        }, "-=0.2")
            .to(".intro", {
                y: 120,
                opacity: 0
            }, 0)



        window.addEventListener("scroll", (e) => {
            e.preventDefault()
            if (window.scrollY > window.screen.height / 12) {
                if (allowToScroll) {
                    document.body.style.overflow = "hidden"
                    allowToScroll = false;
                    if (window.scrollY > lastScrollPosition) {
                        if (currentSlide !== texts.length - 1) {
                            nextSlide(currentSlide + 1)
                            currentSlide = currentSlide + 1
                            if (currentSlide > texts.length) {
                                currentSlide = texts.length - 2
                            }
                        } else {
                            document.body.style.overflow = "scroll"
                            allowToScroll = true;
                        }
                    } else {
                        prevSlide(currentSlide - 1)
                        currentSlide = currentSlide - 1
                        gsap.to(".go-up-button", {
                            opacity: 0,
                            ease: 'Power4.out',
                            pointerEvents: 'none'
                        })
                    }

                } else {
                    document.body.style.overflow = "hidden"
                }
            } else {

                allowToScroll = true
                document.body.style.overflow = "scroll"
                currentSlide = 0;
            }
            lastScrollPosition = window.scrollY;


        })
    }, [])

    let nextSlide = (slide) => {
        gsap.to(window,{
            scrollTo:"+=300",
            ease:"steps(1)",
            duration:0.001
        })
        if (texts[slide]) {
            if (texts[slide] !== undefined) {

                let tl = gsap.timeline({
                    onComplete: () => {
                        allowToScroll = true
                        document.body.style.overflow = "scroll"
                    }

                })
                tl.to('.each-slide-head-text', {
                    opacity: 0,
                    x: -120,
                    duration: 0.2
                }, 0).to('.each-slide-title-text', {
                    opacity: 0,
                    x: -120,
                    duration: 0.2
                }, 0).to('.svg-container', {
                    opacity: 0,
                    y: -120,
                    duration: 0.2
                }, 0)


                    .to('.each-slide-head-text', {
                        duration: 0.01,
                        text: {
                            value: texts[slide - 1] ? texts[slide - 1][0] : '',
                        },
                    }, 0.2).to('.each-slide-title-text', {
                    duration: 0.01,

                    text: {
                        value: texts[slide - 1] ? texts[slide - 1][1] : '',
                    },
                }, 0.2).to('.svg-container', {
                    duration: 0.01,
                    ease: "steps(1)",
                    // backgroundImage: "url(/svgs/" + image + ")",
                    onComplete: () => {
                        setSvg(svgs.SVGs[slide - 1])
                    }
                }, 0.2)


                    .to('.each-slide-head-text', {
                        opacity: 0,
                        x: 120,
                        duration: 0.1,
                    }, 0.3).to('.each-slide-title-text', {
                    opacity: 0,
                    x: 120,
                    duration: 0.1,
                }, 0.3).to('.svg-container', {
                    opacity: 0,
                    y: 120,
                    duration: 0.1,
                }, 0.3)

                    .to('.each-slide-head-text', {
                        opacity: 1,
                        x: 0,
                        duration: 0.2
                    }, 0.5).to('.each-slide-title-text', {
                    opacity: 1,
                    x: 0,
                    duration: 0.2

                }, 0.5).to('.svg-container', {
                    opacity: 1,
                    y: 0,
                    duration: 0.2

                }, 0.5)
            }

            if (!texts[slide + 1]) {
                gsap.to(".go-up-button", {
                    opacity: 1,
                    ease: 'Power4.out',
                    pointerEvents: 'all'
                })
                gsap.to("#up-1",{
                    drawSVG:"0%"
                })
                document.body.style.overflow = "scroll"
                allowToScroll = true
            }

        } else {
            document.body.style.overflow = 'scroll'
            allowToScroll = true

        }
    }

    let prevSlide = (slide) => {
        document.body.style.overflow = "hidden"
        if (slide === 0) {
            gsap.to(window, {
                scrollTo: "#trigger0",
                duration: 0.2,
                ease: "steps(1)",

            })

        }
        if (texts[slide]) {
            if (texts[slide - 1] !== undefined) {
                let tl = gsap.timeline({
                    onComplete: () => {
                        allowToScroll = true
                        document.body.style.overflow = "scroll"
                    }
                })

                tl.to('.each-slide-head-text', {
                    opacity: 0,
                    x: 120,
                    duration: 0.2
                }, 0).to('.each-slide-title-text', {
                    opacity: 0,
                    x: 120,
                    duration: 0.2
                }, 0).to('.svg-container', {
                    opacity: 0,
                    y: 120,
                    duration: 0.2
                }, 0)

                    .to('.each-slide-head-text', {
                        duration: 0.01,
                        text: {
                            value: texts[slide - 1] ? texts[slide - 1][0] : '',
                        },
                    }, 0.2).to('.each-slide-title-text', {
                    duration: 0.01,

                    text: {
                        value: texts[slide - 1] ? texts[slide - 1][1] : '',
                    },
                }, 0.2).to('.svg-container', {
                    duration: 0.01,
                    ease: "steps(1)",
                    onComplete: () => {
                        setSvg(svgs.SVGs[slide - 1])
                    }
                }, 0.2)


                    .to('.each-slide-head-text', {
                        opacity: 0,
                        x: -120,
                        duration: 0.1,
                    }, 0.3).to('.each-slide-title-text', {
                    opacity: 0,
                    x: -120,
                    duration: 0.1,
                }, 0.3).to('.svg-container', {
                    opacity: 0,
                    y: -120,
                    duration: 0.1,
                }, 0.3)


                    .to('.each-slide-head-text', {
                        opacity: 1,
                        x: 0,
                        duration: 0.2
                    }, 0.5).to('.each-slide-title-text', {
                    opacity: 1,
                    x: 0,
                    duration: 0.2

                }, 0.5).to('.svg-container', {
                    opacity: 1,
                    y: 0,
                    duration: 0.2

                }, 0.5)
            }
        }
    }


    return (
        <main>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Cuki</title>
            </Helmet>
            <h1 className={'d-none'}>منوی دیجیتال کوکی</h1>
            <div className={"main-website-container "}>
                {texts.map((eachText, index) => {
                    if (typeof eachText !== 'undefined') {
                        let className = index === 0 ? 'd-flex flex-column align-items-center' : ''
                        return (
                            <div id={'trigger' + index} key={index} className={'animation-triggers ' + className}>
                                {index === 0 ?
                                    <div>

                                        <img src={'/img/Logo.png'} className={'intro-logo mt-4'} style={{
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover'
                                        }} alt={"Cuki"}/>
                                        <div className={'d-flex flex-column align-items-center  intro'}>

                                            <h1 className={'cuki-head-text'} style={{transform: 'scale(1.5)'}}>Cuki</h1>
                                            <h5
                                                className={'intro-head-text mt-3'}> الان دیگه وقت راحت تر شدن کار
                                                هاست</h5>
                                            <span className={'intro-head-title mt-2'}>کوکی برای رفع نیاز ها و  سرعت دهی به کار ها طراحی شده
 که هم مشتری ها راضی باشن هم صاحبان کسب وکار</span>
                                        </div>
                                    </div>
                                    :
                                    <div/>
                                }
                            </div>
                        )
                    }
                })}
                <div ref={dialog} className={"main-dialog"}>
                    <div className={'svg-container'}>
                        {svg}
                    </div>
                    <div className={'each-slide-texts mt-5 d-flex flex-column text-center '}>
                        <span className={'each-slide-head-text'}/>
                        <p style={{whiteSpace: 'nowrap'}}
                           className={'each-slide-title-text mt-3 d-flex flex-column justify-content-center align-items-center'}/>
                    </div>
                </div>

                <div className={"bottom-waves"}>
                    <div className={"go-up-button"} onClick={() => {
                        allowToScroll = false
                        nextSlide(0)
                        currentSlide = 1
                        gsap.to(window, {
                            scrollTo: '#trigger0',
                            duration: 0.1,
                            onStart: () => {
                                document.body.style.overflow = "scroll"
                                gsap.to(".go-up-button", {
                                    opacity: 0,
                                })
                            }
                        })
                    }}>
                        <Lottie
                            options={defaultOptions}
                            height={80}
                            width={80}
                        />
                    </div>
                </div>
                <div className={"show-demo-button"} onClick={ShowTheDemo}>مشاهده نمونه</div>
            </div>
        </main>
    )

}
export default IndexPage

