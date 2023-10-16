
// components
import ClubCard from '../ClubCard/ClubCard'

// css
import styles from './FindClubResults.module.css'

const FindClubResults = ({ clubs, handleDeleteClub }) => {

  if (!clubs.length) return <h2>Loading clubs...</h2>

  return ( 
    <div className={styles["search-results"]}>
      <div className={styles["headers"]}>
        <div>Club Name:</div>
        <div>Category:</div>
        <div>Time of Day:</div>
      </div>
      {clubs.map(club => (
        <ClubCard key={club._id} club={club} handleDeleteClub={handleDeleteClub}/>
      ))}
    </div>
  )
}
 
export default FindClubResults;