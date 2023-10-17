// npm modules
import { useState } from 'react'

//components
import NewCoffeeShop from '../NewCoffeeShop/NewCoffeeShop'

// css
import styles from './NewClub.module.css'

const NewClub = (props) => {

  const [clubFormData, setClubFormData] = useState({
    name: '',
    category: '',
    timeOfDay: 'Morning',
    location: '',
    description: '',
  })

  const handleChange = evt => {
    setClubFormData({ ...clubFormData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddClub(clubFormData)
  }

  return (
    <div className={styles['new-club-container']}>
      <form onSubmit={handleSubmit} >
        <div className={styles['club-info']}>
          <div className={styles['location-info']}>
            <h3>Let's Create Your New Club!</h3>
            <h5>Start by giving your club a stunning name that will grab interest!</h5>
            <p>What will yor club be called ?</p>
            <div className={styles['name']}>
              <input name="name" type="text" value={clubFormData.name} onChange={handleChange} placeholder='E.g: Bookers - A true love for books  ' autoComplete='off' />
              {/* <button>Search</button> */}
            </div>
          </div>
          <div className={styles['club-focus']}>
            <h6>Tell us a bit about your group... Provide to other members information about its focus, location and the like.</h6>
            <div className={styles['category-container']}>
              <label htmlFor="category">Category:</label>
              <input name="category" type="text" value={clubFormData.category} onChange={handleChange} placeholder='e.g: soccer' id='category' autoComplete='off' />
            </div>
            <div className={styles['location-time']}>
              <input name="location" type="text" value={clubFormData.location} onChange={handleChange} placeholder='Enter your city here' autoComplete='off' />
              <input name="description" type="text" value={clubFormData.description} onChange={handleChange} placeholder='Enter club description' autoComplete='off' />
              <select name="timeOfDay" value={clubFormData.timeOfDay} onChange={handleChange} id="timeOfDay" placeholder='Choose time of day'>
                {/* <option value="" selected disabled>Choose Time of Day</option> */}
                <option value="Morning">Morning</option>
                <option value="AfterNoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles['create-club-button']}>
          <button type='submit'>Create Club</button>
        </div>
      </form>
      <NewCoffeeShop handleAddShop={props.handleAddShop} />
        <div className={styles['shops-in-club']}>
          <p>Here's the coffee shops in you area! Select a shop to host your club in and let others join!</p>
          <div className={styles['shop-cards']}>
            <div>Shop Card 1</div>
            <div>Shop Card 2</div>
            <div>Shop Card 3</div>
          </div>
          {/* <div className='time-slot'>
            <label>Pick a time:</label>
            <input type="time" placeholder="Pick a time slot" />
            <button>Pick Time</button>
          </div> */}
        </div>
    </div>
    
  )
}

export default NewClub