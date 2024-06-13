import { NavLink } from "react-router-dom";
import styles from "./NotFound.module.css"

function NotFound() {

    return (
        <>
            <section className={styles.notFound_section}>

                <div className={styles.notFound_shape}></div>

                <div className={styles.notFound_shape1}></div>

                <div className={styles.notFound_shape2}></div>

                <div className={styles.notFound_container}>
                    <h1 className={styles.notFound_title}>404</h1>

                    <h2 className={styles.notFound_caption}>Desculpe, a página que você está procurando não foi encontrada.</h2>

                    <p className={styles.notFound_paragraph}>Priorizamos conectá-lo ao especialista de saúde mental adequado. Sinta-se à vontade para navegar em nosso site e encontrar o apoio de que você precisa.</p>

                    <div>
                        <button className={styles.notFound_btn}>
                            <NavLink className={styles.notFound_link} to="/" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Página Inicial">Início</NavLink>
                        </button>
                    </div>
                </div>

            </section >
        </>
    )
}

export default NotFound