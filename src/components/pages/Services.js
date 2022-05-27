import React from 'react'

const Services = () => {
    return (
        <div className="main__container">
            <h1>Our Services</h1>
                <ul>
                    <li className="li1">Residential
                        <ul>
                            <li className="li2">Kitchen Remodeling & Repairs</li>
                            <li className="li2">Bathroom Remodeling & Renovations</li>
                            <li className="li2">New Flooring Installation</li>
                            <li className="li2">Full Basement Remodeling</li>
                            <li className="li2">Water Damage Restorations</li>
                            <li className="li2">Emergency Home Repair</li>
                            <li className="li2">Other General Residential Contractor Services</li>
                        </ul>
                    </li>
                    <li className="li1">Commercial
                        <ul>
                        <li className="li2">Commercial Property Modification</li>
                        <li className="li2">New Flooring Installation</li>
                        <li className="li2">Other General Commercial Contractor Services</li>
                        </ul>
                    </li>
                </ul>
        </div>        
    )
}

export default Services