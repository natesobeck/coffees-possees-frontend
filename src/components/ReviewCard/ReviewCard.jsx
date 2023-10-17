// import styles from './ReviewCard.module.css'
//components
import AddedBy from '../AddedBy/AddedBy'
import styles from './ReviewCard.module.css'


const ReviewCard = ({ review }) => {
  

  return (
    <div className={styles['for-review-container']}>
      <AddedBy content={review} />
      <h3>Text: {review.text}</h3>
      <h3>Price of Coffee:{review.price}</h3>
      <h3>Rating: {review.rating}</h3>
      <h3>Ambience: {review.coffeeShopAmbience}</h3>
      <h3>Wifi Strength: {review.wifi}</h3>
    </div>
  )
}

export default ReviewCard