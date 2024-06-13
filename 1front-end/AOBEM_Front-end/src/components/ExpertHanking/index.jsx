import styles from './ExpertHanking.module.css'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa"; <FaStar />
import { FaStarHalfAlt } from "react-icons/fa"; <FaStarHalfAlt />
import { FaRegStar } from "react-icons/fa"; <FaRegStar />


function ExpertHanking() {

  const expertsHanking = [
    {
      id: 1,
      image: 'src/assets/ana_p.png',
      name: 'Ana Albani',
      specialty: 'Psicóloga Clínica',
      rcp: '000000 / 06',
      rating: 4.8,
      approach: 'Cognitivo-Comportamental',
      bio: 'Sou uma psicóloga clínica com mais de 10 anos de experiência no tratamento de transtornos de ansiedade e depressão.',
      services: [
        'Terapia Cognitivo-Comportamental (TCC)',
        'Depressão',
        'Transtornos de Ansiedade'
      ]
    },
    {
      id: 2,
      image: 'src/assets/takeshi_p.png',
      name: 'Takeshi Taddini',
      specialty: 'Psicólogo do Esporte',
      rcp: '000000 / 18',
      rating: 4.7,
      approach: 'Desempenho de Atletas',
      bio: 'Trabalho com atletas de alto rendimento, auxiliando-os a alcançar seu potencial máximo.',
      services: [
        'Desempenho de Atletas',
        'Gestão de Pressão Competitiva',
        'Bem-Estar Mental no Esporte'
      ]
    },
    {
      id: 3,
      image: 'src/assets/veronika_p.png',
      name: 'Veronika Vogel',
      specialty: 'Psicóloga Jurídica',
      rcp: '000000 / 12',
      rating: 4.5,
      approach: 'Psicanálise',
      bio: 'Atuo como psicóloga jurídica há mais de 10 anos, oferecendo suporte a clientes envolvidos em questões legais.',
      services: [
        'Avaliação Psicológica em Processos Legais',
        'Mediação de Conflitos',
        'Apoio a Vítimas de Crimes'
      ]
    }
  ];

  // Ordena os especialistas pela avaliação.
  expertsHanking.sort((a, b) => b.rating - a.rating);

  // Renderiza as estrelas.
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {Array(fullStars).fill(<FaStar icon={FaStar} className={styles.expert_hanking_star} />)}
        {halfStar && <FaStarHalfAlt icon={FaStarHalfAlt} className={styles.expert_hanking_star} />}
        {Array(emptyStars).fill(<FaRegStar icon={FaRegStar} className={styles.expert_hanking_star} />)}
      </>
    );
  };

  return (
    <>
      {/* Ranking. */}
      <section>
        <div className={styles.expert_hanking_cards_container}>
          {expertsHanking.map((expert, index) => (
            <div
              className={`${styles.expert_hanking_info_container} ${index === 0
                ? styles.expert_hanking_center
                : index === 1
                  ? styles.expert_hanking_left
                  : styles.expert_hanking_right
                }`}
              key={expert.id}
            >
              <img src={expert.image} alt={expert.name} className={styles.expert_hanking_image} />
              <div className={styles.expert_hanking_info}>
                <h3 className={styles.expert_hanking_name}> {expert.name}</h3>
                <div className={styles.expert_hanking_spec_rcp}>
                  <p title='Especialidade' className={styles.expert_hanking_spec}> {expert.specialty}</p>
                  <p title='Registro Profissional no Conselho Regional de Psicologia (CRP)' className={styles.expert_hanking_rcp}> {expert.rcp}</p>
                </div>
                <p title='Avaliação' className={styles.expert_hanking_paragraph}>
                  <span>
                    {renderStars(expert.rating)}
                    <span>{expert.rating.toFixed(1)}</span>
                  </span>
                </p>
                <p title='Abordagem' className={`${styles.expert_hanking_paragraph} ${styles.expert_hanking_approach}`}> {expert.approach}</p>
                <p title='Breve Biografia' className={styles.expert_hanking_paragraph}> {expert.bio}</p>
                <ul title='Serviços' className={styles.expert_hanking_ul}>
                  {expert.services.map((service, index) => (
                    <li className={styles.expert_hanking_li} key={index}>{service}</li>
                  ))}
                </ul>
                <div className={styles.expert_hanking_button_container}>
                  <button className={styles.expert_hanking_primary_button}>
                    <NavLink className={styles.expert_hanking_link} to="/cadastrar" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Agende a sua consulta">Agendar</NavLink>
                  </button>
                  <button className={styles.expert_hanking_button}>
                    <Link className={styles.expert_hanking_link} to="#" aria-label="Ver mais detalhes do especialista">Ver Mais</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ExpertHanking