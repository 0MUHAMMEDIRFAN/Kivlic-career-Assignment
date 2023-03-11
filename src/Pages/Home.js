import React from 'react'

import Banner from '../Components/Banner'
import CopyRight from '../Components/CopyRight'
import Footer from '../Components/Footer'
import FormContainer from '../Components/FormContainer'
import Navbar from '../Components/Navbar'

function Home() {

    return (
        <div>
            <Navbar />
            <Banner />
            <FormContainer />
            <Footer />
            <CopyRight />
        </div>
    )
}

export default Home
