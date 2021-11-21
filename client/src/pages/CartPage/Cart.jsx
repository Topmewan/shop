import styles from './Cart.module.css';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import arrow from './img/arrow.svg';
import CartEmpty from "../../components/CartPage/CartEmpty/CartEmpty";



const Cart = () => {

    const cart = useSelector(state => state.cartReducer);

    return (
        <div className={styles.cart__container}>
            <h2>Моя Корзина</h2>
            {cart.cartItems.length === 0
                ? <CartEmpty/>

                : (
                    <>
                        <div className={styles.titles}>
                            <h3 className={styles.product__title}>Товар</h3>
                            <h3>Цена</h3>
                            <h3>Количество</h3>
                            <h3 className={styles.total}>Итог</h3>
                        </div>

                        <div>
                            {cart.cartItems?.map(cartItem => (
                                <div className={styles.cart__item} key={cartItem.id}>
                                    <div className={styles.cart__product}>
                                        <img src={cartItem.image} alt={cartItem.name}/>
                                        <div>
                                            <h3>{cartItem.name}</h3>
                                            <p>{cartItem.desc}</p>
                                            <button>Удалить</button>
                                        </div>
                                    </div>

                                    <div className={styles.price}>{cartItem.price} R</div>
                                    <div className={styles.cart__product__quantity}>
                                        <button>-</button>
                                        <div className={styles.count}>{cartItem.cartQuantity}</div>
                                        <button>+</button>
                                    </div>

                                    <div className={styles.cart__product__total__price}>
                                        {cartItem.price * cartItem.cartQuantity} R
                                    </div>

                                </div>
                            ))}
                        </div>

                        <div className={styles.cart__summary}>
                            <button className={styles.clear__btn}>Очистить Корзину</button>
                            <div className={styles.cart__checkout}>
                                <div className={styles.subtotal}>
                                    <span>Итого</span>
                                    <span className={styles.amount}>{cart.cartTotalAmount} R</span>
                                </div>
                                <p>fsfsfs</p>
                                <button>Заказ</button>
                                <div className={styles.continue__shopping}>
                                    <Link to='/'>
                                        <img className={styles.arrow} src={arrow} alt="go-shop"/>
                                        <span>Вернуться к покупкам</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </>
                )
            }

        </div>
    );
};

export default Cart;