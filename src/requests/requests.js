import React from "react";
import $ from 'jquery';

const BASE_URL = "https://api.cukim.ir/api/";


export let getPlans = (callbackFunction)=>{
    $.post(BASE_URL+'v1/resOwner/getPlans',{}).then(res=>{
        callbackFunction(res)
    })
}