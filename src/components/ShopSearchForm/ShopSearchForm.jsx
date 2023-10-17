//npm modules
import { useState } from 'react'

// css
import styles from './ShopSearchForm.module.css'

const ShopSearchForm = (props) => {
  const [formData, setFormData] = useState({
    query: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    if (formData.query) {
      props.handleShopSearch(formData)
    }
  }

  return ( 
    <div className={styles["form-container"]}>
      <h1>Search For A Shop</h1>
      <p className={styles['p-tag']}>Enter the name of a coffee shop or a location.</p>
      <form onSubmit={handleSubmit} className={styles['search']}>
        <input 
          type="text" 
          placeholder="Enter your city..." 
          className={styles["city-input"]} 
          name="query"
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default ShopSearchForm