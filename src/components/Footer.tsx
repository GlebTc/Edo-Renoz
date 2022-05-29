import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer__container">
            <h1>Copyright &copy; Gleb Tc 2021</h1>
            <div className="footnote__connect">
                <a className="instagram__link" href="https://www.instagram.com/edo_renoz/?hl=en">
                    <FontAwesomeIcon className="social__media__icons" icon={faInstagram} />
                </a>                
            </div>
        </div>

    )
}

export default Footer