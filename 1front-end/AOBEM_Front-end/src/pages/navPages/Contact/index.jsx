import styles from './Contact.module.css'
import { FaRegUser } from "react-icons/fa"; <FaRegUser />
import { MdAlternateEmail } from "react-icons/md"; <MdAlternateEmail />

function Contact() {
    return (
        <>
            <section className={styles.contact_section}>
                <div className={styles.contact_container}>
                    <form className={styles.contact_form} action="https://api.staticforms.xyz/submit" method="post">

                        <legend>
                            <h2 className={styles.contact_title}>Contate-nos</h2>
                        </legend>

                        <div className={styles.contact_paragraph_container}>
                            <p className={styles.contact_paragraph}>Gostaria de nos comunicar sobre algo?</p>
                            <p className={styles.contact_paragraph}>Estamos a disposição!</p>
                        </div>

                        <div className={styles.contact_container_input}>
                            <label htmlFor="name_contact">
                                <input type="text" name="name" id='name_contact' placeholder="Nome Completo" required aria-label="Digite seu nome completo aqui" role="textbox" autoComplete="name" className={styles.contact_input} />
                                <FaRegUser className={styles.contact_icon} aria-hidden="true" />
                            </label>

                            <label htmlFor="email_contact">
                                <input type="email" name="email" id='email_contact' placeholder="exemplo@exemplo.com" required aria-label="Digite seu e-mail aqui" role="textbox" autoComplete="email" className={styles.contact_input} />
                                <MdAlternateEmail className={styles.contact_icon} aria-hidden="true" />
                            </label>

                            <label htmlFor="message_contact">
                                <textarea name="message" id='message_contact' cols="30" rows="10" placeholder="Mensagem" required aria-label="Digite seu comentário aqui" role="textbox" className={styles.contact_areatext}></textarea>
                            </label>
                        </div>

                        {/* Honeypot:Caso algum bot entre no sistema e escreva alguma coisa ele provavelmente vai preencher esse campo, sendo que para nós usuários isso n é possível pois o tipo hidden não nos permite isso. Mas para bots sim. Então caso chegue  */}
                        <input type="hidden" name="honeypot"></input>
                        {/* <ReCAPTCHA sitekey="SUA_CHAVE_DO_RECAPTCHA" /> */}

                        <button type="submit" className={`${styles.contact_btn} ${styles.contact_btn_link}`} aria-label="Enviar formulário de contato">Enviar</button>

                        <input type="hidden" name="accessKey" value="73249cc7-d801-4eb6-9f76-5baf8fced903"></input>
                        <input type="hidden" name="redirectTo" value="http://localhost:5173/obrigado-pelo-contato"></input>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact