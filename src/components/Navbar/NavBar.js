import React from 'react'
import {MenuItems} from '../utilities/MenuItems'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    
    const [clicked, setClicked] = React.useState(false)

    function handleClick(){
        setClicked(prevState => prevState =! prevState)
    }

    return (
        <nav className="navbar__items">
            <h1 className="navbar__logo"><i className="fab fa-react"></i></h1>
            <div className="menu__icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav__menu active' : 'nav__menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li>
                                <NavLink className={item.class__name} to={item.navLink}>
                                    {item.title}
                                </NavLink>
                        </li>
                    )
                })}                
            </ul>         
        </nav>
    )
}

export default NavBar