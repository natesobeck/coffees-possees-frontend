// npm modules
import { Link } from 'react-router-dom'

// css
import styles from './ShopCard.module.css'

const ShopCard = ({ shop }) => {
  return (
    <Link to={`/coffeeshops/${shop._id}`}>
      <h3>{shop.name}</h3>
    </Link>
  )
}

export default ShopCard