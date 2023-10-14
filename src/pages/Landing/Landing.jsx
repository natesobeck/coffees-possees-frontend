// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <section className={styles.sectioncontainer}>
      <h1>Welcome to Posses and Coffees, {user ? user.name.slice(0,1).toUpperCase().concat(user.name.slice(1).toLowerCase()) : 'friend'}</h1>
      </section>
      <section className={styles.sectioncontainer}>
        <h1>This is where the club reccomendations go.</h1>
        <div className={styles.clubcardcontainer}></div>
      </section>
      <section className={styles.sectioncontainer}></section>
    </main>
  )
}

export default Landing
