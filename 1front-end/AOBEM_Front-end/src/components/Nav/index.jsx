import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Nav() {

    // Menu.
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    // Lógica do Menu.
    const toggleMenu = () => {
        console.log('Abrindo menu.');
        setIsMenuVisible(!isMenuVisible)
    }

    const closeMenu = () => {
        setIsMenuVisible(false);
        // Após clicar no navlink dentro do nav, aparece esta mensagem.
        console.log('Fechando menu.');
    }

    return (
        <>
            {/* Botão Menu. */}
            <div className={styles.toggleMenuContainer} onClick={toggleMenu} aria-label="Menu" role="button">
                {/* O uso do onClick duas vezes, retorna o dobro de clique.
                    <div className={`${styles.toggleIcon} ${isMenuVisible ? styles.visible : ''}`} onClick={toggleMenu}>{isMenuVisible ? <IoClose className={styles.close} /> : <IoMenu className={styles.open} />}</div> */}
                <div className={`${styles.toggleIcon} ${isMenuVisible ? styles.visible : ''}`}>{isMenuVisible ? <IoClose className={styles.close} /> : <IoMenu className={styles.open} />}</div>
            </div>

            {/* Menu */}
            <nav className={isMenuVisible ? `${styles.nav} ${styles.visible}` : styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}><NavLink className={styles.navLink} to="/" end style={({ isActive }) => { return isActive ? { color: "#FFDD02" } : {}; }} onClick={closeMenu} data-text="Início" aria-label="Página Inicial">Início</NavLink></li>
                    <li className={styles.li}><NavLink className={styles.navLink} to="/sobre" end style={({ isActive }) => { return isActive ? { color: "#FFDD02" } : {}; }} onClick={closeMenu} data-text="Sobre Nós" aria-label="Saiba mais sobre nós">Sobre nós</NavLink></li>
                    <li className={styles.li}><NavLink className={styles.navLink} to="/especialistas" end style={({ isActive }) => { return isActive ? { color: "#FFDD02" } : {}; }} onClick={closeMenu} data-text="Especialistas" aria-label="Conheça nossos especialistas">Especialistas</NavLink></li>
                    <li className={styles.li}><NavLink className={styles.navLink} to="/contato" end style={({ isActive }) => { return isActive ? { color: "#FFDD02" } : {}; }} onClick={closeMenu} data-text="Contato" aria-label="Entre em contato conosco">Contato</NavLink></li>
                    <li className={styles.li}><NavLink className={styles.navLink} to="/entrar" end style={({ isActive }) => { return isActive ? { color: "#FFDD02" } : {}; }} onClick={closeMenu} data-text="Entrar" aria-label="Faça login na sua conta">Entrar</NavLink></li>
                    <li className={styles.li}><NavLink className={styles.navLink} to="/cadastrar" end style={({ isActive }) => { return isActive ? { color: "#FFDD02" } : {}; }} onClick={closeMenu} data-text="Cadastrar" aria-label="Crie uma conta">Cadastrar</NavLink></li>
                    <li className={styles.li}><NavLink className={styles.navLink} to="/triagem" end style={({ isActive }) => { return isActive ? { color: "#FFDD02" } : {}; }} onClick={closeMenu} data-text="Triagem" aria-label="Realize a triagem">Triagem</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav