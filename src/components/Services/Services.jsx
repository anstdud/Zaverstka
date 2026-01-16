import styles from './Services.module.css';
const EasySite = '/images/easySite.svg';
const HardSite = '/images/hardSite.svg';
const OnlineStore = '/images/onlineStore.svg';
const TildaSite = '/images/tildaSite.svg';
const Clock = '/images/clock.svg';

const Services = () => {
    const services = [
        {
            icon: EasySite,
            title: 'Одностраничный лендинг',
            description: 'Только одна страница, которая полностью закрывает все вопросы ваших клиентов',
            term: 'от 4х недель'
        },
        {
            icon: HardSite,
            title: 'Многостраничный сайт',
            description: 'Сайт с более сложной структурой: несколькими страницами, которые объединены меню или другими блоками с ссылками',
            term: 'от 4х недель'
        },
        {
            icon: OnlineStore,
            title: 'Верстка в Tilda',
            description: 'Перенос макета в Tilda, настройка навигации, адаптива и необходимой анимации',
            term: 'от 4х недель'
        },
        {
            icon: TildaSite,
            title: 'Интернет-магазин',
            description: 'Создание сайта для продажи товаров с платежной системой, корзиной и уведомлением продавца и покупателя о заказе',
            term: 'от 4х недель'
        }
    ];

    const scrollToContacts = () => {
        const contactsSection = document.getElementById('contacts');
        if (contactsSection) {
            contactsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="services" className={styles.serviceSection}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Мы делаем ДЛЯ ВАС</h2>
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.icon}>
                                <img src={service.icon} alt={service.title} />
                            </div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                            <div className={styles.period}>
                                <img src={Clock} alt="Срок выполнения" className={styles.clockIcon} />
                                <p className={styles.serviceTerm}>{service.term}</p>
                            </div>
                            <button
                                className={styles.serviceBtn}
                                onClick={scrollToContacts}
                            >
                                Обсудить проект
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;