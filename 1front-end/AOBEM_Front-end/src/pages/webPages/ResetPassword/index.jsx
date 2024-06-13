import styles from "./ResetPassword.module.css"
import { MdAlternateEmail } from "react-icons/md"; <MdAlternateEmail />
import { ImEyeBlocked } from "react-icons/im"; <ImEyeBlocked />
import { ImEye } from "react-icons/im"; <ImEye />
import { FiAlertTriangle } from "react-icons/fi"; <FiAlertTriangle />
import { useRef, useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import AuthContext from '../../../context/AuthProvider';
// import { AuthContext } from '../../../context/AuthProvider';
import { AuthContext } from '../../../context/AuthContext';
import axios from '../../../api/axios';
import toast, { Toaster } from 'react-hot-toast';
import Button from '../../../components/Button';

// const LOGIN_MEMBER_URL = '/auth';
// const LOGIN_EXPERT_URL = '/auth';
const RESET_MEMBER_URL = '/membro';
const RESET_EXPERT_URL = '/especialista';

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:"<>?`\-=[\];',.\/]).{8,24}$/;

function ResetPassword() {

    // Visibilidade da senha no 1º campo do membro.
    const [showPasswordResetPatient, setShowPasswordResetPatient] = useState(false);
    const togglePasswordVisibilityResetPatient = () => {
        setShowPasswordResetPatient(!showPasswordResetPatient);
    };

    // Visibilidade da senha no 2º campo do membro.
    const [showConfirmPasswordResetPatient, setShowConfirmPasswordResetPatient] = useState(false);
    const toggleConfirmPasswordVisibilityResetPatient = () => {
        setShowConfirmPasswordResetPatient(!showConfirmPasswordResetPatient);
    };

    // Validação da redefinição de senha do membro.
    const { setAuthPatient } = useAuth();
    const navigateloginPatient = useNavigate();
    const locationResetPatient = useLocation();
    const fromResetPatient = locationResetPatient.state?.fromResetPatient?.pathname || "/";

    const userResetPatientRef = useRef();
    const errResetPatientRef = useRef();

    // Senha.
    const [passwordResetPatient, setPasswordResetPatient] = useState("");
    const [validPasswordResetPatient, setValidPasswordResetPatient] = useState(false);
    const [resetPasswordPatientFocus, setResetPasswordPatientFocus] = useState(false);

    // Confirmação da senha.
    const [confirmPasswordResetPatient, setConfirmPasswordResetPatient] = useState("");
    const [validConfirmPasswordResetPatient, setValidConfirmPasswordResetPatient] = useState(false);
    const [resetConfirmPasswordPatientFocus, setResetConfirmPasswordPatientFocus] = useState(false);

    const [errorResetPatient, setErrorResetPatient] = useState("");
    const [successResetPatient, setSuccessResetPatient] = useState(false);

    useEffect(() => {
        userResetPatientRef.current.focus();
    }, []);

    // Para a senha.
    useEffect(() => {
        const result = PASSWORD_REGEX.test(passwordResetPatient);
        console.log("%cPassword Validation:", 'color: #008000; background-color: #e5f2e5', result);
        setValidPasswordResetPatient(result);
        console.log("%cPassword:", 'color: #e5f2e5; background-color: #008000', passwordResetPatient);
    }, [passwordResetPatient]);

    // Para a confirmação da senha.
    useEffect(() => {
        console.log("%cPassword Confirmation:", 'color: #343434; background-color: #d2d2d2', passwordResetPatient);
        console.log("%cConfirm Password:", 'color: #eaeaea; background-color: #343434', confirmPasswordResetPatient);
        const confirmPasswordIsValid = passwordResetPatient === confirmPasswordResetPatient && confirmPasswordResetPatient !== '';
        console.log("%cPassword Confirmation Validation:", 'color: #343434; background-color: #eaeaea', confirmPasswordIsValid);
        setValidConfirmPasswordResetPatient(confirmPasswordIsValid);
    }, [passwordResetPatient, confirmPasswordResetPatient]);

    useEffect(() => {
        setErrorResetPatient('');
    }, [passwordResetPatient, confirmPasswordResetPatient])

    ////////////////////////////////////////////////////
    const handleResetPatient = async (event) => {
        event.preventDefault();

        console.log("%cEnviando a solicitação para redefinição de senha do membro...", 'color: #189bcc; background-color: #020f14');

        const patientReset = PASSWORD_REGEX.test(passwordResetPatient);

        if (passwordResetPatient !== confirmPasswordResetPatient) {
            setErrorResetPatient("As senhas não coincidem.");
            toast.error("As senhas não coincidem.", {
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
            console.log("%cAs senhas não coincidem.", 'color: #ffff00; background-color: #191900');
            return;
        }

        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const token = params.get('token');

        if (!id || !token) {
            setErrorResetPatient("Token de redefinição inválido.");
            toast.error("Token de redefinição inválido.", {
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
            console.log("%cToken de redefinição inválido.", 'color: #cc0000; background-color: #140000');
            return;
        }

        try {
            const responseResetPatient = await axios.post(
                RESET_MEMBER_URL,
                JSON.stringify({ id, token, passwordResetPatient }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(responseResetPatient?.data));
            console.log(JSON.stringify(responseResetPatient));

            setSuccessResetPatient(true);
            toast.success("Senha redefinida com sucesso!", {
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
            setTimeout(() => navigateloginPatient(), 3000);

            console.log("%cSolicitação enviada com sucesso!", 'color: #00ff52; background-color: #001908');

            const accessTokenPatient = responseResetPatient?.data?.accessTokenPatient;
            const rolesPatient = responseResetPatient?.data?.rolesPatient;
            setAuthPatient({ passwordResetPatient });
            setPasswordResetPatient("");
            navigateloginPatient(fromResetPatient, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrorResetPatient("Sem resposta do servidor.");
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
                setErrorResetPatient("Não autorizado!");
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
                setErrorResetPatient("Erro ao redefinir a senha.");
                toast.error("Erro ao redefinir a senha.", {
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
                console.log("%cErro ao redefinir a senha.", 'color: #cc0000; background-color: #140000');
            }
            errResetPatientRef.current.focus();
        }
    };

    return (
        <>

            <Toaster />
            <section className={styles.reset_patient_body}>
                <div className={styles.reset_patient_container}>

                    {/* Formulário de redefinição de senha do Membro. */}
                    <section className={styles.reset_patient}>

                        <form action="#" className={styles.reset_patient_form} role="form" aria-label="Formulário redefinição de senha do membro" onSubmit={handleResetPatient}>

                            <legend>
                                <h1 className={styles.reset_patient_title}>Redefinir a senha</h1>
                            </legend>

                            <p className={styles.reset_patient_paragraph}>Digite a sua nova senha</p>


                            {/* Senha. */}
                            <div className={styles.reset_container_input}>
                                <label htmlFor='password_reset_patient'>

                                    <input
                                        type={showPasswordResetPatient ? "text" : "password"}
                                        name='password'
                                        id='password_reset_patient'
                                        ref={userResetPatientRef}
                                        placeholder='Senha'
                                        required
                                        aria-label="Digite sua senha aqui"
                                        aria-invalid={validPasswordResetPatient ? "false" : "true"}
                                        aria-describedby='resetPasswordPatientNote'
                                        value={passwordResetPatient}
                                        onChange={(event) => [setPasswordResetPatient(event.target.value), setErrorResetPatient("")]}
                                        role="textbox"
                                        autoComplete='off'
                                        onFocus={() => setResetPasswordPatientFocus(true)}
                                        onBlur={() => setResetPasswordPatientFocus(false)}
                                        className={styles.reset_patient_input} /> {showPasswordResetPatient ? (
                                            <ImEye
                                                className={styles.reset_patient_ico}
                                                onClick={togglePasswordVisibilityResetPatient} aria-label="Esconder senha"
                                                role="button"
                                            />
                                        ) : (
                                            <ImEyeBlocked
                                                className={styles.reset_patient_ico}
                                                onClick={togglePasswordVisibilityResetPatient} aria-label="Mostrar senha"
                                                role="button"
                                            />
                                        )}

                                    <p id='resetPasswordPatientNote' className={resetPasswordPatientFocus && !validPasswordResetPatient ? styles.reset_instructions : styles.offscreen}>
                                        <span className={styles.reset_content}><FiAlertTriangle className={styles.reset_patient_icoo} /> A senha deve ter entre 8 e 24 caracteres, contendo pelo menos uma letra maiúscula e uma minúscula, assim como pelo menos um dígito de 0 a 9 e um caractere especial.</span>
                                    </p>
                                </label>


                                {/* Confirmação de senha. */}
                                <label htmlFor='confirmPassword_reset_patient'>

                                    <input
                                        type={showConfirmPasswordResetPatient ? "text" : "password"}
                                        name='password'
                                        id='confirmPassword_reset_patient'
                                        placeholder='Confirme a sua senha'
                                        required
                                        aria-label="Digite sua senha aqui para confirmá-la"
                                        aria-invalid={validConfirmPasswordResetPatient ? "false" : "true"}
                                        aria-describedby='resetConfirmPasswordPatientNote'
                                        value={confirmPasswordResetPatient}
                                        onChange={(event) => [setConfirmPasswordResetPatient(event.target.value), setErrorResetPatient("")]}
                                        role="textbox"
                                        autoComplete='off'
                                        onFocus={() => setResetConfirmPasswordPatientFocus(true)}
                                        onBlur={() => setResetConfirmPasswordPatientFocus(false)}
                                        className={styles.reset_patient_input} />{showConfirmPasswordResetPatient ? (
                                            <ImEye
                                                className={styles.reset_patient_ico}
                                                onClick={toggleConfirmPasswordVisibilityResetPatient} aria-label="Esconder senha"
                                                role="button"
                                            />
                                        ) : (
                                            <ImEyeBlocked
                                                className={styles.reset_patient_ico}
                                                onClick={toggleConfirmPasswordVisibilityResetPatient} aria-label="Mostrar senha"
                                                role="button"
                                            />
                                        )}

                                    <p id='regConfirmPasswordPatientNote' className={resetConfirmPasswordPatientFocus && !validConfirmPasswordResetPatient ? styles.reset_instructions : styles.offscreen}>
                                        <span className={styles.reset_content}><FiAlertTriangle className={styles.reset_patient_icoo} /> A senha deve ser igual.</span>
                                    </p>
                                </label>
                            </div>

                            <p style={{ color: 'red' }} ref={errResetPatientRef} className={errorResetPatient ? "errorpatient" : "offscreen"} aria-live='assertive'>{errorResetPatient}</p>

                            <button type="submit" onClick={() => { }} className={`${styles.reset_patient_btn} ${styles.reset_patient_btn_link}`} aria-label="Enviar formulário de redefinição de senha do membro">Redefinir</button>
                        </form>
                    </section>

                </div>
            </section>
        </>
    )
}

export default ResetPassword