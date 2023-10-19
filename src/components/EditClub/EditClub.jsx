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
          <h3>Let's Edit Your Club!</h3>
          <div className={styles['name']}>
            <input name="name" type="text" value={clubFormData.name} onChange={handleChange} placeholder='E.g: Bookers - A true love for books  ' />
          </div>
        </div>
        <div className={styles['club-focus']}>
          <h6>Tell us a bit about your group... Provide to other members information about its focus, location and the like.</h6>
          <div className={styles['category-container']}>
            <label htmlFor="category">Category:</label>
            <input name="category" type="text" value={clubFormData.category} onChange={handleChange} placeholder='e.g: soccer' />
          </div>
          <div className={styles['location-time']}>
            <input name="location" type="text" value={clubFormData.location} onChange={handleChange} placeholder='Enter your city here' />
            <select name="timeOfDay" value={clubFormData.timeOfDay} onChange={handleChange} id="timeOfDay">
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles['create-club-button']}>
        <button type='submit'>Edit Club</button>
      </div>
      
      <div className={styles['shops-in-club']}>
        <p>Here's the coffee shops in you area! Select a shop to host your club in and let others join!</p>
        <div className={styles['shop-cards']}>
          <div>Shop Card 1</div>
          <div>Shop Card 2</div>
          <div>Shop Card 3</div>
        </div>
        <div className={styles['time-slot']}>
          <label>Pick a time:</label>
          <input type="time" placeholder="Pick a time slot" />
          <button>Pick Time</button>
        </div>
      </div>
    </form>
  )
}

export default EditClub