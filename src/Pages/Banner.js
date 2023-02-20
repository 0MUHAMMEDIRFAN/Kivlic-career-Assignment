import React from 'react'
import vacant from "../images/VACANT.png"

function Banner() {
    return (
        <div className='banner'>
            {/* <Navbar /> */}
            <div className="padding"></div>
            <div className="contents">
                <div className="left">
                    {/* <div className="careerDiv"> */}

                    <p className='careers'>Careers</p>
                    {/* </div> */}
                        {/* <p>Submit Your Resume <br /><span>Become discoverable for all of our roles</span></p> */}
                </div>
                <div className="right">
                    <img src={vacant} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner
