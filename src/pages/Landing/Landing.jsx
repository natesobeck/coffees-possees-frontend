// npm modules
import { Link } from 'react-router-dom'

// components
import ClubCard from '../../components/ClubCard/ClubCard'

// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <section className={styles['section-container']}>
        <div className={styles['wooden-board']}>
          <h1>Welcome, {user ? user.name.slice(0,1).toUpperCase().concat(user.name.slice(1).toLowerCase()) : 'friend'}</h1>
        </div>
        <img src="/Logo.png" alt="Coffees and Posses Logo" />
        <br />
        <p>Do you love coffee?</p>
        <br />
        <p>Got some interests but don't have anybody to talk about them with? Make a club for it!</p>
        <br />
        <p>We'd love to join you too. That's what Coffees and Posses is for. Movies, Sports, Dancing, JetSkiing, you name it. There's a club for it.</p>
        <h2>Bringing Like-Minded People Together</h2>
      </section>
      <section className={styles['section-container']}>
        <h1>This is where the club reccomendations go.</h1>
        <div className={styles['club-card-container']}>
          <Link to='/details'>
            <ClubCard />
          </Link>
          <Link to='/details'>
            <ClubCard />
          </Link>
          <Link to='/details'>
            <ClubCard />
          </Link>
          <Link to='/details'>
            <ClubCard />
          </Link>
          <Link to='/details'>
            <ClubCard />
          </Link>     
        </div>
      </section>
      <section className={styles['section-container']} id={styles['about-us']}>
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
