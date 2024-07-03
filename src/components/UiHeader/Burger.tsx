"use client"
import { useState } from 'react';
import Style from '../../styles/burger.module.scss';

const Burger = () => {
    const [isActive, setActive] = useState(false);

    const handleBurgerClick = () => {
        setActive(!isActive);
    }

    return (
        <>
            <div className={[Style.burger, isActive ? Style.active : ''].join(' ')} onClick={handleBurgerClick}>
                <span></span>
            </div>
            <nav className={[Style.burgerMenu, isActive ? Style.active : ''].join(' ')}>
                <button>HOME</button>
                <button>ABOUT</button>
                <button>TOURS</button>
                <button>CONTACT</button>
                <button>BOOKING NOW</button>
            </nav>
        </>
    )
}

export { Burger };