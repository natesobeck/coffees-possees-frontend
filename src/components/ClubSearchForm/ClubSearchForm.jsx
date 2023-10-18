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
      <h1>Find a Club Here</h1>
      <form className={styles['search-clubs']} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter a category or name..." 
          className={styles["city-input"]} 
          name="query"
          onChange={handleChange}
        />
        <button>🔎</button>
      </form>
    </div>
  )
}

export default ClubSearchForm