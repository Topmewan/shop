import { useEffect } from 'react'
import cartIcon from './img/cart.svg'
import { Link } from 'react-router-dom'
import { getTotal } from '../../toolkit/reducers/cartSlice'

import styles from './Navbar.module.css'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {

	const dispatch = useDispatch()

	const cart = useSelector(state => state.cartReducer)

	useEffect(() => {
		dispatch(getTotal(cart))

	}, [cart, dispatch])

	return (
		<nav className={styles.nav__bar}>

			<Link to="/">
				<h2>Магазин</h2>
			</Link>

			<Link to="/cart">
				<div className={styles.nav__cart}>
					<img className={styles.cart__img} src={cartIcon} alt="cart" />
					<span className={styles.cart__quantity}>
						<span>{cart.cartTotalQuantity}</span>
					</span>
				</div>
			</Link>
		</nav>
	)
}

export default Navbar