import React, {useEffect} from 'react';
import vectors from "../vectors";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import * as ReactDOMServer from "react-dom/server";
import $ from 'jquery'


export const cards = [
    {
        title: 'تغیر قیمت ',
        description: 'تغییر قیمت به صورت nl لحظه ای و خیلی ساده',
        height: 150,
        width: 160,
        color: '#55C8DB',
        vector: 'food_price',
        vector_position: 'bottom'
    },

    {
        title: 'دسترسی سریع',
        description: 'کم حجم بودن و اسکن راحت nl و سریع برای کاربر',
        height: 170,
        width: 180,
        color: '#FDA4A4',
        vector: 'early_access',
        vector_position: 'bottom'
    },

    {
        title: 'عکس غذا',
        description: 'مشاهده عکس غذا قبل از سفارش',
        height: 170,
        width: 200,
        color: '#55C8DB',
        vector: 'food_image',
        vector_position: 'bottom'
    },

    {
        title: 'بروز رسانی و اضافه شدن امکانات جدید',
        description: 'اراعه امکانات جدیدتر و بروز رسانی منو  nl در جهت رضایت مشتری و بهبود کسب و کار شما',
        height: 170,
        width: 350,
        color: '#838ADB',
        vector: 'up_to_date',
        vector_position: 'side'
    },

    {
        title: 'تم های متفاوت',
        description: 'هماهنگ بودن تم منو با محیط کافه nl یا رستوران شما',
        height: 170,
        width: 200,
        color: '#838ADB',
        vector: 'sync',
        vector_position: 'bottom'
    },

    {
        title: 'ناموجود کردن غذا',
        description: 'درلحظه غذاهارا ناموجود کنید',
        height: 170,
        width: 200,
        color: '#FDA4A4',
        vector: 'not_in_stock',
        vector_position: 'bottom'
    },
    {
        title: 'ناموجود کردن غذا',
        description: 'درلحظه غذاهارا ناموجود کنید',
        height: 170,
        width: 200,
        color: '#FDA4A4',
        vector: 'not_in_stock',
        vector_position: 'bottom'
    },

]
const Cards = () => {

    gsap.registerPlugin(MotionPathPlugin)
    gsap.registerPlugin(ScrollTrigger)

    let last_progress = React.useRef(0)

    let setCardAnim = (card) => {
        let timeLine =
            gsap.timeline({
                scrollTrigger: {
                    trigger: document.getElementById('trigger'),
                    start: 'top top',
                    end: '+=2000 top',
                    scrub: 0.7,
                },
                onUpdate: () => {

                    let progress = timeLine.progress()
                    console.log(card+":"+(progress/cards.length)*(card+1))
                    last_progress.current = progress
                },
                onComplete: () => {
                },
                onReverseComplete: () => {
                },

            }).to('#tc-' + card, {
                motionPath: {
                    path: [{x: 0, y: 0}, {x: -500, y: 90}, {x: -200, y: 300}, {x: 0, y: 0}],
                    curviness: 1,
                    start: card * 0.2,
                    end: 1 + card * 0.2,
                },
                ease: 'none',
                // duration: 1,
                scale:1,
            })

    }


    useEffect(() => {
        let wrapper = document.getElementById('wrapper')
        // wrapper.style.width = window.innerWidth + 'px'
        wrapper.style.height = window.innerHeight + 'px'

        cards.map((each_card, index) => {
            setCardAnim(index, index)
        })

        // gsap.to('#cards-wrapper',{
        //     scrollTrigger:{
        //         trigger:'#trigger0',
        //         scrub:true
        //     },
        //     scale:1,
        // })


    }, [])

    return (
        <div id={'cards-wrapper'} style={{
            // display: 'contents'
        }}>
            {
                cards.slice(0, 5).map((each_card, index) => {
                    return (
                        <div  id={'card-' + index + '-container'}>
                            <div
                                style={{
                                    zIndex: index,
                                    width: each_card['width'],
                                }}
                                className={'test-cards c-card'} id={'tc-' + index}>
                                <div
                                    className={'c-card-inner-wrapper'}>

                                    <div className={'c-card-line'}
                                         style={{
                                             backgroundColor: each_card.color
                                         }}/>

                                    <div className={'c-card-circle'}
                                         style={{
                                             color: each_card.color
                                         }}/>

                                    <div className={'c-card-inner-inner-wrapper'}>
                                        <div className={'w-100 h-100 pe-2 d-flex flex-column align-items-center'}>

                                            <span
                                                className={'IranSansBold c-card-title text-center'}>{each_card['title']}</span>
                                            <div
                                                className={'d-flex align-items-center ' + (each_card.vector_position === 'side' ? 'flex-row-reverse w-100' : 'flex-column')}>

                                                <div
                                                    className={'d-flex flex-column align-items-center c-card-dis  ' + (each_card.vector_position === 'side' ? 'w-100' : '') + (each_card.title === 'عکس غذا' ? ' mt-0' : 'mt-3')}>
                                                    {
                                                        each_card['description'].split('nl').map((e) => {
                                                            return (
                                                                <span
                                                                    className={'text-center text-nowrap IranSansLight c-card-description ' + (each_card.title === 'عکس غذا' ? 'text-nowrap mt-0' : '')}>{e}</span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div
                                                    className={'text-end ' + (each_card.vector_position === 'side' ? 'w-25' : ' w-100')}>
                                                    <div className={'w-50 mt-2 c-vector'}>
                                                        {
                                                            vectors[each_card.vector]
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    )

                })
            }


        </div>
    );
};

export default Cards;