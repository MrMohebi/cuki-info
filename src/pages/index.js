//react
import React, {useEffect} from "react";
import { Helmet } from "react-helmet"
import Desktop from "./Desktop";
import Mobile from "./Mobile";
let extraFunctions = require('../functions/externalFunctions')

const IndexPage = () => {
    extraFunctions.checkScreenSize()
    useEffect(()=>{
        extraFunctions.checkScreenSize()
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

