//react
import React, {useEffect} from "react";
import {Helmet} from "react-helmet"

import _ from 'lodash';

let extraFunctions = require('../functions/externalFunctions')

const IndexPage = () => {

    useEffect(() => {
        extraFunctions.checkScreenSize()
        window.addEventListener('resize', _.debounce(() => {
            extraFunctions.checkScreenSize()
            }, 100)
        )
    }, [])

    return (
        <main>
            <Helmet>
                <title>Cuki</title>
            </Helmet>
        </main>
    )

}
export default IndexPage

