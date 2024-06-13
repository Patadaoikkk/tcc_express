import styles from './CareCard.module.css'
import { useState } from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

function CareCard() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const data = [
        {
            imageSrc: 'src/assets/importance.svg',
            altText: 'Homem levantando uma placa',
            title: 'Importância!',
            description: '',
        },
        {
            imageSrc: 'src/assets/emotional_balance.svg',
            altText: 'Mulher equilibrada',
            title: 'Equilíbrio Emocional',
            description: 'O cuidado mental ajuda a gerenciar emoções, promovendo um equilíbrio emocional saudável.',
        },
        {
            imageSrc: 'src/assets/resilience.svg',
            altText: 'Homem saltando de um penhasco para o outro',
            title: 'Resiliência',
            description: 'Desenvolver habilidades de cuidado mental fortalece a resiliência, permitindo que as pessoas enfrentem melhor desafios e adversidades.',
        },
        {
            imageSrc: 'src/assets/healthy_relationship.svg',
            altText: 'Casal feliz',
            title: 'Relacionamentos Saudáveis',
            description: 'Um estado mental positivo contribui para relacionamentos mais saudáveis e satisfatórios com os outros.',
        },
        {
            imageSrc: 'src/assets/cognitive_performance.svg',
            altText: 'Menino estudando',
            title: 'Desempenho Cognitivo',
            description: 'Cuidar da saúde mental melhora o desempenho cognitivo, incluindo concentração, memória e tomada de decisões.',
        },
        {
            imageSrc: 'src/assets/quality_of_life.svg',
            altText: 'Mulher Correndo',
            title: 'Qualidade de Vida',
            description: 'O bem-estar mental está diretamente ligado à qualidade de vida, influenciando a satisfação geral com a vida.',
        },
        {
            imageSrc: 'src/assets/benefits.svg',
            altText: 'Homem acenando positivamente',
            title: 'Benefícios',
            description: '',
        },
        {
            imageSrc: 'src/assets/reducing_stress_and_anxiety.svg',
            altText: 'Mulher meditando',
            title: 'Redução do Estresse e Ansiedade',
            description: 'Práticas de cuidado mental, como meditação e exercícios de relaxamento, podem reduzir os níveis de estresse e ansiedade.',
        },
        {
            imageSrc: 'src/assets/sleep_improvement.svg',
            altText: 'Menino dormindo',
            title: 'Melhora do Sono',
            description: 'Um estado mental tranquilo contribui para uma melhor qualidade de sono e, consequentemente, para a vitalidade diária.',
        },
        {
            imageSrc: 'src/assets/self_knowledge.svg',
            altText: 'Homem pensando em si',
            title: 'Autoconhecimento',
            description: 'O cuidado mental encoraja a reflexão e o autoconhecimento, promovendo o entendimento das próprias necessidades e limitações.',
        },
        {
            imageSrc: 'src/assets/improving_professional_performance.svg',
            altText: 'Homem superando obstáculos no trabalho',
            title: 'Melhoria do Desempenho Profissional',
            description: 'Cuidar da saúde mental pode resultar em maior produtividade e satisfação no ambiente de trabalho.',
        },
        {
            imageSrc: 'src/assets/preventing_mental_health_problems.svg',
            altText: 'Mulher fazendo terapia',
            title: 'Prevenção de Problemas de Saúde Mental',
            description: 'Práticas regulares de cuidado mental podem ajudar na prevenção de problemas mais sérios de saúde mental.',
        },
        {
            imageSrc: 'src/assets/promoting_resilience.svg',
            altText: 'Menino confiante',
            title: 'Fomento da Resiliência',
            description: 'O cuidado mental fortalece a resiliência emocional, permitindo lidar melhor com desafios e momentos difíceis.',
        },
        {
            imageSrc: 'src/assets/improving_the_quality_of_relationships.svg',
            altText: 'Amigo carregando a amiga nas costas',
            title: 'Aprimoramento da Qualidade das Relações',
            description: 'Relacionamentos interpessoais se beneficiam quando cada indivíduo está comprometido com o cuidado de sua própria saúde mental.',
        }
    ];

    return (
        <div>
            <section className={styles.importance_container}>
                <div className={styles.importance_cards}>
                    {data.map((card, index) => (
                        <div
                            key={index}
                            className={`${styles.importance_card} ${index === currentSlide ? styles.active : ''
                                }`}
                            style={{
                                display: index === currentSlide ? 'block' : 'none',
                            }}
                        >
                            <div className={styles.importance_img}>
                                <img src={card.imageSrc} alt={card.altText} />
                            </div>
                            <div className={styles.importance_card_content}>
                                <h3 className={styles.importance_cards_title}>{card.title}</h3>
                                <p className={styles.importance_cards_paragraph}>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.importance_container_btn}>
                    <button className={styles.importance_prev_btn} onClick={handlePrev} aria-label="Anterior"><FaAngleLeft /></button>
                    <button className={styles.importance_next_btn} onClick={handleNext} aria-label="Próximo"><FaAngleRight /></button>
                </div>
            </section>
        </div>
    );
}

export default CareCard