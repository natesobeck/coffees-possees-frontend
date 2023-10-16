// components
import ClubCard from '../ClubCard/ClubCard'

// css
import './FindClubResults.css'

const FindClubResults = ({ clubs }) => {

  if (!clubs.length) return <h2>Loading clubs...</h2>

  return ( 
    <div className="search-results">
      <h1>Results found</h1>
      {clubs.map(club => (
        <ClubCard key={club._id} club={club}/>
      ))}
    </div>
  )
}
 
export default FindClubResults;