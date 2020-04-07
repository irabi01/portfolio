import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

const FooterComponent = () => {
    return (
        <div className="footer_component">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content">
                            <p>Copyrright Irabi Profile <FaRegCopyright/> 2016 - {(new Date().getFullYear())}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterComponent