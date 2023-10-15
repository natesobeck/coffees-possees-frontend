import * as data from '../../../public/assets/data.js'
import './NewClub.css'

const NewClub = () => {
  return ( 
    <main>
      <div>
        <div className='location-info'>
          <h3>Hello, User!</h3>
          <h5>Where do you want to start your club?</h5>
          <p>Enter a Zip code or City:</p>
          <form>
            <input type="text" />
            <button>Submit</button>
          </form>
        </div>
        <div className='group-focus'>
          <p>Tell us a bit about the focus of your group, anything useful for other members to know!</p>
          <label htmlFor="category">Category</label>
          <option value="category" id='category'>
            <select name="category" id="category-option">Option1</select>
            <select name="category" id="category-option">Option2</select>
            <select name="category" id="category-option">Option3</select>
            <select name="category" id="category-option">Option4</select>
          </option>
          <input type="text" placeholder='Specific focus' />
          <input type="number" placeholder='Age Group' />
        </div>
        <div></div>
      </div>
    </main>
  )
}

export default NewClub