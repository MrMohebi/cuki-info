//react
import React, {useEffect} from "react";
import { Helmet } from "react-helmet"
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const IndexPage = () => {
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
    if (<Desktop/>&&<Mobile/>){

    }
    return (
        <main>
            <Helmet>
                <title>Cuki</title>
            </Helmet>
        </main>
    )
}
export default IndexPage

