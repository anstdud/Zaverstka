import styles from './Hero.module.css';
const Robot = '/img/robo.svg';

const Hero = () => {
    return (
        <section id="main" className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.textContent}>
                    <h1 className={styles.title}>Студия Веб-разработки</h1>
                    <p className={styles.subtitle}>Zavернем вашу идею в красивую обертку</p>
                </div>
                <div className={styles.imageContent}>
                    <img
                        src={Robot}
                        alt="Робот"
                        className={styles.robotImage}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;