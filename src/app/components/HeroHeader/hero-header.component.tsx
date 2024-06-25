import styles from './hero-header.module.scss'

export default function HeroHeader() {
  return (
    <div className={`${styles.mainContainer} w-full text-center`}>
      <div className={`${styles.heroTitle} font-extrabold`}></div>
      <div className={`${styles.heroSubTitle}`}>Full-Stack Developer</div>
      <div className={`${styles.contacts} flex justify-center`}>
          <div className={`${styles.location}`}>India</div>
          <div className={`${styles.gmail}`}></div>
      </div>
    </div>
  );
}
