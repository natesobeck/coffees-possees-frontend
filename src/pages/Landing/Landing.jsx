// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <section className={styles['section-container']}>
      <h1>Welcome to Posses and Coffees, {user ? user.name.slice(0,1).toUpperCase().concat(user.name.slice(1).toLowerCase()) : 'friend'}</h1>
      </section>
      <section className={styles['section-container']}>
        <h1>This is where the club reccomendations go.</h1>
        <div className={styles['club-card-container']}></div>
      </section>
      <section className={styles['section-container']}>
        <h1>This is out About Us section.</h1>
        <div className={styles['about-us-container']}>
          <div className={styles['about-us-subcontainer']}>About us container</div>
          <div className={styles['about-us-subcontainer']}>About us container</div>
        </div>
      </section>
    </main>
  )
}

export default Landing
