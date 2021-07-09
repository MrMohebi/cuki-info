import gsap from "gsap";
let svgs = require('../svg/svgs')

export let changePlansButtonContent = (close,setPlansButtonContent)=>{
    if (close){
        gsap.to('.plans-toggle-button',{
            y:50,
            ease:'expo.inOut',
            onComplete:()=>{
                setPlansButtonContent(svgs.closeButton)
                gsap.to('.plans-toggle-button',{
                    y:0
                })
            }
        })
    }else{
        gsap.to('.plans-toggle-button',{
            y:50,
            ease:'expo.inOut',
            onComplete:()=>{
                setPlansButtonContent('پلن ها')
                gsap.to('.plans-toggle-button',{
                    y:0
                })
            }
        })
    }
}


export  let checkScreenSize = () => {
    if (window.innerWidth <= 700) {
        window.location.pathname = '/Mobile'
    } else {
        window.location.pathname = '/Desktop'
    }
}
