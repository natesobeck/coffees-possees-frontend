// css
import styles from './Landing.module.css'

// components
import AboutUs from '../../components/AboutUs/AboutUs'
import LandingRec from '../../components/LandingRec/LandingRec'

const Landing = (props) => {

  return (
    <main className={styles.container}>
      <div id={styles['home-background']}></div>
      <div id={styles['img-cover1']}></div>
      <section className={styles['section-container']} id={styles['home']}>
        <div id={styles['title-container']}>
          <div>Coffees and Posses</div>
        </div>
        <div id={styles['slogan-container']}>
          <h1 className={styles['slogan']} id={styles['slogan1']}>Come together.</h1>
          <h1 className={styles['slogan']} id={styles['slogan2']}>Right now.</h1>
          <h1 className={styles['slogan']} id={styles['slogan3']}>With coffee.</h1>
        </div>
      </section>
      <div id={styles['reccomendation-background']}></div>
      <div id={styles['img-cover2']}>
      </div>
      <section className={styles['section-container']} id={styles['reccomendations']}>
        <LandingRec someShops={props.someShops}/>
      </section>
      <div id={styles['about-background']}></div>
      <div id={styles['img-cover3']}></div>
      <section className={styles['section-container']} id={styles['about-us']}>
        <AboutUs />
      </section>
    </main>
  )
}

export default Landing
