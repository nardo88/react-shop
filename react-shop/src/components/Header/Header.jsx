import React from 'react';
import './Header.css';
import clock from '../../icons/clock.svg';
import truck from '../../icons/truck.svg';
import money from '../../icons/money.svg';
import phone from '../../icons/phone.svg';
import logo from '../../icons/logo.png';
import search from '../../icons/search.svg';
import cart from '../../icons/cart.svg';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">

                        <div className="header__top">
                            <div className="header__support support">
                                <div className="support__img">
                                    <img src={clock} alt="clock" />
                                </div>
                                <div className="support__text">
                                    <div className="support__top">Время работы</div>
                                    <div className="support__bottom">Пн - Вс 8.00 - 18.00</div>
                                </div>
                            </div>

                            <div className="header__support support">
                                <div className="support__img">
                                    <img src={truck} alt="truck" />
                                </div>
                                <div className="support__text">
                                    <div className="support__top">Бесплатная доставка</div>
                                    <div className="support__bottom">При заказе от 7000 р.</div>
                                </div>
                            </div>

                            <div className="header__support support">
                                <div className="support__img">
                                    <img src={money} alt="money" />
                                </div>
                                <div className="support__text">
                                    <div className="support__top">Вернем 100% стоимости</div>
                                    <div className="support__bottom">Если доставка превысит 30 дней</div>
                                </div>
                            </div>

                            <div className="header__support support">
                                <div className="support__img">
                                    <img src={phone} alt="phone" />
                                </div>
                                <div className="support__text">
                                    <div className="support__top">Телефон: 89035259226</div>
                                    <div className="support__bottom">Заказать онлайн сейчас</div>
                                </div>
                            </div>
                        </div>

                        <div className="header__main">
                            <div className="header__logo">
                                <img src={logo} alt="logo" />
                            </div>

                            <div className="header__row">
                            <div className="header__quick quick">
                                <div className="quick__select">
                                    <select name="quick" id="select">
                                        <option value="Все категории">Все категории</option>
                                        <optgroup label="Камеры и фотография">
                                            <option value="Сумки">Сумки</option>
                                            <option value="Блузки и рубашки">Блузки и рубашки</option>
                                            <option value="Clouthes">Clouthes</option>

                                        </optgroup>

                                        <optgroup label="Ноутбуки и компьютеры">
                                            <option value="Apple">Apple</option>
                                            <option value="Dell">Dell</option>
                                            <option value="Hp">Hp</option>
                                            <option value="Sony">Sony</option>
                                        </optgroup>
                                        <optgroup label="Electronic">
                                            <option value="Mobile">Mobile</option>
                                            <option value="Колонки">Колонки</option>
                                            <option value="Наушники">Наушники</option>
                                        </optgroup>
                                    </select>
                                </div>

                                <div className="header__search">
                                    <form action="#!" className="header__form form">
                                        <input type="text" className="form__input" placeholder="Search"/>
                                        <button className="form__btn">
                                            <img src={search} alt="search"/>
                                        </button>
                                    </form>
                                </div>

                                
                            </div>

                            <div className="cart">
                                    <a href="#" className="cart__link">
                                        <img src={cart} alt="cart"/>
                                    </a>
                                    <div className="cart__text">
                                        <div className="cart__top">Корзина</div>
                                        <div className="cart__value">2 ITEM(s) - <span>$365.00</span></div>
                                    </div>
                            </div>
                            </div>
                           

                        </div>
                    </div>
                </div>


                <nav className="nav">
                    <div className="container">
                        <div className="nav__wrapper">
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <a href="#!" className="nav__link">Домой</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#!" className="nav__link">О нас</a>
                                </li>

                                <li className="nav__item">
                                    <a href="#!" className="nav__link hot">Хиты продаж</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#!" className="nav__link new">Новый продукт</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#!" className="nav__link">Контакты</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;