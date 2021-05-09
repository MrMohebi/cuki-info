//react
import React, {useEffect, useRef} from "react";
//plugins
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollTo from "gsap/ScrollToPlugin";
import TextPlugin from "gsap/TextPlugin";
//css files
import '../css/MainComponent.css'
import 'bootstrap/dist/css/bootstrap.css'


const IndexPage = () => {
    let dialog = useRef(null)
    let svgHolder1 = useRef(null)
    let ShowTheDemo = () => {
    }
    //main texts
    let texts = [["واریز وجه 2 تا 4 روز ", "بعد از پرداخت مشتری حداکثر 2 تا 4 روز مبلغ به حساب شما واریز میشود", "1.svg"], ["باشگاه مشتریان", "بانک جامع اطلاعاتی و تحلیل داده های موجود مشتریان برای خدمات ویژه", "2.svg"], ["منوی همراه مشتری", "مشتریان میتوانند با اسکن کد موجود روی کارت ویزیت اختصاصی شما همیشه و همه جا به منو دسترسی داشته باشند", "3.svg"], ["متصل به نرم افزار های حسابداری", "سفارشات تایید شده در کوکی به صورت خودکار در نرم افزار حسابداری شما ثبت خواهد شد", "4.svg"], ["سرعت بالا در سفارش غذا", "کاربر برای ثبت سفارش نیاز به انتظار های خسته کننده وطولانی نخواهد داشت", "5.svg"], ["پرداخت دونگی", "این ویژگی جدید و خلاقانه برای پرداخت های گروهی و جمع های دوستانه بسیار کاربردی است و باعث تقسیم حساب بسیار راحت تر مشتریان میشود پای صندوقتون هم خلوت تر میشه :)", "6.svg"], ["تور مجازی", "کاربر برای ثبت سفارش نیاز به انتظار های خسته کننده وطولانی نخواهد داشت", "7.svg"], ["تخفیف های استثنایی", "جوایز و تخفیف های متنوع از طرف کوکی به مشتریان و صاحبان رستوران", "8.svg"], ["سفارش بدون ثبت نام", "برای یک سفارش معمولی اجبار به ثبت نام و طی کردن یک روند خسته کننده وجود ندارد", "9.svg"], ["رابط کاربری زیبا و ساده", "طراحی اپیکیشن به صورتی بوده که کاربر به راحتی بتواند سفارش خود را ثبت کند", "10.svg"], ["جزعیات در اپیکیشن", "قبل از هر سفارش کاربر میتواند عکس هر غذا را با بالاترین کیفیت ببیند، جزییات هر غذا را بداند و از نظرات و تجربه ی سایر کاربران آگاه شود", "11.svg"], ["پشتیبانی سریع و 24 ساعته", "تیم کوکی در هر زمانی برای پشتیبانی همراه شماست", "12.svg"], []]

    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(ScrollTo)
    gsap.registerPlugin(TextPlugin)

    useEffect(() => {
        gsap.to(".main-dialog", {
            scrollTrigger: {
                trigger: '#trigger0',
                scrub: 1,
                start: '+=100'
            }, height: '75vh'
        })

        ScrollTrigger.create({
            snap: {
                snapTo: 1 / (texts.length - 1),
                duration: 1,
            }
        });

        gsap.to(".intro", {
            opacity: 0,
            scrollTrigger: {
                trigger: 'trigger0',
                scrub: 2
            },
            ease: 'Power4.out'
        })
        gsap.to(".go-up-button", {
            opacity: 1,
            ease:'Power4.out',
            scrollTrigger: {
                trigger: '#trigger11',
                scrub: 1
            },
            pointerEvents: 'all'
        })
        texts.map((eachText, index) => {
            if (eachText !== undefined) {
                let image = eachText[2]
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '#trigger' + index,
                        scrub: true,
                        markers: '',
                    },
                    onStart: () => {
                        gsap.to(window, {scrollTo: "#trigger" + index, duration: 1.5})
                    },

                })
                tl.to('.each-slide-head-text', {
                    opacity: 0,
                    x: -120,
                    text: {
                        value: texts[index - 1] ? texts[index - 1][0] : "",
                    },


                }).to('.each-slide-title-text', {
                    opacity: 0,
                    x: -120,



                }, 0).to('.each-slide-head-text',{
                    duration:0,
                    text: {
                        value: texts[index - 1] ? texts[index - 1][0] : '',
                    },
                }).to('.each-slide-title-text',{
                    duration:0,
                    text: {
                        value: texts[index - 1] ? texts[index - 1][1] : '',
                    },
                }).to('.each-slide-head-text', {
                    opacity: 0,
                    x: 120,
                    duration: 1,
                }).to('.each-slide-title-text', {
                    opacity: 0,
                    x: 120,
                    duration: 1,
                }, 1).to('.each-slide-head-text', {
                    opacity: 1,
                    x: 0,
                }).to('.each-slide-title-text', {
                    opacity: 1,
                    x: 0,
                }, 2).to('.svg-container', {

                    opacity: 0,
                    y: -120,
                    delay:1,
                }).to('.svg-container', {
                    backgroundImage: "url(/svgs/" + image + ")",
                    duration:0
                }).to('.svg-container', {
                        opacity: 0,
                        y: 120,
                        animationDuration: 0,
                        onComplete: () => {
                            console.log('a')
                        }
                    }).to('.svg-container', {
                    opacity: 1,
                    y: 0,
                })
            }
        })
    }, [])


    return (
        <main>
            <h1 className={'d-none'}>منوی دیجیتال کوکی</h1>
            <div className={"main-website-container "}>
                {texts.map((eachText, index) => {
                    console.log(eachText)
                    if (typeof eachText !== 'undefined') {
                        let className = index === 0 ? 'd-flex flex-column align-items-center' : ''
                        return (
                            <div id={'trigger' + index} key={index} className={'animation-triggers ' + className}>
                                {index === 0 ?
                                    <div className={'d-flex flex-column align-items-center intro'}>
                                        <img src={'/img/Logo.png'} className={'intro-logo mt-4'} style={{
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover'
                                        }}/>
                                        <h5
                                            className={'intro-head-text mt-3'}> الان دیگه وقت راحت تر شدن کار هاست</h5>
                                        <span className={'intro-head-title mt-2'}>کوکی برای رفع نیاز ها و  سرعت دهی به کار ها طراحی شده
 که هم مشتری ها راضی باشن هم صاحبان کسب وکار</span>
                                    </div>

                                    :
                                    <div/>
                                }

                            </div>
                        )
                    }
                })}
                <div ref={dialog} className={"main-dialog"}>
                    <div ref={svgHolder1} className={"svg-container"} style={{
                        background: "url()",
                        backgroundSize: '90%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}/>
                    <div className={'each-slide-texts mt-5 d-flex flex-column text-center '}>
                        <span className={'each-slide-head-text'}>واریز وجه 2 تا 4 روز </span>
                        <span className={'each-slide-title-text mt-3'}>بعد از پرداخت مشتری حداکثر 2 تا 4 روز مبلغ به حساب شما واریز میشود</span>
                    </div>
                </div>
                <div className={"bottom-waves"}>
                    <div className={'go-up-button d-flex flex-row justify-content-center align-items-center'} onClick={()=>{
                        console.log('clicked up')
                        gsap.to(window,{
                            scrollTo:'#trigger0',
                            duration:3
                        })
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             className="bi bi-arrow-up  " viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                        </svg>
                    </div>
                </div>
                <div className={"show-demo-button"} onClick={ShowTheDemo}>مشاهده نمونه</div>
            </div>
        </main>
    )
}

export default IndexPage
