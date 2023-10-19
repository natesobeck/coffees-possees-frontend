import styles from './RecommendationShopCard.module.css'
import { Link } from 'react-router-dom';
// import * as shopService from '../../services/shopService';

const RecommendationShopCard = (props) => {

  // const handleClubtoShop = async (shopId, clubId) => {
  //   const fetchClubs = await shopService.addClubtoShop(shopId, clubId)
  // }

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






{/* <div className={styles['suggestion']}>
      
      <p style={{color: 'black'}}>
        {shop.name}
      </p>
      <p>{shop.location}</p>
      <button>Add This Shop</button>
      <button>View Shop Details</button>
    </div> */}