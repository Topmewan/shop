import styles from './Home.module.css';
import {useGetAllProductsQuery} from "../../toolkit/reducers/productsApi";
import ListItem from "../../components/HomePage/ListItem/ListItem";

const Home = () => {

const {data,isLoading,error} = useGetAllProductsQuery();

    return (
        <div className={styles.home__container}>
            {isLoading
                ? <h1>Loading...</h1>
                : error ? <h1>{error}</h1>
                    : (
                            <div className={styles.products}>
                                {data?.map((product) => (
                                    <ListItem product={product} key={product.id}/>
                                     ))}
                            </div>
                    )}

        </div>
    );
};

export default Home;