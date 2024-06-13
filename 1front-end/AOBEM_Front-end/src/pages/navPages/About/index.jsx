import { useState } from 'react';
import styles from './About.module.css'
import ScrollTop from '../../../components/ScrollTop';
import Button from '../../../components/Button';

function About() {

    // Botão ler mais/menos do bem-vindo.
    const [readMoreWelcome, setReadMoreWelcome] = useState(false);

    const handleClickWelcome = () => {
        setReadMoreWelcome(!readMoreWelcome);
    };

    // Botão ler mais/menos da origem e história.
    const [readMoreOrigin, setReadMoreOrigin] = useState(false);

    const handleClickOrigin = () => {
        setReadMoreOrigin(!readMoreOrigin);
    };

    return (
        <>
            <ScrollTop />
            {/* Introdução sobre nós. */}
            <section className={styles.about_us_page1}>
                <article className={styles.about_us_page1_artical}>
                    <h1 className={styles.about_us_title}>Sobre nós<span className={styles.about_us_dot}>.</span></h1>
                    <p className={styles.about_us_page1_caption}>
                        Sinta-se em casa no <span title="Acolhimento e Orientação para o Bem-Estar Mental">AOBEM</span>, onde abraçamos a singularidade de cada jornada. Nossa plataforma une o calor humano à tecnologia, criando um espaço acolhedor para nutrir sua mente e espírito.<br /><br />
                    </p>
                </article>
            </section>

            {/* Bem-vindo ao AOBEM e história e origem do AOBEM. */}
            <section className={styles.about_us_page2}>

                {/* Bem-vindo ao AOBEM. */}
                <article className={styles.about_us_page2_artical}>
                    <p className={styles.about_us_page2_caption}>
                        Seja Bem-vindo
                    </p>

                    <p className={styles.about_us_paragraph}>
                        {readMoreWelcome ? (
                            <>
                                No <span title="Acolhimento e Orientação para o Bem-Estar Mental">AOBEM</span>, priorizamos o bem-estar mental e buscamos promover uma vida plena e saudável para todos. Reconhecemos que a saúde mental desempenha um papel fundamental no bem-estar humano, influenciando não apenas a qualidade de vida, mas também nossa capacidade de enfrentar desafios e prosperar.
                                <br /><br />

                                Em um mundo onde muitos enfrentam barreiras significativas para acessar tratamentos psicológicos adequados, estamos comprometidos em oferecer soluções inovadoras e acessíveis para atender às necessidades emocionais de nossa comunidade. Sabemos que fatores como estigma, custos e disponibilidade de especialistas qualificados podem dificultar o acesso a serviços de saúde mental, criando uma lacuna preocupante entre a demanda e a oferta de apoio emocional.<br /><br />

                                Nosso compromisso com a saúde mental torna-se ainda mais crucial diante dos desafios enfrentados durante a pandemia, como isolamento social, ansiedade e depressão. Esta crise destacou a necessidade urgente de acesso rápido e eficaz aos cuidados de saúde mental. No entanto, compreendemos que muitos ainda relutam em buscar ajuda devido ao estigma associado ou à falta de recursos para tratamentos convencionais.<br /><br />

                                No <span title="Acolhimento e Orientação para o Bem-Estar Mental">AOBEM</span>, acreditamos firmemente que todos têm o direito de acessar suporte emocional quando necessário. É por isso que estamos comprometidos em oferecer soluções inovadoras e acessíveis para promover o bem-estar mental em nossa comunidade.
                            </>
                        ) : (
                            <>
                                No <span title="Acolhimento e Orientação para o Bem-Estar Mental">AOBEM</span>, priorizamos o bem-estar mental e buscamos promover uma vida plena e saudável para todos. Reconhecemos que a saúde mental desempenha um papel fundamental no bem-estar humano, influenciando não apenas a qualidade de vida, mas também nossa capacidade de enfrentar desafios e prosperar.
                            </>
                        )}
                    </p>
                    <button onClick={handleClickWelcome} className={styles.about_us_page2_btn}>{readMoreWelcome ? 'Ler Menos' : 'Ler Mais'}</button>
                </article>

                {/* História e origem do AOBEM. */}
                <article className={styles.about_us_page2_artical}>
                    <p className={styles.about_us_page2_caption}>
                        História e Origem
                    </p>

                    <p className={styles.about_us_paragraph}>
                        {readMoreOrigin ? (
                            <>
                                Nossa história começa em um momento de profunda reflexão sobre as lacunas existentes no acesso aos serviços de saúde mental. Confrontados com a realidade de que muitas pessoas enfrentam dificuldades significativas para encontrar apoio psicológico adequado, nós, como equipe do <span title="Acolhimento e Orientação para o Bem-Estar Mental">AOBEM</span>, decidimos agir.
                                <br /><br />

                                A inspiração para o lançamento da plataforma veio da nossa convicção profunda de que todos têm o direito fundamental ao bem-estar mental, independentemente de sua localização geográfica, status socioeconômico ou quaisquer outras barreiras. Acreditávamos apaixonadamente que a tecnologia poderia ser um catalisador para a mudança nesse espaço, criando uma ponte entre aqueles que precisam de apoio e os especialistas qualificados que podem fornecê-lo.<br /><br />

                                No entanto, o caminho para transformar essa visão em realidade não foi isento de desafios. Desde o início, enfrentamos obstáculos significativos, desde questões técnicas até considerações éticas e regulatórias. A garantia da confidencialidade dos dados dos usuários, a seleção de especialistas qualificados e a criação de uma interface intuitiva, objetiva e acessível foram apenas alguns dos desafios que enfrentamos.<br /><br />

                                Apesar das dificuldades, nossa determinação e paixão prevaleceram. Com trabalho árduo, dedicação e uma visão clara, conseguimos superar obstáculos e lançar uma plataforma que está mudando a forma como as pessoas acessam o suporte psicológico.
                            </>
                        ) : (
                            <>
                                Nossa história começa em um momento de profunda reflexão sobre as lacunas existentes no acesso aos serviços de saúde mental. Confrontados com a realidade de que muitas pessoas enfrentam dificuldades significativas para encontrar apoio psicológico adequado, nós, como equipe do <span title="Acolhimento e Orientação para o Bem-Estar Mental">AOBEM</span>, decidimos agir.
                            </>
                        )}
                    </p>
                    <button onClick={handleClickOrigin} className={styles.about_us_page2_btn}>{readMoreOrigin ? 'Ler Menos' : 'Ler Mais'}</button>
                </article>
            </section>

            {/* Título para as declarações organizacionais. */}
            <section className={styles.about_us_page3}>
                <article className={styles.about_us_page3_article}>
                    <p className={styles.about_us_page3_caption}>Fundamentos Organizacionais</p>
                </article>
            </section>

            <section className={styles.about_us_page4}>
                {/* Missão. */}
                {/* <article className={styles.about_us_page4_article}> */}
                <article className={`${styles.about_us_page4_article} ${styles.about_us_shadow}`}>
                    <p className={styles.about_us_paragraph_page4}>
                        <span className={styles.about_us_span}>
                            Nossa missão é proporcionar o Acolhimento e Orientação para o Bem-Estar Mental.
                        </span><br />
                        Conectamos indivíduos a especialistas, guiados por um compromisso firme com a compaixão e a inovação. Utilizando nossa interface o usuário consegue tornar a busca pelo especialista ideal uma experiência mais eficiente e personalizada.<br /><br />

                        Colocamos nossos usuários no centro da maioria do que fazemos. Seja você um membro em busca de apoio ou um especialista oferecendo orientação, nossa abordagem é moldada para atender às suas necessidades de maneira mais holística possível.<br /><br />
                    </p>
                </article>

                <article className={styles.about_us_page4_article}>
                    <div className={styles.about_us_mission}>
                        <img src="src/assets/mission.png" alt="Missão" className={styles.about_us_mission_img_page4} />
                    </div>
                </article>

                {/* Visão. */}
                <article className={styles.about_us_page4_article}>
                    <div className={styles.about_us_mission}>
                        <img src="src/assets/vision.svg" alt="Visão" className={styles.about_us_mission_img_page4} />
                    </div>
                </article>

                {/* <article className={styles.about_us_page4_article}> */}
                <article className={`${styles.about_us_page4_article} ${styles.about_us_shadow}`}>
                    <p className={styles.about_us_paragraph_page4}>
                        <span className={styles.about_us_span}>
                            Visualizamos um futuro em que o AOBEM seja um farol de Acolhimento e Orientação, promovendo o Bem-Estar Mental de forma acessível a todos.
                        </span><br />
                        Nossa comunidade global será um oásis de apoio e crescimento pessoal, onde cada jornada é respeitada e nutrida.<br /><br />

                        Estamos empenhados em impulsionar a inovação no cuidado mental. Utilizando tecnologia e determinação, continuaremos aprimorando nossos serviços para proporcionar experiências de apoio cada vez mais significativas.<br /><br />
                    </p>
                </article>

                {/* Valores. */}
                {/* <article className={styles.about_us_page4_article}> */}
                <article className={`${styles.about_us_page4_article} ${styles.about_us_shadow}`}>
                    <p className={styles.about_us_paragraph_page4}>
                        <span className={styles.about_us_span}>
                            Ética, Integridade e Transparência
                        </span><br />
                        Nossos valores essenciais são ética, integridade e transparência. Dedicamo-nos a estabelecer um ambiente confiável e respeitoso para todos, garantindo que o site seja usado com total transparência e em conformidade com os mais altos padrões éticos.<br /><br />

                        Promovemos uma comunidade onde a empatia prospera. Cada interação, seja liderada por nós ou por nossos especialistas, é fundamentada no respeito mútuo e no apoio incondicional.<br /><br />
                    </p>
                </article>

                <article className={styles.about_us_page4_article}>
                    <div className={styles.about_us_mission}>
                        <img src="src/assets/values.svg" alt="Valores" className={styles.about_us_mission_img_page4} />
                    </div>
                </article>
            </section>

            {/* Nossos serviços. */}
            <section className={styles.about_us_page5}>
                <article className={styles.about_us_page5_article}>
                    <h3 className={styles.about_us_page5_caption}>Nossos Serviços</h3>
                    <p className={styles.about_us_paragraph}>
                        No <span title="Acolhimento e Orientação para o Bem-Estar Mental">AOBEM</span>, dedicamo-nos a fornecer uma ampla variedade de serviços para atender às diversas necessidades de nossa comunidade. Aqui está uma visão geral dos serviços que oferecemos.
                    </p>
                </article>
            </section>

            {/* Lista de serviços. */}
            <section className={styles.about_us_page6}>
                {/* Consulta psicológica online. */}
                <article className={styles.about_us_page6_artical}>
                    {/* <article className={`${styles.about_us_page6_artical} ${styles.about_us_shadow}`}> */}
                    <p className={styles.about_us_paragraph}>
                        <span className={styles.about_us_span_page6}>
                            Consulta Psicológica Online
                        </span><br />
                        Conecte-se com nossos especialistas em saúde mental através de consultas online convenientes e seguras.
                    </p>
                </article>

                {/* Aconselhamento individual*/}
                <article className={styles.about_us_page6_artical}>
                    {/* <article className={`${styles.about_us_page6_artical} ${styles.about_us_shadow}`}> */}
                    <p className={styles.about_us_paragraph}>
                        <span className={styles.about_us_span_page6}>
                            Aconselhamento Individual
                        </span><br />
                        Receba suporte individualizado de nossos profissionais qualificados para lidar com uma variedade de desafios e preocupações.
                    </p>
                </article>

                {/* Terapia de casal e familiar. */}
                <article className={styles.about_us_page6_artical}>
                    {/* <article className={`${styles.about_us_page6_artical} ${styles.about_us_shadow}`}> */}
                    <p className={styles.about_us_paragraph}>
                        <span className={styles.about_us_span_page6}>
                            Terapia de Casal e Familiar
                        </span><br />
                        Obtenha suporte para melhorar os relacionamentos e resolver conflitos familiares através de terapia especializada.
                    </p>
                </article>

                {/* Terapia de grupo. */}
                <article className={styles.about_us_page6_artical}>
                    {/* <article className={`${styles.about_us_page6_artical} ${styles.about_us_shadow}`}> */}
                    <p className={styles.about_us_paragraph}>
                        <span className={styles.about_us_span_page6}>
                            Terapia de Grupo
                        </span><br />
                        Participe de sessões de terapia de grupo facilitadas por nossos terapeutas experientes, onde você pode compartilhar experiências e obter suporte de seus pares.
                    </p>
                </article>

                {/* Avaliação psicológica. */}
                <article className={styles.about_us_page6_artical}>
                    {/* <article className={`${styles.about_us_page6_artical} ${styles.about_us_shadow}`}> */}
                    <p className={styles.about_us_paragraph}>
                        <span className={styles.about_us_span_page6}>
                            Avaliação Psicológica
                        </span><br />
                        Realize avaliações psicológicas abrangentes para obter entendimentos sobre sua saúde mental e receber direcionamento sobre os próximos passos.
                    </p>
                </article>

                {/* Terapia cognitivo-comportamental (TCC). */}
                <article className={styles.about_us_page6_artical}>
                    {/* <article className={`${styles.about_us_page6_artical} ${styles.about_us_shadow}`}> */}
                    <p className={styles.about_us_paragraph}>
                        <span className={styles.about_us_span_page6}>
                            Terapia Cognitivo-Comportamental (TCC)
                        </span><br />
                        Aprenda estratégias práticas para identificar e mudar padrões de pensamento e comportamento negativos.
                    </p>
                </article>

                {/* Psicoterapia psicodinâmica. */}
                <article className={styles.about_us_page6_artical}>
                    {/* <article className={`${styles.about_us_page6_artical} ${styles.about_us_shadow}`}> */}
                    <p className={styles.about_us_paragraph}>
                        <span className={styles.about_us_span_page6}>
                            Psicoterapia Psicodinâmica
                        </span><br />
                        Explore questões profundas e trabalhe para resolver conflitos internos através de uma abordagem focada na compreensão das emoções e experiências passadas.
                    </p>
                </article>

                {/* Aconselhamento vocacional e profissional. */}
                <article className={styles.about_us_page6_artical}>
                    {/* <article className={`${styles.about_us_page6_artical} ${styles.about_us_shadow}`}> */}
                    <p className={styles.about_us_paragraph}>
                        <span className={styles.about_us_span_page6}>
                            Aconselhamento Vocacional e Profissional
                        </span><br />
                        Receba orientação sobre escolhas de carreira, desenvolvimento profissional e questões relacionadas ao ambiente de trabalho.
                    </p>
                </article>
            </section>

            {/* Chamada para os serviços e especialistas. */}
            <section className={styles.about_us_page7}>
                <article className={styles.about_us_page7_article}>
                    <p className={styles.about_us_page7_caption}>
                        Conheça Nossos Serviços e Especialistas para sua Jornada de Bem-Estar!<br /><br />
                    </p>

                    <p className={styles.about_us_page7_paragraph}>
                        Explore em detalhes nossos serviços especializados e conheça os especialistas que estão prontos para apoiá-lo! Descubra como cada um pode atender às suas necessidades específicas e ajudá-lo em sua jornada.
                    </p>

                    <Button to="/especialistas" label="Conheça nossos especialistas">
                        Especialistas
                    </Button>

                </article>
            </section>

            {/* Como funciona o AOBEM. */}
            <section id="section8_como_funciona" className={styles.about_us_page8}>
                <article className={styles.about_us_page8_article}>
                    <h3 className={styles.about_us_page5_caption}>Como Funciona o AOBEM</h3>
                    <p className={styles.about_us_paragraph}>
                        O <span title="Acolhimento e Orientação para o Bem-Estar Mental">AOBEM</span> é uma plataforma inovadora que facilita a conexão entre membros em busca de suporte psicológico e especialistas de saúde mental. Nosso objetivo é proporcionar uma experiência tranquila e eficiente para ambos os usuários.
                    </p>
                </article>
            </section>

            {/* Para o membro. */}
            <section className={styles.about_us_page9}>
                <article className={styles.about_us_page9_article}>
                    <p className={styles.about_us_page9_caption}>Para o Membro</p>
                </article>
            </section>

            {/* Membro. */}
            <section className={styles.about_us_page10}>
                {/* Seleção de especialistas. */}
                <article className={styles.about_us_page10_article}>
                    {/* <article className={`${styles.about_us_page4_article} ${styles.about_us_shadow}`}> */}
                    <p className={styles.about_us_paragraph}>
                        <span className={styles.about_us_span_page9}>
                            Seleção de Especialistas
                        </span><br />
                        Os membros têm a oportunidade de procurar especialistas de saúde mental que melhor se adequem às suas necessidades. Podem filtrar os resultados com base em critérios como especialização, localização e modalidade de atendimento (presencial ou online).
                    </p>
                </article>

                <article className={styles.about_us_page10_article}>
                    <div className={styles.about_us_mission}>
                        <img src="src/assets/search.svg" alt="Pequisar" className={styles.about_us_mission_img_page10} />
                    </div>
                </article>

                {/* Envio de solicitação. */}
                <article className={styles.about_us_page10_article}>
                    {/* <article className={`${styles.about_us_page4_article} ${styles.about_us_shadow}`}> */}
                    <p className={styles.about_us_paragraph}>
                        <span className={styles.about_us_span_page9}>
                            Envio de Solicitação
                        </span><br />
                        Após escolher os especialistas desejados, os membros podem enviar solicitações de consulta diretamente pela plataforma. Essas solicitações incluem informações sobre suas necessidades específicas e disponibilidade.
                    </p>
                </article>

                <article className={styles.about_us_page10_article}>
                    <div className={styles.about_us_mission}>
                        <img src="src/assets/sent.svg" alt="Enviar" className={styles.about_us_mission_img_page10} />
                    </div>
                </article>

                {/* Avaliação do especialista. */}
                <article className={styles.about_us_page10_article}>
                    {/* <article className={`${styles.about_us_page4_article} ${styles.about_us_shadow}`}> */}
                    <p className={styles.about_us_paragraph}>
                        <span className={styles.about_us_span_page9}>
                            Avaliação do Especialista
                        </span><br />
                        Os membros aguardam a resposta dos especialistas selecionados. Enquanto isso, os membros podem continuar navegando na plataforma e explorando outras opções, se necessário.
                    </p>
                </article>

                <article className={styles.about_us_page10_article}>
                    <div className={styles.about_us_mission}>
                        <img src="src/assets/surf.svg" alt="Navegar no site" className={styles.about_us_mission_img_page10} />
                    </div>
                </article>
            </section>

            {/* Para o especialista. */}
            <section className={styles.about_us_page9}>
                <article className={styles.about_us_page9_article}>
                    <p className={styles.about_us_page9_caption}>Para o Especialista</p>
                </article>
            </section>

            {/* Especialista. */}
            <section className={styles.about_us_page10}>
                {/* Recepção de solicitações. */}
                <article className={styles.about_us_page10_article}>
                    {/* <article className={`${styles.about_us_page4_article} ${styles.about_us_shadow}`}> */}
                    <p className={styles.about_us_paragraph}>
                        <span className={styles.about_us_span_page9}>
                            Recepção de Solicitações
                        </span><br />
                        Os especialistas recebem notificações sobre as solicitações de consulta dos membros interessados. Eles têm acesso às informações fornecidas pelos clientes e podem revisar cuidadosamente cada solicitação antes de tomar uma decisão.
                    </p>
                </article>

                <article className={styles.about_us_page10_article}>
                    <div className={styles.about_us_mission}>
                        <img src="src/assets/received.svg" alt="Recebeu" className={styles.about_us_mission_img_page10} />
                    </div>
                </article>

                {/* Análise e aceitação. */}
                <article className={styles.about_us_page10_article}>
                    {/* <article className={`${styles.about_us_page4_article} ${styles.about_us_shadow}`}> */}
                    <p className={styles.about_us_paragraph}>
                        <span className={styles.about_us_span_page9}>
                            Análise e Aceitação
                        </span><br />
                        Os especialistas avaliam a viabilidade de atender às necessidades do membro com base nas informações fornecidas. Eles podem revisar detalhes como disponibilidade, modalidade de atendimento e afinidade terapêutica.
                    </p>
                </article>

                <article className={styles.about_us_page10_article}>
                    <div className={styles.about_us_mission}>
                        <img src="src/assets/schedule.svg" alt="Agenda" className={styles.about_us_mission_img_page10} />
                    </div>
                </article>

                {/* Contato com o membro. */}
                <article className={styles.about_us_page10_article}>
                    {/* <article className={`${styles.about_us_page4_article} ${styles.about_us_shadow}`}> */}
                    <p className={styles.about_us_paragraph}>
                        <span className={styles.about_us_span_page9}>
                            Contato com o Membro
                        </span><br />
                        Após analisar as solicitações recebidas, os especialistas podem entrar marcar o contato diretamente com os membros através da plataforma. Eles podem iniciar uma conversa para discutir detalhes adicionais, como horários disponíveis, modalidade de atendimento e custos da consulta.
                    </p>
                </article>

                <article className={styles.about_us_page10_article}>
                    <div className={styles.about_us_mission}>
                        <img src="src/assets/contact.png" alt="Entrando em contato" className={styles.about_us_mission_img_page10} />
                    </div>
                </article>
            </section>

            {/* Chamada para cadastrar-se. */}
            <section className={styles.about_us_page7}>
                <article className={styles.about_us_page7_article}>
                    <p className={styles.about_us_page11_caption}>
                        Junte-se a nós nessa jornada de Acolhimento e Orientação!<br /><br />
                    </p>

                    <p className={styles.about_us_page7_paragraph}>
                        Explore nosso site, contribua como especialista ou agende sua consulta como membro. Seja parte da mudança positiva que estamos construindo para o Bem-Estar Mental de todos.
                    </p>

                    <Button to="/cadastrar" label="Crie uma conta">
                        Cadastrar
                    </Button>
                </article>
            </section>
        </>
    )
}

export default About