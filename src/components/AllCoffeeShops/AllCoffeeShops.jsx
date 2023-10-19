// components
import ShopCard from "../ShopCard/ShopCard"
import ShopSearchForm from "../ShopSearchForm/ShopSearchForm"

// css
import styles from "./AllCoffeeShops.module.css"

const AllCoffeeShops = (props) => {

  return (
    <>
      <div id={styles['background-image']}></div>
      <div id={styles['img-cover']}></div>
      <div className={styles["shops-container"]}>
        <ShopSearchForm 
          handleShopSearch={props.handleShopSearch} 
        />
        <div id={styles['shop-search-results-container']}>
          <div id={styles['shop-search-results']}>
            {props.shopSearchResults.map(shop => <ShopCard 
              key={shop._id} 
              shop={shop} 
              handleDeleteShop={props.handleDeleteShop} 
              user={props.user}
            />)}
          </div>
        </div>
      </div>
    </> 
  )
}

export default AllCoffeeShops