//react
import React, {useEffect} from "react";

const IndexPage = (props) => {
    document.title = "Cuki Info"
    let checkScreenSize = () => {
        if (window.innerWidth <= 700) {
            window.location.pathname = '/Mobile'
        } else {
            window.location.pathname = '/Desktop'
        }
    }
    useEffect(()=>{
        checkScreenSize()
    },[])
    return (
        <main/>
    )
}
export default IndexPage

