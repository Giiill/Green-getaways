import globalStyle from '../../styles/global.module.scss';
import Style from '../../styles/header.module.scss';
import { Burger } from './Burger';

const UiHeader = () => {

    return (
        <div className={[globalStyle.wrapper, Style.wrapper].join(" ")}>
            <nav className={Style.nav}>
                <button>HOME</button>
                <button>ABOUT</button>
                <button>TOURS</button>
                <button>CONTACT</button>
            </nav>
            <button className={Style.buttonBooking}>BOOKING NOW<span className={Style.flare}></span></button>
            <Burger />
        </div>
    )
}


export { UiHeader };