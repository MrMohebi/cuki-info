import * as React from "react"
import { Link } from "gatsby"

import '../css/404.css'
import 'bootstrap/dist/css/bootstrap.css'

// markup
const NotFoundPage = () => {
  return (
    <main>
        <div className={"mainContainer-404 d-flex flex-column align-items-center"}>
            <div className={'d-flex flex-column align-items-center'}>
                <img src={'/img/sad.png'} className={'mt-4 sad-img'} alt={"sad-cuki"}/>
                <h1 className={"pb-4"}> ): صفحه مورد نظر پیدا نشد</h1>
            </div>
            <h5 className={"footer mb-4"}><Link  to={"/"}>صفحه اصلی</Link></h5>
        </div>
    </main>
  )
}

export default NotFoundPage
