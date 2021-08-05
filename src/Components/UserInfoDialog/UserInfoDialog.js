import React, {useEffect} from 'react';
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

let requests = require('../../requests/requests')


const UserInfoDialog = (props) => {

    useEffect(() => {
        let animation = lottie.loadAnimation({
            container: document.querySelector('.user-info-lottie-container'),
            loop: true,
            autoplay: true,
            path: '/lottie/signup.json',
        })
        animation.setSpeed(0.5)
    }, [])

    let [submitEnabled, setSubmitEnabled] = React.useState(true)

    let submitHandler = () => {
        let username = $('#phone').val()
        let name = $('#name').val()
        let planid = props.pickedPlanId
        if (name.length > 3) {
            if (username.length === 11) {
                setSubmitEnabled(false)
                requests.signUpWithPlan(name, username, planid,signUpCallback)
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
    let signUpCallback = (res)=>{
        console.log(res)
        setSubmitEnabled(true)
    }
    return (
        <div
            className={'position-fixed w-100 h-100 overlay d-flex justify-content-center align-items-center animate__animated animate__fadeIn ' + (props.show ? 'animate__fadeIn' : 'd-none')}>
            <i onClick={
                () => {
                    props.setUserInfoDialog(false)
                }
            } style={{position: 'absolute', top: 40, right: 60, fontSize: '2rem', color: 'white'}}
               className="fas fa-times"/>
            <div className={'container h-100 d-flex justify-content-center align-items-center'}>
                <div
                    className={'user-info-container d-flex flex-column align-items-center Iransans position-relative animate__animated ' + (props.show ? 'animate__fadeInUp' : 'd-none')}>
                    <div className={'user-info-lottie-container'}>
                    </div>
                    <div dir="rtl" className="form__group field  w-75">
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name'
                               required/>
                        <label htmlFor="name" className="form__label">نام </label>
                    </div>
                    <div dir="rtl" className="form__group field mt-3 w-75">
                        <input type="input" className="form__field" placeholder="Phone" name="name" id='phone'
                               required/>
                        <label htmlFor="phone" className="form__label">شماره تماس (11 رقمی)</label>
                    </div>

                    <ButtonBase onClick={submitHandler} disabled={!submitEnabled} style={{
                        width: '80%',
                        height: '40px',
                        position: 'absolute',
                        bottom: '20px',
                        border: '2px solid #601199',
                        borderRadius: '10px'
                    }}>
                        {
                            submitEnabled ?
                                "تایید"
                                :
                                <div style={{height: 20, width: 20, color: 'purple'}}>
                                    <CircularProgress size={20} color={'inherit'}/>
                                </div>
                        }

                    </ButtonBase>
                </div>

            </div>
        </div>
    );
};

export default UserInfoDialog;
