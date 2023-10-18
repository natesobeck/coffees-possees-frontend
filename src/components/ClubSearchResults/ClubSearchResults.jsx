
// components
import ClubCard from '../ClubCard/ClubCard'

// css
import styles from './ClubSearchResults.module.css'

const ClubSearchResults = (props) => {

  if (!props.clubs.length) return <h2>No clubs yet!</h2>

  return ( 
    <div className={styles["search-results"]}>
      <div className={styles["headers"]}>
        <div>Club Name:</div>
        <div>Category:</div>
        <div>Time of Day:</div>
      </div>
      {props.clubSearchResults.map(club => (
        <ClubCard 
          key={club._id} 
          club={club} 
          handleDeleteClub={props.handleDeleteClub} 
          user={props.user} 
        />
      ))}
    </div>
  )
}

export default ClubSearchResults;