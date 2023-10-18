
// components
import ClubSearchForm from '../ClubSearchForm/ClubSearchForm'
import ClubSearchResults from '../ClubSearchResults/ClubSearchResults'

// css
import styles from './AllClubs.module.css'

const AllClubs = (props) => {

  return ( 
    <main>
      <div className={styles["clubs-container"]}>
        <ClubSearchForm 
          handleClubSearch={props.handleClubSearch} 
        />
        <ClubSearchResults 
          clubs={props.clubs} 
          handleDeleteClub={props.handleDeleteClub} clubSearchResults={props.clubSearchResults} 
          user={props.user}
        />
      </div>
    </main>
  )
}

export default AllClubs