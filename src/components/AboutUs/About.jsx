import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <h2 className="section-title">О нашей команде</h2>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <p className={styles.description}>
                            Мы— команда Zaverstka, и мы создаем сайты, которые работают на результат. Мы понимаем, что каждый бизнес уникален, поэтому предлагаем полный цикл услуг: от лаконичных одностраничных сайтов (лендингов) до сложных многостраничных порталов и полнофункциональных интернет-магазинов.
                            Наш подход основан на глубоком анализе ваших задач, чистом коде и внимании к деталям. Мы заботимся о том, чтобы ваш сайт был быстрым, адаптивным на всех устройствах и привлекал новых клиентов.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;