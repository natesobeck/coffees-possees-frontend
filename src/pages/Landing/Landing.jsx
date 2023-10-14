// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <div className={styles.landingcontainer}>
      <h1>Welcome to Posses and Coffees, {user ? user.name : 'friend'}</h1>
      </div>
      <div className={styles.landingcontainer}></div>
      <div className={styles.landingcontainer}></div>
    </main>
  )
}

export default Landing
