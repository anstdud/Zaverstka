import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContainer}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerSection}>
                            <h3>Zaverstka</h3>
                            <p>Создаем цифровые решения для вашего бизнеса</p>
                        </div>
                    </div>

                    <div className={styles.privacyLinks}>
                        <Link
                            to="/privacy-policy"
                            className={styles.privacyLink}
                        >
                            Политика конфиденциальности
                        </Link>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© 2026 Zaverstka. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;