import $ from 'jquery';
// import axios
const BASE_URL = "https://api.cukim.ir/api/";


let getPlans = (callbackFunction) => {
    $.post(BASE_URL + 'v1/resOwner/getPlans', {}).then(res => {
        callbackFunction(res)
    })
}


let signUpWithPlan = (name, phone,persianName,englishName, planId, callback) => {
    $.post(BASE_URL + 'v1/resOwner/signupAndBuyPlan', {username: phone,resPersianName:persianName,resEnglishName:englishName, planId, name}).then(res => {
        callback(res)
    }).fail((a,b,c)=>{
        callback('error')
    })
}

let getResNames = (callback) => {
    $.get(BASE_URL + 'v1/cuki/getResNames',{
    }).then(res => {
        callback(res)
    })
}
export {getPlans, signUpWithPlan,getResNames}

