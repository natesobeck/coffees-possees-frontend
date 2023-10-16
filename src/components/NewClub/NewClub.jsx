
import { useState } from 'react'
import './NewClub.css'
import NewCoffeeShop from '../NewCoffeeShop/NewCoffeeShop'

const NewClub = (props) => {

  const [clubFormData, setClubFormData] = useState({
    name: '',
    category: '',
    timeOfDay: 'Morning',
    location: '',
  })

  const handleChange = evt => {
    setClubFormData({ ...clubFormData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddClub(clubFormData)
  }

  return (
    <div className='new-club-container'>
      <form onSubmit={handleSubmit} >
        <div className='club-info'>
          <div className='location-info'>
            <h3>Let's Create Your New Club!</h3>
            <h5>Start by giving your club a stunning name that will grab interest!</h5>
            <p>What will yor club be called ?</p>
            <div className='name'>
              <input name="name" type="text" value={clubFormData.name} onChange={handleChange} placeholder='E.g: Bookers - A true love for books  ' />
              {/* <button>Search</button> */}
            </div>
          </div>
          <div className='club-focus'>
            <h6>Tell us a bit about your group... Provide to other members information about its focus, location and the like.</h6>
            <div className='category-container'>
              <label htmlFor="category">Category:</label>
              <input name="category" type="text" value={clubFormData.category} onChange={handleChange} placeholder='e.g: soccer' />
            </div>
            <div className='location-time'>
              <input name="location" type="text" value={clubFormData.location} onChange={handleChange} placeholder='Enter your city here' />
              <select name="timeOfDay" value={clubFormData.timeOfDay} onChange={handleChange} id="timeOfDay">
                <option value="" disabled selected>Choose Time of Day</option>
                <option value="Morning">Morning</option>
                <option value="AfterNoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </div>
          </div>
        </div>
        <div className='create-club-button'>
          <button type='submit'>Create Club</button>
        </div>
      </form>
      <NewCoffeeShop />
        <div className='shops-in-club'>
          <p>Here's the coffee shops in you area! Select a shop to host your club in and let others join!</p>
          <div className='shop-cards'>
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