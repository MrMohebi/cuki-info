//react
import React, {useEffect, useRef} from "react";
//plugins
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import ScrollTo from "gsap/ScrollToPlugin";
import TextPlugin from "gsap/TextPlugin";
import Lottie from 'react-lottie';
import * as svgs from '../svg/svgs'

//css files
import '../css/MainComponent.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Helmet} from "react-helmet";

//included files
import {cardElements} from "../cards/cards";
import * as ReactDOMServer from "react-dom/server";


const IndexPage = () => {
    let dialog = useRef(null);
    let ShowTheDemo = () => {
    }
    //main texts
    let texts = [["واریز وجه 2 تا 4 روز ", "بعد از پرداخت مشتری حداکثر 2 تا 4 روز <br>مبلغ به حساب شما واریز میشود", "1.svg"], ["باشگاه مشتریان", "بانک جامع اطلاعاتی و تحلیل داده های موجود مشتریان<br> برای خدمات ویژه", "2.svg"], ["منوی همراه مشتری", "مشتریان میتوانند با اسکن کد موجود روی <br> کارت ویزیت اختصاصی شما <br> همیشه و همه جا به منو دسترسی داشته باشند", "3.svg"], ["متصل به نرم افزار های حسابداری", "سفارشات تایید شده در کوکی به صورت خودکار<br> در نرم افزار حسابداری شما ثبت خواهد شد", "4.svg"], ["سرعت بالا در سفارش غذا", "کاربر برای ثبت سفارش نیاز به انتظار های خسته کننده<br> وطولانی نخواهد داشت", "5.svg"], ["پرداخت دونگی", "این ویژگی جدید و خلاقانه برای پرداخت های گروهی<br> و جمع های دوستانه بسیار کاربردی است و باعث <br> تقسیم حساب بسیار راحت تر مشتریان میشود <br> پای صندوقتون هم خلوت تر میشه :)", "6.svg"], ["تور مجازی", "کاربر برای ثبت سفارش نیاز به انتظار های خسته کننده<br> وطولانی نخواهد داشت", "7.svg"], ["تخفیف های استثنایی", "جوایز و تخفیف های متنوع از طرف کوکی به مشتریان<br> و صاحبان رستوران", "8.svg"], ["سفارش بدون ثبت نام", "برای یک سفارش معمولی اجبار به ثبت نام و طی کردن<br> یک روند خسته کننده وجود ندارد", "9.svg"], ["رابط کاربری زیبا و ساده", "طراحی اپیکیشن به صورتی بوده که کاربر به راحتی بتواند<br> سفارش خود را ثبت کند", "10.svg"], ["جزعیات در اپیکیشن", "قبل از هر سفارش کاربر میتواند عکس هر غذا را<br> با بالاترین کیفیت ببیند، جزییات هر غذا را بداند<br> و از نظرات و تجربه ی سایر کاربران آگاه شود", "11.svg"], ["پشتیبانی سریع و 24 ساعته", "تیم کوکی در هر زمانی برای پشتیبانی همراه شماست", "12.svg"], []]


    let allowToScroll = true;
    let lastScrollPosition = 0;
    let currentSlide = 0;
    let [svg, setSvg] = React.useState(<svg/>);
    let [viewMode, setViewMode] = React.useState('mobile')
    let viewMode2 = 'null';
    let allowForNextCard = true;
    let initialized = true;
    let cardsDom = [];
    let defaultCardsScale = 0.7;
    let lastCameInCard = 0;


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
    gsap.registerPlugin(MotionPathPlugin)


    let CheckCardsInterval = setInterval(() => {
        getCards()
    }, 1000)


    let getCards = () => {
        cardsDom = document.getElementById('cont').childNodes
        if (document.getElementById('allCards') && initialized) {
            afterCardsFetched(cardsDom)
            clearInterval(CheckCardsInterval)
        }
    }

    let afterCardsFetched = (cards) => {
        document.getElementById('card1').firstChild.replaceWith(document.createRange().createContextualFragment(ReactDOMServer.renderToStaticMarkup(cardElements[0])))
        for (let i = 0; i < cards.length; i++) {
            document.getElementById('card' + (i + 1)) ? document.getElementById('card' + (i + 1)).firstChild.replaceWith(document.createRange().createContextualFragment(ReactDOMServer.renderToStaticMarkup(cardElements[i]))) : console.log('hello')
            gsap.to(cards[i], {
                motionPath: {
                    path: "#path",
                    align: "#path",
                    autoRotate: false,
                    alignOrigin: [0.5, 0.5],
                    start: (1 / cards.length) * i,
                    end: (1 / cards.length) * i
                },
                delay: i * 0.1,
                duration: 0.9,
                opacity: 1,
                ease: "power4.inOut"
            })
        }
        lastCameInCard = cards.length

    }

    let cardPositions = 0.0;

    let nextCard = (next) => {
        let animDuration = 1;
        if (!next && cardPositions === 0) {

        } else if (allowForNextCard && cardPositions >= 0) {
            allowForNextCard = false;
            console.log(cardPositions)
            if (!next) {
                cardPositions--;
            }
            for (let i = 0; i < cardsDom.length; i++) {
                let startPosition,
                    endPosition
                if (next) {
                    startPosition = ((1 / cardsDom.length) * i + cardPositions * (1 / cardsDom.length)).toFixed(2)
                    endPosition = ((1 / cardsDom.length) * i + (1 / cardsDom.length) + cardPositions * (1 / cardsDom.length)).toFixed(2)
                } else {
                    endPosition = ((1 / cardsDom.length) * i + cardPositions * (1 / cardsDom.length)).toFixed(2)
                    startPosition = ((1 / cardsDom.length) * i + (1 / cardsDom.length) + cardPositions * (1 / cardsDom.length)).toFixed(2)
                }
                if (cardPositions === 0 && next) {
                    gsap.to('.intro-desktop-texts', {
                        opacity: '0',
                        ease: 'power2.Out',
                        duration: 0.2,
                    })
                    gsap.to('.contact-us-button-desktop', {
                        duration: 0.1,
                        bottom: '20px',
                        left: '20px',
                        width: '50px',
                        onComplete:()=>{
                            document.querySelector('.contact-us-button-desktop span').style.display='none'
                            document.querySelector('.contact-us-button-desktop div').style.display='flex'

                        },
                        height: '50px',
                        marginLeft: '0',
                        borderRadius: '50%',
                    })

                } else if (cardPositions === 0 && !next) {
                    gsap.to('.intro-desktop-texts', {
                        opacity: '1',
                        ease: 'power2.Out',
                        duration: 0.7,
                    })
                    gsap.to(".contact-us-button-desktop", {
                        duration: 0,
                        onComplete: () => {
                            document.querySelector('.contact-us-button-desktop span').style.display='flex'
                            document.querySelector('.contact-us-button-desktop div').style.display='none'

                            gsap.to('.contact-us-button-desktop', {
                                duration: 1,
                                bottom: '',
                                left: '',
                                width: '',
                                height: '',
                                marginLeft: '',
                                borderRadius: '',
                            })
                        }
                    })
                }
                if (startPosition.toString().slice('.')[2][0] === '4' && next) {
                    gsap.to(cardsDom[i], {
                        scale: defaultCardsScale,
                        duration: 0.2
                    })
                }

                if ((startPosition.toString().slice(".")[2][0] === '2' && next) || (startPosition.toString().slice('.')[2][0] === '6' && !next) && cardPositions !== 0) {
                    gsap.to(cardsDom[i], {
                        zIndex: cardPositions,
                        duration: 0,
                    })
                    gsap.to(cardsDom[i], 1, {
                        transition: 'transform 0.1',
                        x: (-window.visualViewport.width / 2.2) + "px",
                        y: '0',
                        ease: "power3.inOut",
                        transformOrigin: 'center',
                    })
                    gsap.to(cardsDom[i], {
                        zIndex: '3',
                        scale: 1.3,
                        duration: 0.1,
                        ease: 'power4.out'
                    })

                } else {
                    gsap.to(cardsDom[i], {
                        zIndex: 0,
                        duration: 0,
                    })
                    gsap.to(cardsDom[i], {
                        transition: 'transform 0.1',
                        motionPath: {
                            path: "#path",
                            align: "#path",
                            autoRotate: false,
                            alignOrigin: [0.5, 0.5],
                            start: startPosition,
                            end: endPosition,
                            curviness: 2
                        },
                        zIndex: '1',
                        scale: defaultCardsScale,
                        duration: animDuration,
                        ease: "power3.inOut"
                    })
                }

            }
            setTimeout(() => {
                allowForNextCard = true;
            }, animDuration * 1000)
            if (next) {
                cardPositions++;
            }
            if (cardPositions === 10)
                cardPositions = 5;

            if (cardPositions > 3) {
                if ((cardPositions - 5) % 5 === 0) {
                    ChangeCard(5, lastCameInCard + 1)
                }
                if ((cardPositions - 6) % 5 === 0) {
                    ChangeCard(4, lastCameInCard + 1)
                }
                if ((cardPositions - 7) % 5 === 0) {
                    ChangeCard(3, lastCameInCard + 1)
                }
                if ((cardPositions - 8) % 5 === 0) {
                    ChangeCard(2, lastCameInCard + 1)
                }
                if ((cardPositions - 4) % 5 === 0) {
                    ChangeCard(1, lastCameInCard + 1)
                }
            }
        }
    }


    let ChangeCard = (cardElementNumber, newCardNumber) => {
        let card = document.getElementById('card' + (cardElementNumber)) ? document.getElementById('card' + cardElementNumber).firstChild : console.log('hello')

        gsap.to("#card" + cardElementNumber, {
            opacity: 0,
            scale: 0.5,
            duration: 0.2,
            ease: 'Power4.out',
            onComplete: () => {
                if (cardElements[newCardNumber]) {
                    card.replaceWith(document.createRange().createContextualFragment(ReactDOMServer.renderToStaticMarkup(cardElements[newCardNumber])))
                    lastCameInCard = newCardNumber;
                } else {
                    card.replaceWith(document.createRange().createContextualFragment(ReactDOMServer.renderToStaticMarkup(cardElements[0])))
                    lastCameInCard = 0;
                }
                gsap.to("#card" + cardElementNumber, {
                    duration: 0.2,
                    opacity: 1,
                    scale: defaultCardsScale,
                })
            }
        })
        lastCameInCard = newCardNumber;

    }

    useEffect(() => {
        checkMob()
        window.addEventListener('keypress', (e) => {
            // console.log(e.code)
            if (e.code === 'KeyA') {
                nextCard(true)

            } else {
                nextCard(false)
            }
        })


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
            onReverseComplete: () => {
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
                if (viewMode2 === 'mobile') {
                    if (allowToScroll) {
                        document.body.style.overflowY = "hidden"
                        allowToScroll = false;
                        if (window.scrollY > lastScrollPosition) {
                            if (currentSlide !== texts.length - 1) {
                                nextSlide(currentSlide + 1)
                                currentSlide = currentSlide + 1
                                if (currentSlide > texts.length) {
                                    currentSlide = texts.length - 2
                                }
                            } else {
                                document.body.style.overflowY = "scroll"
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
                        if (viewMode === 'mobile')
                            document.body.style.overflowY = "hidden"
                    }
                }

            } else {

                allowToScroll = true
                document.body.style.overflowY = "scroll"
                currentSlide = 0;
            }
            lastScrollPosition = window.scrollY;


        })
    }, [])

    let checkMob = () => {
        if (window.visualViewport.width <= 700) {
            console.log('it is mobile')
            console.log(window.visualViewport.width)
            try {
                setViewMode('mobile')
                viewMode2 = 'mobile'

            } catch (e) {
                console.log(e)
            }
        } else {
            console.log('it is desktop')
            try {
                setViewMode('desktop')
                viewMode2 = 'desktop'

            } catch (e) {
                console.clear()
            }

        }
    }


    let nextSlide = (slide) => {
        gsap.to(window, {
            scrollTo: "+=300",
            ease: "steps(1)",
            duration: 0.001
        })
        if (texts[slide]) {
            if (texts[slide] !== undefined) {

                let tl = gsap.timeline({
                    onComplete: () => {
                        allowToScroll = true
                        document.body.style.overflowY = "scroll"
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
                gsap.to("#up-1", {
                    drawSVG: "0%"
                })
                document.body.style.overflowY = "scroll"
                allowToScroll = true
            }

        } else {
            document.body.style.overflowY = 'scroll'
            allowToScroll = true

        }
    }

    let prevSlide = (slide) => {
        document.body.style.overflowY = "hidden"
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
                        document.body.style.overflowY = "scroll"
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


    let mobileSite = <main>
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
                            document.body.style.overflowY = "scroll"
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

    if (viewMode === 'mobile')
        return mobileSite
    else if (viewMode === 'desktop')
        return (

            <main className={'d-flex justify-content-center  align-items-center vh-100 vw-100 '}>

                <div className={'demo-button-desktop'}>
                    <span style={{fontSize: "0.8rem", marginRight: '5px', marginTop: '5px', opacity: '0'}}> ;) </span>
                    دمو
                </div>


                <div className={'cuki-info align-items-center'}>
                    <img src="/img/cuki.png" className={'cuki-image-desktop'} alt="Cuki Online menu "/>
                    <span className={'IransansBold info-margin mt-2'}>Cuki</span>
                    <span className={'Iransans info-margin mt-2'}>online</span>
                    <span className={'Iransans info-margin mt-2'}>menu</span>


                </div>


                <div className={'position-absolute'}
                     style={{width: "55%", height: '55%', right: '0px', top: '10rem', zIndex: '-1'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%"
                         height="100%" viewBox="0 0 1012 796.5">
                        <defs>
                            <pattern id="pattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%"
                                     viewBox="0 0 800 786">
                                <image width="800" height="786"
                                       href="data:image/png;base64,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"/>
                            </pattern>
                            <pattern id="pattern-2" preserveAspectRatio="xMidYMid slice" width="100%" height="100%"
                                     viewBox="0 0 800 786">
                                <image width="800" height="786"
                                       href="data:image/png;base64,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"/>
                            </pattern>

                        </defs>
                        <g style={{position: "absolute", width: '100px'}}
                           transform="translate(-960 -102)">
                            <rect id="Rectangle_141" width="640" height="629" transform="translate(1332 102)"
                                  fill="url(#pattern)"/>
                            <rect id="Rectangle_142" width="382.109" height="375"
                                  transform="translate(960 898.5) rotate(-90)" fill="url(#pattern-2)"/>
                        </g>
                    </svg>
                </div>

                <div className={'left-side-desktop w-auto w-50'} style={{marginTop: '-250px'}}>

                    <div className={'intro-desktop-texts '}>
                        <h2 className={'intro-desktop-head mb-2 IransansBold'}>الان دیگه وقت <br/> راحت تر شدن کارهاست
                        </h2>
                        <h5 className={'t-r mt-4 Iransans intro-desktop-title'}>کوکی برای رفع نیاز ها و سرعت دهی به کار
                            ها طراحی شده
                            <br/>
                            که هم مشتری ها راضی باشن هم صاحبان کسب وکار
                        </h5>
                    </div>
                    <div className={'contact-us-button-desktop mt-3'}>
                        <span>   ارتباط با ما</span>
                        <div className={'w-75 h-75'} style={{display:'none'}}>
                            {svgs.contactUs}
                        </div>

                    </div>

                </div>


                <div className={'right-side-desktop w-50'}>

                    <div className={'main-desktop-container'} id={'cont'}>

                        <div id={'card1'} style={{
                            opacity: 0,
                            scale: '0.5',
                            position: 'absolute',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transform: `scale(${defaultCardsScale})`
                        }}>
                            <div/>
                        </div>
                        <div id={'card2'} style={{
                            opacity: 0,
                            scale: '0.5',
                            position: 'absolute',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transform: `scale(${defaultCardsScale})`
                        }}>
                            <div/>
                        </div>
                        <div id={'card3'} style={{
                            opacity: 0,
                            scale: '0.5',
                            position: 'absolute',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transform: `scale(${defaultCardsScale})`
                        }}>
                            <div/>
                        </div>
                        <div id={'card4'} style={{
                            opacity: 0,
                            scale: '0.5',
                            position: 'absolute',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transform: `scale(${defaultCardsScale})`
                        }}>
                            <div/>
                        </div>

                        <div id={'card5'} style={{
                            opacity: 0,
                            scale: '0.5',
                            position: 'absolute',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transform: `scale(${defaultCardsScale})`
                        }}>
                            <div/>
                        </div>

                    </div>
                    <div className={'position-absolute'} style={{width: "30%", right: '10rem', top: '15rem'}}>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 671.637 410.275">
                            <path id={'path'}
                                  d="M1598.761,240.337s-571.235-160.224-670.5,285.617C1501.233,851.627,1598.761,240.337,1598.761,240.337Z"
                                  transform="translate(-927.688 -211.751)" fill="none" stroke="#707070"
                                  strokeWidth="0"/>
                        </svg>
                        {/*<svg xmlns="http://www.w3.org/2000/svg"*/}
                        {/*     viewBox="0 0 548.798 486.674">*/}
                        {/*    <path id="path"*/}
                        {/*          d="M1558,911s-841.138-208.834-429.636,361.063c152.667,211.432,308.626-19.6,372.311-86.546C1587.222,1098.971,1558,911,1558,911Z"*/}
                        {/*          transform="translate(-1014.462 -873.065)" fill="none" stroke="#707070"*/}
                        {/*          strokeWidth="0"/>*/}
                        {/*</svg>*/}
                    </div>
                    <div className={'allCards'} id={'allCards'}>
                        {/*{cardElements[6]}*/}
                        {/*{cardElements.map((eachCard,index )=> {*/}
                        {/*    return eachCard*/}
                        {/*})*/}
                        {/*}*/}
                    </div>
                    <div className={'position-absolute'} style={{
                        zIndex: '-1',
                        width: '10%',
                        height: '10%',
                        right: '56%',
                        top: '50%',
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 115">
                            <defs>
                                <clipPath id="a">
                                    <rect width="202" height="115" fill="none"/>
                                </clipPath>
                            </defs>
                            <g>
                                <g transform="translate(-880 -450)">
                                    <g transform="translate(456.118 663) rotate(-90)">
                                        <circle cx="3" cy="3" r="3" transform="translate(98 423.882)" fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 423.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 423.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 423.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 423.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 423.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 445.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 467.882)" fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(207 489.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 510.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 532.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 554.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 576.882)" fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(207 598.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 619.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 619.882)" fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(185 598.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 576.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 554.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 554.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 576.882)" fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(163 598.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 619.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 619.882)" fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(141 598.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 576.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 554.882)" fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 554.882)"
                                                 fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 576.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="2.5" cy="2.5" r="2.5" transform="translate(120 598.882)"
                                                fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 619.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(98 619.882)" fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(98 598.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(98 576.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(98 554.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 445.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 445.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 445.882)" fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 445.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(98 445.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(98 467.882)" fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 467.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 467.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 467.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 467.882)" fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(185 489.882)"
                                                 fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(163 489.882)"
                                                 fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(141 489.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="2.5" cy="2.5" r="2.5" transform="translate(120 489.882)"
                                                fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(98 489.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(98 510.882)" fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 510.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 510.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 510.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 510.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 532.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 532.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 532.882)" fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 532.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(98 532.882)" fill="#ffc5cb"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className={'position-absolute'} style={{
                        zIndex: '-1',
                        width: '10%',
                        height: '10%',
                        left: '10%',
                        top: '10%',
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 115">
                            <defs>
                                <clipPath id="a">
                                    <rect width="202" height="115" fill="none"/>
                                </clipPath>
                            </defs>
                            <g>
                                <g transform="translate(-880 -450)">
                                    <g transform="translate(456.118 663) rotate(-90)">
                                        <circle cx="3" cy="3" r="3" transform="translate(98 423.882)" fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 423.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 423.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 423.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 423.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 423.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 445.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 467.882)" fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(207 489.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 510.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 532.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 554.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 576.882)" fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(207 598.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(207 619.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 619.882)" fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(185 598.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 576.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 554.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 554.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 576.882)" fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(163 598.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 619.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 619.882)" fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(141 598.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 576.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 554.882)" fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 554.882)"
                                                 fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 576.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="2.5" cy="2.5" r="2.5" transform="translate(120 598.882)"
                                                fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 619.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(98 619.882)" fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(98 598.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(98 576.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(98 554.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 445.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 445.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 445.882)" fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 445.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(98 445.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(98 467.882)" fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 467.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 467.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 467.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 467.882)" fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(185 489.882)"
                                                 fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(163 489.882)"
                                                 fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(141 489.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="2.5" cy="2.5" r="2.5" transform="translate(120 489.882)"
                                                fill="#ffc5cb"/>
                                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(98 489.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(98 510.882)" fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 510.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 510.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 510.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 510.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(185 532.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(163 532.882)" fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(141 532.882)" fill="#ffc5cb"/>
                                        <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 532.882)"
                                                 fill="#ffc5cb"/>
                                        <circle cx="3" cy="3" r="3" transform="translate(98 532.882)" fill="#ffc5cb"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className={'position-absolute'} style={{
                        zIndex: '-1',
                        width: '5%',
                        height: '5%',
                        left: '0',
                        top: '70%',
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 202">
                            <g transform="translate(-98 -423.882)">
                                <circle cx="3" cy="3" r="3" transform="translate(98 423.882)" fill="#96d9e9"/>
                                <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 423.882)"
                                         fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(141 423.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(163 423.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(185 423.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(207 423.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(207 445.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(207 467.882)" fill="#96d9e9"/>
                                <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(207 489.882)"
                                         fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(207 510.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(207 532.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(207 554.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(207 576.882)" fill="#96d9e9"/>
                                <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(207 598.882)"
                                         fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(207 619.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(185 619.882)" fill="#96d9e9"/>
                                <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(185 598.882)"
                                         fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(185 576.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(185 554.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(163 554.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(163 576.882)" fill="#96d9e9"/>
                                <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(163 598.882)"
                                         fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(163 619.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(141 619.882)" fill="#96d9e9"/>
                                <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(141 598.882)"
                                         fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(141 576.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(141 554.882)" fill="#96d9e9"/>
                                <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 554.882)"
                                         fill="#96d9e9"/>
                                <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 576.882)"
                                         fill="#96d9e9"/>
                                <circle cx="2.5" cy="2.5" r="2.5" transform="translate(120 598.882)" fill="#96d9e9"/>
                                <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 619.882)"
                                         fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(98 619.882)" fill="#96d9e9"/>
                                <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(98 598.882)"
                                         fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(98 576.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(98 554.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(185 445.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(163 445.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(141 445.882)" fill="#96d9e9"/>
                                <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 445.882)"
                                         fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(98 445.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(98 467.882)" fill="#96d9e9"/>
                                <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 467.882)"
                                         fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(141 467.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(163 467.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(185 467.882)" fill="#96d9e9"/>
                                <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(185 489.882)"
                                         fill="#96d9e9"/>
                                <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(163 489.882)"
                                         fill="#96d9e9"/>
                                <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(141 489.882)"
                                         fill="#96d9e9"/>
                                <circle cx="2.5" cy="2.5" r="2.5" transform="translate(120 489.882)" fill="#96d9e9"/>
                                <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(98 489.882)"
                                         fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(98 510.882)" fill="#96d9e9"/>
                                <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 510.882)"
                                         fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(141 510.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(163 510.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(185 510.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(185 532.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(163 532.882)" fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(141 532.882)" fill="#96d9e9"/>
                                <ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(120 532.882)"
                                         fill="#96d9e9"/>
                                <circle cx="3" cy="3" r="3" transform="translate(98 532.882)" fill="#96d9e9"/>
                            </g>
                        </svg>
                    </div>

                </div>


            </main>


        )
    else
        return (
            mobileSite
        )


}
export default IndexPage

