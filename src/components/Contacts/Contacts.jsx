import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styles from './Contacts.module.css';

const Contacts = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [botStatus, setBotStatus] = useState('checking');
    const [chatId, setChatId] = useState(() => {
        const saved = localStorage.getItem('telegram_chat_id');
        return saved ? saved : null;
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const BOT_CONFIG = {
        TOKEN: '7983672152:AAG2_woAj45A1lr3at9JWrlC5zlatAIGe1c',
        USERNAME: 'ZaverstkaBot',
        CHAT_ID: '5572376646'
    };

    useEffect(() => {
        const setupBot = async () => {
            try {
                const meResponse = await fetch(`https://api.telegram.org/bot${BOT_CONFIG.TOKEN}/getMe`);
                const meData = await meResponse.json();

                if (!meData.ok) {
                    setBotStatus('invalid_token');
                    console.error('Неверный токен бота');
                    return;
                }

                console.log('✅ Бот найден:', meData.result.username);

                if (chatId) {
                    console.log('✅ Использую сохраненный Chat ID:', chatId);
                    setBotStatus('ready');
                    return;
                }

                const updatesResponse = await fetch(`https://api.telegram.org/bot${BOT_CONFIG.TOKEN}/getUpdates`);
                const updatesData = await updatesResponse.json();

                if (updatesData.ok && updatesData.result.length > 0) {
                    const lastUpdate = updatesData.result[updatesData.result.length - 1];
                    const newChatId = lastUpdate.message.chat.id.toString();

                    setChatId(newChatId);
                    localStorage.setItem('telegram_chat_id', newChatId);

                    console.log('✅ Chat ID найден и сохранен:', newChatId);
                    setBotStatus('ready');
                } else {
                    console.log('⚠️ Нет сообщений боту');

                    if (BOT_CONFIG.CHAT_ID) {
                        console.log('✅ Использую фиксированный Chat ID из конфига');
                        setChatId(BOT_CONFIG.CHAT_ID);
                        localStorage.setItem('telegram_chat_id', BOT_CONFIG.CHAT_ID);
                        setBotStatus('ready');
                    } else {
                        setBotStatus('no_messages');
                    }
                }

            } catch (error) {
                console.error('Ошибка настройки бота:', error);
                if (BOT_CONFIG.CHAT_ID) {
                    setChatId(BOT_CONFIG.CHAT_ID);
                    setBotStatus('ready');
                } else {
                    setBotStatus('error');
                }
            }
        };

        setupBot();
    }, []);

    const sendToBot = async (data) => {
        const currentChatId = chatId || BOT_CONFIG.CHAT_ID;

        if (!currentChatId) {
            throw new Error('Не найден Chat ID для отправки');
        }

        const message = `
🎯 <b>НОВАЯ ЗАЯВКА С САЙТА</b>

👤 <b>Имя:</b> ${data.name}
📱 <b>Контакты:</b> ${data.contactMethod}
💼 <b>Проект:</b>
${data.projectDescription}

⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU')}
🌐 <b>Сайт:</b> zaverstka.ru
        `;

        const response = await fetch(`https://api.telegram.org/bot${BOT_CONFIG.TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: currentChatId,
                text: message,
                parse_mode: 'HTML'
            })
        });

        return await response.json();
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:zaverstka@gmail.com?subject=Запрос с сайта zaverstka.ru&body=Здравствуйте! Я хотел бы обсудить проект...';
    };

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const currentChatId = chatId || BOT_CONFIG.CHAT_ID;

            if (!currentChatId) {
                throw new Error('Система отправки не готова');
            }

            const result = await sendToBot(data);

            console.log('Результат отправки:', result);

            if (result.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Заявка отправлена!',
                    details: 'Я свяжусь с вами в ближайшее время.',
                    timestamp: new Date().toLocaleTimeString()
                });
                reset();
            } else {
                console.error('Ошибка бота:', result);

                setSubmitStatus({
                    type: 'error',
                    message: 'Ошибка отправки',
                    details: 'Пожалуйста, свяжитесь со мной напрямую через Telegram или WhatsApp'
                });
            }

        } catch (error) {
            console.error('Ошибка формы:', error);

            setSubmitStatus({
                type: 'error',
                message: 'Ошибка отправки',
                details: error.message || 'Попробуйте еще раз или свяжитесь напрямую'
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
                            Свяжитесь со мной напрямую или отправьте заявку через форму
                        </p>

                        <div className={styles.directContacts}>
                            <div className={styles.contactMethods}>
                                <a
                                    href="https://t.me/Ttwinkleee"
                                    className={styles.contactButton}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <strong>Telegram</strong>
                                </a>
                                <a
                                    href="https://wa.me/89805447999"
                                    className={styles.contactButton}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <strong>WhatsApp</strong>
                                </a>
                                <button
                                    className={styles.contactButton}
                                    onClick={handleEmailClick}
                                    type="button"
                                >
                                    <strong>Email</strong>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formInfo}>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label className={styles.fieldLabel}>ФИО</label>
                                <input
                                    type="text"
                                    placeholder="Введите ваше полное имя"
                                    {...register("name", {
                                        required: "Введите ваше имя",
                                        minLength: {
                                            value: 2,
                                            message: "Минимум 2 символа"
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: "Максимум 50 символов"
                                        }
                                    })}
                                    disabled={isSubmitting}
                                />
                                {errors.name && (
                                    <span className={styles.fieldError}>{errors.name.message}</span>
                                )}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.fieldLabel}>Контактные данные</label>
                                <input
                                    type="text"
                                    placeholder="@Telegram, номер телефона, email"
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
                                    <span className={styles.fieldError}>{errors.contactMethod.message}</span>
                                )}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.fieldLabel}>О проекте</label>
                                <textarea
                                    rows="6"
                                    placeholder="Расскажите о вашем проекте, целях, задачах, сроках и бюджете..."
                                    {...register("projectDescription", {
                                        required: "Опишите ваш проект",
                                        minLength: {
                                            value: 20,
                                            message: "Минимум 20 символов"
                                        },
                                        maxLength: {
                                            value: 2000,
                                            message: "Максимум 2000 символов"
                                        }
                                    })}
                                    disabled={isSubmitting}
                                ></textarea>
                                {errors.projectDescription && (
                                    <span className={styles.fieldError}>{errors.projectDescription.message}</span>
                                )}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.checkbox}>
                                    <input
                                        type="checkbox"
                                        {...register("agreement", {
                                            required: "Необходимо ваше согласие"
                                        })}
                                        disabled={isSubmitting}
                                    />
                                    <span className={styles.checkboxBox}></span>
                                    <span className={styles.checkboxText}>
                                        Я согласен с обработкой{' '}
                                        <Link
                                            to="/privacy-policy"
                                            className={styles.privacyLink}
                                        >
                                            Политика конфиденциальности
                                        </Link>{' '}
                                    </span>
                                </label>
                                {errors.agreement && (
                                    <span className={styles.fieldError}>{errors.agreement.message}</span>
                                )}
                            </div>

                            {submitStatus && (
                                <div className={`${styles.message} ${styles[submitStatus.type]}`}>
                                    <div className={styles.messageHeader}>
                                        <span className={styles.messageIcon}>
                                            {submitStatus.type === 'success' ? '✅' :
                                                submitStatus.type === 'error' ? '❌' : '⚠️'}
                                        </span>
                                        <div>
                                            <strong>{submitStatus.message}</strong>
                                            <p className={styles.messageText}>{submitStatus.details}</p>
                                            {submitStatus.timestamp && (
                                                <small className={styles.timestamp}>
                                                    Отправлено в {submitStatus.timestamp}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button
                                type="submit"
                                className={`${styles.submitButton} ${isSubmitting ? styles.loading : ''}`}
                                disabled={isSubmitting || botStatus !== 'ready'}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className={styles.buttonSpinner}></span>
                                        Отправка...
                                    </>
                                ) : (
                                    <>
                                        Отправить заявку
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;