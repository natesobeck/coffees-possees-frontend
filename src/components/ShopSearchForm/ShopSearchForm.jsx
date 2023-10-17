// css
import styles from './ShopSearchForm.module.css'

const ShopSearchForm = () => {
  return ( 
    <div className={styles["form-container"]}>
      <h1>Search For A Shop</h1>
      <p className={styles['p-tag']}>Enter the name of a coffee shop or a location.</p>
      <form className={styles['search']}>
        <input type="text" placeholder="Enter your city..." className={styles["city-input"]} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default ShopSearchForm