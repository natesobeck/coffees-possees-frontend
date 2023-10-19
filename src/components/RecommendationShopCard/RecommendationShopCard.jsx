import styles from './RecommendationShopCard.module.css'
import { Link } from 'react-router-dom';
// import * as shopService from '../../services/shopService';

const RecommendationShopCard = (props) => {

  return ( 
    <div className={styles.card}>
      <div className={styles.front}>
        <h3>{props.shop.name}</h3>
      </div>
      <div className={styles.back}>
        <h2>{props.shop.name}</h2>
        <h3>{props.shop.location}</h3>
        <div>
        <Link to={`/shops/${props.shop._id}`} className={styles.detailsButton}>Details</Link>
        </div>
        <div>
        <a href="#" className={styles.button}>Add this Shop</a>
        </div>
      </div>
    </div>
    
  )
}
 
export default RecommendationShopCard;
