import React from 'react';
import first_plan from '../images/plans/1.png'
import second_plan from '../images/plans/2.png'
import third_plan from '../images/plans/3.png'

const Plans = () => {


    let plans = [
        {
            name: '3 ماهه',
            description: 'همراه با ده درصد تخفیف',
            pure_price: 510000,
            price_after_discount: 459000,
            color: '#838ADB',
            icon: third_plan
        },
        {
            name: '6 ماهه',
            description: 'همراه با پانزده درصد تخفیف',
            pure_price: 1020000,
            price_after_discount: 866000,
            color: '#FDA4A4',
            icon: second_plan
        },
        {
            name: 'یک ساله',
            description: 'همراه با بیست درصد تخفیف',
            pure_price: 2040000,
            price_after_discount: 1632000,
            color: '#55C8DB',
            icon: first_plan
        },
    ]

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div id={'c-plans'} className={'plans-section w-100 h-100 d-flex flex-column align-items-center pt-5'}
             style={{
                 zIndex: 99
             }}>
            <div className={"mt-3"}/>
            <h1 className={'IranSansBold mt-5'}> پلن های پیشنهادی ما برای شما</h1>
            <p className={'IranSansLight mt-3'}>
                با انتخاب هر کدام از پلن ها ، کوکی پشتیبانی 24 ساعته و
                <br/>
                آپدیت های منوی آنلاین خود را در اختیارتان قرار خواهد داد
            </p>
            <span className={'IranSansMedium mt-4'} style={{
                fontSize: '1.5rem'
            }}>تعرفه منوی آنلاین کوکی برای هرماه 170 هزارتومان میباشد </span>

            <section className={'plans-container d-flex flex-row-reverse  mt-5 pt-5'}>

                {
                    plans.map(plan=>{
                        return(
                            <div className={'c-plan d-flex flex-column mx-5 align-items-center mt-2 '}>
                                <img src={plan.icon} className={'c-plan-icon'} alt="Cuki plan"/>
                                <h4 className={'IranSansMedium mt-3'} dir={'rtl'}>{plan.name}</h4>
                                <p className={'text-center IranSans'}>{plan.description}</p>
                                <div
                                    className={'price-holder d-flex flex-row align-items-center justify-content-center w-100 IranSans position-relative'}>
                                    <div style={{
                                        fontSize: '1.2rem',
                                        position:'relative'
                                    }}>{numberWithCommas(plan.pure_price)}
                                        <div
                                            className={'discount-line'}
                                            style={{
                                                color:plan.color
                                            }}
                                        />
                                    </div>
                                    <span className={'IranSansLight ms-1'}>تومان</span>
                                </div>
                                <div
                                    className={'price-holder d-flex flex-row align-items-center justify-content-center w-100 IranSans'}>
                        <span style={{
                            fontSize: '1.2rem'
                        }}>{numberWithCommas(plan.price_after_discount)}</span>
                                    <span className={'IranSansLight ms-1'}>تومان</span>
                                </div>
                                <button style={{background:plan.color}} className={'order IranSansMedium mt-4'}>  ثبت سفارش</button>
                            </div>
                        )
                    })
                }

            </section>
        </div>
    );
};

export default Plans;