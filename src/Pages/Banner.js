import React from 'react'
import vacant from "../images/VACANT.png"

function Banner() {
    return (
        <div className='banner'>
            {/* <Navbar /> */}
            <div className="padding"></div>
            <div className="contents">
                <div className="left">

                    <p className='careers'>Careers</p>
                    <div className="note">
                        <p>Submit Your Resume <span>Become discoverable for all of our roles</span></p>
                    </div>
                </div>
                <div className="right">
                    <img src={vacant} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner
