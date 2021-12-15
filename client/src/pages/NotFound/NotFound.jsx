

import styles from './NotFound.module.css';
import {useLocation} from "react-router";
const NotFound = () => {
	const location = useLocation();
	const path = location.pathname;
	return (
		<div className={styles.container}>
			<h1>404</h1>
			<p>Page {path} Not Found</p>


		</div>
	);
};

export default NotFound;