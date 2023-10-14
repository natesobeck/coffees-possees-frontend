import FindClubForm from '../FindClubForm/FindClubForm'
import FindClubResults from '../FindClubResults/FindClubResults'
import './AllClubs.css'

const AllClubs = () => {
  return ( 
    <div className="clubs-container">
        <FindClubForm />
        <FindClubResults />
    </div>
  )
}
 
export default AllClubs