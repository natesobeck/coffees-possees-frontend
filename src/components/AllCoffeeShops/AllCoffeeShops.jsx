// npm modules
import { useState } from "react"

// components
import ShopCard from "../ShopCard/ShopCard"
import ShopSearchForm from "../ShopSearchForm/ShopSearchForm"

// css
import styles from "./AllCoffeeShops.module.css"

const AllCoffeeShops = ({ shops, handleDeleteShop, user }) => {
  const [searchResults, setSearchResults] = useState(shops)

  const handleShopSearch = formData => {
    const filteredShopResults = shops.filter(shop => (
      shop.location.toLowerCase().includes(formData.query.toLowerCase())
    ))
    setSearchResults(filteredShopResults)
  }

  return ( 
    <div className={styles["shops-container"]}>
      <ShopSearchForm handleShopSearch={handleShopSearch} />
      {searchResults.map(shop => <ShopCard key={shop._id} shop={shop} handleDeleteShop={handleDeleteShop} user={user}/>)}
    </div>
  )
}

export default AllCoffeeShops