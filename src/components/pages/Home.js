import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="main__container">
            <h1>Our Mission Statement</h1>
            <p>
                To perform for our customers at the highest level of <NavLink to="/services" className="inner__page__links">quality service</NavLink> at fair and market competitive prices.  To ensure the longevity of our company through repeat and referral business achieved by customer satisfaction in all areas including timeliness, attention to detail and service-minded attitudes.  To maintain the highest levels of professionalism, integrity, honesty and fairness in our relationships with our suppliers, subcontractors, professional associates and customers. 
            </p>
        </div>        
    )
}

export default Home