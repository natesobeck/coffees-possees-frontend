// components
import ShopCard from "../ShopCard/ShopCard"

// css
import styles from "./AllCoffeeShops.module.css"

const AllCoffeeShops = ({ shops }) => {
  return ( 
    <div className={styles["shops-container"]}>
      {shops.map(shop => <ShopCard key={shop._id} shop={shop}/>)}
    </div>
  )
}

export default AllCoffeeShops