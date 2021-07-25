import React, {useEffect} from 'react';
//css
import './css/UserInfoDialog.css'
import '../../assets/animateCss/animate.min.css'
import '../../assets/inputCss/inputCss.css'
import '../../assets/fonts/fonts.css'
//libraries
import {ButtonBase} from "@material-ui/core";
import lottie from 'lottie-web'
import '@fortawesome/fontawesome-free/css/all.css'


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

    return (
        <div
            className={'position-fixed w-100 h-100 overlay d-flex justify-content-center align-items-center animate__animated animate__fadeIn ' + (props.show ? 'animate__fadeIn' : 'd-none')} >
            <i onClick={
                          ()=>{
                                  props.setUserInfoDialog(false)
                          }
                      } style={{position:'absolute',top:40,right:60,fontSize:'2rem',color:'white'}} className="fas fa-times"/>
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
                        <input type="input" className="form__field" placeholder="Name" name="name" id='lastname'
                               required/>
                        <label htmlFor="lastname" className="form__label">نام خانوادگی </label>
                    </div>
                    <div dir="rtl" className="form__group field mt-3 w-75">
                        <input type="input" className="form__field" placeholder="Name" name="name" id='phonenumber'
                               required/>
                        <label htmlFor="phonenumber" className="form__label">شماره تلفن</label>
                    </div>
                    <ButtonBase style={{
                        width: '80%',
                        height: '40px',
                        position: 'absolute',
                        bottom: '20px',
                        border: '2px solid #601199',
                        borderRadius: '10px'
                    }}>
                        تایید
                    </ButtonBase>
                </div>

            </div>
        </div>
    );
};

export default UserInfoDialog;
