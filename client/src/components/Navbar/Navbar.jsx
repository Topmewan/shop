import React from 'react';
import cart from './img/cart.svg';
import {Link} from "react-router-dom";

import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav__bar}>

            <Link to='/'>
                <h2>Магазин</h2>
            </Link>

            <Link to='/cart'>
                <div className={styles.nav__cart}>

                    <img className={styles.cart__img} src={cart} alt="cart"/>
                    <span className={styles.cart__quantity}>
                        <span>0</span>
                    </span>

                </div>

            </Link>

        </nav>
    );
};

export default Navbar;