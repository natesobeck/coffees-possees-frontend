//css
import styles from './CoffeeShopDetails.module.css'

//services
import * as shopService from '../../services/shopService'

//npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


//components
import NewReview from '../NewReview/NewReview'
import Reviews from '../Reviews/Reviews'


//import loading, new review, and reviews here 

const CoffeeShopDetails = (props) => {
  const [coffeeShop, setCoffeeShop] = useState({})
  const { shopId } = useParams()

  useEffect(() => {
    const fetchCoffeeShop = async () => {
      const data = await shopService.show(shopId)
      setCoffeeShop(data)
    }
    fetchCoffeeShop()
  }, [shopId])

  const handleAddReview = async (reviewFormData) => {
    const newReview = await shopService.createReview(shopId, reviewFormData)
    setCoffeeShop({...coffeeShop, reviews: [...coffeeShop.reviews, newReview]})
  }

  // if (!coffeeShop) return <Loading />

//i changed coffeeshop id to shop id based on the asyn function in shopService!!!!!!!!

  return (
    <main className={styles.container}>
      <div className={styles['coffeeShop-details-container']}>
        <h1>CoffeeShop Name Here</h1>
        <h3>Name:{coffeeShop.name}</h3>
        <h3>Ambience:{coffeeShop.coffeeShopAmbience}</h3>
        <h3>CoffeShop Description: ...</h3>
      </div>
      <div className={styles['show-all-clubs-container']}>
        <h3>All Clubs</h3>
        <ul>
          <li>clubname</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={styles['coffee-edit-delete-button']}> 
      <NavLink state={coffeeShop} to={`/coffeeshops/${shopId}/editshop`} ><button> edit</button> </NavLink>
      <button> delete</button> 
      </div> 
           {/* <button> edit</button> */}
         {/* edit button will be changed to a link to be sent to the edit form for user to be able to edit their coffesshop^ */}
      {/* <button> delete</button> */}
      {/* delete button needs an onclick with a handleDeleteCoffeeShop function that will be held in app.jsx and will be deleted by using the coffeeshopId */}
    <div className={styles['review-container']}>
      <h1>Leave a Review</h1>
      <NewReview handleAddReview={handleAddReview} />
      <Reviews reviews={coffeeShop.reviews} user={props.user} />

    </div>
    </main>
  )
}

export default CoffeeShopDetails



// search or dropdown on the page to be able to find a club to put in 


//refer to hoot details
// reviews will be embedded in this file using a handle function called handleAddReview once this is created 