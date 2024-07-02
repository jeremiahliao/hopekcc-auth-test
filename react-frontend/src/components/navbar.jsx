import styles from '../assets/css-modules/header.module.css'

function NavBar(){
    return (
        <div className={styles.navbarContainer}>
            <ul className={styles.navbar}>
                <li className={styles.navbarItem}>home</li>
                <li className={styles.navbarItem}>signin/signup</li>
                <li className={styles.navbarItem}>profile</li>
            </ul>
        </div>
    );
}

export default NavBar;