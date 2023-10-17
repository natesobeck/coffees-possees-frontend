import ClubSearchForm from '../ClubSearchForm/ClubSearchForm'
import ClubSearchResults from '../ClubSearchResults/ClubSearchResults'
import styles from './AllClubs.module.css'

const AllClubs = (props) => {
  return ( 
    <main>
      <div className={styles["clubs-container"]}>
        <ClubSearchForm />
        <ClubSearchResults clubs={props.clubs} handleDeleteClub={props.handleDeleteClub}/>
      </div>
    </main>
  )
}

export default AllClubs