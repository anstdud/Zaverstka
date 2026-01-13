import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContainer}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerSection}>
                            <h3>Zaverstka Team</h3>
                            <p>Создаем цифровые решения для вашего бизнеса</p>
                        </div>
                    </div>

                    <div className={styles.privacyLinks}>
                        <a
                            href="/privacy-policy.html"
                            className={styles.privacyLink}
                            rel="noopener noreferrer"
                        >
                            Политика конфиденциальности
                        </a>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© 2025 Zaverstka Team. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;