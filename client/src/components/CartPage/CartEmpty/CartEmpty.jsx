import styles from './CartEmpty.module.css';
import {Link} from "react-router-dom";
import arrow from "../../../pages/CartPage/img/arrow.svg";


const CartEmpty = () => {
    return (
        <div className={styles.cart__empty}>
            <p>В корзине пусто </p>
            <div className={styles.start__shopping}>
                <Link to='/'>
                    <img src={arrow} alt="go-shop"/>
                    <span>Перейти к покупкам</span>
                </Link>
            </div>
        </div>

);
};

export default CartEmpty;