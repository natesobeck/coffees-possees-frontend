//npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

//services
import * as shopService from '../../services/shopService'

//components
import NewReview from '../NewReview/NewReview'
import Reviews from '../Reviews/Reviews'

//css
import styles from './CoffeeShopDetails.module.css'
// import AddedBy from '../AddedBy/AddedBy'

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
    setCoffeeShop({ ...coffeeShop, reviews: [...coffeeShop.reviews, newReview] })
  }

  const handleDeleteReview = async (shopId, reviewId) => {
    await shopService.deleteReview(shopId, reviewId)
    setCoffeeShop({ ...coffeeShop, reviews: coffeeShop.reviews.filter((review) => review._id !== reviewId) })
  }

  return (
    <main className={styles.container}>
        <h1 className={styles['coffee-name']}>{coffeeShop.name}</h1>
      <div className={styles['coffeeshop-details-container']}>
        {coffeeShop.address ?
          <>
          <h3 className={styles['address-style']}>Street: {coffeeShop.address.street}</h3>
            <h3 className={styles['address-style']}>City: {coffeeShop.address.city}</h3>
            <h3 className={styles['address-style']}>State: {coffeeShop.address.state}</h3>
            <h3 className={styles['address-style']}>ZipCode: {coffeeShop.address.zipCode}</h3>
          </>
          : null
        }
      </div>
      <div className={styles['show-all-clubs-container']}>
        <h3>All Clubs</h3>
        <ul>
          <li>clubname</li>
          <li>clubname</li>
          <li>clubname</li>
        </ul>
      </div>
      <div className={styles['coffee-edit-delete-button']}>
        {/* {coffeeShop?.name && <AddedBy content={coffeeShop} />} */}
        {coffeeShop?.name && coffeeShop.addedBy._id === props.user.profile && 
        <>
          <Link state={coffeeShop} to={`/shops/${shopId}/editshop`}><button> EDIT</button> </Link>
          <button onClick={() => props.handleDeleteShop(shopId)}> DELETE</button>
        </>
        }
      </div>
      <div className={styles['review-container']}>
        <h1>Leave a Review</h1>
        <NewReview handleAddReview={handleAddReview} />
        <Reviews reviews={coffeeShop.reviews} user={props.user} shopId={shopId} handleDeleteReview={handleDeleteReview} />
      </div>
    </main>
  )
}

export default CoffeeShopDetails
