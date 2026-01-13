import styles from './Contacts.module.css';

const Contacts = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Форма отправлена');
    };

    return (
        <section id="contacts" className={styles.contacts}>
            <div className="container">
                <div className={styles.contactsContent}>
                    <div className={styles.contactInfo}>
                        <h4>Контакты</h4>
                        <p className={styles.welcomeText}>Будем рады сотрудничеству!</p>
                        <p className={styles.contactDescription}>Свяжитесь с нами в соц сетях или заполните форму на сайте</p>

                        <div className={styles.socialLinks}>
                            <a href="https://t.me/Ttwinkleee" className={styles.socialLink} aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                                <span>Telegram</span>
                            </a>
                            <a href="https://wa.me/89805447999" className={styles.socialLink} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                                <span>WhatsApp</span>
                            </a>
                            <a href="mailto:zaverstka@gmail.com" className={styles.socialLink} aria-label="Gmail">
                                <span>Gmail</span>
                            </a>
                        </div>
                    </div>

                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label>Способ связи</label>
                            <input
                                type="text"
                                name="contact_method"
                                className={styles.formInput}
                                placeholder="Телеграм, WhatsApp, email..."
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Как вас зовут</label>
                            <input
                                type="text"
                                name="name"
                                className={styles.formInput}
                                placeholder="Ваше имя"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Описание вашего проекта</label>
                            <textarea
                                name="project_description"
                                rows="5"
                                className={styles.formTextarea}
                                placeholder="Расскажите о вашем проекте..."
                                required
                            ></textarea>
                        </div>

                        <div className={styles.formGroup}>
                            <div className={styles.checkboxContainer}>
                                <input
                                    type="checkbox"
                                    id="privacyConsent"
                                    name="privacy_consent"
                                    required
                                    className={styles.checkboxInput}
                                />
                                <label htmlFor="privacyConsent" className={styles.checkboxLabel}>
                                    Я соглашаюсь с <a href="/privacy-policy.html" className={styles.privacyLink} rel="noopener noreferrer">Политикой конфиденциальности</a> и даю согласие на обработку персональных данных
                                </label>
                            </div>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacts;