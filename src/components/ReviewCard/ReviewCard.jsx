import { Link } from 'react-router-dom'
//components
import AddedBy from '../AddedBy/AddedBy'

//css
import styles from './ReviewCard.module.css'



const ReviewCard = ({handleDeleteReview, review, shopId, user }) => {
  

  return (
    <div className={styles['for-review-container']}>
      <AddedBy content={review} />
      {review.addedBy._id === user.profile &&
      <>
      <Link to={`/shops/${shopId}/reviews/${review._id}`} state={review}>
        EDIT
      </Link>
      <button onClick={()=> handleDeleteReview(shopId, review._id)}>DELETE</button>
      </>
    }
      <h3>Text: {review.text}</h3>
      <h3>Price of Coffee:{review.price}</h3>
      <h3>Rating: {review.rating}</h3>
      <h3>Ambience: {review.coffeeShopAmbience}</h3>
      <h3>Wifi Strength: {review.wifi}</h3>

    </div>
  )
}

export default ReviewCard