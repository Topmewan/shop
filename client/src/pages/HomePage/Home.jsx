import styles from './Home.module.css';
import {useGetAllProductsQuery} from "../../toolkit/reducers/productsApi";
import ListItem from "../../components/HomePage/ListItem/ListItem";
import {Redirect} from "react-router";
import Loader from "../../components/HomePage/Loader/Loader";

const Home = () => {

const {data,isLoading,error} = useGetAllProductsQuery();

    return (
        <div className={styles.home__container}>
            {isLoading
                ? <Loader/>
                : error ? <h1>При загрузке произошла ошибка</h1>
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