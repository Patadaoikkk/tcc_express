import styles from './Reason.module.css'
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

function Reason() {
    const reasons = [
        {
            reason: 'Problemas de Saúde Mental',
            answer: 'Muitas pessoas procuram terapia para tratar condições de saúde mental, como depressão, ansiedade, transtorno bipolar, transtorno de estresse pós-traumático (TEPT), entre outros. A terapia pode ajudar a entender, gerenciar e superar esses desafios.'
        },
        {
            reason: 'Stress e Pressão',
            answer: 'A vida moderna frequentemente traz altos níveis de estresse e pressão. Terapia pode ser um espaço seguro para aprender a lidar com o estresse, desenvolver habilidades de enfrentamento e evitar o esgotamento.'
        },
        {
            reason: 'Problemas de Relacionamento',
            answer: 'Terapia de casal ou terapia familiar é frequentemente usada para melhorar os relacionamentos interpessoais. Isso pode incluir casais com dificuldades de comunicação, famílias com conflitos persistentes, etc.'
        },
        {
            reason: 'Autoconhecimento e Crescimento Pessoal',
            answer: 'Algumas pessoas buscam terapia para se conhecer melhor, explorar seus objetivos de vida e trabalhar em seu desenvolvimento pessoal. A terapia pode ser um espaço para reflexão e crescimento.'
        },
        {
            reason: 'Trauma e Eventos de Vida Difíceis',
            answer: 'Traumas passados ou eventos de vida difíceis, como perda de um ente querido, divórcio, abuso, etc., podem afetar profundamente a saúde mental. A terapia pode ajudar a processar essas experiências.'
        },
        {
            reason: 'Vícios e Comportamentos Destrutivos',
            answer: 'Pessoas que lutam com vícios, como alcoolismo, dependência de drogas, ou comportamentos autodestrutivos, podem buscar ajuda na terapia para superar essas questões.'
        },
        {
            reason: 'Melhorias no Bem-Estar Geral',
            answer: 'Terapia não é apenas para problemas graves de saúde mental. Algumas pessoas buscam terapia como parte de seu cuidado geral com a saúde mental, visando melhorar seu bem-estar emocional e psicológico.'
        },
        {
            reason: 'Aprendizado de Habilidades de Enfrentamento',
            answer: 'Terapeutas podem ensinar habilidades práticas para lidar com desafios da vida, melhorar a resiliência emocional e promover uma melhor qualidade de vida.'
        },
        {
            reason: 'Prevenção de Problemas Futuros',
            answer: 'A terapia preventiva pode ajudar as pessoas a desenvolver habilidades de enfrentamento antes que os problemas se agravem, prevenindo assim futuros desafios de saúde mental.'
        },
        {
            reason: 'Melhoria da Autoestima e Confiança',
            answer: 'Terapia pode ajudar as pessoas a desenvolver uma autoimagem mais positiva, aumentar a autoestima e construir confiança em si mesmas. Isso é especialmente benéfico para aqueles que lutam com sentimentos de desvalorização ou insegurança. Ter um espaço para explorar essas questões com um terapeuta pode levar a uma maior autoaceitação e autoconfiança.'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.reason_container}>
            <div className={styles.reason_text}>
                <h1 className={styles.reason_title}>Por que fazer terapia?</h1>
                <p>
                    Geralmente, ouvimos por aí que terapia é coisa de doido, mas vamos te mostrar que não é bem assim, veja alguns motivos pelos quais você pode iniciar um acompanhamento psicológico:
                </p><br />
                <div className={styles.reason_list}>
                    {reasons.map((reason, index) => (
                        <div key={index} className={styles.reason_item}>
                            <div className={styles.reason_question}>
                                <h3 className={styles.reason_caption}>{reason.reason}</h3>
                                <button className={styles.reason_toggle_btn} onClick={() => toggleAnswer(index)}>
                                    <FaPlus className={`${styles.reason_icon} ${activeIndex === index ? styles.reason_active : ''}`} />
                                </button>
                            </div>
                            {activeIndex === index && (
                                <p className={`${styles.reason_answer} ${activeIndex === index ? 'show' : ''}`}>{reason.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Reason;