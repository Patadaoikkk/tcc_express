import { useNavigate } from "react-router-dom"
import styles from "./Unauthorized.module.css"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <>
            <section className={styles.unauthorized_section}>

                <div className={styles.unauthorized_shape}></div>

                <div className={styles.unauthorized_shape1}></div>

                <div className={styles.unauthorized_shape2}></div>

                <div className={styles.unauthorized_container}>
                    <h1 className={styles.unauthorized_title}>Não autorizado</h1>

                    <h2 className={styles.unauthorized_caption}> Você não tem permissão para acessar esta conta!</h2>

                    <div>
                        <button onClick={goBack} className={`${styles.unauthorized_btn} ${styles.unauthorized_btn_link}`} aria-label="Voltar para a tela anterior">Voltar</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Unauthorized