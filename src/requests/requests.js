import $ from 'jquery';

const BASE_URL = "https://api.cukim.ir/api/";


let getPlans = (callbackFunction) => {
    $.post(BASE_URL + 'v1/resOwner/getPlans', {}).then(res => {
        callbackFunction(res)
    })
}


let signUpWithPlan = (name, phone, planId, callback) => {
    $.post(BASE_URL + 'v1/resOwner/signupAndBuyPlan', {username: phone, planId, name}).then(res => {
        callback(res)
    })
}
export {getPlans, signUpWithPlan}

