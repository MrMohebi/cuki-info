import React from 'react';

const Intro = (props) => {
    return (
        <section className={'intro-wrapper'}>
            <div className={'c-intro d-flex flex-column align-content-end pt-5 h-100'}>
                <h1 style={{whiteSpace:'nowrap'}} id={'intro-first-part'} className={'IRANYekanBlack'}>دیگه وقت</h1>
                <h1 style={{whiteSpace:'nowrap'}} className={'IRANYekanBlack'}>راحت تر شدن کار هاست</h1>
                <span style={{whiteSpace:'nowrap'}} className={'IranSansLight mt-4'}>کوکی برای رفع نیاز ها و  سرعت دهی به کار ها طراحی شده</span>
                <span style={{whiteSpace:'nowrap'}} className={'IranSansLight mt-2'}> که هم مشتری ها راضی باشن هم صاحبان کسب وکار</span>
                <button onClick={props.plans_button_handler} className={'go-to-plans IranSans mt-4 pt-1'}>
                    مشاهده پکیج ها
                </button>
            </div>
        </section>

    );
};

export default Intro;