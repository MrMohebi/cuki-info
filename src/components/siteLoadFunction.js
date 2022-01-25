import React, {useEffect} from 'react';
import gsap from "gsap";

const SiteLoadFunction = () => {

    useEffect(() => {
        //add the animation for circular rotation to go up on plans entered
        gsap.to(['.absolute-wrapper', '#background-svg'], {
            y: '-100%', opacity: 0, scrollTrigger: {
                trigger: '#c-plans', start: 'top bottom', end: 'top -=50', scrub: true
            }
        });
        //to activate the animation
        window.scrollBy(0, 1);
    }, [])
    return (<></>);
};

export default SiteLoadFunction;