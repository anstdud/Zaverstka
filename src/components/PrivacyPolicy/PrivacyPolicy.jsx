import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="privacy-policy-page">
            <div className="container">
                <div className="back-button-container">
                    <button
                        onClick={handleBack}
                        className="back-button"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            style={{ marginRight: '8px' }}
                        >
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Назад
                    </button>
                </div>

                <h1>Политика конфиденциальности</h1>

                <div className="policy-content">
                    <h2>1. Общие положения</h2>
                    <p>
                        Настоящая политика обработки персональных данных составлена в соответствии
                        с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных»
                        и определяет порядок обработки персональных данных и меры по обеспечению
                        безопасности персональных данных команды Zaverstka.
                    </p>

                    <h2>2. Какие персональные данные мы обрабатываем</h2>
                    <ul>
                        <li>Имя и контактные данные (способ связи), которые вы указываете в форме обратной связи</li>
                        <li>Текст сообщения о вашем проекте</li>
                    </ul>

                    <h2>3. Цели обработки персональных данных</h2>
                    <ul>
                        <li>Связь с вами для ответа на ваш запрос</li>
                        <li>Консультация по вопросам создания сайтов</li>
                        <li>Улучшение качества наших услуг</li>
                    </ul>

                    <h2>4. Срок хранения персональных данных</h2>
                    <p>
                        Персональные данные хранятся до достижения целей обработки.
                        Вы можете запросить удаление ваших данных, написав нам на почту dudinaa965@gmail.com
                    </p>

                    <h2>5. Ваши права</h2>
                    <p>
                        Вы имеете право на доступ к вашим персональным данным, их исправление,
                        удаление, а также отзыв согласия на обработку.
                    </p>

                    <h2>6. Контактная информация</h2>
                    <p>
                        По вопросам обработки персональных данных обращайтесь:<br />
                        Email: dudinaa965@gmail.com<br />
                        Telegram: @Ttwinkleee
                    </p>

                    <p className="policy-date">
                        Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;