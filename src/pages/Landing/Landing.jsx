
// css
import styles from './Landing.module.css'

// components
import AboutUs from '../../components/AboutUs/AboutUs'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <div id={styles['home-background']}></div>
      <div id={styles['img-cover1']}></div>
      <section className={styles['section-container']} id={styles['home']}>
        {/* <div className={styles['wooden-board']}>
          <h1>Welcome, {user ? user.name.slice(0, 1).toUpperCase().concat(user.name.slice(1).toLowerCase()) : 'friend'}</h1>
        </div>
        <img src="/Logo.png" alt="Coffees and Posses Logo" />
        <br />
        <p>Do you love coffee?</p>
        <br />
        <p>Got some interests but don't have anybody to talk about them with? Make a club for it!</p>
        <br />
        <p>We'd love to join you too. That's what Coffees and Posses is for. Movies, Sports, Dancing, JetSkiing, you name it. There's a club for it.</p>
        <h2>Bringing Like-Minded People Together</h2> */}
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
      <div id={styles['img-cover2']}></div>
      <section className={styles['section-container']} id={styles['reccomendations']}>
        <h1>This is where the club reccomendations go.</h1>
      </section>
      <section className={styles['section-container']} id={styles['about-us']}>
        <h1>This is out About Us section.</h1>
        <AboutUs />
      </section>
    </main>
  )
}

export default Landing
