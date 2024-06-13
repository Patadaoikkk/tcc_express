import styles from './Footer.module.css'
import { Link, NavLink } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6"; <FaInstagram />
import { MdAlternateEmail } from "react-icons/md"; <MdAlternateEmail />

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <section className={styles.footer_top}>
                <Link className={styles.footer_logo} to="/" aria-label="Página Inicial" role="button"><img src='/logomarca.png' alt='Logomarca AOBEM' title='Logomarca AOBEM' style={{ width: '90px' }} /></Link>

                <div className={styles.footer_links}>

                    {/* Seções da página início. */}
                    <article className={styles.footer_links_column}>
                        <h2 className={styles.footer_title}>Links Úteis</h2>
                        <a className={styles.footer_link_a} href="/#section2_saiba_quem_somos" target="_self">Saiba quem somos</a>
                        <a className={styles.footer_link_a} href="/#section4_por_que_fazer_terapia" target="_self">Por que fazer terapia?</a>
                        <a className={styles.footer_link_a} href="/#section5_como_funciona" target="_self">Como funciona?</a>
                        <a className={styles.footer_link_a} href="#section2_perguntas_frequentes" target="_self">Perguntas Frequentes</a>
                        <Link to="/" className={styles.footer_link_a} aria-label="Mapa do Site">Mapa do Site</Link>
                        <Link to="/" className={styles.footer_link_a} aria-label="Créditos">Créditos</Link>
                    </article>

                    {/* Links externos. */}
                    <article className={styles.footer_links_column}>
                        <h2 className={styles.footer_title}>Links Externos</h2>
                        <a className={styles.footer_link_a} href="https://cadastro.cfp.org.br" target='_blank' rel='noopener noreferrer'>Cadastro nascional de psicologos</a>
                        <a className={styles.footer_link_a} href="http://site.cfp.org.br" target="_blank" rel='noopener noreferrer'>Conselho federal de psicologia</a>
                        <a className={styles.footer_link_a} href="https://site.cfp.org.br/wp-content/uploads/2018/05/RESOLU%C3%87%C3%83O-N%C2%BA-11-DE-11-DE-MAIO-DE-2018.pdf"
                            target="_blank" rel='noopener noreferrer'>Resolução CFP 011/2018</a>
                        <a className={styles.footer_link_a} href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf"
                            target="_blank" rel='noopener noreferrer'>Código de ética do psicológo</a>
                    </article>

                    {/* Links do menu. */}
                    <article className={styles.footer_links_column}>
                        <h2 className={styles.footer_title}>Navegação</h2>
                        <NavLink className={styles.footer_link_a} to="/" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Página Inicial">Início</NavLink>
                        <NavLink className={styles.footer_link_a} to="/sobre" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Saiba mais sobre nós">Sobre nós</NavLink>
                        <NavLink className={styles.footer_link_a} to="/especialistas" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Conheça nossos especialistas">Especialistas</NavLink>
                        <NavLink className={styles.footer_link_a} to="/contato" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Entre em contato conosco"> Contato</NavLink>
                        <NavLink className={styles.footer_link_a} to="/entrar" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Faça login na sua conta">Entrar</NavLink>
                        <NavLink className={styles.footer_link_a} to="/cadastrar" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Crie uma conta">Cadastrar</NavLink>
                        <NavLink className={styles.footer_link_a} to="/triagem" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Realize a triagem">Triagem</NavLink>
                    </article>

                    {/* Redes Sociais. */}
                    <article className={`${styles.footer_links_column} ${styles.footer_socials_column}`}>
                        <h2 className={styles.footer_title}>Redes Sociais</h2>
                        <p className={styles.footer_paragraph}>Nos sigam nas redes sociais</p>

                        <div className={styles.footer_socials}>
                            <a className={styles.footer_link_a} href='mailto:"aobem@gmail.com' target='_blank' rel='noopener noreferrer'><MdAlternateEmail className={styles.footer_icon} /></a>
                            <a className={styles.footer_link_a} href='https://www.instagram.com/a.o.b.e.m' target='_blank' rel='noopener noreferrer'><FaInstagram className={styles.footer_icon} /></a>
                        </div>
                    </article>
                </div>
            </section>

            {/* Direitos e regras do site. */}
            <section className={styles.footer_bottom}>
                <p className={styles.footer_copyright}>Copyright © {currentYear} AOBEM. Todos os direitos reservados.</p>
                <div className={styles.footer_legal}>
                    <span className={styles.footer_span}>
                        <NavLink className={styles.footer_links_legal} to="/termos-de-servico" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Página Inicial">Termos de Serviço</NavLink>
                    </span>

                    <span className={styles.footer_span}>
                        <NavLink className={styles.footer_links_legal} to="/politica-de-privacidade" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Página Inicial"> Política de Privacidade</NavLink>
                    </span>
                </div>
            </section>
        </footer>
    )
}

export default Footer