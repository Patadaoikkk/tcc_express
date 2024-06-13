import React from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import styles from './MemberHomePage.module.css';

const MemberHomePage = () => {
    const { user, logout_patient } = useAuth(); // Vai recuperar o membro do authContext.
    const navigatePatient = useNavigate();

    useEffect(() => {
        if (!user) {
            navigatePatient("/entrar?type=membro");
        }
    }, [user, navigatePatient]);

    if (!user) {
        return null; // Vai renderizar nulo se o membro não estiver definido.
    }

    return (
        <>
            <section className={styles.member_home_section}>
                <div className={styles.member_home_cotainer}>
                    <h2 className={styles.member_home_title}>Página Inicial do Paciente</h2>
                    <p className={styles.member_home_paragraph}>Bem-vindo(a), {user.email}!</p> {/* Acessa o email do membro. */}
                    <button onClick={() => { logout_patient(); navigatePatient("/entrar?type=membro"); }} className={styles.member_home_btn}>Sair</button> {/* onClick para chamar as funções logout_patient e navigatePatient. */}
                </div>
            </section>
        </>
    );
};

export default MemberHomePage;