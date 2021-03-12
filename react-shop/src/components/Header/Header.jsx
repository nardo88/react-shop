import React from 'react';
import s from './Header.module.css';
import clock from '../../icons/clock.svg';

const Header = () => {
    return (
       <>
        <header className={s.header}>
            <div className="container">
                <div className={s.supportClient}>
                    <div className={s.workingTime}>
                        <img className={s.clock} src={clock} alt="clock"/>
                    </div>

                </div>
            </div>
        </header>
       </>
    )
}

export default Header;