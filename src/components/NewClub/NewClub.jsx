import * as data from '../../../public/assets/data.js'
import './NewClub.css'

const NewClub = () => {
  return (
    <form className='new-club-container'>
      <div className='club-info'>
        <div className='location-info'>
          <h3>Hello, User!</h3>
          <h5>Let's Create your Club!</h5>
          <p>What is your Club name ?</p>
          <div className='name'>
            <input type="text" placeholder='E.g: Bookers - A true love for books  ' />
            {/* <button>Search</button> */}
          </div>
        </div>
        <div className='club-focus'>
          <h6>Tell us a bit about the focus of your group... anything useful for other members to know!</h6>
          <div className='category-container'>
            <label htmlFor="category">Category:</label>
            <input type="text" placeholder='e.g: soccer' />
          </div>
          <div className='location-time'>
            <input type="text" placeholder='Enter your city here' />
            <select name="timeOfDay" id="timeOfDay">
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
        </div>
      </div>
      <div className='create-club-button'>
        <button>Create Club</button>
      </div>
      
      <div className='shops-in-club'>
        <p>Here's the coffee shops in you area! Select a shop to host your club in and let others join!</p>
        <div className='shop-cards'>
          <div>Shop Card 1</div>
          <div>Shop Card 2</div>
          <div>Shop Card 3</div>
        </div>
        <form className='time-slot'>
          <label>Pick a time:</label>
          <input type="time" placeholder="Pick a time slot" />
          <button>Pick Time</button>
        </form>
      </div>
    </form>
  )
}

export default NewClub