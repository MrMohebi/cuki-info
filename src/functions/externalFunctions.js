import gsap from "gsap";

let svgs = require('../svg/svgs')

export let changePlansButtonContent = (close, setPlansButtonContent) => {
    if (close) {
        gsap.to('.plans-toggle-button', {
            y: 80,
            duration:'0.2',
            ease: 'power4.Out',
            onComplete: () => {
                setPlansButtonContent(svgs.closeButton)
                gsap.to('.plans-toggle-button', {
                    y: 0
                })
            }
        })
    } else {
        gsap.to('.plans-toggle-button', {
            y: 80,
            duration:'0.2',
            ease: 'power4.Out',
            onComplete: () => {
                setPlansButtonContent('پلن ها')
                gsap.to('.plans-toggle-button', {
                    y: 0
                })
            }
        })
    }
}

export let checkScreenSize = () => {
    console.log(window.location.pathname)
    if (window.innerWidth <= 900) {
        if(window.location.pathname!=='/Mobile'){
            window.location.pathname = '/Mobile'
        }
    } else {
        if(window.location.pathname!=='/Desktop'){
            window.location.pathname = '/Desktop'
        }
    }
}
