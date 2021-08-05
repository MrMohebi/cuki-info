import React from "react";
import * as requests from '../requests/requests'

export const plansGen = (plansGetCallback, planSubmitFunction) => {
    requests.getPlans((plansData) => {
        console.log(plansData)
        if (plansData) {
            let plans = plansData.data.map(eachPlan => {
                return (
                    <div key={eachPlan['englishName']} className={'plan-container'}>
                        <div className={'plan-discount'}>
                            {eachPlan['discountPercentage']}%
                        </div>
                        <h4 className={'plan-header IransansMedium'}>{eachPlan['persianName']}</h4>
                        <span className={'plan-details mt-2'}>
                            {eachPlan['details']}
                        </span>
                        <div className={'plan-options'}>
                            {
                                JSON.parse(eachPlan['items']).map(eachItem => {
                                    return (
                                        <div key={eachItem['englishName']}
                                             className={'plan-option d-flex justify-content-end align-items-center Iransans flex-row'}>
                                            <span style={{paddingTop: '5px'}}> {eachItem['persianName']}</span>
                                            <div className={'plan-option-circle'}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div
                            className={'plan-price Iransans'}>
                            <span className={'m-1'}>{eachPlan['price']}</span>
                            <span>:قیمت</span>
                        </div>
                        <div
                            onPointerDownCapture={() => {
                                planSubmitFunction(eachPlan['id'])
                            }}
                            className={'plan-submit-button  d-flex align-items-center justify-content-center'}>
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

