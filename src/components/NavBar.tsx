import React from 'react'
import {MenuItems} from './utilities/MenuItems'
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    
    const [hamburgerClicked, setHamburgerClicked] = React.useState(false)

    function handleClick(){
        setHamburgerClicked(prevState => prevState =! prevState)
    }

    function linkClicked(){
        setHamburgerClicked(false)
    }

    return (
        <nav className="navbar__container">
            <NavLink to="/" className="logo__link"> <div className="navbar__logo"><img src="/images/logo.png" alt="Edos Renos Logo"/></div> </ NavLink>
            <div className="menu__icon" onClick={handleClick}>
                <i className={hamburgerClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={hamburgerClicked ? 'nav__menu active' : 'nav__menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li onClick={linkClicked}>
                                <NavLink  className={item.class__name} to={item.navLink}>
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