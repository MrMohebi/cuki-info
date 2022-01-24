import React, {useEffect} from 'react';
import {cards} from "./cards";
import vectors from "../vectors";
import gsap from 'gsap'

const MobileCards = () => {


    useEffect(() => {
        // cards.forEach((card, index) => {
        //     gsap.to(document.getElementById('tcm-' + index), {
        //         x: index % 2 === 0 ? '100%' : '-100%',
        //         opacity: 0
        //     })
        //
        // })

        setTimeout(() => {
            cards.forEach((card, index) => {
                gsap.to(document.getElementById('tcm-' + index), {
                    scrollTrigger: {
                        trigger: '#m-card-2-container',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: true,
                        // markers:true
                    },
                    opacity: 1,
                    x: 0,
                })
            })
        }, 0)

    }, [])
    return (
        <section className={'mobile-cards-section flex-column align-items-center justify-content-center'}>
            {cards.map((card, index) => {
                    return (
                        <div style={{marginLeft: 'auto',marginRight:'auto',marginTop:30}} id={'m-card-' + index + '-container'}
                             className={'d-flex flex-row-reverse justify-content-center align-items-center '}>
                            <div
                                style={{
                                    zIndex: index,
                                    width: card['width'],
                                }}
                                className={'test-cards c-card mobile-card'} id={'tcm-' + index}>
                                <div
                                    className={'c-card-inner-wrapper'}>

                                    <div className={'c-card-line'}
                                         style={{
                                             backgroundColor: card.color
                                         }}/>

                                    <div className={'c-card-circle'}
                                         style={{
                                             color: card.color
                                         }}/>

                                    <div className={'c-card-inner-inner-wrapper'}>
                                        <div className={'w-100 h-100 pe-2 d-flex flex-column align-items-center'}>
                                            <span
                                                className={'IranSansBold c-card-title text-center'}>{card['title']}</span>
                                            <div
                                                className={'d-flex align-items-center ' + (card.vector_position === 'side' ? 'flex-row-reverse w-100' : 'flex-column')}>

                                                <div
                                                    className={'d-flex flex-column align-items-center c-card-dis  ' + (card.vector_position === 'side' ? 'w-100' : '') + (card.title === 'عکس غذا' ? ' mt-0' : 'mt-3')}>
                                                    {
                                                        card['description'].split('nl').map((e) => {
                                                            return (
                                                                <span
                                                                    className={'text-center text-nowrap IranSansLight c-card-description ' + (card.title === 'عکس غذا' ? 'text-nowrap mt-0' : '')}>{e}</span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div
                                                    className={'text-end ' + (card.vector_position === 'side' ? 'w-25' : ' w-100')}>
                                                    <div className={'w-50 mt-2 c-vector'}>
                                                        {
                                                            vectors[card.vector]
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
                }
            )}
        </section>
    );
};

export default MobileCards;