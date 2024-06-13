import styles from './LogIn.module.css'
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { MdAlternateEmail } from "react-icons/md"; <MdAlternateEmail />
import { ImEyeBlocked } from "react-icons/im"; <ImEyeBlocked />
import { ImEye } from "react-icons/im"; <ImEye />
import { RiLockPasswordLine } from "react-icons/ri"; <RiLockPasswordLine />

import { useRef, useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import AuthContext from '../../../context/AuthProvider';
// import { AuthContext } from '../../../context/AuthProvider';
import { AuthContext } from '../../../context/AuthContext';
import axios from '../../../api/axios';
import toast, { Toaster } from 'react-hot-toast';

// const LOGIN_MEMBER_URL = '/auth';
// const LOGIN_EXPERT_URL = '/auth';
const LOGIN_MEMBER_URL = '/membro';
const LOGIN_EXPERT_URL = '/especialista';

function LogIn() {

    // Animação de slide.
    const [isSignExpert, setIsSignExpert] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);
    const toggleOverlay = () => {
        setIsSignExpert(!isSignExpert);
        setShowWelcome(!showWelcome);
    };

    // Visibilidade da senha do membro.
    const [showPasswordPatient, setShowPasswordPatient] = useState(false);
    const togglePasswordVisibilityPatient = () => {
        setShowPasswordPatient(!showPasswordPatient);
    };

    // Visibilidade da senha do especialista.
    const [showPasswordExpert, setShowPasswordExpert] = useState(false);
    const togglePasswordVisibilityExpert = () => {
        setShowPasswordExpert(!showPasswordExpert);
    };

    // Validação do login do membro.
    const { setAuthPatient } = useAuth();
    const navigateloginPatient = useNavigate();
    const locationPatient = useLocation();
    const fromPatient = locationPatient.state?.fromPatient?.pathname || "/";

    const userPatientRef = useRef();
    const errPatientRef = useRef();

    const [emailPatient, setEmailPatient] = useState("");
    const [passwordPatient, setPasswordPatient] = useState("");
    // Teste: Checkbox.
    const [checkboxRememberPasswordPatient, setCheckboxRememberPasswordPatient] = useState(false);
    const [validCheckboxRememberPasswordPatient, setValidCheckboxRememberPasswordPatient] = useState(false);
    // Fim Teste.
    const [errorPatient, setErrorPatient] = useState("");

    useEffect(() => {
        userPatientRef.current.focus();
    }, [])

    // Apagar depois! E-mail.
    useEffect(() => {
        const result = emailPatient;
        console.log("E-mail:", emailPatient);
        setEmailPatient(result);
    }, [emailPatient])

    // Apagar depois! Senha.
    useEffect(() => {
        const result = passwordPatient;
        console.log("Senha:", passwordPatient);
        setPasswordPatient(result);
    }, [passwordPatient])

    // Teste: Checkbox.
    useEffect(() => {
        const result = checkboxRememberPasswordPatient;
        console.log("Checkbox Validation:", result);
        setValidCheckboxRememberPasswordPatient(result);
    }, [checkboxRememberPasswordPatient])

    useEffect(() => {
        setErrorPatient('');
    }, [emailPatient, passwordPatient, checkboxRememberPasswordPatient])

    const handleLoginPatient = async (event) => {

        event.preventDefault();

        console.log("%cLogando o membro...", 'color: #189bcc; background-color: #020f14');

        try {
            const responsePatient = await axios.post(
                LOGIN_MEMBER_URL,
                JSON.stringify({ emailPatient, passwordPatient, checkboxRememberPasswordPatient }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(responsePatient?.data));
            console.log(JSON.stringify(responsePatient));

            const accessTokenPatient = responsePatient?.data?.accessTokenPatient;
            const rolesPatient = responsePatient?.data?.rolesPatient;
            setAuthPatient({ emailPatient, passwordPatient, checkboxRememberPasswordPatient, rolesPatient, accessTokenPatient });
            setEmailPatient("");
            setPasswordPatient("");
            navigateloginPatient(fromPatient, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrorPatient("Sem resposta do servidor.");
                toast.error("Sem resposta do servidor.", {
                    icon: '🛑',
                    position: 'top-right !important',
                    style: {
                        background: '#121212',
                        color: '#F7F6FB',
                        width: '270px',
                        height: '50px',
                        fontSize: '16px',
                        borderLeft: '5px solid #bcbcbc',
                    },
                    iconSize: '20px',
                });
                console.log("%cSem resposta do servidor.", 'color: #bcbcbc; background-color: #121212');
            } else if (err.response?.status === 400) {
                setErrorPatient("Falta o e-mail ou a senha.");
                toast.error("Falta o e-mail ou a senha.", {
                    icon: '⚠️',
                    position: 'top-right !important',
                    style: {
                        background: '#191900',
                        color: '#F7F6FB',
                        width: '270px',
                        height: '50px',
                        fontSize: '16px',
                        borderLeft: '5px solid #ffff00',
                    },
                    iconSize: '20px',
                });
                console.log("%cFalta o e-mail ou a senha.", 'color: #ffff00; background-color: #191900');
            } else if (err.response?.status === 401) {
                setErrorPatient("Não autorizado!");
                toast.error("Não autorizado!", {
                    icon: '🚫',
                    position: 'top-right !important',
                    style: {
                        background: '#140000',
                        color: '#F7F6FB',
                        width: '250px',
                        height: '50px',
                        fontSize: '16px',
                        borderLeft: '5px solid #cc0000',
                    }

                });
                console.log("%cNão autorizado!", 'color: #cc0000; background-color: #140000');
            } else {
                setErrorPatient("Falha no login.");
                toast.error("Falha no login.", {
                    position: "top-right !important",
                    style: {
                        background: '#140000',
                        color: '#F7F6FB',
                        width: '250px',
                        height: '50px',
                        fontSize: '16px',
                        borderLeft: '5px solid #cc0000',
                    }

                });
                console.log("%cFalha no login.", 'color: #cc0000; background-color: #140000');
            }
            errPatientRef.current.focus();
        }
    };

    // Validação do login do especialista.
    const { setAuthExpert } = useAuth();
    const navigateloginExpert = useNavigate();
    const locationExpert = useLocation();
    const fromExpert = locationExpert.state?.fromExpert?.pathname || "/";

    const userExpertRef = useRef();
    const errExpertRef = useRef();

    const [emailExpert, setEmailExpert] = useState("");
    const [passwordExpert, setPasswordExpert] = useState("");
    const [errorExpert, setErrorExpert] = useState("");

    useEffect(() => {
        userExpertRef.current.focus();
    }, [])

    useEffect(() => {
        setErrorExpert('');
    }, [emailExpert, passwordExpert])

    const handleLoginExpert = async (event) => {
        event.preventDefault();

        console.log("%cLogando o especialista...", 'color: #189bcc; background-color: #020f14');

        try {
            const responseExpert = await axios.post(
                LOGIN_EXPERT_URL,
                JSON.stringify({ emailExpert, passwordExpert }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(responseExpert?.data));
            console.log(JSON.stringify(responseExpert));

            const accessTokenExpert = responseExpert?.data?.accessTokenExpert;
            const rolesExpert = responseExpert?.data?.rolesExpert;
            setAuthExpert({ emailExpert, passwordExpert, rolesExpert, accessTokenExpert });
            setEmailExpert("");
            setPasswordExpert("");
            navigateloginExpert(fromExpert, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrorExpert("Sem resposta do servidor.");
                toast.error("Sem resposta do servidor.", {
                    icon: '🛑',
                    position: 'top-right !important',
                    style: {
                        background: '#121212',
                        color: '#F7F6FB',
                        width: '270px',
                        height: '50px',
                        fontSize: '16px',
                        borderLeft: '5px solid #bcbcbc',
                    },
                    iconSize: '20px',
                });
                console.log("%cSem resposta do servidor.", 'color: #bcbcbc; background-color: #121212');
            } else if (err.response?.status === 400) {
                setErrorExpert("Falta o e-mail ou a senha.");
                toast.error("Falta o e-mail ou a senha.", {
                    icon: '⚠️',
                    position: 'top-right !important',
                    style: {
                        background: '#191900',
                        color: '#F7F6FB',
                        width: '270px',
                        height: '50px',
                        fontSize: '16px',
                        borderLeft: '5px solid #ffff00',
                    },
                    iconSize: '20px',
                });
                console.log("%cFalta o e-mail ou a senha.", 'color: #ffff00; background-color: #191900');
            } else if (err.response?.status === 401) {
                setErrorExpert("Não autorizado!");
                toast.error("Não autorizado!", {
                    icon: '🚫',
                    position: 'top-right !important',
                    style: {
                        background: '#140000',
                        color: '#F7F6FB',
                        width: '250px',
                        height: '50px',
                        fontSize: '16px',
                        borderLeft: '5px solid #cc0000',
                    }

                });
                console.log("%cNão autorizado!", 'color: #cc0000; background-color: #140000');
            } else {
                setErrorExpert("Falha no login.");
                toast.error("Falha no login.", {
                    position: 'top-right !important',
                    style: {
                        background: '#140000',
                        color: '#F7F6FB',
                        width: '250px',
                        height: '50px',
                        fontSize: '16px',
                        borderLeft: '5px solid #cc0000',
                    }

                });
                console.log("%cFalha no login.", 'color: #cc0000; background-color: #140000');
            }
            errExpertRef.current.focus();
        }
    };

    return (
        <>
            <Toaster />
            <section className={styles.sign_patient_expert_body}>
                <div className={styles.sign_patient_expert_container}>
                    <div className={isSignExpert ? styles.right_panel_active : ''}>

                        {/* Formulário de login do Especialista. */}
                        <section className={styles.sign_expert}>

                            <form action="#" className={styles.sign_patient_expert_form} role="form" aria-label="Formulário de login do especialista" onSubmit={handleLoginExpert}>

                                <legend>
                                    <h1 className={styles.sign_patient_expert_title}>Portal Especialista</h1>
                                </legend>

                                <div className={styles.sign_patient_expert_social_container}>
                                    {/* <a href="#" className={`${styles.sign_patient_expert_a} ${styles.sign_patient_expert_social}`}><FaGooglePlusG /></a>
                                    <a href="#" className={`${styles.sign_patient_expert_a} ${styles.sign_patient_expert_social}`}><FaFacebookF /></a>
                                    <a href="#" className={`${styles.sign_patient_expert_a} ${styles.sign_patient_expert_social}`}><FaInstagram /></a>
                                    <a href="#" className={`${styles.sign_patient_expert_a} ${styles.sign_patient_expert_social}`}><FaXTwitter /></a> */}
                                </div>

                                {/* <p className={styles.sign_patient_expert_paragraph}>Ou use a sua conta para entrar</p> */}

                                <div className={styles.sign_patient_expert_container_input}>

                                    <label htmlFor="email_expert">
                                        <input
                                            type='email'
                                            name='email'
                                            id='email_expert'
                                            ref={userExpertRef}
                                            placeholder='exemplo@exemplo.com'
                                            value={emailExpert}
                                            onChange={(e) => setEmailExpert(e.target.value)}
                                            required
                                            aria-label="Digite seu e-mail aqui"
                                            role="textbox"
                                            autoComplete='email'
                                            className={styles.sign_patient_expert_input}
                                        />
                                        <MdAlternateEmail className={styles.sign_patient_expert_ico2} aria-hidden="true" />
                                    </label>

                                    <label htmlFor="password_expert">
                                        <input
                                            type={showPasswordExpert ? "text" : "password"}
                                            name="password"
                                            id="password_expert"
                                            placeholder="Senha"
                                            value={passwordExpert}
                                            onChange={(e) => setPasswordExpert(e.target.value)}
                                            required
                                            aria-label="Digite sua senha aqui"
                                            role="textbox"
                                            autoComplete='current-password'
                                            className={styles.sign_patient_expert_input}
                                        />
                                        {showPasswordExpert ? (
                                            <ImEye
                                                className={styles.sign_patient_expert_ico}
                                                onClick={togglePasswordVisibilityExpert}
                                                aria-label="Esconder senha"
                                                role="button"
                                            />
                                        ) : (
                                            <ImEyeBlocked
                                                className={styles.sign_patient_expert_ico}
                                                onClick={togglePasswordVisibilityExpert}
                                                aria-label="Mostrar senha"
                                                role="button"
                                            />
                                        )}
                                    </label>
                                </div>

                                <p style={{ color: 'red' }} ref={errExpertRef} className={errorExpert ? "errorexpert" : "offscreen"} aria-live='assertive'>{errorExpert}</p>

                                {/* Checkbox lembrar senha. */}
                                <div className={styles.sign_patient_expert_remind}>
                                    <label htmlFor="remember_expert" className={styles.sign_patient_expert_paragraph}>
                                        <input
                                            type="checkbox"
                                            id="remember_expert"
                                            className={styles.sign_patient_expert_checkbox} /> Lembrar da senha
                                    </label>
                                    <a href="#" className={`${styles.sign_patient_expert_a} ${styles.sign_patient_expert_account}`}> Esqueceu a senha?</a>
                                </div><br /><br />

                                <button type="submit" onClick={() => { }} className={`${styles.sign_patient_expert_btn} ${styles.sign_patient_expert_btn_us_link}`} aria-label="Enviar formulário de login do especialista">Entrar</button>

                                <p className={styles.sign_patient_expert_paragraph}>
                                    Ainda não tem uma conta?{' '}
                                    <Link to="/cadastrar?type=especialista" className={`${styles.sign_patient_expert_a} ${styles.sign_patient_expert_account}`} aria-label="Ainda não tem uma conta?"> Cadastrar conta</Link>
                                </p>

                            </form>
                        </section>

                        {/* Formulário de login do Membro. */}
                        <section className={styles.sign_patient}>

                            <form action="#" className={styles.sign_patient_expert_form} role="form" aria-label="Formulário de login do membro" onSubmit={handleLoginPatient}>

                                <legend>
                                    <h1 className={styles.sign_patient_expert_title}>Portal Membro</h1>
                                </legend>

                                <div className={styles.sign_patient_expert_social_container}>
                                    <a href="#" className={`${styles.sign_patient_expert_a} ${styles.sign_patient_expert_social}`}><FaGooglePlusG /></a>
                                    <a href="#" className={`${styles.sign_patient_expert_a} ${styles.sign_patient_expert_social}`}><FaFacebookF /></a>
                                    <a href="#" className={`${styles.sign_patient_expert_a} ${styles.sign_patient_expert_social}`}><FaInstagram /></a>
                                    <a href="#" className={`${styles.sign_patient_expert_a} ${styles.sign_patient_expert_social}`}><FaXTwitter /></a>
                                </div>

                                <p className={styles.sign_patient_expert_paragraph}>Ou use a sua conta para entrar</p>

                                <div className={styles.sign_patient_expert_container_input}>

                                    <label htmlFor="email_patient">
                                        <input
                                            type='email'
                                            name='email'
                                            id='email_patient'
                                            ref={userPatientRef}
                                            placeholder='exemplo@exemplo.com'
                                            value={emailPatient}
                                            onChange={(e) => setEmailPatient(e.target.value)}
                                            required
                                            aria-label="Digite seu e-mail aqui"
                                            role="textbox"
                                            autoComplete='email'
                                            className={styles.sign_patient_expert_input}
                                        />
                                        <MdAlternateEmail className={styles.sign_patient_expert_ico2} aria-hidden="true" />
                                    </label>

                                    <label htmlFor="password_patient">
                                        <input
                                            type={showPasswordPatient ? "text" : "password"}
                                            name="password"
                                            id="password_patient"
                                            placeholder="Senha"
                                            value={passwordPatient}
                                            onChange={(e) => setPasswordPatient(e.target.value)}
                                            required
                                            aria-label="Digite sua senha aqui"
                                            role="textbox"
                                            autoComplete='current-password'
                                            className={styles.sign_patient_expert_input}
                                        />
                                        {showPasswordPatient ? (
                                            <ImEye
                                                className={styles.sign_patient_expert_ico}
                                                onClick={togglePasswordVisibilityPatient}
                                                aria-label="Esconder senha"
                                                role="button"
                                            />
                                        ) : (
                                            <ImEyeBlocked
                                                className={styles.sign_patient_expert_ico}
                                                onClick={togglePasswordVisibilityPatient}
                                                aria-label="Mostrar senha"
                                                role="button"
                                            />
                                        )}
                                    </label>
                                </div>

                                <p style={{ color: 'red' }} ref={errPatientRef} className={errorPatient ? "errorpatient" : "offscreen"} aria-live='assertive'>{errorPatient}</p>

                                {/* Checkbox lembrar senha. */}
                                <div className={styles.sign_patient_expert_remind}>
                                    <label htmlFor="remember_patient" className={styles.sign_patient_expert_paragraph}>
                                        <input
                                            type="checkbox"
                                            name='remember_Password'
                                            id="remember_patient"
                                            checked={checkboxRememberPasswordPatient}
                                            onChange={(event) => {
                                                setCheckboxRememberPasswordPatient(event.target.checked);
                                                setErrorPatient("");
                                            }}
                                            aria-label="Selecione para salvar suas credenciais e facilitar o acesso posterior."
                                            aria-invalid={validCheckboxRememberPasswordPatient ? "false" : "true"}
                                            role="checkbox"
                                            autoComplete='off'
                                            className={styles.sign_patient_expert_checkbox} /> Lembrar da senha
                                    </label>

                                    {/* ESQUECEU A SENHA? */}
                                    <Link to="/esqueceu-a-senha-membro" className={`${styles.sign_patient_expert_a} ${styles.sign_patient_expert_account}`} aria-label="Esqueceu a senha"> Esqueceu a senha?</Link>
                                </div><br /><br />

                                <button type="submit" onClick={() => { }} className={`${styles.sign_patient_expert_btn} ${styles.sign_patient_expert_btn_us_link}`} aria-label="Enviar formulário de login do membro">Entrar</button>

                                <p className={styles.sign_patient_expert_paragraph}>
                                    Ainda não tem uma conta?{' '}
                                    <Link to="/cadastrar?type=membro" className={`${styles.sign_patient_expert_a} ${styles.sign_patient_expert_account}`} aria-label="Ainda não tem uma conta?"> Cadastrar conta</Link>
                                </p>

                            </form>
                        </section>

                        {/* <article className={styles.overlay_container} style={{ transform: isSignExpert ? 'translateX(-100%)' : 'translateX(0)' }}> */}
                        <article className={`${styles.overlay_container} ${isSignExpert ? styles.is_sign_expert : ''} ${showWelcome ? styles.is_sign_expert_visible : ''}`}>
                            <div className={`${styles.overlay} ${showWelcome ? styles.right_panel_active : ''}`}>

                                {/* Membro. */}
                                <section className={styles.overlay_left}>
                                    <h1 className={styles.sign_patient_expert_title}>Bem-vindo de volta Membro!</h1>
                                    <p className={styles.sign_patient_expert_paragraph_over}>Ficamos felizes em tê-lo de volta à sua jornada de cuidado mental. Ao entrar, você terá acesso aos recursos personalizados necessários para continuar progredindo em direção ao seu bem-estar. Não perca tempo, entre agora e continue sua busca pelo equilíbrio e felicidade.</p>
                                    {/* <button className={styles.sign_expert_btn} onClick={toggleOverlay} aria-label="Alternar para formulário de entrada de especialista">Portal Membro</button> */}
                                    <button className={`${styles.sign_expert_btn} ${styles.sign_expert_btn_us_link}`} onClick={toggleOverlay} aria-label="Alternar para formulário de entrada de especialista">Portal Membro</button>
                                </section>

                                {/* Especialista. */}
                                <section className={styles.overlay_right}>
                                    <h1 className={styles.sign_patient_expert_title}>Bem-vindo de volta Especialista!</h1>
                                    <p className={styles.sign_patient_expert_paragraph_over}>Sua expertise é crucial para fazer a diferença. Cada conselho que você oferece, cada palavra de apoio que compartilha, é uma luz no caminho daqueles que buscam conforto e orientação. Faça login agora e continue a ser o farol de esperança que tantos procuram.</p>
                                    {/* <button className={styles.sign_expert_btn} onClick={toggleOverlay} aria-label="Alternar para formulário de entrada de membro">Portal Especialista</button> */}
                                    <button className={`${styles.sign_expert_btn} ${styles.sign_expert_btn_us_link}`} onClick={toggleOverlay} aria-label="Alternar para formulário de entrada de membro">Portal Especialista</button>
                                </section>

                            </div>
                        </article>

                    </div>
                </div>
            </section>
        </>
    )
}

export default LogIn