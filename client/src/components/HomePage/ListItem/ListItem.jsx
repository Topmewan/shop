import styles from './ListItem.module.css';
import {useDispatch} from "react-redux";
import {addToCart} from "../../../toolkit/reducers/cartSlice";



const ListItem = ({product}) => {

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));

    }


    return (
        <>
        <div key={product.id} className={styles.product}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name}/>
            <div className={styles.details}>
                <span>{product.desc}</span>
                <span className={styles.price}>{product.price} R</span>
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
        </>
    );
};

export default ListItem;