import styles from './ScrollTop.module.css'
import { useRef, useEffect, useState } from 'react';

const ScrollTop = () => {
    const progressRef = useRef(null);
    const progressValueRef = useRef(null);
    const [scrollDirection, setScrollDirection] = useState('up');

    const calcScrollValue = () => {
        const scrollProgress = progressRef.current;
        const progressValue = progressValueRef.current;
        const pos = window.pageYOffset || document.documentElement.scrollTop;
        const calcHeight =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollValue = Math.round((pos * 100) / calcHeight);

        if (scrollProgress && progressValue) {
            if (pos > 100) {
                scrollProgress.style.display = 'grid';
            } else {
                scrollProgress.style.display = 'none';
            }

            scrollProgress.style.background = `conic-gradient(#fb1653 ${scrollValue}%, #047cfb ${scrollValue}%)`;

            scrollProgress.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Vamos alterar a direção da seta.
        let lastScrollY = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            const direction = currentScrollY > lastScrollY ? 'down' : 'up';
            setScrollDirection(direction);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    };

    useEffect(() => {
        window.addEventListener('scroll', calcScrollValue);
        window.addEventListener('load', calcScrollValue);

        return () => {
            window.removeEventListener('scroll', calcScrollValue);
            window.removeEventListener('load', calcScrollValue);
        };
    }, []);

    return (
        <div ref={progressRef} className={styles.progress} aria-label='Botão para rolar para o topo da página' title='Voltar para o topo' role='button' aria-keyshortcuts='Home, End'>
            <span
                ref={progressValueRef}
                className={`${styles.progress_value} ${scrollDirection === 'up' ? styles.up : styles.down
                    }`} aria-hidden="true"
            >
                &uarr;
            </span>
        </div>
    );
};

export default ScrollTop;