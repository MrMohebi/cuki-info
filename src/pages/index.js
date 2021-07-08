//react
import React, {useEffect} from "react";
import { Helmet } from "react-helmet"

const IndexPage = (props) => {
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
        <main>
            <Helmet>
                <title>Cuki</title>
            </Helmet>
        </main>
    )
}
export default IndexPage

