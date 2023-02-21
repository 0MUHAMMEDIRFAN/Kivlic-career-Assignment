import React from 'react'
import logoFooter from "../images/logoFooter.png"
import appstore from "../images/app store.png"
import playstore from "../images/play store.png"

function Footer() {
    return (
        <div className='footer'>
            <div className="about">
                <img src={logoFooter} alt="" />
                <p>KIVLIK is a mobile steam car wash company, which offers premium car wash and detailing services at your doorstep. Conveniently book a car wash with a few taps on your phone. <br /> KIVLIK has several packages to meet your budget and requirements. Conveniently book a carwash with a few taps using the KIVLIK App or website. You can pick a time, location and package from the App or web. KIVLIK washes each vehicle using our Steam Cleaning system.
                </p>
            </div>
            <div className="company">
                <h3>COMPANY</h3>
                <p> Who We Are</p>
                <p> Blog</p>
                <p> Careers</p>
                <p> Report Fraud</p>
                <p> Contact</p>
                <p> Investor Relations</p>
            </div>
            <div className="question">
                <p>Got Questions?</p>
                <h3>Help Center</h3>
                <div className="social">
                    <h3 className='followUs'>Follow Us</h3>
                    <div className="icons">
                        <i className='bx bxl-facebook'  ></i>
                        <i className='bx bxl-instagram' ></i>
                        <i className='bx bxl-twitter' ></i>
                        <i className='bx bxl-youtube' ></i>
                    </div>
                </div>
                <div className="store">
                    <img src={appstore} alt="" />
                    <img src={playstore} alt="" />
                </div>
            </div>
            <div className="footernav">
                &gt;
            </div>
        </div >
    )
}

export default Footer
