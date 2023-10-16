import FindClubForm from '../FindClubForm/FindClubForm'
import FindClubResults from '../FindClubResults/FindClubResults'
import './AllClubs.css'

const AllClubs = (props) => {
  return ( 
    <main>
      <div className="clubs-container">
        <FindClubForm />
        <FindClubResults clubs={props.clubs}/>
      </div>
    </main>
  )
}

export default AllClubs