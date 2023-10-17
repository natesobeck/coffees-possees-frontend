// npm modules
import { useState } from 'react'

// components
import ClubSearchForm from '../ClubSearchForm/ClubSearchForm'
import ClubSearchResults from '../ClubSearchResults/ClubSearchResults'

// css
import styles from './AllClubs.module.css'

const AllClubs = (props) => {
  const [searchResults, setSearchResults] = useState(props.clubs)

  const handleClubSearch = formData => {
    const filteredClubResults = props.clubs.filter(club => (
      club.name.toLowerCase().includes(formData.query.toLowerCase()) ||
      club.category.toLowerCase().includes(formData.query.toLowerCase())
    ))
    setSearchResults(filteredClubResults)
  }

  return ( 
    <main>
      <div className={styles["clubs-container"]}>
        <ClubSearchForm handleClubSearch={handleClubSearch} />
        <ClubSearchResults clubs={props.clubs} handleDeleteClub={props.handleDeleteClub} searchResults={searchResults} user={props.user}/>
      </div>
    </main>
  )
}

export default AllClubs