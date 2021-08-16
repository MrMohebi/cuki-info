import React, {useEffect} from "react";
import * as requests from '../requests/requests'

export const plansGen = (plansGetCallback, planSubmitFunction) => {
    requests.getPlans((plansData) => {
        if (plansData) {

            let plans = plansData.data.map(eachPlan => {
                return (
                    <div key={eachPlan['englishName']} className={'plan-container'}>
                        {
                            eachPlan['id'] === 2 ?
                                <div id={'congrats'} style={{
                                    height: 50,
                                    width: 50,
                                    position: 'absolute',
                                    background: 'transparent',
                                    left: '30px',
                                    top: '30px',
                                }}/>
                                :
                                <div/>
                        }
                        <div className={'plan-discount IransansBold d-flex flex-column align-items-center'}>
                            <span style={{
                                fontSize: "0.7rem",
                                height: '15px'
                            }}>{eachPlan['discountPercentage']}%</span>
                            <span style={{
                                fontSize: "0.5rem",
                                height: '15px',
                                lineHeight: '15px'
                            }}>تخفیف</span>
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

