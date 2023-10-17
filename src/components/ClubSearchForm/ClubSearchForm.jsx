//npm modules
import { useState } from 'react'

// css
import styles from './ClubSearchForm.module.css'

const ClubSearchForm = (props) => {
  const [formData, setFormData] = useState({
    query: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    if (formData.query) {
      props.handleClubSearch(formData)
    }
  }

  return ( 
    <div className={styles["form-container"]}>
      <h1>Search For A Club</h1>
      <p className={styles['p-tag']}>Find what clubs are available around your area based on your interests</p>
      <form className={styles['search-clubs']} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter your city..." 
          className={styles["city-input"]} 
          name="query"
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default ClubSearchForm