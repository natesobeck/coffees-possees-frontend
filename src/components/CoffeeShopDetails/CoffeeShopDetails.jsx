//npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

//services
import * as shopService from '../../services/shopService'

//components
import NewReview from '../NewReview/NewReview'
import Reviews from '../Reviews/Reviews'
import RatingShop from '../RatingShop/RatingShop'

//css
import styles from './CoffeeShopDetails.module.css'

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
    <main>
      <div id={styles['background-image']}></div>
      <div id={styles['img-cover']}></div>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <h1 className={styles['coffee-name']}>{coffeeShop.name}</h1>
          <div className={styles['coffeeshop-details-container']}>
            {coffeeShop.address ?
              <div className={styles['address-container']}>
                <div className={styles['address-pair']}>
                  <div className={styles['address']}>{coffeeShop.address.street},</div>
                  <div className={styles['address']}>{coffeeShop.address.city}</div>
                </div>
                <div className={styles['address-pair']}>
                  <div className={styles['address']}>{coffeeShop.address.state},</div>
                  <div className={styles['address']}>{coffeeShop.address.zipCode}</div>
                </div>
              </div>
              : null
            }
          </div>
          <div className={styles['show-all-clubs-container']}>
            <h3>All Clubs</h3>
            <h4>No clubs have met in {coffeeShop.name} yet!</h4>
          </div>
          <div className={styles['coffee-edit-delete-button']}>
            {coffeeShop?.name && coffeeShop.addedBy._id === props.user?.profile &&
              <>
                <Link state={coffeeShop} to={`/shops/${shopId}/editshop`} className={styles['edit-btn']}>EDIT</Link>
                <button onClick={() => props.handleDeleteShop(shopId)} className={styles['delete-btn']}> DELETE</button>
              </>
            }
          </div>
          <div className={styles['rating-shop']} style={{ marginBottom: '20px' }}>
            <RatingShop shopId={shopId} coffeeShop={coffeeShop}/>
          </div>
          <div className={styles['review-container']}>
            <h3 className={styles['review-title']}>Leave a Review</h3>
            <NewReview handleAddReview={handleAddReview} />
            <Reviews reviews={coffeeShop.reviews} user={props.user} shopId={shopId} handleDeleteReview={handleDeleteReview} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default CoffeeShopDetails