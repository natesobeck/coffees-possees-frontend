import styles from './ClubSearchForm.module.css'

const ClubSearchForm = () => {
  return ( 
    <div className={styles["form-container"]}>
      <h1>Search For A Club</h1>
      <p className={styles['p-tag']}>Find what clubs are available around your area based on your interests</p>
      <form className={styles['search-clubs']}>
        <input type="text" placeholder="Enter your city..." className={styles["city-input"]} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default ClubSearchForm