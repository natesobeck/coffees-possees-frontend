// npm modules
import {useState } from 'react'

//components
import NewCoffeeShop from '../NewCoffeeShop/NewCoffeeShop'
import RecommendationShopCard from '../RecommendationShopCard/RecommendationShopCard'


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

  const [shopsByLocation, setShopsByLocation] = useState([])
  const [selectedLocation, setSelectedLocation] = useState('')

  const handleChange = evt => {
    setClubFormData({ ...clubFormData, [evt.target.name]: evt.target.value })
    const newLocation = clubFormData.location
    setSelectedLocation(newLocation)
    let data = props.shops.filter(shop => shop.location === selectedLocation)
    setShopsByLocation(data)
  }
  const handleSubmit = evt => {
    displayShopSuggestions()
    evt.preventDefault()
    props.handleAddClub(clubFormData)
    // const newLocation = clubFormData.location
    // setSelectedLocation(newLocation)
    // let data = props.shops.filter(shop => shop.location === selectedLocation)
    // console.log(data)
  }

  // useEffect(() => {
  //   const createClub = document.getElementById('create-club').addEventListener("click", displayShopSuggestions)
  //   const shopSuggestions = document.getElementById('shop-suggestions')
  //   const displayShopSuggestions = () => {
  //     shopSuggestions
  //   }
  // })

  const displayShopSuggestions = () => {
    console.log('click')
    const shopSuggestions = document.getElementById('shop-suggestions')
    if (shopSuggestions.style.display === 'none') {
      shopSuggestions.style.display = 'flex'
    } else {
      shopSuggestions.style.display = 'none'
    }
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
              <input name="name" type="text" value={clubFormData.name} onChange={handleChange} placeholder='E.g: Bookers - A true love for books  ' autoComplete='off' required />
              {/* <button>Search</button> */}
            </div>
          </div>
          <div className={styles['club-focus']}>
            <h6>Tell us a bit about your group... Provide to other members information about its focus, location and the like.</h6>
            <div className={styles['category-container']}>
              <label htmlFor="category">Category:</label>
              <input name="category" type="text" value={clubFormData.category} onChange={handleChange} placeholder='e.g: soccer' id='category' autoComplete='off' required />
            </div>
            <div className={styles['location-time']}>
              <input name="location" type="text" value={clubFormData.location} onChange={handleChange} placeholder='Enter your city here' autoComplete='off' required />
              <input name="description" type="text" value={clubFormData.description} onChange={handleChange} placeholder='Enter club description' autoComplete='off' required />
              <select name="timeOfDay" value={clubFormData.timeOfDay} onChange={handleChange} id="timeOfDay" placeholder='Choose time of day' required>
                <option value="Morning">Morning</option>
                <option value="AfterNoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles['create-club-button']}>
          <button type='submit' id='create-club' onClick={displayShopSuggestions}>Create Club</button>
        </div>
      </form>
      <NewCoffeeShop handleAddShop={props.handleAddShop} />
      <div className={styles['shops-in-club']} id='shop-suggestions'>
        <p>Here's the coffee shops in you area! Select a shop to host your club in and let others join!</p>
        <div className={styles['shop-cards']}>

            {shopsByLocation.length ?
              <>
                {shopsByLocation.map(shop => (
                  <RecommendationShopCard shop={shop} key={shop._id} />
                  // <div key={shop._id} className={styles['suggestion']}>
                  //   <p style={{color: 'black'}}>
                  //     {shop.name}
                  //   </p>
                  //   <p>{shop.location}</p>
                  //   <button>Add This Shop</button>
                  //   <button>View Shop Details</button>
                  // </div>
                  
                ))}
              </>
              : <>
                <h1>No coffeeShop near you</h1>
              </>}
          
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