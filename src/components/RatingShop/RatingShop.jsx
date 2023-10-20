// css
import styles from './RatingShop.module.css'

const RatingShop = (props) => {
  
  let avgRating = 0, avgWifi = 0, avgPrice = 0
  props.coffeeShop.reviews?.map(review => {
    avgPrice += review.price
    avgWifi += review.wifi
    avgRating += review.rating
  })
  // avgRating = (avgRating / reviews.length).toFixed(2)
  avgRating = Math.round((avgRating / props.coffeeShop.reviews?.length) * 10) / 10
  avgWifi = Math.round((avgWifi / props.coffeeShop.reviews?.length) * 10) / 10
  avgPrice = Math.round((avgPrice / props.coffeeShop.reviews?.length) * 10) / 10
  let overall = ((avgPrice + avgRating + avgWifi) / 3).toFixed(1)

  return (
    <>
      {props.coffeeShop.reviews?.length ?
        <div className={styles.reviewBoard}>
          <div className={styles.rating}>
            <h3>Reviews Summary</h3>
            <p><span className={styles.field}>Rating:</span> {avgRating}</p>
            <p><span className={styles.field}>Wifi:</span> {avgWifi}</p>
            <p><span className={styles.field}>Price:</span> {avgPrice}</p>
          </div>
          <div className={styles.overall}>

            {overall ?
              <>
                <h1 style={{ color: 'orange' }}>{overall}</h1>
              </>
              :
              ""}
            <p>{props.coffeeShop.reviews.length} {props.coffeeShop.reviews.length === 0 ? "" : props.coffeeShop.reviews.length === 1 ? "review" : 'reviews'}</p>
          </div>
        </div>
        :
        <h3>We don't have review yet</h3>}
    </>


  )
}

export default RatingShop