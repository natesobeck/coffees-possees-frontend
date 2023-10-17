// components
import ShopCard from "../ShopCard/ShopCard"

// css
import styles from "./AllCoffeeShops.module.css"

const AllCoffeeShops = ({ shops, handleDeleteShop, user }) => {
  return ( 
    <div className={styles["shops-container"]}>
      {shops.map(shop => <ShopCard key={shop._id} shop={shop} handleDeleteShop={handleDeleteShop} user={user}/>)}
    </div>
  )
}

export default AllCoffeeShops