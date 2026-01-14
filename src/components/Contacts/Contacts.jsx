import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Contacts.module.css';

const Contacts = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const TELEGRAM_CONFIG = {
        BOT_TOKEN: '7983672152:AAG2_woAj45A1lr3at9JWrlC5zlatAIGe1c', // Токен бота
        CHAT_ID: '5572376646', // Ваш Chat ID
    };

    const sendToTelegram = async (data) => {
        const message = `
🎯 *НОВАЯ ЗАЯВКА С САЙТА*

👤 *Имя:* ${data.name}
📱 *Контакты:* ${data.contactMethod}
💼 *Проект:*
${data.projectDescription}

⏰ *Время:* ${new Date().toLocaleString('ru-RU')}
🌐 *Сайт:* Ваш сайт
        `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CONFIG.CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown',
                    disable_web_page_preview: true
                })
            });

            return response.ok;
        } catch (error) {
            console.error('Telegram error:', error);
            return false;
        }
    };

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const success = await sendToTelegram(data);

            if (success) {
                setSubmitStatus({
                    type: 'success',
                    message: '✅ Заявка отправлена! Я свяжусь с вами в течение часа.'
                });
                reset();
            } else {
                throw new Error('Ошибка отправки');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            setSubmitStatus({
                type: 'error',
                message: '❌ Ошибка отправки. Пожалуйста, свяжитесь со мной напрямую:'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacts" className={styles.contacts}>
            <div className="container">
                <div className={styles.contactsContent}>
                    <div className={styles.contactInfo}>
                        <h4>Контакты</h4>
                        <p className={styles.welcomeText}>Будем рады сотрудничеству!</p>
                        <p className={styles.contactDescription}>
                            Свяжитесь со мной напрямую или заполните форму
                        </p>

                        <div className={styles.socialLinks}>
                            <a
                                href="https://t.me/Ttwinkleee"
                                className={styles.socialLink}
                                aria-label="Telegram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className={styles.socialIcon}>📱</span>
                                <span>Telegram</span>
                            </a>
                            <a
                                href="https://wa.me/89805447999"
                                className={styles.socialLink}
                                aria-label="WhatsApp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className={styles.socialIcon}>💬</span>
                                <span>WhatsApp</span>
                            </a>
                            <a
                                href="mailto:zaverstka@gmail.com"
                                className={styles.socialLink}
                                aria-label="Gmail"
                            >
                                <span className={styles.socialIcon}>✉️</span>
                                <span>Email</span>
                            </a>
                        </div>

                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>⚡</span>
                                <div>
                                    <strong>Быстрый ответ</strong>
                                    <p>В Telegram отвечаю в течение 15 минут</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>🕒</span>
                                <div>
                                    <strong>Рабочие часы</strong>
                                    <p>Пн-Пт: 10:00 - 20:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <div className={styles.formHeader}>
                            <h5>📋 Форма заявки</h5>
                            <p>Заполните и я свяжусь с вами в Telegram</p>
                        </div>

                        <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>
                                        <span className={styles.labelIcon}>👤</span>
                                        Ваше имя *
                                    </label>
                                    <input
                                        type="text"
                                        className={styles.formInput}
                                        placeholder="Иван Иванов"
                                        {...register("name", {
                                            required: "Введите ваше имя",
                                            minLength: {
                                                value: 2,
                                                message: "Минимум 2 символа"
                                            }
                                        })}
                                        disabled={isSubmitting}
                                    />
                                    {errors.name && (
                                        <span className={styles.errorMessage}>{errors.name.message}</span>
                                    )}
                                </div>

                                <div className={styles.formGroup}>
                                    <label>
                                        <span className={styles.labelIcon}>📞</span>
                                        Контакты *
                                    </label>
                                    <input
                                        type="text"
                                        className={styles.formInput}
                                        placeholder="@telegram, +79991234567"
                                        {...register("contactMethod", {
                                            required: "Укажите контакты",
                                            minLength: {
                                                value: 3,
                                                message: "Минимум 3 символа"
                                            }
                                        })}
                                        disabled={isSubmitting}
                                    />
                                    {errors.contactMethod && (
                                        <span className={styles.errorMessage}>{errors.contactMethod.message}</span>
                                    )}
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label>
                                    <span className={styles.labelIcon}>💡</span>
                                    Опишите ваш проект *
                                </label>
                                <textarea
                                    rows="6"
                                    className={styles.formTextarea}
                                    placeholder="Расскажите о вашем проекте, целях и задачах..."
                                    {...register("projectDescription", {
                                        required: "Опишите ваш проект",
                                        minLength: {
                                            value: 10,
                                            message: "Минимум 10 символов"
                                        }
                                    })}
                                    disabled={isSubmitting}
                                ></textarea>
                                {errors.projectDescription && (
                                    <span className={styles.errorMessage}>{errors.projectDescription.message}</span>
                                )}
                                <div className={styles.textareaHint}>
                                    <span>💡 Чем подробнее описание, тем точнее оценка</span>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <div className={styles.checkboxWrapper}>
                                    <input
                                        type="checkbox"
                                        id="privacyConsent"
                                        className={styles.checkboxInput}
                                        {...register("privacyConsent", {
                                            required: "Подтвердите согласие"
                                        })}
                                        disabled={isSubmitting}
                                    />
                                    <div className={styles.customCheckbox}>
                                        <svg className={styles.checkIcon} viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                        </svg>
                                    </div>
                                    <label htmlFor="privacyConsent" className={styles.checkboxLabel}>
                                        Я согласен с обработкой персональных данных согласно{" "}
                                        <a href="#" className={styles.privacyLink}>
                                            политике конфиденциальности
                                        </a> *
                                    </label>
                                </div>
                                {errors.privacyConsent && (
                                    <span className={styles.errorMessage}>{errors.privacyConsent.message}</span>
                                )}
                            </div>

                            {submitStatus && (
                                <div className={`${styles.statusMessage} ${styles[submitStatus.type]}`}>
                                    <div className={styles.statusContent}>
                                        <div className={styles.statusIcon}>
                                            {submitStatus.type === 'success' ? '✅' : '❌'}
                                        </div>
                                        <div className={styles.statusText}>
                                            <strong>{submitStatus.type === 'success' ? 'Успешно!' : 'Ошибка!'}</strong>
                                            <p>{submitStatus.message}</p>
                                            {submitStatus.type === 'error' && (
                                                <div className={styles.alternativeLinks}>
                                                    <a href="https://t.me/Ttwinkleee" className={styles.altLink}>
                                                        📱 Написать в Telegram
                                                    </a>
                                                    <a href="https://wa.me/89805447999" className={styles.altLink}>
                                                        💬 Написать в WhatsApp
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button
                                type="submit"
                                className={`${styles.submitButton} ${isSubmitting ? styles.loading : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className={styles.buttonSpinner}></span>
                                        Отправка...
                                    </>
                                ) : (
                                    <>
                                        <span className={styles.buttonIcon}>🚀</span>
                                        Отправить заявку
                                        <span className={styles.buttonArrow}>→</span>
                                    </>
                                )}
                            </button>

                            <div className={styles.formNote}>
                                <p>⏰ <strong>Гарантирую ответ в течение 1 часа</strong> в рабочее время</p>
                                <p>🔒 <strong>Конфиденциально:</strong> ваши данные не передаются третьим лицам</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;