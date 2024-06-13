import styles from './Thanks.module.css'
import { NavLink } from 'react-router-dom';

function Thanks() {
    return (
        <>
            <section className={styles.thanks_section}>
                <div className={styles.thanks_container}>
                    <h1 className={styles.thanks_title}>Obrigado pela comunicação</h1>

                    <h2 className={styles.thanks_caption}>Em breve entraremos em contato!</h2>

                    <div>
                        <button className={styles.thanks_btn}>
                            <NavLink className={styles.thanks_btn_link} to="/" end style={({ isActive }) => { return isActive ? { color: "#FFDD02" } : {}; }} aria-label="Ir para a página inicial">Início</NavLink>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Thanks