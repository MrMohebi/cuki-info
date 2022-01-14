import * as React from "react"
import gsap from 'gsap'
import '../styles/index.css'
import '../styles/body.css'
import ScrollTrigger from "gsap/ScrollTrigger";
import {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/cards.css'
import '../styles/fonts/fonts.css'
import Header from "../components/header";
import Cards from "../components/cards";
import Plans from "../components/plans";
import Questions from "../components/questions";
import Footer from "../components/footer";

const IndexPage = () => {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.to(['.absolute-wrapper', '#background-svg'], {
            y: '-100%',
            // filter: 'blur(10px)',
            scrollTrigger: {
                trigger: '#c-plans',
                start: 'top bottom',
                end: 'top -=50',
                scrub: true
            }
        })

        // gsap.to('.c-intro',{
        //     scrollTrigger:{
        //         trigger:'#intro-trigger',
        //         scrub:true
        //     },
        //     left:'5%',
        //     transform:'translateX(0%)',
        //     marginLeft:'0%',
        //     marginRight:'0%',
        //     // textAlign:'right'
        // })
        // gsap.to('#intro-first-part',{
        //     scrollTrigger:{
        //         trigger:'#intro-trigger',
        //         scrub:true,
        //         start:'100 top'
        //     },
        //     marginLeft:'0%',
        //     marginRight:'0%',
        //     // textAlign:'right'
        // })
        window.scrollBy(0, 1)
    }, [])


    let plans_button_handler = () => {
        window.scrollBy(0, 50000)
    }
    return (
        <div dir={'ltr'} id={'wrapper'}>
            <div className={' position-fixed '} style={{
                width: 1800,
                right: 0
            }}>
                <svg id={'background-svg'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
                    <defs>
                        <clipPath id="clip-path">
                            <rect y="-153" width="1920" height="1080" fill="none"/>
                        </clipPath>
                    </defs>
                    <g id="Scroll_Group_1" data-name="Scroll Group 1" transform="translate(0 153)">
                        <g id="Group_15" data-name="Group 15">
                            <g id="Group_1" data-name="Group 1" transform="translate(-98 147.118)">
                                <circle id="Ellipse_71" data-name="Ellipse 71" cx="3" cy="3" r="3"
                                        transform="translate(98 423.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_72" data-name="Ellipse 72" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 423.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_73" data-name="Ellipse 73" cx="3" cy="3" r="3"
                                        transform="translate(141 423.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_74" data-name="Ellipse 74" cx="3" cy="3" r="3"
                                        transform="translate(163 423.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_75" data-name="Ellipse 75" cx="3" cy="3" r="3"
                                        transform="translate(185 423.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_101" data-name="Ellipse 101" cx="3" cy="3" r="3"
                                        transform="translate(207 423.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_102" data-name="Ellipse 102" cx="3" cy="3" r="3"
                                        transform="translate(207 445.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_103" data-name="Ellipse 103" cx="3" cy="3" r="3"
                                        transform="translate(207 467.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_104" data-name="Ellipse 104" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(207 489.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_105" data-name="Ellipse 105" cx="3" cy="3" r="3"
                                        transform="translate(207 510.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_106" data-name="Ellipse 106" cx="3" cy="3" r="3"
                                        transform="translate(207 532.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_107" data-name="Ellipse 107" cx="3" cy="3" r="3"
                                        transform="translate(207 554.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_108" data-name="Ellipse 108" cx="3" cy="3" r="3"
                                        transform="translate(207 576.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_109" data-name="Ellipse 109" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(207 598.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_110" data-name="Ellipse 110" cx="3" cy="3" r="3"
                                        transform="translate(207 619.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_111" data-name="Ellipse 111" cx="3" cy="3" r="3"
                                        transform="translate(185 619.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_112" data-name="Ellipse 112" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(185 598.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_113" data-name="Ellipse 113" cx="3" cy="3" r="3"
                                        transform="translate(185 576.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_114" data-name="Ellipse 114" cx="3" cy="3" r="3"
                                        transform="translate(185 554.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_115" data-name="Ellipse 115" cx="3" cy="3" r="3"
                                        transform="translate(163 554.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_116" data-name="Ellipse 116" cx="3" cy="3" r="3"
                                        transform="translate(163 576.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_117" data-name="Ellipse 117" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(163 598.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_118" data-name="Ellipse 118" cx="3" cy="3" r="3"
                                        transform="translate(163 619.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_119" data-name="Ellipse 119" cx="3" cy="3" r="3"
                                        transform="translate(141 619.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_120" data-name="Ellipse 120" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(141 598.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_121" data-name="Ellipse 121" cx="3" cy="3" r="3"
                                        transform="translate(141 576.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_122" data-name="Ellipse 122" cx="3" cy="3" r="3"
                                        transform="translate(141 554.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_123" data-name="Ellipse 123" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 554.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_124" data-name="Ellipse 124" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 576.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_125" data-name="Ellipse 125" cx="2.5" cy="2.5" r="2.5"
                                        transform="translate(120 598.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_126" data-name="Ellipse 126" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 619.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_127" data-name="Ellipse 127" cx="3" cy="3" r="3"
                                        transform="translate(98 619.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_128" data-name="Ellipse 128" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(98 598.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_129" data-name="Ellipse 129" cx="3" cy="3" r="3"
                                        transform="translate(98 576.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_130" data-name="Ellipse 130" cx="3" cy="3" r="3"
                                        transform="translate(98 554.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_76" data-name="Ellipse 76" cx="3" cy="3" r="3"
                                        transform="translate(185 445.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_77" data-name="Ellipse 77" cx="3" cy="3" r="3"
                                        transform="translate(163 445.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_78" data-name="Ellipse 78" cx="3" cy="3" r="3"
                                        transform="translate(141 445.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_79" data-name="Ellipse 79" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 445.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_80" data-name="Ellipse 80" cx="3" cy="3" r="3"
                                        transform="translate(98 445.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_81" data-name="Ellipse 81" cx="3" cy="3" r="3"
                                        transform="translate(98 467.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_82" data-name="Ellipse 82" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 467.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_83" data-name="Ellipse 83" cx="3" cy="3" r="3"
                                        transform="translate(141 467.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_84" data-name="Ellipse 84" cx="3" cy="3" r="3"
                                        transform="translate(163 467.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_85" data-name="Ellipse 85" cx="3" cy="3" r="3"
                                        transform="translate(185 467.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_86" data-name="Ellipse 86" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(185 489.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_87" data-name="Ellipse 87" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(163 489.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_88" data-name="Ellipse 88" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(141 489.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_89" data-name="Ellipse 89" cx="2.5" cy="2.5" r="2.5"
                                        transform="translate(120 489.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_90" data-name="Ellipse 90" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(98 489.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_91" data-name="Ellipse 91" cx="3" cy="3" r="3"
                                        transform="translate(98 510.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_92" data-name="Ellipse 92" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 510.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_93" data-name="Ellipse 93" cx="3" cy="3" r="3"
                                        transform="translate(141 510.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_94" data-name="Ellipse 94" cx="3" cy="3" r="3"
                                        transform="translate(163 510.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_95" data-name="Ellipse 95" cx="3" cy="3" r="3"
                                        transform="translate(185 510.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_96" data-name="Ellipse 96" cx="3" cy="3" r="3"
                                        transform="translate(185 532.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_97" data-name="Ellipse 97" cx="3" cy="3" r="3"
                                        transform="translate(163 532.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_98" data-name="Ellipse 98" cx="3" cy="3" r="3"
                                        transform="translate(141 532.882)" fill="#96d9e9"/>
                                <ellipse id="Ellipse_99" data-name="Ellipse 99" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 532.882)" fill="#96d9e9"/>
                                <circle id="Ellipse_100" data-name="Ellipse 100" cx="3" cy="3" r="3"
                                        transform="translate(98 532.882)" fill="#96d9e9"/>
                            </g>
                            <g id="Group_9" data-name="Group 9" transform="translate(456.118 510) rotate(-90)">
                                <circle id="Ellipse_71-2" data-name="Ellipse 71" cx="3" cy="3" r="3"
                                        transform="translate(98 423.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_72-2" data-name="Ellipse 72" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 423.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_73-2" data-name="Ellipse 73" cx="3" cy="3" r="3"
                                        transform="translate(141 423.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_74-2" data-name="Ellipse 74" cx="3" cy="3" r="3"
                                        transform="translate(163 423.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_75-2" data-name="Ellipse 75" cx="3" cy="3" r="3"
                                        transform="translate(185 423.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_101-2" data-name="Ellipse 101" cx="3" cy="3" r="3"
                                        transform="translate(207 423.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_102-2" data-name="Ellipse 102" cx="3" cy="3" r="3"
                                        transform="translate(207 445.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_103-2" data-name="Ellipse 103" cx="3" cy="3" r="3"
                                        transform="translate(207 467.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_104-2" data-name="Ellipse 104" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(207 489.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_105-2" data-name="Ellipse 105" cx="3" cy="3" r="3"
                                        transform="translate(207 510.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_106-2" data-name="Ellipse 106" cx="3" cy="3" r="3"
                                        transform="translate(207 532.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_107-2" data-name="Ellipse 107" cx="3" cy="3" r="3"
                                        transform="translate(207 554.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_108-2" data-name="Ellipse 108" cx="3" cy="3" r="3"
                                        transform="translate(207 576.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_109-2" data-name="Ellipse 109" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(207 598.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_110-2" data-name="Ellipse 110" cx="3" cy="3" r="3"
                                        transform="translate(207 619.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_111-2" data-name="Ellipse 111" cx="3" cy="3" r="3"
                                        transform="translate(185 619.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_112-2" data-name="Ellipse 112" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(185 598.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_113-2" data-name="Ellipse 113" cx="3" cy="3" r="3"
                                        transform="translate(185 576.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_114-2" data-name="Ellipse 114" cx="3" cy="3" r="3"
                                        transform="translate(185 554.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_115-2" data-name="Ellipse 115" cx="3" cy="3" r="3"
                                        transform="translate(163 554.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_116-2" data-name="Ellipse 116" cx="3" cy="3" r="3"
                                        transform="translate(163 576.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_117-2" data-name="Ellipse 117" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(163 598.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_118-2" data-name="Ellipse 118" cx="3" cy="3" r="3"
                                        transform="translate(163 619.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_119-2" data-name="Ellipse 119" cx="3" cy="3" r="3"
                                        transform="translate(141 619.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_120-2" data-name="Ellipse 120" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(141 598.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_121-2" data-name="Ellipse 121" cx="3" cy="3" r="3"
                                        transform="translate(141 576.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_122-2" data-name="Ellipse 122" cx="3" cy="3" r="3"
                                        transform="translate(141 554.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_123-2" data-name="Ellipse 123" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 554.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_124-2" data-name="Ellipse 124" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 576.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_125-2" data-name="Ellipse 125" cx="2.5" cy="2.5" r="2.5"
                                        transform="translate(120 598.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_126-2" data-name="Ellipse 126" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 619.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_127-2" data-name="Ellipse 127" cx="3" cy="3" r="3"
                                        transform="translate(98 619.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_128-2" data-name="Ellipse 128" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(98 598.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_129-2" data-name="Ellipse 129" cx="3" cy="3" r="3"
                                        transform="translate(98 576.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_130-2" data-name="Ellipse 130" cx="3" cy="3" r="3"
                                        transform="translate(98 554.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_76-2" data-name="Ellipse 76" cx="3" cy="3" r="3"
                                        transform="translate(185 445.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_77-2" data-name="Ellipse 77" cx="3" cy="3" r="3"
                                        transform="translate(163 445.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_78-2" data-name="Ellipse 78" cx="3" cy="3" r="3"
                                        transform="translate(141 445.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_79-2" data-name="Ellipse 79" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 445.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_80-2" data-name="Ellipse 80" cx="3" cy="3" r="3"
                                        transform="translate(98 445.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_81-2" data-name="Ellipse 81" cx="3" cy="3" r="3"
                                        transform="translate(98 467.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_82-2" data-name="Ellipse 82" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 467.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_83-2" data-name="Ellipse 83" cx="3" cy="3" r="3"
                                        transform="translate(141 467.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_84-2" data-name="Ellipse 84" cx="3" cy="3" r="3"
                                        transform="translate(163 467.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_85-2" data-name="Ellipse 85" cx="3" cy="3" r="3"
                                        transform="translate(185 467.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_86-2" data-name="Ellipse 86" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(185 489.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_87-2" data-name="Ellipse 87" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(163 489.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_88-2" data-name="Ellipse 88" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(141 489.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_89-2" data-name="Ellipse 89" cx="2.5" cy="2.5" r="2.5"
                                        transform="translate(120 489.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_90-2" data-name="Ellipse 90" cx="3" cy="2.5" rx="3" ry="2.5"
                                         transform="translate(98 489.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_91-2" data-name="Ellipse 91" cx="3" cy="3" r="3"
                                        transform="translate(98 510.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_92-2" data-name="Ellipse 92" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 510.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_93-2" data-name="Ellipse 93" cx="3" cy="3" r="3"
                                        transform="translate(141 510.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_94-2" data-name="Ellipse 94" cx="3" cy="3" r="3"
                                        transform="translate(163 510.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_95-2" data-name="Ellipse 95" cx="3" cy="3" r="3"
                                        transform="translate(185 510.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_96-2" data-name="Ellipse 96" cx="3" cy="3" r="3"
                                        transform="translate(185 532.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_97-2" data-name="Ellipse 97" cx="3" cy="3" r="3"
                                        transform="translate(163 532.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_98-2" data-name="Ellipse 98" cx="3" cy="3" r="3"
                                        transform="translate(141 532.882)" fill="#ffc5cb"/>
                                <ellipse id="Ellipse_99-2" data-name="Ellipse 99" cx="2.5" cy="3" rx="2.5" ry="3"
                                         transform="translate(120 532.882)" fill="#ffc5cb"/>
                                <circle id="Ellipse_100-2" data-name="Ellipse 100" cx="3" cy="3" r="3"
                                        transform="translate(98 532.882)" fill="#ffc5cb"/>
                            </g>
                            <image id="Rectangle_141" data-name="Rectangle 141" width="644" height="633"
                                   transform="translate(1335)"
                                   href="data:image/png;base64,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"/>
                            <image id="Rectangle_142" data-name="Rectangle 142" width="383" height="376"
                                   transform="translate(960 744) rotate(-90)"
                                   href="data:image/png;base64,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"/>
                        </g>
                    </g>
                </svg>
            </div>
            <Header/>

            {/*<div className={'trigger'} id={'intro-trigger'}/>*/}
            <div className={'trigger'} id={'trigger'}/>


            <div dir={'rtl'} className={'absolute-wrapper w-100 h-100 '}>
                <Cards/>
                <section className={'c-intro d-flex flex-column align-content-end pt-5'}>
                    <h1 id={'intro-first-part'} className={'IRANYekanBlack'}>دیگه وقت</h1>
                    <h1 className={'IRANYekanBlack'}>راحت تر شدن کار هاست</h1>
                    <span className={'IranSansLight mt-4'}>کوکی برای رفع نیاز ها و  سرعت دهی به کار ها طراحی شده</span>
                    <span className={'IranSansLight mt-2'}> که هم مشتری ها راضی باشن هم صاحبان کسب وکار</span>
                    <button onClick={plans_button_handler} className={'go-to-plans IranSans mt-4 pt-1'}>
                        مشاهده پکیج ها
                    </button>
                </section>
            </div>
            <Plans/>
            <Questions/>
            <Footer/>
        </div>
    )
}

export default IndexPage
