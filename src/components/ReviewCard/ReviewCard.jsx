import { Link } from 'react-router-dom'
//components
import AddedBy from '../AddedBy/AddedBy'

//css
import styles from './ReviewCard.module.css'



const ReviewCard = ({handleDeleteReview, review, shopId, user }) => {
  

  return (
    <div className={styles['review-container']}>
      <AddedBy content={review} />
      <div className={styles['review-text']}>{review.text}</div>
      <div className={styles['dropdown-container']}>
        <div>⭐️ {review.rating}</div>
        <div>💰 {review.price}</div>
        <div>☕️ {review.coffeeShopAmbience}</div>
        <div>🛜 {review.wifi}</div>
      </div>
      {review.addedBy._id === user.profile &&
      <div className={styles['btn-container']}>
        <Link to={`/shops/${shopId}/reviews/${review._id}`} state={review} className={styles['edit-btn']}>
          EDIT
        </Link>
        <button onClick={()=> handleDeleteReview(shopId, review._id)} className={styles['delete-btn']}>DELETE</button>
      </div>
      }
    </div>
  )
}

export default ReviewCard