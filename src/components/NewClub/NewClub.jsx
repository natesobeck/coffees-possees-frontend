// npm modules
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

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
    let data = props.shops.filter(shop => shop.location.includes(selectedLocation))
    setShopsByLocation(data)
  }
  const handleSubmit = async (evt) => {
    displayShopSuggestions()
    evt.preventDefault()
    await props.handleAddClub(clubFormData)
  }

  const displayShopSuggestions = () => {
    const shopSuggestions = document.getElementById('shop-suggestions')
    if (shopSuggestions.style.display === 'none') {
      shopSuggestions.style.display = 'flex'
    } else {
      shopSuggestions.style.display = 'none'
    }
  }

  const handleShowNewShop = () => {
    const newShop = document.getElementById('shopForm')
    if (newShop.style.display === 'none') {
      newShop.style.display = 'flex'
    } else newShop.style.display = 'none'
  }

  return (
    <main>
      <div id={styles['background-image']}></div>
      <div id={styles['img-cover']}></div>
      <div className={styles['new-club-container']}>
        <form onSubmit={handleSubmit} >
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
                <button type='submit' id={styles['create-club']} onClick={displayShopSuggestions}>Create Club</button>
              </div>
            </div>
          </div>
        </form>
        {<NewCoffeeShop handleAddShop={props.handleAddShop} />}
        <div className={styles['shops-in-club']} id='shop-suggestions'>
          <p>Here are some coffee shops in your area! Select one to host your club in and let others join!</p>
          <div className={styles['shop-cards']}>

            {shopsByLocation.length ?
              <>
                {shopsByLocation.map(shop => (
                  <RecommendationShopCard shop={shop} key={shop._id} />
                ))}
              </>
              : 
              <>
                <h2>No coffee shop near your location</h2>
              </>}
          </div>
          <HashLink smooth to="/new#createClub" onClick={handleShowNewShop}> 
            <p className={styles.showShopForm} onClick={handleShowNewShop}>Don't see what you're looking for? <br />Add a Shop!</p>
          </HashLink>
        </div>
      </div>
    </main>
  )
}

export default NewClub