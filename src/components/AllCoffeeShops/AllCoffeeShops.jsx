
// components
import ShopCard from "../ShopCard/ShopCard"
import ShopSearchForm from "../ShopSearchForm/ShopSearchForm"

// css
import styles from "./AllCoffeeShops.module.css"

const AllCoffeeShops = (props) => {

  return ( 
    <div className={styles["shops-container"]}>
      <ShopSearchForm 
        handleShopSearch={props.handleShopSearch} 
      />
      {props.shopSearchResults.map(shop => <ShopCard 
        key={shop._id} 
        shop={shop} 
        handleDeleteShop={props.handleDeleteShop} 
        user={props.user}
      />)}
    </div>
  )
}

export default AllCoffeeShops