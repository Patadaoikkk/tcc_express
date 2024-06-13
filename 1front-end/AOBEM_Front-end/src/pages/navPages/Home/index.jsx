import { useEffect, useState } from 'react';
import styles from './Home.module.css'
import CareCard from '../../../components/CareCard';
import ScrollTop from '../../../components/ScrollTop';
import Button from '../../../components/Button';
import Reason from '../../../components/Reason';
import ExpertHanking from '../../../components/ExpertHanking';
import MemberReview from '../../../components/MemberReview';
import { FiAlertTriangle } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa"; <FaRegUser />

function Home() {

    // const [loading, setLoading] = useState(true);
    // const [showAobem, setShowAobem] = useState(true);

    // useEffect(() => {
    //     const fakeContentLoading = setTimeout(() => {
    //         setLoading(false);
    //     }, 6000);

    //     return () => clearTimeout(fakeContentLoading);
    // }, []);

    // useEffect(() => {
    //     const transitionTimer = setTimeout(() => {
    //         setShowAobem(true);
    //     }, 2000);

    //     return () => clearTimeout(transitionTimer);
    // }, []);

    // const [loading, setLoading] = useState(true);
    // const [showAobem, setShowAobem] = useState(false);

    // useEffect(() => {
    //     const firstVisit = localStorage.getItem('firstVisit');

    //     if (!firstVisit) {
    //         localStorage.setItem('firstVisit', 'true');
    //         const fakeContentLoading = setTimeout(() => {
    //             setLoading(false);
    //         }, 6000);

    //         return () => clearTimeout(fakeContentLoading);
    //     } else {
    //         setLoading(false);
    //     }
    // }, []);

    // useEffect(() => {
    //     if (loading) {
    //         const transitionTimer = setTimeout(() => {
    //             setShowAobem(true);
    //         }, 6000);

    //         return () => clearTimeout(transitionTimer);
    //     }
    // }, [loading]);


    const [loading, setLoading] = useState(false);
    const [showAobem, setShowAobem] = useState(false);

    useEffect(() => {
        const firstVisit = localStorage.getItem('firstVisit');

        if (!firstVisit) {
            localStorage.setItem('firstVisit', 'true');
            setLoading(true);
            const fakeContentLoading = setTimeout(() => {
                setLoading(false);
            }, 6000);

            return () => clearTimeout(fakeContentLoading);
        }
    }, []);

    useEffect(() => {
        if (loading) {
            const transitionTimer = setTimeout(() => {
                setShowAobem(true);
            }, 2000);

            return () => clearTimeout(transitionTimer);
        }
    }, [loading]);


    return (
        <>
            <ScrollTop />
            <div>
                <section className={`${styles.home_preloader} ${loading ? '' : styles.home_hide}`}>
                    <div className={styles.home_loader}>{showAobem ? 'aobem' : ''}</div>
                </section>

                {/* Hero. */}
                <section className={styles.home_hero}>
                    <article className={styles.home_hero_container} style={{ opacity: loading ? 0 : 1 }}>
                        <img src="src/assets/hero.svg" alt="Terapia online" title='Terapia online' className={styles.home_hero_img} />
                        <h1 className={styles.home_hero_title}>Encontre <span className={styles.home_hero_span}>Apoio Emocional</span> Online</h1>
                        <h2 className={styles.home_hero_caption}>Terapia online acessível quando você precisar. Comece hoje mesmo.</h2>
                        <Button to="/especialistas" aria-label="Conheça nossos especialistas">Começar Agora</Button>
                    </article>
                </section>

                {/* About. */}
                <section id="section2_saiba_quem_somos" className={styles.home_about}>
                    <article className={styles.home_about_container}>
                        <div className={styles.home_about_text}>
                            <h3 className={styles.home_about_title}>Seu Refúgio para o Bem-Estar Mental</h3>
                            <p>Convidamos você a um espaço que celebra a singularidade de cada jornada. Integrando calor humano à tecnologia, proporcionamos um ambiente acolhedor para nutrir mente e espírito.<br /><br />Nossa missão é oferecer Acolhimento e Orientação para o Bem-Estar Mental, conectando indivíduos a especialistas por meio de uma abordagem compassiva e inovadora.<br /><br />Junte-se a nós para explorar essa jornada de cuidado mental, onde cada interação é guiada pela compaixão e pela busca constante por inovação.</p>
                            <Button to="/sobre" aria-label="Saiba mais sobre nós">Saiba Quem Somos</Button>
                        </div>
                        <img src="src/assets/team_work.svg" alt="Trabalho em grupo" title='Trabalho em grupo' className={styles.home_about_img} />
                    </article>
                </section>

                {/* Importance Cards. */}
                <section className={styles.home_importance}>
                    <article className={styles.home_importance_container}>
                        <div className={styles.home_importance_text}>
                            <h3 className={styles.home_importance_title}>Cuidado Mental</h3>
                            <p>O cuidado mental é fundamental para a saúde e bem-estar geral de uma pessoa, sendo uma parte essencial da saúde holística. Aqui estão alguns pontos sobre a <span className={styles.home_importance_span}>importância</span> e <span className={styles.home_importance_span}>benefícios</span> do cuidado mental:</p><br />
                            <div className={styles.home_importance_cards_container}>
                                <CareCard />
                            </div>
                            <p>Priorizar o cuidado mental é uma parte essencial da busca por uma vida equilibrada e saudável. Isso não apenas impacta o indivíduo, mas também contribui para a construção de comunidades mais resilientes e compreensivas.</p>
                        </div>
                    </article>
                </section>

                {/* Reason. */}
                <section id="section4_por_que_fazer_terapia" className={styles.home_reason}>
                    <article className={styles.home_reason_container}>
                        <img src="src/assets/reflection.svg" alt="Perguntas Frequentes" title='Perguntas Frequentes' className={styles.home_reason_img} />
                        <div>
                            <Reason />
                        </div>
                    </article>
                </section>

                {/* How it works. */}
                <section id="section5_como_funciona" className={styles.home_how_it_works_banner}>
                    <article className={styles.home_how_it_works_banner_container}>
                        <div className={styles.home_how_it_works_banner_text}>
                            <h3 className={styles.home_how_it_works_banner_title}>Como Funciona o AOBEM</h3>
                            <p>O <span title="Acolhimento e Orientação para o Bem-Estar Mental">AOBEM</span> é uma plataforma inovadora que facilita a conexão entre membros em busca de suporte psicológico e especialistas de saúde mental. Nosso objetivo é proporcionar uma experiência tranquila e eficiente para ambos os usuários.</p>
                        </div>
                    </article>
                </section>

                {/* Para o membro. */}
                <section className={styles.home_how_it_works_to}>
                    <article className={styles.home_how_it_works_to_container}>
                        <div className={styles.home_how_it_works_to_text}>
                            <h4 className={styles.home_how_it_works_to_title}>Para o Membro</h4>
                        </div>
                    </article>
                </section>

                {/* Membro. */}
                <section className={styles.home_how_it_works}>
                    <div className={styles.home_how_it_works_container}>
                        <div className={styles.home_how_it_works_time_line}>
                            {/* Seleção de especialistas. */}
                            <article className={styles.home_how_it_works_section} style={{ '--animationDelay': '1s' }}>
                                <span className={styles.home_how_it_works_span}>1º Passo</span>
                                <div className={styles.home_how_it_works_text_content}>
                                    <div className={styles.how_it_works_text}>
                                        <h3 className={styles.how_it_works_title}>Seleção de Especialistas</h3>
                                        <p>Os membros têm a oportunidade de procurar especialistas de saúde mental que melhor se adequem às suas necessidades. Podem filtrar os resultados com base em critérios como especialização, localização e modalidade de atendimento (presencial ou online).</p>
                                    </div>
                                    <img src="src/assets/search.svg" alt="Pequisar" title='Pequisar' className={styles.home_how_it_works_img} />
                                </div>
                            </article>

                            {/* Envio de solicitação. */}
                            <article className={styles.home_how_it_works_section} style={{ '--animationDelay': '2s' }}>
                                <span className={styles.home_how_it_works_span}>2º Passo</span>
                                <div className={styles.home_how_it_works_text_content}>
                                    <div className={styles.how_it_works_text}>
                                        <h3 className={styles.how_it_works_title}>Envio de Solicitação</h3>
                                        <p>Após escolher os especialistas desejados, os membros podem enviar solicitações de consulta diretamente pela plataforma. Essas solicitações incluem informações sobre suas necessidades específicas e disponibilidade.</p>
                                    </div>
                                    <img src="src/assets/sent.svg" alt="Enviar" title='Enviar' className={styles.home_how_it_works_img} />
                                </div>
                            </article>

                            {/* Avaliação do especialista. */}
                            <article className={styles.home_how_it_works_section} style={{ '--animationDelay': '3s' }}>
                                <span className={styles.home_how_it_works_span}>3º Passo</span>
                                <div className={styles.home_how_it_works_text_content}>
                                    <div className={styles.how_it_works_text}>
                                        <h3 className={styles.how_it_works_title}>Avaliação do Especialista</h3>
                                        <p>Os membros aguardam a resposta dos especialistas selecionados. Enquanto isso, os membros podem continuar navegando na plataforma e explorando outras opções, se necessário.</p>
                                    </div>
                                    <img src="src/assets/surf.svg" alt="Navegar no site" title='Navegar no site' className={styles.home_how_it_works_img} />
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Para o especialista. */}
                <section className={styles.home_how_it_works_to}>
                    <article className={styles.home_how_it_works_to_container}>
                        <div className={styles.home_how_it_works_to_text}>
                            <h4 className={styles.home_how_it_works_to_title}>Para o Especialista</h4>
                        </div>
                    </article>
                </section>

                {/* Especialista. */}
                <section className={styles.home_how_it_works_expert}>
                    <div className={styles.home_how_it_works_container_expert}>
                        <div className={styles.home_how_it_works_time_line}>
                            {/* Recepção de solicitações. */}
                            <article className={styles.home_how_it_works_section} style={{ '--animationDelay': '1s' }}>
                                <span className={styles.home_how_it_works_span}>1º Passo</span>
                                <div className={styles.home_how_it_works_text_content}>
                                    <div className={styles.how_it_works_text}>
                                        <h3 className={styles.how_it_works_title}>Recepção de Solicitações</h3>
                                        <p>Os especialistas recebem notificações sobre as solicitações de consulta dos membros interessados. Eles têm acesso às informações fornecidas pelos clientes e podem revisar cuidadosamente cada solicitação antes de tomar uma decisão.</p>
                                    </div>
                                    <img src="src/assets/received.svg" alt="Recebeu" title='Recebeu' className={styles.home_how_it_works_img} />
                                </div>
                            </article>

                            {/* Análise e aceitação. */}
                            <article className={styles.home_how_it_works_section} style={{ '--animationDelay': '2s' }}>
                                <span className={styles.home_how_it_works_span}>2º Passo</span>
                                <div className={styles.home_how_it_works_text_content}>
                                    <div className={styles.how_it_works_text}>
                                        <h3 className={styles.how_it_works_title}>Análise e Aceitação</h3>
                                        <p>Os especialistas avaliam a viabilidade de atender às necessidades do membro com base nas informações fornecidas. Eles podem revisar detalhes como disponibilidade, modalidade de atendimento e afinidade terapêutica.</p>
                                    </div>
                                    <img src="src/assets/schedule.svg" alt="Agenda" title='Agenda' className={styles.home_how_it_works_img} />
                                </div>
                            </article>

                            {/* Contato com o membro. */}
                            <article className={styles.home_how_it_works_section} style={{ '--animationDelay': '3s' }}>
                                <span className={styles.home_how_it_works_span}>3º Passo</span>
                                <div className={styles.home_how_it_works_text_content}>
                                    <div className={styles.how_it_works_text}>
                                        <h3 className={styles.how_it_works_title}>Contato com o Membro</h3>
                                        <p>Após analisar as solicitações recebidas, os especialistas podem entrar marcar o contato diretamente com os membros através da plataforma. Eles podem iniciar uma conversa para discutir detalhes adicionais, como horários disponíveis, modalidade de atendimento e custos da consulta.</p>
                                    </div>
                                    <img src="src/assets/contact.svg" alt="Entrando em contato" title='Entrando em contato' className={styles.home_how_it_works_img} />
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Ranking. */}
                {/* Title and introduction. */}
                <section className={styles.home_expert_hanking_intro}>
                    <article className={styles.home_expert_hanking_intro_container}>
                        <div className={styles.home_expert_hanking_intro_text}>
                            <h2 className={styles.home_expert_hanking_intro_title}>Ranking dos Melhores Especialistas</h2>
                            <p>Apresentamos os três especialistas mais bem avaliados pelos membros da nossa comunidade. Descubra profissionais altamente qualificados e confiáveis prontos para ajudá-lo a alcançar seus objetivos. Conheça suas especialidades, avaliações e biografias abaixo.</p>
                        </div>
                    </article>
                </section>
                <section className={styles.home_expert_hanking}>
                    <article className={styles.home_expert_hanking_container}>
                        <ExpertHanking />
                    </article>
                </section>

                {/* Review. */}
                {/* Title and introduction. */}
                <section className={styles.home_member_review_intro}>
                    <article className={styles.home_member_review_intro_container}>
                        <div className={styles.home_member_review_intro_text}>
                            <h2 className={styles.home_member_review_intro_title}>Avaliação dos Membros</h2>
                            <p>Aqui estão alguns depoimentos sinceros e avaliações dos nossos membros sobre os especialistas que os ajudaram em suas jornadas. Veja o que nossos clientes têm a dizer sobre suas experiências e os resultados alcançados.</p>
                        </div>
                    </article>
                </section>
                <section className={styles.home_member_review}>
                    <article className={styles.home_member_review_container}>
                        <MemberReview />
                    </article>
                </section>

                {/* Call to register. */}
                <section className={styles.home_call_register}>
                    <article className={styles.home_call_register_container}>
                        <div className={styles.home_call_register_text}>
                            <h3 className={styles.home_call_register_title}>Junte-se a nós nessa jornada de Acolhimento e Orientação</h3>
                            <p>Explore nosso site, contribua como especialista ou agende sua consulta como membro. Seja parte da mudança positiva que estamos construindo para o Bem-Estar Mental de todos.</p>
                            <Button to="/cadastrar" label="Crie uma conta">
                                Cadastrar
                            </Button>
                        </div>
                    </article>
                </section>

                {/* Warning. */}
                <section className={styles.home_warning}>
                    <article className={styles.home_warning_container}>
                        <p className={styles.home_warning_text}>
                            <span><FiAlertTriangle className={styles.home_warning_icon} title='Atenção!' /></span>Este site não oferece tratamento ou aconselhamento imediato para pessoas em crise suicida. Em caso de crise, ligue para <a className={styles.home_warning_link} href="tel:188">188</a> (CVV) ou acesse o site <a className={styles.home_warning_link} href="https://cvv.org.br/" target='_blank' rel='noopener noreferrer'>www.cvv.org.br</a> Em caso de emergência, procure atendimento em um hospital mais próximo.
                        </p>
                    </article>
                </section>
            </div>
        </>
    );
}
export default Home;