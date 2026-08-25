
import { Link } from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
    return (
        <header id="header">
            {/* <h1 className={styles.h1}>Header1</h1> */}
            <nav id={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/examples/Index">Components</Link>
                <Link to="/stock/Stock">Stock</Link>
            </nav>
        </header>
    );
};

export default Header;
