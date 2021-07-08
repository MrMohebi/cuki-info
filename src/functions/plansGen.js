import React from "react";
import * as requests from '../requests/requests'

export const plansGen = (plansGetCallback) => {
    requests.getPlans((plansData) => {
        if (plansData) {
            let plans = plansData.data.map(eachPlan => {
                console.log(plansData)
                return (
                    <div key={eachPlan['englishName']} className={'plan-container'}>
                        <div className={'plan-discount'}>
                            {eachPlan['discountPercentage']}%
                        </div>
                        <h4 className={'plan-header IransansMedium'}>{eachPlan['persianName']}</h4>
                        <span className={'plan-details mt-2'}>
                            پکیج ویژه و بسیار کاربردی کوکی
                        </span>
                        <div className={'plan-options'}>
                            {
                                JSON.parse(eachPlan['items']).map(eachItem => {
                                    return (
                                        <div key={eachItem}
                                             className={'plan-option d-flex justify-content-end align-items-center Iransans flex-row'}>
                                            <span style={{paddingTop: '5px'}}> {eachItem}</span>
                                            <div className={'plan-option-circle'}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={'plan-price Iransans'}>
                            <span className={'m-1'}>{eachPlan['price']}</span>

                            <span>:قیمت</span>
                        </div>
                        <div className={'plan-submit-button disabled-button d-flex align-items-center justify-content-center'}>
                            <span className={'plan-default-text IransansBold pt-1'}>
                                ثبت سفارش
                            </span>
                        </div>
                    </div>
                )
            })
            plansGetCallback(plans)
        }
    })
}

