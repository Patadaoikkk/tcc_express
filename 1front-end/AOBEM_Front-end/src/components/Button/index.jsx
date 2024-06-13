import { NavLink } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ to, label, children }) => {

    return (
        <button className={styles.button}>
            <NavLink className={styles.about_us_link} to={to} end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label={label}>
                {children}
            </NavLink>
        </button>
    );
}

export default Button;