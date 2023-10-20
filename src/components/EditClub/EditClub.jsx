//npm modules
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

//css
import styles from './EditClub.module.css'


const EditClub = (props) => {
  const { state } = useLocation()
  const [clubFormData, setClubFormData] = useState(state)


  const handleChange = evt => {
    setClubFormData({ ...clubFormData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdateClub(clubFormData)
  }

  return (
    <form onSubmit={handleSubmit} className='edit-club-container'>
      <div className={styles['club-info']}>
            <div className={styles['location-info']}>
              <h3 className={styles['title']}>Create a Club</h3>
              <h5>Start by giving your club a stunning name that will grab interest!</h5>
              <p>What will your club be called ?</p>
              <div className={styles['name']}>
                <input name="name" type="text" value={clubFormData.name} onChange={handleChange} placeholder='E.g: Bookers - A true love for books  ' autoComplete='off' required />
                <textarea name="description" onChange={handleChange} placeholder='Description for your club' value={clubFormData.description}>{clubFormData.description}</textarea>
              </div>
            </div>
            <div className={styles['club-focus']}>
              <h6>Tell us a bit about your group... Provide to other members information about its focus, location and the like.</h6>
              <div className={styles['category-container']}>
                <label htmlFor="category">Category:</label>
                <input name="category" type="text" value={clubFormData.category} onChange={handleChange} placeholder='e.g: soccer' id='category' autoComplete='off' required />
              </div>
              <div className={styles['location-time']}>
                <h2>Location & Time of Day</h2>
                <input name="location" type="text" value={clubFormData.location} onChange={handleChange} placeholder='Enter your city here' autoComplete='off' required />
                <select name="timeOfDay" value={clubFormData.timeOfDay} onChange={handleChange} id="timeOfDay" placeholder='Choose time of day' required>
                  <option value="Morning">Morning</option>
                  <option value="AfterNoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
                <button type='submit' id={styles['create-club']} onClick={displayShopSuggestions}>Save Club</button>
              </div>
            </div>
          </div>
    </form>
  )
}

export default EditClub