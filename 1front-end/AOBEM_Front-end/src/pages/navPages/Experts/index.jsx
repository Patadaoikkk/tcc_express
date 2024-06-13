import ScrollTop from '../../../components/ScrollTop';
import styles from './Experts.module.css'
import { useState } from 'react';
import { FaStar } from "react-icons/fa"; <FaStar />
import { FaStarHalfAlt } from "react-icons/fa"; <FaStarHalfAlt />
import { FaRegStar } from "react-icons/fa"; <FaRegStar />
import { MdFilterAlt } from "react-icons/md"; <MdFilterAlt />
import { FaSearch } from "react-icons/fa"; <FaSearch />
import { Link } from 'react-router-dom';

function Experts() {

    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [specialtyFilter, setSpecialtyFilter] = useState('all');
    const [approachFilter, setApproachFilter] = useState('all');
    const [genderFilter, setGenderFilter] = useState('all');
    const [locationFilter, setLocationFilter] = useState('all');
    const [accessibilityFilter, setAccessibilityFilter] = useState(false);
    const [serviceTypeFilter, setServiceTypeFilter] = useState('all');

    const experts = [
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
            ],
            gender: 'feminino',
            state: 'SP',
            city: 'São Paulo',
            online: true,
            accessibility: true,
            experience: 'Mais de 10 anos de experiência como psicóloga clínica.',
            userReviews: 120
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
            ],
            gender: 'masculino',
            state: ' MT',
            city: 'Cuiabá',
            online: false,
            accessibility: false,
            experience: 'Experiência profissional como psicólogo do esporte.',
            userReviews: 95
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
            ],
            gender: 'feminino',
            state: 'SC',
            city: 'Florianópolis',
            online: true,
            accessibility: true,
            experience: 'Mais de 10 anos de experiência como psicóloga jurídica.',
            userReviews: 140
        }
    ];

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        return (
            <>
                {Array(fullStars).fill(<FaStar className={styles.star} />)}
                {halfStar && <FaStarHalfAlt className={styles.star} />}
                {Array(emptyStars).fill(<FaRegStar className={styles.star} />)}
            </>
        );
    };

    const filteredExperts = experts.filter(expert => {
        const matchesSearchTerm = expert.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty = specialtyFilter === 'all' || expert.specialty === specialtyFilter;
        const matchesApproach = approachFilter === 'all' || expert.approach === approachFilter;
        const matchesGender = genderFilter === 'all' || expert.gender === genderFilter;
        const matchesLocation = locationFilter === 'all' || expert.state === locationFilter || expert.city === locationFilter;
        const matchesServiceType = serviceTypeFilter === 'all' || (serviceTypeFilter === 'online' ? expert.online : !expert.online);
        const matchesAccessibility = !accessibilityFilter || expert.accessibility;

        return matchesSearchTerm && matchesSpecialty && matchesApproach && matchesGender && matchesLocation && matchesServiceType && matchesAccessibility;
    });

    return (
        <>
            <ScrollTop />
            <div>

                {/* Hero. */}
                <section className={styles.expert_hero}>
                    <div className={styles.expert_container}>
                        Hero
                    </div>
                </section>

                {/* Expert: Title and introduction. */}
                <section className={styles.expert_intro}>
                    <div className={styles.expert_intro_container}>
                        <h2>Todos os Especialistas</h2>
                        <p>Encontre o especialista certo para você entre todos os profissionais cadastrados.</p>
                    </div>
                </section>

                {/* Search. */}
                <div className={styles.expert_search}>
                    <div className={styles.expert_search_container}>
                        <div className={styles.expert_search_text}>
                            <div className={styles.expert_search_bar_container}>
                                <div className={styles.expert_search_glass_container}>
                                    <input
                                        type="text"
                                        placeholder="Buscar por nome..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className={styles.expert_search_bar}
                                    />
                                    <FaSearch className={styles.expert_search_glass_icon} />
                                </div>
                                <button onClick={() => setShowFilters(!showFilters)} className={styles.expert_search_filters_button}><MdFilterAlt className={styles.expert_search_icon} /></button>
                                {showFilters && (
                                    <div className={styles.expert_search_filter}>
                                        <div className={styles.expert_search_filters}>
                                            <select value={specialtyFilter} onChange={(e) => setSpecialtyFilter(e.target.value)} className={styles.expert_search_select}>
                                                {/* Especialidade. */}
                                                <option value="all">Todas as Especialidades</option>
                                                <option value="Psicóloga Clínica">Psicóloga Clínica</option>
                                                <option value="Psicólogo do Esporte">Psicólogo do Esporte</option>
                                                <option value="Psicóloga Jurídica">Psicóloga Jurídica</option>
                                            </select>
                                            <select value={approachFilter} onChange={(e) => setApproachFilter(e.target.value)} className={styles.expert_search_select}>
                                                {/* Abordagem. */}
                                                <option value="all">Todas as Abordagens</option>
                                                <option value="Cognitivo-Comportamental">Cognitivo-Comportamental</option>
                                                <option value="Humanista">Humanista</option>
                                                <option value="Psicanálise">Psicanálise</option>
                                            </select>
                                            <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)} className={styles.expert_search_select}>
                                                {/* Gênero. */}
                                                <option value="all">Todos os Gêneros</option>
                                                <option value="male">Masculino</option>
                                                <option value="female">Feminino</option>
                                            </select>
                                            <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className={styles.expert_search_select}>
                                                {/* Localização. */}
                                                <option value="all">Todas as Localizações</option>
                                                <option value="SP">São Paulo</option>
                                                <option value="RJ">Rio de Janeiro</option>
                                                <option value="MG">Minas Gerais</option>
                                            </select>
                                            <select value={serviceTypeFilter} onChange={(e) => setServiceTypeFilter(e.target.value)} className={styles.expert_search_select}>
                                                {/* Atendimento. */}
                                                <option value="all">Todos os Tipos de Atendimento</option>
                                                <option value="online">Atende Online</option>
                                                <option value="presencial">Atende Presencial</option>
                                            </select>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={accessibilityFilter}
                                                    onChange={() => setAccessibilityFilter(!accessibilityFilter)}
                                                    className={styles.expert_search_checkbox}
                                                /> Atende em Libras
                                            </label>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* All Cards. */}
                <section className={styles.expert_all_cards}>
                    <div className={styles.expert_all_cards_container}>

                        <div className={styles.all_experts_container}>

                            <div className={styles.experts_list}>
                                {filteredExperts.map(expert => (
                                    <div className={styles.expert_card} key={expert.id}>
                                        <img src={expert.image} alt={expert.name} className={styles.expert_image} />
                                        <div className={styles.expert_info}>
                                            <h3>{expert.name}</h3>
                                            <p><strong>Especialidade:</strong> {expert.specialty}</p>
                                            <p><strong>CRP:</strong> {expert.rcp}</p>
                                            <p><strong>Avaliação:</strong> {renderStars(expert.rating)} {expert.rating.toFixed(1)}</p>
                                            <p><strong>Abordagem:</strong> {expert.approach}</p>
                                            <p>{expert.bio}</p>
                                            <p><strong>Serviços:</strong> {expert.services}</p>
                                            <div className={styles.buttons}>
                                                <Link to={`/especialista/${expert.id}`} className={styles.primary_button}>Ver Perfil</Link>
                                                <Link to="/cadastrar" className={styles.secondary_button}>Agendar Consulta</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Experts

    // <section className ={ styles.notFound_section } >
    //     <div className={styles.notFound_container}>
    //         <h2 className={styles.notFound_caption}>Desculpe, a página que você está procurando está em construção.</h2>
    //         <p className={styles.notFound_paragraph}>Estamos trabalhando para tornar sua experiência ainda melhor! Enquanto isso, você pode voltar para a tela inicial</p>
    //         <div>
    //             <button className={styles.notFound_btn}>
    //                 <NavLink className={styles.notFound_link} to="/" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Página Inicial">Início</NavLink>
    //             </button>
    //         </div>
    //     </div>
    // </section>