import styles from './Register.module.css'
import { FaGooglePlusG } from "react-icons/fa"; <FaGooglePlusG />
import { FaFacebookF } from "react-icons/fa"; <FaFacebookF />
import { FaInstagram } from "react-icons/fa"; <FaInstagram />
import { FaXTwitter } from "react-icons/fa6"; <FaXTwitter />

import { FaRegUser } from "react-icons/fa"; <FaRegUser />
import { FaRegThumbsUp } from "react-icons/fa"; <FaRegThumbsUp />
import { FaRegThumbsDown } from "react-icons/fa"; <FaRegThumbsDown />
import { FiAlertTriangle } from "react-icons/fi"; <FiAlertTriangle />
import { MdAlternateEmail } from "react-icons/md"; <MdAlternateEmail />
import { ImEyeBlocked } from "react-icons/im"; <ImEyeBlocked />
import { ImEye } from "react-icons/im"; <ImEye />
import { HiDevicePhoneMobile } from "react-icons/hi2"; <HiDevicePhoneMobile />
import { RiMentalHealthLine } from "react-icons/ri"; <RiMentalHealthLine />
import { RiShieldUserLine } from "react-icons/ri"; <RiShieldUserLine />
import { RiLockPasswordLine } from "react-icons/ri"; <RiLockPasswordLine />
import { IoIosArrowUp } from "react-icons/io"; <IoIosArrowUp />
import { IoIosArrowDown } from "react-icons/io"; <IoIosArrowDown />

