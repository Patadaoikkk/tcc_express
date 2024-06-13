import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "../api/axios";

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
    const navigate = useNavigate();

    useEffect(() => {
        const storedAuth = cookies.accessToken;
        if (storedAuth) {
            setAuth(storedAuth);
        }
    }, [cookies.accessToken]);

    // Contexto de autenticação do login do membro.
    const login_patient = async (email, password, checkbox) => {
        try {
            const response = await axios.post('http://localhost:5173/entrar?type=membro', {
                email,
                password,
                checkbox
            });

            const userData = response.data;
            setCookie('accessToken', userData.accessToken, { path: '/' });
            setAuth(userData);

            // Vai levar para a tela inicial do membro.
            navigate('/membro');

            return null;
        } catch (error) {
            return error.response.data.message;
        }
    };

    // Contexto de autenticação do login do especialista.
    const login_expert = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5173/entrar?type=especialista', {
                email,
                password
            });

            const userData = response.data;
            setCookie('accessToken', userData.accessToken, { path: '/' });
            setAuth(userData);

            // Vai levar para a tela inicial do especialista.
            navigate('/especialista');

            return null;
        } catch (error) {
            return error.response.data.message;
        }
    };

    // Contexto de autenticação do cadastro do membro.
    const register_patient = async (name, email, password, checkbox) => {
        try {
            const response = await axios.post('http://localhost:5173/cadastrar?type=membro', {
                name,
                email,
                password,
                checkbox
            });

            const userData = response.data;
            setCookie('accessToken', userData.accessToken, { path: '/' });
            setAuth(userData);

            // Vai levar para a tela inicial do membro.
            navigate('/membro');

            return null;
        } catch (error) {
            return error.response.data.message;
        }
    };

    // Contexto de autenticação do cadastro do especialista.
    const register_expert = async (name, email, password, phone, registrationNumber, states, checkbox) => {
        try {
            const response = await axios.post('http://localhost:5173/cadastrar?type=especialista', {
                name,
                email,
                password,
                phone,
                registrationNumber,
                states,
                checkbox
            });

            const userData = response.data;
            setCookie('accessToken', userData.accessToken, { path: '/' });
            setAuth(userData);

            // Vai levar para a tela inicial do especialista.
            navigate('/especialista');

            return null;
        } catch (error) {
            return error.response.data.message;
        }
    };

    // Contexto de autenticação do logout do membro.
    const logout_patient = () => {
        removeCookie('accessToken');
        setAuth(null);
        navigate('/entrar?type=membro');
    };

    // Contexto de autenticação do logout do especialista.
    const logout_expert = () => {
        removeCookie('accessToken');
        setAuth(null);
        navigate('/entrar?type=especialista');
    };

    // Contexto de Esqueceu a senha do membro.
    // const forgot_password_patient = async (email) => {
    //     try {
    //         await axios.post('http://localhost:5173/esqueceu-a-senha?type=membro', {
    //             email,
    //         });
    //         return true;
    //     } catch (error) {
    //         return error.response.data.message;
    //     }
    // };

    // Contexto de Esqueceu a senha do membro.
    const forgot_password_patient = async (email) => {
        try {
            const response = await axios.post('/http://localhost:5173/esqueceu-a-senha-membro', {
                email
            });
            console.log("Solicitando recuperação de senha para o email:", email);

            // const userData = response.data;
            // setCookie('accessToken', userData.accessToken, { path: '/' });
            // setAuth(userData);
            // return true;

            return response.data.success;
        } catch (error) {
            console.error("Erro ao solicitar a recuperação de senha:", error);
            return false;
        }
    };

    // Contexto de Redefinição de senha do membro.
    const reset_password_patient = async (id, token, newPassword) => {
        try {
            const response = await axios.post('/http://localhost:5173/redefinir-a-senha-membro/:id/:token?type=membro', {
                id,
                token,
                newPassword
            });
            console.log("Redefinindo a senha para o id:", id, "com o token:", token, "e a nova senha:", newPassword);

            return response.data.success;
        } catch (error) {
            console.error("Erro ao redefinir a senha:", error);
            return false;
        }
    };

    return (
        <AuthContext.Provider value={{ auth, login_patient, login_expert, register_patient, register_expert, logout_patient, logout_expert, forgot_password_patient, reset_password_patient }}>
            {children}
        </AuthContext.Provider>
    );
};