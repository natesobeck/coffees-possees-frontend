// import styles from './ReviewCard.module.css'
//components
import AddedBy from '../AddedBy/AddedBy'


const ReviewCard = ({ review }) => {
  

  return (
    <div>
      <AddedBy content={review} />
      <h3>{review.text}</h3>
      <h3>{review.price}</h3>
      <h3>{review.rating}</h3>
      <h3>{review.coffeeShopAmbience}</h3>
      <h3>{review.wifi}</h3>
    </div>
  )
}

export default ReviewCard