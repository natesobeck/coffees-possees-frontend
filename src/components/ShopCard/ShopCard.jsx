// npm modules
import { Link } from 'react-router-dom'

// css
import styles from './ShopCard.module.css'

const ShopCard = ({ shop }) => {
  return (
    <Link to={`/coffeeshops/${shop._id}`}>
      <div className={styles["shop-card-container"]}>
        <h3>{shop.name}</h3>
        <div>{shop.location}, {shop.address.state}</div>
      </div>
    </Link>
  )
}

export default ShopCard