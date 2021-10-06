import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
//css
import './css/UserInfoDialog.css';
import '../../assets/animateCss/animate.min.css';
import '../../assets/inputCss/inputCss.css';
import '../../assets/fonts/fonts.css';
import '@fortawesome/fontawesome-free/css/all.css';

//libraries
import {ButtonBase, CircularProgress} from "@material-ui/core";
import lottie from 'lottie-web';
import swal from 'sweetalert2';
import $ from 'jquery';
import gsap from "gsap";
import _ from 'lodash'
import {getResNames} from "../../requests/requests";

let requests = require('../../requests/requests')


const UserInfoDialog = (props) => {
    let [optionsUi, setOU] = useState(null)
    let checkedOptions = useRef([])
    let [optionsPrices, setOP] = useState(0)
    let [submitEnabled, setSubmitEnabled] = React.useState(true)
    let checkBoxes = useRef({})
    let [englishResNames,setERN] = useState([])
    let [persianResNames,setpRN] = useState([])
    let [basePrice,setBP] = useState(0)

    let persianCurrency = (number) => {
        let tempArray = [];
        _.chunk(number.toString().split('').reverse().join(''), 3).forEach(array => {
            let joined = array.join('')
            tempArray.push(joined)
        })

        return (tempArray.reverse().join(','))
    }


    useLayoutEffect(() => {
        let animation = lottie.loadAnimation({
            container: document.querySelector('.user-info-lottie-container'),
            loop: true,
            autoplay: true,
            path: '/lottie/signup.json',
        })
        animation.setSpeed(0.5)
        getResNames((res)=>{
            if(res['statusCode']===200){
                setERN(res.data['englishNames'])
                setpRN(res.data['persianNames'])
            }
        })

    },[])
    useEffect(() => {
        options.forEach((item, index) => {
            let tempCheckbox = lottie.loadAnimation({
                container: document.getElementById('checkbox-' + index),
                path: '/lottie/checkBox.json',
                loop: false
            })
            tempCheckbox.addEventListener('data_ready', () => {
                tempCheckbox.playSegments([0, 20], true)
                checkBoxes.current[index] = tempCheckbox
            })
        })

    }, [optionsUi])


    let options = [
        {
            name: 'کامنت',
            price: 12000,
            details: 'این گزینه به کاربران امکان درج نطر درباره هر غذا را میدهد'
        },
        {
            name: 'تور مجازی',
            price: 12000,
            details: 'نمای داخلی و خارجی رستوران قابل مشاهده برای کاربر با فضای 360 درجه'
        },
        {
            name: 'پیجر گارسون',
            price: 12000,
            details: 'قابلیت پیجر برای ارتباط با گارسون'
        },
    ]

    let submitHandler = () => {
        let username = $('#phone').val()
        let name = $('#name').val()
        let persianName = $('#res-p-name').val()
        let englishName = $('#res-e-name').val()
        let planid = props.pickedPlanId
        if (name.length > 2 && persianName.length > 2 && englishName.length > 2) {
            if (username.length === 11) {
                if (!persianResNames.includes(persianName)&&!englishResNames.includes(englishName)){
                    setSubmitEnabled(false)
                    requests.signUpWithPlan(name, username, persianName, englishName, planid, signUpCallback)
                }else{
                    swal.fire({
                        title: 'نام رستوران تکراری',
                        text: "نامی که برای رستوران انتخاب کردید قبلا انتخاب شده است لطفا نام دیگری را امتحان کنید",
                        confirmButtonText: 'فهمیدم'
                    }).then()
                }
            } else {
                swal.fire({
                    title: 'ورودی اشتباه',
                    text: " لطفا شماره تلفن را در فرمت 11 رقمی وارد کنید",
                    confirmButtonText: 'فهمیدم'
                }).then()
            }
        } else {
            swal.fire({
                title: 'ورودی اشتباه',
                text: 'نام کوچک تر از حد مجاز',
                confirmButtonText: 'فهمیدم'
            }).then()
        }
    }
    let signUpCallback = (res) => {
        if (res !=='error'){
            if (res['statusCode'] === 200) {
                setBP(res['data']['amount'])
                signUpSuccess()
            }
        }else{
            swal.fire({
                title:'خطا',
                icon:'error',
                text:'عملیات با خطا مواجه شده است لطفا از تکراری نبودن شماره تلفن و اتصال اینترنت مطمعن شوید'
                ,confirmButtonText:'باشه'
            })
            setSubmitEnabled(true)
        }
    }
    let signUpSuccess = () => {
        gsap.to('#success-container', {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            delay: 0.2
        })
        gsap.to($('#user-info-animation-holder div.form__group'), {
            y: -50,
            opacity: 0,
            duration: 0.2,
            ease: 'power3.out',
            stagger: 0.02
        })
        $('#btn-div-inner')[0]?.remove()
        let btn = $('#submit-btn')[0]
        btn.style.border = '2px solid #00cf92'
        let animation = lottie.loadAnimation({
            container: $('#button-inner-div')[0],
            path: '/lottie/check.json',
            autoplay: true,
            loop: false,
        })
        animation.addEventListener('data_ready', () => {
            animation.play()
            setTimeout(() => {
                btn.style.background = '#00cf92'
                btn.style.color = 'white'
                let payText = document.createElement('span')
                payText.style.paddingTop = '5px'
                payText.className = 'IranSans'
                payText.innerText = 'پرداخت'
                btn.innerHTML = ''
                btn.append(payText)
            }, 1000)
        })


        let ou = options.map((eachOption, index) => {
            return (
                <div key={index}
                     onClick={() => {
                         if (checkedOptions.current.includes(eachOption.name)) {
                             checkBoxes.current[index].playSegments([45, 30])
                             checkedOptions.current = checkedOptions.current.filter(item => {
                                 return item !== eachOption.name
                             })
                             let totalPrice = 0;
                             checkedOptions.current.forEach(eachItem => {
                                 options.forEach(defaultOption => {
                                     if (defaultOption.name === eachItem) {
                                         totalPrice += defaultOption.price
                                     }
                                 })
                             })
                             setOP(totalPrice)
                         } else {
                             checkBoxes.current[index].playSegments([31, 45])
                             checkedOptions.current.push(eachOption.name)
                             let totalPrice = 0;
                             checkedOptions.current.forEach(eachItem => {
                                 options.forEach(defaultOption => {
                                     if (defaultOption.name === eachItem) {
                                         totalPrice += defaultOption.price
                                     }
                                 })
                             })
                             setOP(totalPrice)
                         }
                         // setOP(checkedOptions.current)
                     }}
                     style={{
                         zIndex: '99',
                         cursor: 'pointer'
                     }} className={'d-flex flex-column align-items-end justify-content-center w-100'}>
                    <div className={'d-flex flex-row align-items-center justify-content-center'}>
                        <span className={'pt-1'}>{eachOption.name}</span>
                        <div

                            id={'checkbox-' + index} style={{
                            height: 40,
                            width: 40
                        }}/>
                    </div>
                    <p className={'text-black-50 pe-5'} style={{
                        fontSize: '0.8rem'
                    }}>{eachOption.details}</p>
                </div>


            )
        })
        setOU(ou)
        //
        // let test = lottie.loadAnimation({
        //     container: $('#checkbox-' + index)[0],
        //     path: '/lottie/checkBox.json',
        //     autoplay: true
        // })
        // test.playSegments()


    }
    return (
        <div
            className={'position-fixed w-100 h-100 overlay d-flex justify-content-center align-items-center animate__animated animate__fadeIn ' + (props.show ? 'animate__fadeIn' : 'd-none')}>
            <i onClick={
                () => {
                    props.setUserInfoDialog(false)
                }
            } style={{position: 'absolute', top: 15, right: 30, fontSize: '2rem', color: 'white'}}
               className="fas fa-times"/>
            <div className={'container h-100 d-flex justify-content-center align-items-center'}>
                <div id={'user-info-animation-holder'}
                     className={'user-info-container d-flex flex-column align-items-center Iransans position-relative animate__animated ' + (props.show ? 'animate__fadeInUp' : 'd-none')}>
                    <div id={'success-container'}
                         className={'pt-3 px-3 d-flex flex-column align-items-center justify-content-center'} style={{
                        position: 'absolute',
                        width: '100%',
                        zIndex:999
                    }}>
                        <h4>عملیات <span style={{
                            color: '#00cf92'
                        }}>موفق</span></h4>

                        <span className={'text-black-50 mt-4'}>گزینه های دلخواه</span>

                        <div className={'d-flex mt-3 flex-column align-items-center justify-content-center text-end'}>
                            {
                                optionsUi ?
                                    optionsUi
                                    :
                                    <div/>
                            }
                        </div>
                        <div className={'d-flex mt-3 flex-column align-items-center justify-content-center '}>
                            <span>
                                :هزینه منو
                            </span>
                            <span dir={'rtl'}>
                               {persianCurrency(optionsPrices + basePrice)}
                                تومان
                            </span>
                        </div>
                    </div>
                    <div className={'user-info-lottie-container form__group'}>
                    </div>
                    <div dir="rtl" className="form__group field  w-75">
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name'
                               required/>
                        <label htmlFor="name" className="form__label">نام </label>
                    </div>

                    <div dir="rtl" className="form__group field mt-3 w-75">
                        <input onChange={(e)=>{
                        if ((isNaN(parseInt(e.currentTarget.value[e.currentTarget.value.length-1]))) || e.currentTarget.value.length>11){
                            e.currentTarget.value = e.currentTarget.value.slice(0,e.currentTarget.value.length-1)
                        }

                        }} type="input" className="form__field" placeholder="Phone" name="name" id='phone'
                               required/>
                        <label htmlFor="phone" className="form__label">شماره تماس (11 رقمی)</label>
                    </div>

                    <div dir="rtl" className="form__group field mt-3 w-75">
                        <input type="input" className="form__field" placeholder="res-p-name" name="res-p-name"
                               id='res-p-name'
                               required/>
                        <label htmlFor="res-p-name" className="form__label">نام فارسی مجموعه</label>
                    </div>

                    <div dir="rtl" className="form__group field mt-3 w-75">
                        <input type="input" className="form__field" placeholder="res-e-name" name="res-e-name"
                               id='res-e-name'
                               required/>
                        <label htmlFor="res-e-name" className="form__label">نام اینگلیسی مجموعه</label>
                    </div>

                    <ButtonBase id={'submit-btn'} onClick={submitHandler} disabled={!submitEnabled} style={{
                        width: '80%',
                        height: '40px',
                        position: 'absolute',
                        bottom: '20px',
                        border: '2px solid #601199',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        transition: '0.3s ease'
                    }}>
                        {
                            submitEnabled ?
                                <div id={'button-inner-div'} style={{height: 50, width: 50, color: '#601199'}}>
                                    <span style={{
                                        lineHeight: '50px'
                                    }} id={'btn-div-inner'}>       تایید</span>
                                </div>
                                :
                                <div id={'button-inner-div'} style={{height: 20, width: 20, color: '#601199'}}>
                                    <CircularProgress id={'btn-div-inner'} size={20} color={'inherit'}/>
                                </div>
                        }

                    </ButtonBase>
                </div>

            </div>
        </div>
    );
};

export default UserInfoDialog;
