import styles from './Loader.module.css';
import spinner from '../img/spinner.svg';


const Loader = () => {
	return (
		<div className={styles.container}>
			<img src={spinner} alt="loading"/>
		</div>
	);
};

export default Loader;