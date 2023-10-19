//npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

//services
import * as shopService from '../../services/shopService'

//components
import NewReview from '../NewReview/NewReview'
import Reviews from '../Reviews/Reviews'
// import NewCoffeeShop from '../NewCoffeeShop/NewCoffeeShop'

//css
import styles from './CoffeeShopDetails.module.css'
import AddedBy from '../AddedBy/AddedBy'

//import loading

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

  // if (!coffeeShop) return <Loading />

  console.log(coffeeShop)
  console.log(props.user)
  return (
    <main className={styles.container}>
      <div className={styles['coffeeShop-details-container']}>
        <h1>{coffeeShop.name}</h1>
        {coffeeShop.address ?
          <>
          <h3>Street: {coffeeShop.address.street}</h3>
            <h3>City:{coffeeShop.address.city}</h3>
            <h3>State:{coffeeShop.address.state}</h3>
            <h3>ZipCode:{coffeeShop.address.zipCode}</h3>
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
        {coffeeShop?.name && <AddedBy content={coffeeShop} />}
        {coffeeShop?.name && coffeeShop.addedBy._id === props.user.profile && 
        <>
          <Link state={coffeeShop} to={`/shops/${shopId}/editshop`} ><button> Edit</button> </Link>
          <button onClick={() => props.handleDeleteShop(shopId)}> Delete</button>
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



// search or dropdown on the page to be able to find a club to put in 


//refer to hoot details
// reviews will be embedded in this file using a handle function called handleAddReview once this is created 




{/* <main className={styles.container}>
<div className={styles['coffeeShop-details-container']}>
  <h1>{coffeeShop.name}</h1>

  <h3>Street: {coffeeShop.street}</h3>
  <h3>City:{coffeeShop.city}</h3>
  <h3>State:{coffeeShop.state}</h3>
  <h3>ZipCode:{coffeeShop.zipCode}</h3>

</div>  */}