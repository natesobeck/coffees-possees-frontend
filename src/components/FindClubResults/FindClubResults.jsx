
// components
import ClubCard from '../ClubCard/ClubCard'

// css
import './FindClubResults.css'

const FindClubResults = ({ clubs }) => {

  if (!clubs.length) return <h2>Loading clubs...</h2>

  return ( 
    <div className="search-results">
      <div className="headers">
        <div>Club Name:</div>
        <div>Category:</div>
        <div>Time of Day:</div>
      </div>
      {clubs.map(club => (
        <ClubCard key={club._id} club={club}/>
      ))}
    </div>
  )
}
 
export default FindClubResults;