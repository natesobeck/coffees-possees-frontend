import * as data from '../../../public/assets/data.js'
import './NewClub.css'

const NewClub = () => {
  return (
    <main className='new-club-container'>
      <div className='club-info'>
        <div className='location-info'>
          <h3>Hello, User!</h3>
          <h5>Where do you want to start your club?</h5>
          <p>Enter a Zip code or City:</p>
          <form>
            <input type="text" placeholder='zipcode or city' />
            <button>Submit</button>
          </form>
        </div>
        <div className='club-focus'>
          <h6>Tell us a bit about the focus of your group, anything useful for other members to know!</h6>
          <div className='category-container'>
            <label htmlFor="category">Category:</label>
            <select value="category" id='category'>
              <option name="category" id="category-option">Option1</option>
              <option name="category" id="category-option">Option2</option>
              <option name="category" id="category-option">Option3</option>
              <option name="category" id="category-option">Option4</option>
            </select>
          </div>
          <form>
            <input type="text" placeholder='Specific focus' />
            <input type="number" placeholder='Age Group' />
          </form>
        </div>
        <div></div>
      </div>
      <div className='shops-on-new-club'></div>
    </main>
  )
}

export default NewClub