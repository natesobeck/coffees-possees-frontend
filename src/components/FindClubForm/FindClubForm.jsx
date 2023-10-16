import styles from './FindClubForm.module.css'

const FindClubForm = () => {
  return ( 
    <div className={styles["form-container"]}>
      <h1>Search For A Club</h1>
      <p className={styles['p-tag']}>Find what clubs are available around your area based on your interests</p>
      <form className={styles['search-clubs']}>
        <input type="text" placeholder="Enter your city..." className={styles["city-input"]} />
        <button>See Clubs</button>
      </form>
    </div>
  )
}
 
export default FindClubForm;