import React from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import styles from './ExpertHomePage.module.css';

const ExpertHomePage = () => {
    const { user, logout_expert } = useAuth(); // Vai recuperar o especialista do authContext.
    const navigateExpert = useNavigate();

    useEffect(() => {
        if (!user) {
            // navigateExpert("/entrar?type=especialista");

            // Só para estilizar.
            navigateExpert("/especialista");
        }
    }, [user, navigateExpert]);

    if (!user) {
        return null; // Vai renderizar nulo se o especialista não estiver definido.
    }

    return (
        <>
            <section className={styles.expert_home_section}>
                <div className={styles.expert_home_cotainer}>
                    <h2 className={styles.expert_home_title}>Página Inicial do Psicólogo</h2>
                    <p className={styles.expert_home_paragraph}>Bem-vindo(a), {user.email}!</p> {/* Acessa o email do especialista. */}
                    <button onClick={() => { logout_expert(); navigateExpert("/especialista"); }} className={styles.expert_home_btn}>Sair</button> {/* onClick para chamar as funções logout_expert e navigateExpert. */}
                </div>
            </section>
        </>
    );
};

export default ExpertHomePage;