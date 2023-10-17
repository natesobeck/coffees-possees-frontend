// components
import ShopCard from "../ShopCard/ShopCard"

// css
import styles from "./AllCoffeeShops.module.css"

const AllCoffeeShops = ({ shops, handleDeleteShop }) => {
  return ( 
    <div className={styles["shops-container"]}>
      <div className={styles.label}>
        <h3>Name:</h3>
        <h3>Location:</h3>
      </div>
      {shops.map(shop => <ShopCard key={shop._id} shop={shop} handleDeleteShop={handleDeleteShop}/>)}
    </div>
  )
}

export default AllCoffeeShops