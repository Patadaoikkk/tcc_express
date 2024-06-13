import styles from "./ForgotPassword.module.css"
import { MdAlternateEmail } from "react-icons/md"; <MdAlternateEmail />
import { FiAlertTriangle } from "react-icons/fi"; <FiAlertTriangle />
import { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import AuthContext from '../../../context/AuthProvider';
// import { AuthContext } from '../../../context/AuthProvider';
import { AuthContext } from '../../../context/AuthContext';
import axios from '../../../api/axios';
import toast, { Toaster } from 'react-hot-toast';

// const LOGIN_MEMBER_URL = '/auth';
// const LOGIN_EXPERT_URL = '/auth';
const FORGOT_MEMBER_URL = '/membro';
const FORGOT_EXPERT_URL = '/especialista';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function ForgotPassword() {

    // Validação da redefinição de senha do membro.
    const { setAuthPatient } = useAuth();
    const navigateloginPatient = useNavigate();
    const navigateResetPatient = useNavigate();
    const locationForgotPatient = useLocation();
    const fromForgotPatient = locationForgotPatient.state?.fromForgotPatient?.pathname || "/";

    const userForgotPatientRef = useRef();
    const errForgotPatientRef = useRef();

    const [emailForgotPatient, setEmailForgotPatient] = useState("");
    const [validEmailForgotPatient, setValidEmailForgotPatient] = useState(false);
    const [forgotEmailPatientFocus, setForgotEmailPatientFocus] = useState(false);

    const [errorForgotPatient, setErrorForgotPatient] = useState("");
    const [successForgotPatient, setSuccessForgotPatient] = useState(false);

    useEffect(() => {
        userForgotPatientRef.current.focus();
    }, [])

    // Para o e-mail.
    useEffect(() => {
        const result = EMAIL_REGEX.test(emailForgotPatient);
        console.log("%cEmail validation:", 'color: #ff0065; background-color: #ffe5ef', result);
        console.log("%cEmail:", 'color: #ffe5ef; background-color: #e5005a', emailForgotPatient);
        setValidEmailForgotPatient(result);
    }, [emailForgotPatient]);


    useEffect(() => {
        setErrorForgotPatient('');
    }, [emailForgotPatient])

    const handleForgotPatient = async (event) => {
        event.preventDefault();

        console.log("%cEnviando a solicitação para redefinição de senha do membro...", 'color: #189bcc; background-color: #020f14');

        const patientForgot = EMAIL_REGEX.test(emailForgotPatient);

        if (!patientForgot) {
            setErrorForgotPatient("Falta o e-mail.");
            toast.error("Falta o e-mail.", {
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
            console.log("%cFalta o e-mail.", 'color: #ffff00; background-color: #191900');
        }

        try {
            const responseForgotPatient = await axios.post(
                FORGOT_MEMBER_URL,
                JSON.stringify({ emailForgotPatient }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(responseForgotPatient?.data));
            console.log(JSON.stringify(responseForgotPatient));

            setSuccessForgotPatient(true);
            toast.success("Solicitação enviada com sucesso!", {
                position: 'top-right !important',
                style: {
                    background: '#001908',
                    color: '#F7F6FB',
                    width: '350px',
                    height: '50px',
                    fontSize: '16px',
                    borderLeft: '5px solid #00ff52',
                }

            });
            console.log("%cSolicitação enviada com sucesso!", 'color: #00ff52; background-color: #001908');

            const accessTokenPatient = responseForgotPatient?.data?.accessTokenPatient;
            const rolesPatient = responseForgotPatient?.data?.rolesPatient;
            setAuthPatient({ emailForgotPatient });
            setEmailForgotPatient("");
            // navigateloginPatient(fromForgotPatient, { replace: true });

            const { id, token } = responseForgotPatient.data;
            navigateResetPatient(`/redefinir-a-senha-membro/${id}/${token}`);

        } catch (err) {
            if (!err?.response) {
                setErrorForgotPatient("Sem resposta do servidor.");
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
            } else if (err.response?.status === 401) {
                setErrorForgotPatient("Não autorizado!");
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
                setErrorForgotPatient("Falha na solicitação.");
                toast.error("Falha na solicitação.", {
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
                console.log("%cFalha na solicitação.", 'color: #cc0000; background-color: #140000');
            }
            errForgotPatientRef.current.focus();
        }
    };

    return (
        <>

            <Toaster />
            <section className={styles.forgot_patient_body}>
                <div className={styles.forgot_patient_container}>

                    {/* Formulário de redefinição de senha do Membro. */}
                    <section className={styles.forgot_patient}>

                        <form action="#" className={styles.forgot_patient_form} role="form" aria-label="Formulário de solicitação de redefinição de senha do membro" onSubmit={handleForgotPatient}>

                            <legend>
                                <h1 className={styles.forgot_patient_title}>Esqueceu a senha</h1>
                            </legend>

                            <p className={styles.forgot_patient_paragraph}>Digite seu e-mail para redefinir a senha</p>

                            {/* E-mail. */}
                            <div className={styles.forgot_container_input}>
                                <label htmlFor='email_forgot_patient'>

                                <input
                                    type="email"
                                    name='email'
                                    id='email_forgot_patient'
                                    ref={userForgotPatientRef}
                                    placeholder='Seu endereço de e-mail'
                                    value={emailForgotPatient}
                                    onChange={(event) => [setEmailForgotPatient(event.target.value), setErrorForgotPatient("")]}
                                    required
                                    aria-label="Digite seu e-mail aqui"
                                    aria-invalid={validEmailForgotPatient ? "false" : "true"}
                                    aria-describedby='forgotEmailPatientNote'
                                    role="textbox"
                                    autoComplete='off'
                                    onFocus={() => setForgotEmailPatientFocus(true)}
                                    onBlur={() => setForgotEmailPatientFocus(false)}
                                    className={styles.forgot_patient_input} />
                                    <MdAlternateEmail className={styles.forgot_patient_ico2} aria-hidden="true" />
                                    
                                    <p id='forgotEmailPatientNote' className={forgotEmailPatientFocus && !validEmailForgotPatient ? styles.forgot_instructions : styles.offscreen}>
                                    <span className={styles.forgot_content}><FiAlertTriangle className={styles.forgot_patient_icoo} /> exemplo123@exemplo.com</span>
                                    </p>

                                </label>
                            </div>

                            <p style={{ color: 'red' }} ref={errForgotPatientRef} className={errorForgotPatient ? "errorpatient" : "offscreen"} aria-live='assertive'>{errorForgotPatient}</p>

                            <button type="submit" onClick={() => { }} className={`${styles.forgot_patient_btn} ${styles.forgot_patient_btn_link}`} aria-label="Enviar formulário de esqueceu a senha do membro">Enviar</button>

                        </form>
                    </section>

                </div>
            </section>
        </>
    )
}

export default ForgotPassword

// localStorage
// const navigate = useNavigate();
//     const locationForgotPatient = useLocation();
//     const fromForgotPatient = locationForgotPatient.state?.fromForgotPatient?.pathname || "/";

//     const userForgotPatientRef = useRef();
//     const errForgotPatientRef = useRef();

//     const [emailForgotPatient, setEmailForgotPatient] = useState("");
//     const [validEmailForgotPatient, setValidEmailForgotPatient] = useState(false);
//     const [forgotEmailPatientFocus, setForgotEmailPatientFocus] = useState(false);

//     const [errorForgotPatient, setErrorForgotPatient] = useState("");
//     const [successForgotPatient, setSuccessForgotPatient] = useState(false);

//     useEffect(() => {
//         userForgotPatientRef.current.focus();
//     }, [])

//     useEffect(() => {
//         const result = EMAIL_REGEX.test(emailForgotPatient);
//         setValidEmailForgotPatient(result);
//     }, [emailForgotPatient]);


//     useEffect(() => {
//         setErrorForgotPatient('');
//     }, [emailForgotPatient])

//     const handleForgotPatient = async (event) => {
//         event.preventDefault();

//         console.log("%cEnviando a solicitação para redefinição de senha do membro...", 'color: #189bcc; background-color: #020f14');

//         const patientForgot = EMAIL_REGEX.test(emailForgotPatient);

//         if (!patientForgot) {
//             setErrorForgotPatient("Falta o e-mail.");
//             toast.error("Falta o e-mail.");
//             return;
//         }

//         try {
//             const responseForgotPatient = { data: { id: "123", token: "abc" } };

//             console.log(JSON.stringify(responseForgotPatient?.data));
//             console.log(JSON.stringify(responseForgotPatient));

//             setSuccessForgotPatient(true);
//             toast.success("Solicitação enviada com sucesso!");

            
//             localStorage.setItem("emailForgotPatient", emailForgotPatient);

//             setEmailForgotPatient("");
//             navigate(fromForgotPatient, { replace: true });

//             const { id, token } = responseForgotPatient.data;
//             navigate(`/redefinir-a-senha-membro/${id}/${token}`);

//         } catch (err) {
//             setErrorForgotPatient("Falha na solicitação de redefinição de senha.");
//             toast.error("Falha na solicitação de redefinição de senha.");
//             errForgotPatientRef.current.focus();
//         }
//     };