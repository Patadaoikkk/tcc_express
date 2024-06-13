import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { useEffect, useState } from 'react';
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import { IoIosPartlySunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import toast, { Toaster } from 'react-hot-toast';
import { SiJcb } from 'react-icons/si';

function Header() {

    // Header transparente até certo ponto.
    const [headerBg, setHeaderBg] = useState(false);
    const changeBgColor = () => {
        // console.log(window.scrollY); // Verifica o scroll da página.
        if (window.scrollY >= 605) {
            setHeaderBg(true)
        } else {
            setHeaderBg(false)
        }
    }

    window.addEventListener('scroll', changeBgColor);

    // Música.
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    useEffect(() => {
        const storedMusicState = localStorage.getItem('isMusicPlaying');
        if (storedMusicState !== null) {
            setIsMusicPlaying(JSON.parse(storedMusicState));
        }

        console.log('Efeito de música montado.');

        document.addEventListener('click', handleUserInteraction);

        return () => {
            console.log('Removendo listener de clique.');
            document.removeEventListener('click', handleUserInteraction);
        };
    }, []);

    useEffect(() => {
        console.log('Atualizando estado de música no armazenamento local.');
        localStorage.setItem('isMusicPlaying', JSON.stringify(isMusicPlaying));
    }, [isMusicPlaying]);

    const handleUserInteraction = () => {
        const audioElement = document.getElementById('audio');

        if (!isMusicPlaying) {
            console.log('Iniciando reprodução de música.');
            audioElement.play();
        }

        setIsMusicPlaying((prevIsMusicPlaying) => !prevIsMusicPlaying);

        console.log('Removendo listener de clique.');
        document.removeEventListener('click', handleUserInteraction);
    };

    const toggleMusic = () => {
        const audioElement = document.getElementById('audio');

        if (isMusicPlaying) {
            console.log('Pausando reprodução de música.');
            audioElement.pause();
            audioElement.currentTime = 0;
        }

        setIsMusicPlaying((prevIsMusicPlaying) => !prevIsMusicPlaying);
    };

    // Verifica se a música estava tocando antes de recarregar.
    useEffect(() => {
        const audioElement = document.getElementById('audio');

        if (isMusicPlaying) {
            console.log('Reiniciando reprodução de música após recarregar.');
            audioElement.play();
        }
    }, [isMusicPlaying]);

    // Lógica do Tema.
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode !== null ? JSON.parse(storedDarkMode) : false;
    });

    useEffect(() => {
        console.log('Atualizando tema e estilos.');
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.documentElement.style.setProperty('--background-color', isDarkMode ? '#000c19' : '#F7F6FB');
        document.documentElement.style.setProperty('--text-color', isDarkMode ? '#F7F6FB' : '#0c0c0c');

        document.documentElement.style.setProperty('--icon-color', isDarkMode ? '#F7F6FB' : '#0c0c0c');
        document.documentElement.style.setProperty('--icon-shadow', isDarkMode ? '0px 2px 10px rgba(255, 255, 255, 0.5)' : '0px 2px 10px rgba(0, 0, 0, 0.5)');

        document.documentElement.style.setProperty('--footer-background', isDarkMode ? '#162133' : '#99c2ff');
        document.documentElement.style.setProperty('--footer-text-color', isDarkMode ? '#F7F6FB' : '#0c0c0c');

        document.documentElement.style.setProperty('--border-color', isDarkMode ? '#F7F6FB' : '#0c0c0c');

        document.documentElement.style.setProperty('--logotipo', isDarkMode ? 'url(dark_logotipo.png)' : 'url(light_logotipo.png)');


        // document.querySelectorAll('.other-element').forEach((el) => {
        //   if (isDarkMode) {
        //     el.style.setProperty('--other-background-color', '#800080');
        //     el.style.setProperty('--other-text-color', '#ffd966');
        //   } else {
        //     el.style.setProperty('--other-background-color', '#ffd966');
        //     el.style.setProperty('--other-text-color', '#800080');
        //   }
        // });


    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevIsDarkMode) => {
            const newIsDarkMode = !prevIsDarkMode;
            localStorage.setItem('darkMode', JSON.stringify(newIsDarkMode));
            console.log(`Alterando tema para ${newIsDarkMode ? 'escuro' : 'claro'}.`)

            // Vai exibir o toast quando o tema for alternado.
            // toast(`Tema ${newIsDarkMode ? 'escuro' : 'claro'} aplicado!`, {
            //     icon: newIsDarkMode ? '🌙' : '☀️',
            //     style: {
            //         borderRadius: '5px solid',
            //         background: newIsDarkMode ? '#333' : '#F7F6FB',
            //         color: newIsDarkMode ? '#fff' : '#0c0c0c',
            //     },
            // });

            return newIsDarkMode;
        });
    };

    // Menu.
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    // Lógica do Menu.
    const toggleMenu = () => {
        console.log('Abrindo menu.');
        setIsMenuVisible(!isMenuVisible)
    }

    const closeMenu = () => {
        setIsMenuVisible(false);
        // Após clicar no navlink dentro do nav, aparece esta mensagem.
        console.log('Fechando menu.');
    }

    return (
        <>
            <Toaster />
            <header className={`${styles.header} ${isDarkMode ? styles.darkMode : ''} ${headerBg ? styles.active : ''}`}>
                <Link className={styles.headerLink} to="/" aria-label="Página Inicial" role="button" title='Logotipo AOBEM'>
                    <img src='/light_logotipo.png' alt='Logo AOBEM' />
                </Link>

                <div className={styles.containerToggle}>

                    {/* Música. */}
                    <div>
                        <audio id="audio" controls={false} loop>
                            <source src="src/music/music1.mp3" type="audio/mp3" />
                        </audio>

                        {/* Botão Música. */}
                        <div className={styles.toggleMusic} onClick={toggleMusic} aria-label="Iniciar reprodução musical" role="button">
                            {isMusicPlaying ? <HiSpeakerXMark className={styles.pauseIcon} /> : <HiSpeakerWave className={styles.playIcon} />}
                        </div>
                    </div>

                    {/* Botão Tema. */}
                    <div className={styles.toggleDarkMode} onClick={toggleDarkMode} aria-label="Trocar de tema" role="button">{isDarkMode ? <IoIosPartlySunny className={styles.lightIcon} /> : <IoMoon className={styles.darkIcon} />}</div>

                    {/* Botão Menu. */}
                    <div className={styles.toggleMenuContainer} onClick={toggleMenu} aria-label="Menu" role="button">
                        <div className={`${styles.toggleIcon} ${isMenuVisible ? styles.visible : ''}`}>{isMenuVisible ? <IoClose className={styles.close} /> : <IoMenu className={styles.open} />}</div>
                    </div>
                </div>

                {/* Menu */}
                <nav className={isMenuVisible ? `${styles.nav} ${styles.visible}` : styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><NavLink className={styles.navLink} to="/" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} onClick={closeMenu} data-text="Início" aria-label="Página Inicial">Início</NavLink></li>
                        <li className={styles.li}><NavLink className={styles.navLink} to="/sobre" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} onClick={closeMenu} data-text="Sobre Nós" aria-label="Saiba mais sobre nós">Sobre nós</NavLink></li>
                        <li className={styles.li}><NavLink className={styles.navLink} to="/especialistas" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} onClick={closeMenu} data-text="Especialistas" aria-label="Conheça nossos especialistas">Especialistas</NavLink></li>
                        <li className={styles.li}><NavLink className={styles.navLink} to="/contato" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} onClick={closeMenu} data-text="Contato" aria-label="Entre em contato conosco">Contato</NavLink></li>
                        <li className={styles.li}><NavLink className={styles.navLink} to="/entrar" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} onClick={closeMenu} data-text="Entrar" aria-label="Faça login na sua conta">Entrar</NavLink></li>
                        <li className={styles.li}><NavLink className={styles.navLink} to="/cadastrar" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} onClick={closeMenu} data-text="Cadastrar" aria-label="Crie uma conta">Cadastrar</NavLink></li>
                        {/* <li className={styles.li}><NavLink className={styles.navLink} to="/triagem" end style={({ isActive }) => { return isActive ? { color: "#FFDD02" } : {}; }} onClick={closeMenu} data-text="Triagem" aria-label="Realize a triagem">Triagem</NavLink></li> */}

                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header