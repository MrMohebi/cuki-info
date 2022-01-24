import React from 'react';


const questions=[
    {
        title:'مناسب ترین سایز برای کد های QR چه سایزی است؟',
        description:'اندازه ی QR به فاصله ی آن از میز بستگی دارد اگر کد روی میز قرار بگیرد میتواند به اندازه سانتی متر باشد اما پیشنهاد ما سایز 8*8 است',
        image:'https://img.freepik.com/vrije-vector/smartphone-qr-code-scannen_23-2148624200.jpg?size=338&ext=jpg&ga=GA1.2.1851578287.1639612800',
    },
{
        title:'مناسب ترین سایز برای کد های QR چه سایزی است؟',
        description:'اندازه ی QR به فاصله ی آن از میز بستگی دارد اگر کد روی میز قرار بگیرد میتواند به اندازه سانتی متر باشد اما پیشنهاد ما سایز 8*8 است',
        image:'https://img.freepik.com/vrije-vector/smartphone-qr-code-scannen_23-2148624200.jpg?size=338&ext=jpg&ga=GA1.2.1851578287.1639612800',
    },
{
        title:'مناسب ترین سایز برای کد های QR چه سایزی است؟',
        description:'اندازه ی QR به فاصله ی آن از میز بستگی دارد اگر کد روی میز قرار بگیرد میتواند به اندازه سانتی متر باشد اما پیشنهاد ما سایز 8*8 است',
        image:'https://img.freepik.com/vrije-vector/smartphone-qr-code-scannen_23-2148624200.jpg?size=338&ext=jpg&ga=GA1.2.1851578287.1639612800',
    },


]
const Questions = () => {
    return (
        <section className={'w-100 pt-5 questions'}>
            {
                questions.map(q=>
                        <div className={'question'}>
                            <div className={'question-circle'}/>
                            <img className={'question-image '} src={q.image} alt="Cuki question"/>
                            <p style={{fontSize:'1.1rem'}} dir={'rtl'} className={'IranSansMedium text-end pe-4 ps-3 q-title'}>{q.title}</p>
                            <p style={{fontSize:'0.9rem'}} dir={'rtl'} className={'IranSansLight text-end pe-4 ps-3'}>{q.description}</p>
                        </div>
                )
            }
        </section>
    );
};

export default Questions;