import { useEffect, useRef, useState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';
// import useAuth from '../../../useAuth';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../api/axios';
import toast, { Toaster } from 'react-hot-toast';

const NAME_REGEX = /^[a-zA-Z][a-zA-Z\s]{9,99}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:"<>?`\-=[\];',.\/]).{8,24}$/;
// const PHONE_REGEX = /^\d{2}\s9\d{4}\s-\s\d{4}$/;
const PHONE_REGEX = /^(11|12|13|14|15|16|17|18|19|21|22|24|27|28|31|32|33|34|35|37|38|41|42|43|44|45|46|47|48|49|51|53|54|55|61|62|63|64|65|66|67|68|69|71|73|74|75|77|79|81|82|83|84|85|86|87|88|89|91|93|94|95|96|97|98|99)\s9\d{4}\s-\s\d{4}$/;
const PROFESSIONAL_REGEX = /^(CRP|CRM|CREFITO|CRESS)-\d{2}\/\d{4}$|^(CRP|CRM|CREFITO|CRESS)-\d{4}-\d{2}$|^(CRESS|CRP|CRM|CREFITO)-\d{5}$|^CRP-\d{4}-\d{2}$/;
// Test: (CRP-00000, CRP-00/0000, CRP-0000-00), (CRM-00000, CRM-00/0000, CRM-0000-00), (CREFITO-00000, CREFITO-00/0000, CREFITO-0000-00), (CRESS-00000, CRESS-00/0000, CRESS-0000-00)

const REGISTER_MEMBER_URL = '/membro';
const REGISTER_EXPERT_URL = '/especialista';

function Register() {

    // Animação de slide.
    const [isSignUpExpert, setIsSignUpExpert] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);
    const toggleOverlay = () => {
        setIsSignUpExpert(!isSignUpExpert);
        setShowWelcome(!showWelcome);
    };

    // Visibilidade da senha no 1º campo do membro.
    const [showPasswordRgPatient, setShowPasswordRgPatient] = useState(false);
    const togglePasswordVisibilityRgPatient = () => {
        setShowPasswordRgPatient(!showPasswordRgPatient);
    };

    // Visibilidade da senha no 2º campo do membro.
    const [showConfirmPasswordRgPatient, setConfirmPasswordRgPatient] = useState(false);
    const toggleConfirmPasswordVisibilityRgPatient = () => {
        setConfirmPasswordRgPatient(!showConfirmPasswordRgPatient);
    };

    // Visibilidade da senha no 1º campo do especialista.
    const [showPasswordRgExpert, setShowPasswordRgExpert] = useState(false);
    const togglePasswordVisibilityRgExpert = () => {
        setShowPasswordRgExpert(!showPasswordRgExpert);
    };

    // Visibilidade da senha no 2º campo do especialista.
    const [showConfirmPasswordRgExpert, setConfirmPasswordRgExpert] = useState(false);
    const toggleConfirmPasswordVisibilityRgExpert = () => {
        setConfirmPasswordRgExpert(!showConfirmPasswordRgExpert);
    };

    // Abrir a seleção.
    // const [selectOpen, setSelectOpen] = useState(false);
    // const toggleSelectVisibility = () => {
    //     setSelectOpen(!selectOpen);
    // };

    // Validação do cadastro do membro.
    const userRegPatientRef = useRef();
    const errRegPatientRef = useRef();

    // Nome.
    const [nameRegPatient, setNameRegPatient] = useState("");
    const [validNameRegPatient, setValidNameRegPatient] = useState(false);
    const [regNameRegPatientFocus, setRegNameRegPatientFocus] = useState(false);

    // E-mail.
    const [emailRegPatient, setEmailRegPatient] = useState("");
    const [validEmailRegPatient, setValidEmailRegPatient] = useState(false);
    const [regEmailRegPatientFocus, setRegEmailRegPatientFocus] = useState(false);

    // Confirmação do e-mail.
    const [confirmEmailRegPatient, setConfirmEmailRegPatient] = useState("");
    const [validConfirmEmailRegPatient, setValidConfirmEmailRegPatient] = useState(false);
    const [regConfirmEmailRegPatientFocus, setRegConfirmEmailRegPatientFocus] = useState(false);

    // Senha.
    const [passwordRegPatient, setPasswordRegPatient] = useState("");
    const [validPasswordRegPatient, setValidPasswordRegPatient] = useState(false);
    const [regPasswordRegPatientFocus, setRegPasswordRegPatientFocus] = useState(false);

    // Confirmação da senha.
    const [confirmPasswordRegPatient, setConfirmPasswordRegPatient] = useState("");
    const [validConfirmPasswordRegPatient, setValidConfirmPasswordRegPatient] = useState(false);
    const [regConfirmPasswordRegPatientFocus, setRegConfirmPasswordRegPatientFocus] = useState(false);

    // Checkbox.
    const [checkboxRegPatient, setCheckboxRegPatient] = useState(false);
    const [validcheckboxRegPatient, setValidCheckboxRegPatient] = useState(false);

    // Mensagem de erro.
    const [errorRegPatient, setErrorRegPatient] = useState("");
    const [successRegPatient, setSuccessRegPatient] = useState(false);

    // Insere o foco.
    useEffect(() => {
        userRegPatientRef.current.focus();
    }, [])

    // Para o nome.
    useEffect(() => {
        const result = NAME_REGEX.test(nameRegPatient);
        console.log("%cName validation:", 'color: #189bcc; background-color: #e7f5f9', result);
        console.log("%cFull Name:", 'color: #e7f5f9; background-color: #158bb7', nameRegPatient);
        setValidNameRegPatient(result);
    }, [nameRegPatient])

    // Para a e-mail.
    useEffect(() => {
        const result = EMAIL_REGEX.test(emailRegPatient);
        console.log("%cEmail validation:", 'color: #ff0065; background-color: #ffe5ef', result);
        console.log("%cEmail:", 'color: #ffe5ef; background-color: #e5005a', emailRegPatient);
        setValidEmailRegPatient(result);
    }, [emailRegPatient]);

    // Para a confirmação do e-mail.
    useEffect(() => {
        console.log("%cEmail Confirmation:", 'color: #f2ebf3; background-color: #7f388b', confirmEmailRegPatient);
        const confirmEmailIsValid = emailRegPatient === confirmEmailRegPatient && confirmEmailRegPatient !== '';
        console.log("%cEmail Confirmation Validation:", 'color: #72327d; background-color: #f2ebf3', confirmEmailIsValid);
        setValidConfirmEmailRegPatient(confirmEmailIsValid);
    }, [emailRegPatient, confirmEmailRegPatient]);

    // Para a senha.
    useEffect(() => {
        const result = PASSWORD_REGEX.test(passwordRegPatient);
        console.log("%cPassword Validation:", 'color: #008000; background-color: #e5f2e5', result);
        console.log("%cEmail:", 'color: #ffe5ef; background-color: #e5005a', emailRegPatient);
        setValidPasswordRegPatient(result);
        console.log("%cPassword:", 'color: #e5f2e5; background-color: #008000', passwordRegPatient);
    }, [passwordRegPatient]);

    // Para a confirmação da senha.
    useEffect(() => {
        console.log("%cPassword Confirmation:", 'color: #343434; background-color: #d2d2d2', passwordRegPatient);
        console.log("%cConfirm Password:", 'color: #eaeaea; background-color: #343434', confirmPasswordRegPatient);
        const confirmPasswordIsValid = passwordRegPatient === confirmPasswordRegPatient && confirmPasswordRegPatient !== '';
        console.log("%cPassword Confirmation Validation:", 'color: #343434; background-color: #eaeaea', confirmPasswordIsValid);
        setValidConfirmPasswordRegPatient(confirmPasswordIsValid);
    }, [passwordRegPatient, confirmPasswordRegPatient]);

    // Termos.
    useEffect(() => {
        const result = checkboxRegPatient;
        console.log("%cCheckbox Validation:", 'color: #ffa500; background-color: #fff6e5', result);
        console.log("%cCheckbox:", 'color: #fff6e5; background-color: #ffa500', checkboxRegPatient);
        setValidCheckboxRegPatient(result);
    }, [checkboxRegPatient])

    // Mensagem de erro.
    useEffect(() => {
        setErrorRegPatient('');
    }, [nameRegPatient, emailRegPatient, confirmEmailRegPatient, passwordRegPatient, confirmPasswordRegPatient, checkboxRegPatient])

    const handleRegisterPatient = async (event) => {
        event.preventDefault();

        console.log("%cRegistrando membro...", 'color: #189bcc; background-color: #020f14');

        const patientName = NAME_REGEX.test(nameRegPatient);
        const patientEmail = EMAIL_REGEX.test(emailRegPatient);
        const patientPassword = PASSWORD_REGEX.test(passwordRegPatient);

        if (!patientName || !patientEmail || !patientPassword || !validcheckboxRegPatient) {
            setErrorRegPatient('Cadastro inválido!');
            toast.error("Cadastro inválido!", {
                icon: '⚠️',
                position: 'top-right !important',
                style: {
                    background: '#190c08',
                    color: '#F7F6FB',
                    width: '205px',
                    height: '50px',
                    fontSize: '16px',
                    borderLeft: '5px solid #ff7f50',
                },
                iconSize: '20px',
            });
            console.log("%cCadastro inválido!", 'color: #ff7f50; background-color: #190c08');
            return;
        }

        try {
            const responseRegPatient = await axios.post(
                REGISTER_MEMBER_URL,
                JSON.stringify({ patientUser: nameRegPatient, patientEmail: emailRegPatient, patientPassword: passwordRegPatient, patientTerms: checkboxRegPatient }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(responseRegPatient.data);
            // console.log(responseRegPatient.accessTokenRegPatient);
            console.log(responseRegPatient.accessToken);
            console.log(JSON.stringify(responseRegPatient))
            setSuccessRegPatient(true);
            toast.success("Cadastro realizado com sucesso!", {
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
            console.log("%cCadastro realizado com sucesso!", 'color: #00ff52; background-color: #001908');

        } catch (err) {
            if (!err?.response) {
                setErrorRegPatient("Sem resposta do servidor.");
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
            } else if (err.response?.status === 409) {
                setErrorRegPatient("Já existe uma conta como esse e-mail.");
                toast.error("Já existe uma conta com este e-mail.", {
                    icon: '🔒',
                    position: 'top-right !important',
                    style: {
                        background: '#191900',
                        color: '#F7F6FB',
                        width: '350px',
                        height: '50px',
                        fontSize: '16px',
                        borderLeft: '5px solid #ffff00',
                    },
                    iconSize: '20px',
                });
                console.log("%cJá existe uma conta com este e-mail.", 'color: #ffff00; background-color: #191900');
            } else {
                setErrorRegPatient("Falha no cadastro.");
                toast.error("Falha no cadastro.", {
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
                console.log("%cFalha no cadastro.", 'color: #cc0000; background-color: #140000');
            }
            errRegPatientRef.current.focus();
        }
    }

    // // Validação do cadastro do paciente.
    // const { register_patient } = useAuth();
    // const navigateRegisterPatient = useNavigate();

    // const [nameRegPatient, setNameRegPatient] = useState("");
    // const [emailRegPatient, setEmailRegPatient] = useState("");
    // const [confirmEmailRegPatient, setConfirmEmailRegPatient] = useState("");
    // const [passwordRegPatient, setPasswordRegPatient] = useState("");
    // const [confirmPasswordRegPatient, setConfirmPasswordRegPatient] = useState("")
    // const [errorRegPatient, setErrorRegPatient] = useState("");

    // const handleRegisterPatient = (event) => {
    //     event.preventDefault();
    //     if (!nameRegPatient || !emailRegPatient || !confirmEmailRegPatient || !passwordRegPatient || !confirmPasswordRegPatient) {
    //         setErrorRegPatient("Preencha todos os campos.");
    //         return;
    //     } else if (emailRegPatient !== confirmEmailRegPatient) {
    //         setErrorRegPatient("Os e-mails estão diferentes.")
    //         return;
    //     } else if (passwordRegPatient !== confirmPasswordRegPatient) {
    //         setErrorRegPatient("As senhas estão diferentes.")
    //         return;
    //     }

    //     const res = register_patient(nameRegPatient, emailRegPatient, passwordRegPatient);

    //     if (res) {
    //         setErrorRegPatient(res);
    //         return;
    //     }

    //     alert("Usuário cadastrado com sucesso!");
    //     navigateRegisterPatient("/paciente");
    //     console.log("navigateRegisterPatient AQUI!!!!");
    // };

    // Validação do cadastro do especialista.
    const userRegExpertRef = useRef();
    const errRegExpertRef = useRef();

    // Nome.
    const [nameRegExpert, setNameRegExpert] = useState("");
    const [validNameRegExpert, setValidNameRegExpert] = useState(false);
    const [regNameRegExpertFocus, setRegNameRegExpertFocus] = useState(false);

    // E-mail.
    const [emailRegExpert, setEmailRegExpert] = useState("");
    const [validEmailRegExpert, setValidEmailRegExpert] = useState(false);
    const [regEmailRegExpertFocus, setRegEmailRegExpertFocus] = useState(false);

    // Confirmação de e-mail. NAO SERÁ USADO PARA O ESPECIALISTA!
    // const [confirmEmailRegExpert, setConfirmEmailRegExpert] = useState("");
    // const [validConfirmEmailRegExpert, setValidConfirmEmailRegPExpert] = useState(false);
    // const [regConfirmEmailRegExpertFocus, setRegConfirmEmailRegExpertFocus] = useState(false);

    // Senha.
    const [passwordRegExpert, setPasswordRegExpert] = useState("");
    const [validPasswordRegExpert, setValidPasswordRegExpert] = useState(false);
    const [regPasswordRegExpertFocus, setRegPasswordRegExpertFocus] = useState(false);

    // Confirmação da senha.
    const [confirmPasswordRegExpert, setConfirmPasswordRegExpert] = useState("");
    const [validConfirmPasswordRegExpert, setValidConfirmPasswordRegExpert] = useState(false);
    const [regConfirmPasswordRegExpertFocus, setRegConfirmPasswordRegExpertFocus] = useState(false);

    // Número do celular.
    const [phoneNumber, setPhoneNumber] = useState("");
    const [validPhoneNumber, setValidPhoneNumber] = useState(false);
    const [regPhoneNumberFocus, setRegPhoneNumberFocus] = useState(false);

    // Número do registro profissional.
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [validRegistrationNumber, setValidRegistrationNumber] = useState(false);
    const [regRegistrationNumberFocus, setRegRegistrationNumberFocus] = useState(false);

    // Estados.
    const [states, setStates] = useState("");
    const [validStates, setValidStates] = useState(false);
    const [regStatesFocus, setRegStatesFocus] = useState(false);

    // Checkbox.
    const [checkboxRegExpert, setCheckboxRegExpert] = useState(false);
    const [validcheckboxRegExpert, setValidCheckboxRegExpert] = useState(false);

    // Mensagem de erro.
    const [errorRegExpert, setErrorRegExpert] = useState("");
    const [successRegExpert, setSuccessRegExpert] = useState(false);

    // Insere o foco.
    useEffect(() => {
        userRegExpertRef.current.focus();
    }, [])

    // Para o nome.
    useEffect(() => {
        const result = NAME_REGEX.test(nameRegExpert);
        console.log("Name validation:", result);
        console.log("Full Name:", nameRegExpert);
        setValidNameRegExpert(result);
    }, [nameRegExpert])

    // Para a e-mail.
    useEffect(() => {
        const result = EMAIL_REGEX.test(emailRegExpert);
        console.log("Email validation:", result);
        console.log("Email:", emailRegExpert);
        setValidEmailRegExpert(result);
    }, [emailRegExpert]);

    // Para a confirmação do e-mail. NAO SERÁ USADO PARA O ESPECIALISTA!
    // useEffect(() => {
    //     console.log("Email Confirmation:", confirmEmailRegExpert);
    //     const confirmEmailIsValid = emailRegExpert === confirmEmailRegExpert && confirmEmailRegExpert !== '';
    //     console.log("Email Confirmation Validation:", confirmEmailIsValid);
    //     setValidEmailRegExpert(confirmEmailIsValid);
    // }, [emailRegExpert, confirmEmailRegExpert]);

    // Para a senha.
    useEffect(() => {
        const result = PASSWORD_REGEX.test(passwordRegExpert);
        console.log("Password Validation:", result);
        console.log("Email:", emailRegExpert);
        setValidPasswordRegExpert(result);
        console.log("Password:", passwordRegExpert);
    }, [passwordRegExpert]);

    // Para a confirmação da senha.
    useEffect(() => {
        console.log("Password Confirmation:", confirmPasswordRegExpert);
        const confirmPasswordIsValid = passwordRegExpert === confirmPasswordRegExpert && confirmPasswordRegExpert !== '';
        console.log("Password Confirmation Validation:", confirmPasswordIsValid);
        setValidConfirmPasswordRegExpert(confirmPasswordIsValid);
    }, [passwordRegExpert, confirmPasswordRegExpert]);

    // Número do celular.
    useEffect(() => {
        const result = PHONE_REGEX.test(phoneNumber);
        console.log("Phone validation:", result);
        console.log("Phone:", phoneNumber);
        setValidPhoneNumber(result);
    }, [phoneNumber])

    // Número do registro profissional.
    useEffect(() => {
        const result = PROFESSIONAL_REGEX.test(registrationNumber);
        console.log("License validation:", result);
        console.log("License:", registrationNumber);
        setValidRegistrationNumber(result);
    }, [registrationNumber])

    // Estados.
    useEffect(() => {
        // const result = states;
        // O state não está vazio?
        const result = states !== "";
        console.log("States Validation:", result);
        console.log("Select:", states);
        setValidStates(result);
    }, [states])

    // Termos.
    useEffect(() => {
        const result = checkboxRegExpert;
        console.log("Checkbox Validation:", result);
        console.log("Checkbox:", checkboxRegExpert);
        setValidCheckboxRegExpert(result);
    }, [checkboxRegExpert])

    // Mensagem de erro.
    // useEffect(() => {
    //     setErrorRegExpert('');
    // }, [nameRegExpert, emailRegExpert, confirmEmailRegExpert, passwordRegExpert, confirmPasswordRegExpert, phoneNumber, registrationNumber, states, checkboxRegExpert])

    // Mensagem de erro.
    useEffect(() => {
        setErrorRegExpert('');
    }, [nameRegExpert, emailRegExpert, passwordRegExpert, confirmPasswordRegExpert, phoneNumber, registrationNumber, states, checkboxRegExpert])

    const handleRegisterExpert = async (event) => {
        event.preventDefault();

        console.log("%cRegistrando especialista...", 'color: #189bcc; background-color: #020f14');

        const ExpertName = NAME_REGEX.test(nameRegExpert);
        const ExpertEmail = EMAIL_REGEX.test(emailRegExpert);
        const ExpertPassword = PASSWORD_REGEX.test(passwordRegExpert);
        const ExpertPhone = PHONE_REGEX.test(phoneNumber);
        const ExpertProfessional = PROFESSIONAL_REGEX.test(registrationNumber);

        if (!ExpertName || !ExpertEmail || !ExpertPassword || !ExpertPhone || !ExpertProfessional || !validStates || !validcheckboxRegExpert) {
            setErrorRegExpert('Cadastro inválido!');
            toast.error("Cadastro inválido!", {
                icon: '⚠️',
                position: 'top-right !important',
                style: {
                    background: '#190c08',
                    color: '#F7F6FB',
                    width: '205px',
                    height: '50px',
                    fontSize: '16px',
                    borderLeft: '5px solid #ff7f50',
                },
                iconSize: '20px',
            });
            console.log("%cCadastro inválido!", 'color: #ff7f50; background-color: #190c08');
            return;
        }

        try {
            const responseRegExpert = await axios.post(
                REGISTER_EXPERT_URL,
                JSON.stringify({ expertUser: nameRegExpert, expertEmail: emailRegExpert, expertPassword: passwordRegExpert, expertPhone: phoneNumber, expertProfessional: registrationNumber, expertStates: states, expertTerms: checkboxRegExpert }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(responseRegExpert.data);
            // console.log(responseRegExpert.accessTokenRegExpert);
            console.log(responseRegExpert.accessToken);
            console.log(JSON.stringify(responseRegExpert))
            setSuccessRegExpert(true);
            toast.success("Cadastro realizado com sucesso!", {
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
            console.log("%cCadastro realizado com sucesso!", 'color: #00ff52; background-color: #001908');

        } catch (err) {
            if (!err?.response) {
                setErrorRegExpert("Sem resposta do servidor.");
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
            } else if (err.response?.status === 409) {
                setErrorRegExpert("Já existe uma conta como esse e-mail.");
                toast.error("Já existe uma conta com este e-mail.", {
                    icon: '🔒',
                    position: 'top-right !important',
                    style: {
                        background: '#191900',
                        color: '#F7F6FB',
                        width: '350px',
                        height: '50px',
                        fontSize: '16px',
                        borderLeft: '5px solid #ffff00',
                    },
                    iconSize: '20px',
                });
                console.log("%cJá existe uma conta com este e-mail.", 'color: #ffff00; background-color: #191900');
            } else {
                setErrorRegExpert("Falha no cadastro.");
                toast.error("Falha no cadastro.", {
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
                console.log("%cFalha no cadastro.", 'color: #cc0000; background-color: #140000');
            }
            errRegExpertRef.current.focus();
        }
    }

    // Validação do cadastro do psicólogo.
    // const { register_expert } = useAuth();
    // const navigateRegisterExpert = useNavigate();

    // const [nameRegExpert, setNameRegExpert] = useState("");
    // const [emailRegExpert, setEmailRegExpert] = useState("");
    // const [confirmEmailRegExpert, setConfirmEmailRegExpert] = useState("");
    // const [passwordRegExpert, setPasswordRegExpert] = useState("");
    // const [confirmPasswordRegExpert, setConfirmPasswordRegExpert] = useState("")
    // const [registrationNumberRegExpert, setRegistrationNumberRegExpert] = useState("");
    // const [errorRegExpert, setErrorRegExpert] = useState("");

    // const handleRegisterExpert = (event) => {
    //     event.preventDefault();
    //     if (!nameRegExpert || !emailRegExpert || !confirmEmailRegExpert || !passwordRegExpert || !confirmPasswordRegExpert || !registrationNumberRegExpert) {
    //         setErrorRegExpert("Preencha todos os campos.");
    //         return;
    //     } else if (emailRegExpert !== confirmEmailRegExpert) {
    //         setErrorRegExpert("Os e-mails estão diferentes.")
    //         return;
    //     } else if (passwordRegExpert !== confirmPasswordRegExpert) {
    //         setErrorRegExpert("As senhas estão diferentes.")
    //         return;
    //     }

    //     const res = register_expert(nameRegExpert, emailRegExpert, passwordRegExpert, registrationNumberRegExpert);

    //     if (res) {
    //         setErrorRegExpert(res);
    //         return;
    //     }

    //     alert("Usuário cadastrado com sucesso!");
    //     navigateRegisterExpert("/especialista");
    // };

    return (
        <>
            <Toaster />
            <section className={styles.signUp_patient_expert_body}>
                <div className={styles.signUp_patient_expert_container}>
                    <div className={isSignUpExpert ? styles.right_panel_active : ''}>

                        {/* Formulário de cadastro do Especialista. */}
                        <section className={styles.signUp_expert}>

                            <form action="#" className={styles.signUp_patient_expert_form} role="form" aria-label="Formulário de cadastro do especialista" onSubmit={handleRegisterExpert}>

                                <legend>
                                    <h1 className={styles.signUp_patient_expert_title}>Cadastrar Especialista</h1>
                                </legend>

                                {/* Não será utilizado para o especialista. */}
                                <div className={styles.signUp_patient_expert_social_container}>
                                    {/* <a href="#" className={`${styles.signUp_patient_expert_a} ${styles.signUp_patient_expert_social}`}><FaGooglePlusG /></a>
                                    <a href="#" className={`${styles.signUp_patient_expert_a} ${styles.signUp_patient_expert_social}`}><FaFacebookF /></a>
                                    <a href="#" className={`${styles.signUp_patient_expert_a} ${styles.signUp_patient_expert_social}`}><FaInstagram /></a>
                                    <a href="#" className={`${styles.signUp_patient_expert_a} ${styles.signUp_patient_expert_social}`}><FaXTwitter /></a> */}
                                </div>

                                {/* <p className={styles.signUp_patient_expert_paragraph}>Ou use o seu e-mail para cadastrar-se</p> */}

                                <div className={styles.signUp_patient_expert_container_input}>

                                    {/* Nome. */}
                                    <label htmlFor='name_expert'>

                                        {/* <span className={validNameRegExpert ? "valid" : "hide"}><FaRegThumbsUp /></span>
                                            <span className={validNameRegExpert || !nameRegExpert ? "hide" : "invalid"}><FaRegThumbsDown /></span> */}

                                        <input
                                            type="text"
                                            name='name'
                                            id='name_expert'
                                            ref={userRegExpertRef}
                                            placeholder='Nome completo'
                                            value={nameRegExpert}
                                            onChange={(event) => [setNameRegExpert(event.target.value), setErrorRegExpert("")]}
                                            required
                                            aria-label="Digite seu nome completo aqui"
                                            aria-invalid={validNameRegExpert ? "false" : "true"}
                                            aria-describedby='regExpertIdNote'
                                            role="textbox"
                                            autoComplete='off'
                                            onFocus={() => setRegNameRegExpertFocus(true)}
                                            onBlur={() => setRegNameRegExpertFocus(false)}
                                            className={styles.signUp_patient_expert_input} /><FaRegUser className={styles.signUp_patient_expert_ico2} aria-hidden="true" />

                                        <p id='regExpertIdNote' className={regNameRegExpertFocus && nameRegExpert && !validNameRegExpert ? styles.instructions : styles.offscreen}>
                                            <span className={styles.content}><FiAlertTriangle className={styles.signUp_patient_expert_icoo} /> O nome completo deve ter entre 10 e 100 caracteres e começar com uma letra maiúscula ou minúscula, seguida por letras maiúsculas ou minúsculas.
                                            </span>
                                        </p>
                                    </label>

                                    {/* E-mail. */}
                                    <label htmlFor='email_expert'>

                                        {/* <span className={validEmailRegExpert ? "valid" : "hide"}></span>
                                        <span className={validEmailRegExpert || !emailRegExpert ? "hide" : "invalid"}></span> */}

                                        <input
                                            type="email"
                                            name='email'
                                            id='email_expert'
                                            placeholder='E-mail'
                                            value={emailRegExpert} onChange={(event) => [setEmailRegExpert(event.target.value), setErrorRegExpert("")]}
                                            required
                                            aria-label="Digite seu e-mail aqui"
                                            role="textbox"
                                            aria-invalid={validEmailRegExpert ? "false" : "true"}
                                            aria-describedby='regEmailExpertentNote'
                                            autoComplete='off'
                                            onFocus={() => setRegEmailRegExpertFocus(true)}
                                            onBlur={() => setRegEmailRegExpertFocus(false)}
                                            className={styles.signUp_patient_expert_input} /><MdAlternateEmail className={styles.signUp_patient_expert_ico2} aria-hidden="true" />

                                        <p id='regEmailExpertNote' className={regEmailRegExpertFocus && !validEmailRegExpert ? styles.instructions : styles.offscreen}>
                                            <span className={styles.content}><FiAlertTriangle className={styles.signUp_patient_expert_icoo} /> exemplo123@exemplo.com</span>
                                        </p>
                                    </label>

                                    {/* Confirmação de e-mail. NAO SERÁ USADO PARA O ESPECIALISTA! */}
                                    <div>
                                        {/* <label htmlFor='confirmEmail_expert'>

                                            <span className={validConfirmEmailRegExpert && confirmEmailRegExpert ? "valid" : "hide"}></span>
                                            <span className={validConfirmEmailRegExpert || !confirmEmailRegExpert ? "hide" : "invalid"}></span>

                                            <input
                                                type="email"
                                                name='email'
                                                id='confirmEmail_expert'
                                                placeholder='Confirme o seu e-mail'
                                                value={confirmEmailRegExpert} onChange={(event) => [setConfirmEmailRegExpert(event.target.value), setErrorRegExpert("")]}
                                                required
                                                aria-label="Digite seu e-mail aqui para confirmá-lo"
                                                aria-invalid={validConfirmEmailRegExpert ? "false" : "true"}
                                                aria-describedby='regConfirmEmailExpertNote'
                                                role="textbox"
                                                autoComplete='off'
                                                onFocus={() => setRegConfirmEmailRegExpertFocus(true)}
                                                onBlur={() => setRegConfirmEmailRegExpertFocus(false)}
                                                className={styles.signUp_patient_expert_input} /><MdAlternateEmail className={styles.signUp_patient_expert_ico2} aria-hidden="true" />

                                            <p id='regConfirmPasswordExpertNote' className={regConfirmEmailRegExpertFocus && !validConfirmEmailRegExpert ? styles.instructions : styles.offscreen}>
                                                <span className={styles.content}>
                                                    <FiAlertTriangle className={styles.signUp_patient_expert_icoo} /> O e-mail deve ser igual.</span>
                                            </p>
                                        </label> */}
                                    </div>

                                    {/* Senha. */}
                                    <label htmlFor='password_expert'>

                                        {/* <span className={validPasswordRegExpert ? "valid" : "hide"}></span>
                                        <span className={validPasswordRegExpert || !passwordRegExpert ? "hide" : "invalid"}></span> */}

                                        <input
                                            type={showPasswordRgExpert ? "text" : "password"} name='password'
                                            id='password_expert'
                                            placeholder='Senha'
                                            required
                                            aria-label="Digite sua senha aqui"
                                            aria-invalid={validPasswordRegExpert ? "false" : "true"}
                                            aria-describedby='regPasswordExpertNote'
                                            value={passwordRegExpert}
                                            onChange={(event) => [setPasswordRegExpert(event.target.value), setErrorRegExpert("")]}
                                            role="textbox"
                                            autoComplete='off'
                                            onFocus={() => setRegPasswordRegExpertFocus(true)}
                                            onBlur={() => setRegPasswordRegExpertFocus(false)}
                                            className={styles.signUp_patient_expert_input} /> {showPasswordRgExpert ? (
                                                <ImEye
                                                    className={styles.signUp_patient_expert_ico}
                                                    onClick={togglePasswordVisibilityRgExpert} aria-label="Esconder senha"
                                                    role="button"
                                                />
                                            ) : (
                                                <ImEyeBlocked
                                                    className={styles.signUp_patient_expert_ico}
                                                    onClick={togglePasswordVisibilityRgExpert} aria-label="Mostrar senha"
                                                    role="button"
                                                />
                                            )}

                                        <p id='regPasswordExpertNote' className={regPasswordRegExpertFocus && !validPasswordRegExpert ? styles.instructions : styles.offscreen}>
                                            <span className={styles.content}><FiAlertTriangle className={styles.signUp_patient_expert_icoo} /> A senha deve ter entre 8 e 24 caracteres, contendo pelo menos uma letra maiúscula e uma minúscula, assim como pelo menos um dígito de 0 a 9 e um caractere especial.</span>
                                        </p>
                                    </label>

                                    {/* Confirmação de senha. */}
                                    <label htmlFor='confirmPassword_expert'>

                                        {/* <span className={validConfirmPasswordRegExpert && confirmPasswordRegExpert ? "valid" : "hide"}></span>
                                        <span className={validConfirmPasswordRegExpert || !confirmPasswordRegExpert ? "hide" : "invalid"}></span> */}

                                        <input type={showConfirmPasswordRgExpert ? "text" : "password"}
                                            name='password'
                                            id='confirmPassword_expert'
                                            placeholder='Confirme a sua senha'
                                            required
                                            aria-label="Digite sua senha aqui para confirmá-la"
                                            aria-invalid={validConfirmPasswordRegExpert ? "false" : "true"}
                                            aria-describedby='regConfirmPasswordExpertNote'
                                            value={confirmPasswordRegExpert}
                                            onChange={(event) => [setConfirmPasswordRegExpert(event.target.value), setErrorRegExpert("")]}
                                            role="textbox"
                                            autoComplete='off'
                                            onFocus={() => setRegConfirmPasswordRegExpertFocus(true)}
                                            onBlur={() => setRegConfirmPasswordRegExpertFocus(false)}
                                            className={styles.signUp_patient_expert_input} /> {showConfirmPasswordRgExpert ? (
                                                <ImEye
                                                    className={styles.signUp_patient_expert_ico}
                                                    onClick={toggleConfirmPasswordVisibilityRgExpert} aria-label="Esconder senha"
                                                    role="button"
                                                />
                                            ) : (
                                                <ImEyeBlocked
                                                    className={styles.signUp_patient_expert_ico}
                                                    onClick={toggleConfirmPasswordVisibilityRgExpert} aria-label="Mostrar senha"
                                                    role="button"
                                                />
                                            )}

                                        <p id='regConfirmPasswordExpertNote' className={regConfirmPasswordRegExpertFocus && !validConfirmPasswordRegExpert ? styles.instructions : styles.offscreen}>
                                            <span className={styles.content}><FiAlertTriangle className={styles.signUp_patient_expert_icoo} /> A senha deve ser igual.</span>
                                        </p>
                                    </label>

                                    {/* Número do celular. */}
                                    <label htmlFor='phone_expert'>

                                        {/* <span className={validPhoneNumber ? "valid" : "hide"}></span>
                                            <span className={validPhoneNumber || !phoneNumber ? "hide" : "invalid"}></span> */}

                                        <input
                                            type="text"
                                            name='phone'
                                            id='phone_expert'
                                            placeholder='Número de celular'
                                            value={phoneNumber}
                                            onChange={(event) => [setPhoneNumber(event.target.value), setErrorRegExpert("")]}
                                            required
                                            aria-label="Digite seu número de telefone celular aqui"
                                            aria-invalid={validPhoneNumber ? "false" : "true"}
                                            aria-describedby='PhoneNumberNote'
                                            role="textbox"
                                            autoComplete='off'
                                            onFocus={() => setRegPhoneNumberFocus(true)}
                                            onBlur={() => setRegPhoneNumberFocus(false)}
                                            className={styles.signUp_patient_expert_input} /><HiDevicePhoneMobile className={styles.signUp_patient_expert_ico2} aria-hidden="true" />

                                        <p id='PhoneNumberNote' className={regPhoneNumberFocus && !validPhoneNumber ? styles.instructions : styles.offscreen}>
                                            <span className={styles.content}><FiAlertTriangle className={styles.signUp_patient_expert_icoo} /> Digite o número do seu celular com o código de área. Exemplo: 11 90000 - 0000.</span>
                                        </p>
                                    </label>

                                    {/* Número do registro profissional. */}
                                    <label htmlFor='license_expert'>

                                        {/* <span className={validRegistrationNumber ? "valid" : "hide"}></span>
                                            <span className={validRegistrationNumber || !registrationNumber ? "hide" : "invalid"}></span> */}

                                        <input
                                            type="text"
                                            name='license'
                                            id='license_expert'
                                            placeholder='Número de registro profissional'
                                            value={registrationNumber}
                                            onChange={(event) => [setRegistrationNumber(event.target.value), setErrorRegExpert("")]}
                                            required
                                            aria-label="Digite seu número de registro profissional aqui"
                                            aria-invalid={validRegistrationNumber ? "false" : "true"}
                                            aria-describedby='RegistrationLicenseNote'
                                            role="textbox"
                                            autoComplete='off'
                                            onFocus={() => setRegRegistrationNumberFocus(true)}
                                            onBlur={() => setRegRegistrationNumberFocus(false)}
                                            className={styles.signUp_patient_expert_input} /><RiMentalHealthLine className={styles.signUp_patient_expert_ico2} aria-hidden="true" />

                                        <p id='RegistrationLicenseNote' className={regRegistrationNumberFocus && !validRegistrationNumber ? styles.instructions : styles.offscreen}>
                                            <span className={styles.content}><FiAlertTriangle className={styles.signUp_patient_expert_icoo} /> O número de registro profissional deve começar com a sigla correspondente, seguida por um - , seguido por uma sequência numérica. Pode conter / ou -, e o restante dos dígitos. Exemplo: CRP-00/0000.</span>
                                        </p>
                                    </label>

                                    {/* Estados. */}
                                    <label htmlFor='states_expert'>
                                        {/* {selectOpen ? (
                                            <IoIosArrowUp
                                                className={styles.signUp_patient_expert_arrow}
                                                onClick={toggleSelectVisibility}
                                                aria-label="Fechar seleção"
                                                role="button"
                                            />
                                        ) : (
                                            <IoIosArrowDown
                                                className={styles.signUp_patient_expert_arrow}
                                                onClick={toggleSelectVisibility}
                                                aria-label="Abrir seleção"
                                                role="button"
                                            />
                                        )} */}

                                        {/* <span className={validPhoneNumber ? "valid" : "hide"}></span>
                                            <span className={validPhoneNumber || !phoneNumber ? "hide" : "invalid"}></span> */}

                                        <div>
                                            <IoIosArrowDown className={styles.signUp_patient_expert_select_icon} />
                                        </div>

                                        <select
                                            name='states'
                                            id="states_expert"
                                            value={states}
                                            onChange={(event) => { setStates(event.target.value), setErrorRegExpert("") }}
                                            required
                                            aria-label="Selecione o estado em que habita aqui"
                                            aria-invalid={validStates ? "false" : "true"}
                                            aria-describedby='statesInstructions'
                                            aria-haspopup="true"
                                            role="listbox"
                                            autoComplete='off'
                                            onFocus={() => setRegStatesFocus(true)}
                                            onBlur={() => setRegStatesFocus(false)}
                                            className={styles.signUp_patient_expert_select}>

                                            <option value="">Selecione o estado</option>
                                            <option value="AC">Acre</option>
                                            <option value="AL">Alagoas</option>
                                            <option value="AP">Amapá</option>
                                            <option value="AM">Amazonas</option>
                                            <option value="BA">Bahia</option>
                                            <option value="CE">Ceará</option>
                                            <option value="DF">Distrito Federal</option>
                                            <option value="ES">Espírito Santo</option>
                                            <option value="GO">Goiás</option>
                                            <option value="MA">Maranhão</option>
                                            <option value="MT">Mato Grosso</option>
                                            <option value="MS">Mato Grosso do Sul</option>
                                            <option value="MG">Minas Gerais</option>
                                            <option value="PA">Pará</option>
                                            <option value="PB">Paraíba</option>
                                            <option value="PR">Paraná</option>
                                            <option value="PE">Pernambuco</option>
                                            <option value="PI">Piauí</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="RN">Rio Grande do Norte</option>
                                            <option value="RS">Rio Grande do Sul</option>
                                            <option value="RO">Rondônia</option>
                                            <option value="RR">Roraima</option>
                                            <option value="SC">Santa Catarina</option>
                                            <option value="SP">São Paulo</option>
                                            <option value="SE">Sergipe</option>
                                            <option value="TO">Tocantins</option>
                                        </select>

                                        <p id='statesInstructions' className={regStatesFocus && !validStates ? styles.instructions : styles.offscreen}>
                                            <span className={styles.content}><FiAlertTriangle className={styles.signUp_patient_expert_icoo} /> Por favor, selecione um estado.</span>
                                        </p>
                                    </label>
                                </div>

                                <p style={{ color: 'red' }} ref={errRegExpertRef} className={errorRegExpert ? "errorregexpert" : "offscreen"} aria-live='assertive'>{errorRegExpert}</p>

                                {/* Checkbox com os termos e política. */}
                                <div className={styles.signUp_patient_expert_terms}>
                                    <label htmlFor="agreeTerms_expert" className={styles.signUp_patient_expert_paragraph}>
                                        <input
                                            type="checkbox"
                                            name='terms'
                                            id="agreeTerms_expert"
                                            checked={checkboxRegExpert}
                                            onChange={(event) => {
                                                setCheckboxRegExpert(event.target.checked);
                                                setErrorRegExpert("");
                                            }}
                                            required
                                            aria-label="Clique para concordar com os termos e política"
                                            aria-invalid={validcheckboxRegExpert ? "false" : "true"}
                                            role="checkbox"
                                            autoComplete='off'
                                            className={styles.signUp_patient_expert_checkbox} /> Concordo com os
                                        <Link to="/termos-de-servico" className={`${styles.signUp_patient_expert_a} ${styles.signUp_patient_expert_account}`} aria-label="Termos de Serviço"> Termos de Serviço</Link> e a
                                        <Link to="/politica-de-privacidade" className={`${styles.signUp_patient_expert_a} ${styles.signUp_patient_expert_account}`} aria-label="Política de Privacidade"> Política de Privacidade</Link>
                                    </label>
                                </div><br /><br />

                                <button type="submit" onClick={() => { }} className={`${styles.signUp_patient_expert_btn} ${styles.signUp_patient_expert_btn_us_link}`} aria-label="Enviar formulário de cadastro do especialista">Cadastrar</button>

                                <p className={styles.signUp_patient_expert_paragraph}>
                                    Já possui uma conta?{' '}
                                    <Link to="/entrar?type=especialista" className={`${styles.signUp_patient_expert_a} ${styles.signUp_patient_expert_account}`} aria-label="Já possui uma conta?"> Entrar na conta</Link>
                                </p>

                            </form>
                        </section>

                        {/* Formulário de cadastro do Membro. */}
                        <section className={styles.signUp_patient}>

                            <form action="#" className={styles.signUp_patient_expert_form} role="form" aria-label="Formulário de cadastro do membro" onSubmit={handleRegisterPatient}>

                                <legend>
                                    <h1 className={styles.signUp_patient_expert_title}>Cadastrar Membro</h1>
                                </legend>

                                <div className={styles.signUp_patient_expert_social_container}>
                                    <a href="#" className={`${styles.signUp_patient_expert_a} ${styles.signUp_patient_expert_social}`}><FaGooglePlusG /></a>
                                    <a href="#" className={`${styles.signUp_patient_expert_a} ${styles.signUp_patient_expert_social}`}><FaFacebookF /></a>
                                    <a href="#" className={`${styles.signUp_patient_expert_a} ${styles.signUp_patient_expert_social}`}><FaInstagram /></a>
                                    <a href="#" className={`${styles.signUp_patient_expert_a} ${styles.signUp_patient_expert_social}`}><FaXTwitter /></a>
                                </div>

                                <p className={styles.signUp_patient_expert_paragraph}>Ou use o seu e-mail para cadastrar-se</p>

                                <div className={styles.signUp_patient_expert_container_input}>

                                    {/* Nome. */}
                                    <label htmlFor='name_patient'>

                                        {/* <span className={validNameRegPatient ? "valid" : "hide"}><FaRegThumbsUp /></span>
                                        <span className={validNameRegPatient || !nameRegPatient ? "hide" : "invalid"}><FaRegThumbsDown /></span> */}

                                        <input
                                            type="text"
                                            name='name'
                                            id='name_patient'
                                            ref={userRegPatientRef}
                                            placeholder='Nome completo'
                                            value={nameRegPatient}
                                            onChange={(event) => [setNameRegPatient(event.target.value), setErrorRegPatient("")]}
                                            required
                                            aria-label="Digite seu nome completo aqui"
                                            aria-invalid={validNameRegPatient ? "false" : "true"}
                                            aria-describedby='regPatientIdNote'
                                            role="textbox"
                                            autoComplete='off'
                                            onFocus={() => setRegNameRegPatientFocus(true)}
                                            onBlur={() => setRegNameRegPatientFocus(false)}
                                            className={styles.signUp_patient_expert_input} /><FaRegUser className={styles.signUp_patient_expert_ico2} aria-hidden="true" />

                                        <p id='regPatientIdNote' className={regNameRegPatientFocus && nameRegPatient && !validNameRegPatient ? styles.instructions : styles.offscreen}>
                                            <span className={styles.content}><FiAlertTriangle className={styles.signUp_patient_expert_icoo} /> O nome completo deve ter entre 10 e 100 caracteres e começar com uma letra maiúscula ou minúscula, seguida por letras maiúsculas ou minúsculas.
                                            </span>
                                        </p>
                                    </label>

                                    {/* E-mail. */}
                                    <label htmlFor='email_patient'>

                                        {/* <span className={validEmailRegPatient ? "valid" : "hide"}></span>
                                        <span className={validEmailRegPatient || !emailRegPatient ? "hide" : "invalid"}></span> */}

                                        <input
                                            type="email"
                                            name='email'
                                            id='email_patient'
                                            placeholder='E-mail'
                                            value={emailRegPatient}
                                            onChange={(event) => [setEmailRegPatient(event.target.value), setErrorRegPatient("")]}
                                            required
                                            aria-label="Digite seu e-mail aqui"
                                            aria-invalid={validEmailRegPatient ? "false" : "true"}
                                            aria-describedby='regEmailPatientNote'
                                            role="textbox"
                                            autoComplete='off'
                                            onFocus={() => setRegEmailRegPatientFocus(true)}
                                            onBlur={() => setRegEmailRegPatientFocus(false)}
                                            className={styles.signUp_patient_expert_input} /><MdAlternateEmail className={styles.signUp_patient_expert_ico2} aria-hidden="true" />

                                        <p id='regEmailPatientNote' className={regEmailRegPatientFocus && !validEmailRegPatient ? styles.instructions : styles.offscreen}>
                                            <span className={styles.content}><FiAlertTriangle className={styles.signUp_patient_expert_icoo} /> exemplo123@exemplo.com</span>
                                        </p>
                                    </label>


                                    {/* Confirmação de e-mail. */}
                                    <label htmlFor='confirmEmail_patient'>

                                        {/* <span className={validConfirmEmailRegPatient && confirmEmailRegPatient ? "valid" : "hide"}></span>
                                        <span className={validConfirmEmailRegPatient || !confirmEmailRegPatient ? "hide" : "invalid"}></span> */}

                                        <input
                                            type="email"
                                            name='email'
                                            id='confirmEmail_patient'
                                            placeholder='Confirme o seu e-mail'
                                            value={confirmEmailRegPatient}
                                            onChange={(event) => [setConfirmEmailRegPatient(event.target.value), setErrorRegPatient("")]}
                                            required
                                            aria-label="Digite seu e-mail aqui para confirmá-lo"
                                            aria-invalid={validConfirmEmailRegPatient ? "false" : "true"}
                                            aria-describedby='regConfirmEmailPatientNote'
                                            role="textbox"
                                            autoComplete='off'
                                            onFocus={() => setRegConfirmEmailRegPatientFocus(true)}
                                            onBlur={() => setRegConfirmEmailRegPatientFocus(false)}
                                            className={styles.signUp_patient_expert_input} /><MdAlternateEmail className={styles.signUp_patient_expert_ico2} aria-hidden="true" />

                                        <p id='regConfirmPasswordPatientNote' className={regConfirmEmailRegPatientFocus && !validConfirmEmailRegPatient ? styles.instructions : styles.offscreen}>
                                            <span className={styles.content}>
                                                <FiAlertTriangle className={styles.signUp_patient_expert_icoo} /> O e-mail deve ser igual.</span>
                                        </p>
                                    </label>

                                    {/* Senha. */}
                                    <label htmlFor='password_patient'>

                                        <span className={validPasswordRegPatient ? "valid" : "hide"}></span>
                                        <span className={validPasswordRegPatient || !passwordRegPatient ? "hide" : "invalid"}></span>

                                        <input
                                            type={showPasswordRgPatient ? "text" : "password"}
                                            name='password'
                                            id='password_patient'
                                            placeholder='Senha'
                                            required
                                            aria-label="Digite sua senha aqui"
                                            aria-invalid={validPasswordRegPatient ? "false" : "true"}
                                            aria-describedby='regPasswordPatientNote'
                                            value={passwordRegPatient}
                                            onChange={(event) => [setPasswordRegPatient(event.target.value), setErrorRegPatient("")]}
                                            role="textbox"
                                            autoComplete='off'
                                            onFocus={() => setRegPasswordRegPatientFocus(true)}
                                            onBlur={() => setRegPasswordRegPatientFocus(false)}
                                            className={styles.signUp_patient_expert_input} /> {showPasswordRgPatient ? (
                                                <ImEye
                                                    className={styles.signUp_patient_expert_ico}
                                                    onClick={togglePasswordVisibilityRgPatient} aria-label="Esconder senha"
                                                    role="button"
                                                />
                                            ) : (
                                                <ImEyeBlocked
                                                    className={styles.signUp_patient_expert_ico}
                                                    onClick={togglePasswordVisibilityRgPatient} aria-label="Mostrar senha"
                                                    role="button"
                                                />
                                            )}

                                        <p id='regPasswordPatientNote' className={regPasswordRegPatientFocus && !validPasswordRegPatient ? styles.instructions : styles.offscreen}>
                                            <span className={styles.content}><FiAlertTriangle className={styles.signUp_patient_expert_icoo} /> A senha deve ter entre 8 e 24 caracteres, contendo pelo menos uma letra maiúscula e uma minúscula, assim como pelo menos um dígito de 0 a 9 e um caractere especial.</span>
                                        </p>
                                    </label>

                                    {/* Confirmação de senha. */}
                                    <label htmlFor='confirmPassword_patient'>

                                        {/* <span className={validConfirmPasswordRegPatient && confirmPasswordRegPatient ? "valid" : "hide"}></span>
                                        <span className={validConfirmPasswordRegPatient || !confirmPasswordRegPatient ? "hide" : "invalid"}></span> */}

                                        <input
                                            type={showConfirmPasswordRgPatient ? "text" : "password"}
                                            name='password'
                                            id='confirmPassword_patient'
                                            placeholder='Confirme a sua senha'
                                            required
                                            aria-label="Digite sua senha aqui para confirmá-la"
                                            aria-invalid={validConfirmPasswordRegPatient ? "false" : "true"}
                                            aria-describedby='regConfirmPasswordPatientNote'
                                            value={confirmPasswordRegPatient}
                                            onChange={(event) => [setConfirmPasswordRegPatient(event.target.value), setErrorRegPatient("")]}
                                            role="textbox"
                                            autoComplete='off'
                                            onFocus={() => setRegConfirmPasswordRegPatientFocus(true)}
                                            onBlur={() => setRegConfirmPasswordRegPatientFocus(false)}
                                            className={styles.signUp_patient_expert_input} />{showConfirmPasswordRgPatient ? (
                                                <ImEye
                                                    className={styles.signUp_patient_expert_ico}
                                                    onClick={toggleConfirmPasswordVisibilityRgPatient} aria-label="Esconder senha"
                                                    role="button"
                                                />
                                            ) : (
                                                <ImEyeBlocked
                                                    className={styles.signUp_patient_expert_ico}
                                                    onClick={toggleConfirmPasswordVisibilityRgPatient} aria-label="Mostrar senha"
                                                    role="button"
                                                />
                                            )}

                                        <p id='regConfirmPasswordPatientNote' className={regConfirmPasswordRegPatientFocus && !validConfirmPasswordRegPatient ? styles.instructions : styles.offscreen}>
                                            <span className={styles.content}><FiAlertTriangle className={styles.signUp_patient_expert_icoo} /> A senha deve ser igual.</span>
                                        </p>
                                    </label>
                                </div>

                                <p style={{ color: 'red' }} ref={errRegPatientRef} className={errorRegPatient ? "errorregpatient" : "offscreen"} aria-live='assertive'>{errorRegPatient}</p>

                                {/* Checkbox com os termos e política. */}
                                <div className={styles.signUp_patient_expert_terms}>
                                    <label htmlFor="agreeTerms_patient" className={styles.signUp_patient_expert_paragraph}>
                                        <input
                                            type="checkbox"
                                            name='terms'
                                            id="agreeTerms_patient"
                                            checked={checkboxRegPatient}
                                            onChange={(event) => {
                                                setCheckboxRegPatient(event.target.checked);
                                                setErrorRegPatient("");
                                            }}
                                            required
                                            aria-label="Clique para concordar com os termos e política"
                                            aria-invalid={validcheckboxRegPatient ? "false" : "true"}
                                            role="checkbox"
                                            autoComplete='off'
                                            className={styles.signUp_patient_expert_checkbox} /> Concordo com os
                                        <Link to="/termos-de-servico" className={`${styles.signUp_patient_expert_a} ${styles.signUp_patient_expert_account}`} aria-label="Termos de Serviço"> Termos de Serviço</Link> e a <Link to="/politica-de-privacidade" className={`${styles.signUp_patient_expert_a} ${styles.signUp_patient_expert_account}`} aria-label="Política de Privacidade"> Política de Privacidade</Link>.
                                    </label>
                                </div><br /><br />

                                <button type="submit" onClick={() => { }} className={`${styles.signUp_patient_expert_btn} ${styles.signUp_patient_expert_btn_us_link}`} aria-label="Enviar formulário de login do membro">Cadastrar</button>

                                <p className={styles.signUp_patient_expert_paragraph}>
                                    Já possui uma conta?{' '}
                                    <Link to="/entrar?type=membro" className={`${styles.signUp_patient_expert_a} ${styles.signUp_patient_expert_account}`} aria-label="Já possui uma conta?"> Entrar na conta</Link>
                                </p>

                            </form>
                        </section>

                        {/* <article className={styles.overlay_container} style={{ transform: isSignUpExpert ? 'translateX(-100%)' : 'translateX(0)' }}> */}
                        <article className={`${styles.overlay_container} ${isSignUpExpert ? styles.is_signUp_expert : ''} ${showWelcome ? styles.is_signUp_expert_visible : ''}`}>
                            <div className={`${styles.overlay} ${showWelcome ? styles.right_panel_active : ''}`}>

                                {/* Membro. */}
                                <section className={styles.overlay_left}>
                                    <h1 className={styles.signUp_patient_expert_title}>Olá, Membro!</h1>
                                    <p className={styles.signUp_patient_expert_paragraph_over}>Seja membro e conecte-se diretamente com um especialista comprometido em ajudá-lo a alcançar seus objetivos de saúde mental. Nossa plataforma oferece um espaço seguro para compartilhar suas preocupações, explorar sentimentos e receber orientação personalizada. Junte-se a nós hoje e dê o primeiro passo em direção a uma vida mais equilibrada e satisfatória.</p>
                                    {/* <button className={styles.signUp_expert_btn} onClick={toggleOverlay} aria-label="Alternar para formulário de cadastro de especialista">Cadastrar Membro</button> */}
                                    <button className={`${styles.signUp_expert_btn} ${styles.signUp_expert_btn_us_link}`} onClick={toggleOverlay} aria-label="Alternar para formulário de cadastro de especialista">Cadastrar Membro</button>
                                </section>

                                {/* Especialista. */}
                                <section className={styles.overlay_right}>
                                    <h1 className={styles.signUp_patient_expert_title}>Olá, Especialista!</h1>
                                    <p className={styles.signUp_patient_expert_paragraph_over}>Junte-se a nós para fazer a diferença na vida das pessoas. Ao se cadastrar como especialista em nossa plataforma, você terá a oportunidade de impactar positivamente seus clientes em cada sessão de terapia. Não espere mais para começar a ajudar aqueles que precisam de apoio. Cadastre-se agora e contribua para um futuro de saúde mental mais resiliente.</p>
                                    {/* <button className={styles.signUp_expert_btn} onClick={toggleOverlay} aria-label="Alternar para formulário de cadastro de membro">Cadastrar Especialista</button> */}
                                    <button className={`${styles.signUp_expert_btn} ${styles.signUp_expert_btn_us_link}`} onClick={toggleOverlay} aria-label="Alternar para formulário de cadastro de membro">Cadastrar Especialista</button>
                                </section>

                            </div>
                        </article>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Register