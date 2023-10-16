//css
import styles from './CoffeeShopDetails.module.css'

//services
import * as shopService from '../../services/shopService'

//npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


//components


//import loading, new review, and reviews here 

const CoffeeShopDetails = () => {
  const [coffeeShop, setCoffeeShop] = useState({})
  const { coffeeShopId } = useParams()

  useEffect(() => {
    const fetchCoffeeShop = async () => {
      const data = await shopService.show(coffeeShopId)
      setCoffeeShop(data)
    }
    fetchCoffeeShop()
  }, [coffeeShopId])



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
          <li>{club.name}</li>
          <li>{club.name}</li>
          <li>{club.name}</li>
        </ul>
      </div>
           {/* <button> edit</button> */}
         {/* edit button will be changed to a link to be sent to the edit form for user to be able to edit their coffesshop^ */}
      {/* <button> delete</button> */}
      {/* delete button needs an onclick with a handleDeleteCoffeeShop function that will be held in app.jsx and will be deleted by using the coffeeshopId */}
    <section>
      <h2>Leave a Review</h2>


    </section>
    </main>
  )
}

export default CoffeeShopDetails





//refer to hoot details
// reviews will be embedded in this file using a handle function called handleAddReview once this is created 