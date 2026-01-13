import styles from './Process.module.css';

const Process = () => {
    const steps = [
        {
            number: '01',
            title: 'Знакомство и брифинг',
            description: 'Вы заполняете бриф на сайте или лично связываетесь с нами',
        },
        {
            number: '02',
            title: 'Анализ рынка',
            description: 'Анализ трендов и изучение конкурентов и целевой аудитории',
        },
        {
            number: '03',
            title: 'Создание прототипа',
            description: 'Прототип сайта без дизайна, для понимания его структуры и возможностей',
        },
        {
            number: '04',
            title: 'Дизайн-концепция',
            description: 'Подбираем цветовую палитру, шрифты, графические элементы и общий стиль сайта',
        },
        {
            number: '05',
            title: 'Верстка сайта',
            description: 'После утверждения дизайна, выполняется верстка для ПК и мобильных версий',
        },
        {
            number: '06',
            title: 'Передача проекта',
            description: 'Передаем готовый сайт клиенту и обучаем управлению',
        },
        {
            number: '07',
            title: 'Техническая поддержка',
            description: 'В течении месяца оказываем техническую поддержку',
        }
    ];

    return (
        <section id="process" className={styles.processSection}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Как мы работаем</h2>
                <div className={styles.processSteps}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`${styles.stepCard} ${index % 2 === 0 ? styles.color1 : styles.color2}`}
                        >
                            <div className={styles.stepHeader}>
                                <div className={styles.stepNumber}>{step.number}</div>
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;