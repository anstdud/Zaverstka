import { useState, useEffect } from 'react';
import styles from './Header.module.css';
const Logo = '/img/logo.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerContent}>
                    <a href="#" className={styles.logo}>
                        <img
                            src={Logo}
                            alt="Zaverstka Logo"
                            className={styles.logoImage}
                        />
                        Zaverstka
                    </a>

                    {/* Бургер-меню */}
                    <div
                        className={`${styles.burgerMenu} ${isMenuOpen ? styles.active : ''}`}
                        onClick={toggleMenu}
                    >
                        <div className={styles.burgerLine}></div>
                        <div className={styles.burgerLine}></div>
                        <div className={styles.burgerLine}></div>
                    </div>

                    <nav className={styles.nav}>
                        <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services');}}>
                            Мы делаем для вас
                        </a>
                        <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process');}}>
                            Этапы разработки
                        </a>
                        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about');}}>
                            О нас
                        </a>
                        <a href="#contacts" onClick={(e) => { e.preventDefault(); scrollToSection('contacts');}}>
                            Контакты
                        </a>
                    </nav>

                    <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
                        <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services');}}>
                            Мы делаем для вас
                        </a>
                        <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process');}}>
                            Этапы разработки
                        </a>
                        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about');}}>
                            О нас
                        </a>
                        <a href="#contacts" onClick={(e) => { e.preventDefault(); scrollToSection('contacts');}}>
                            Контакты
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;