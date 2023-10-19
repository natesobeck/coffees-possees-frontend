//npm modules
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

//css
import styles from './EditCoffeeShop.module.css'


const EditCoffeeShop = (props) => {
  const { state } = useLocation()
  const [coffeeShop, setCoffeeShop] = useState({
    name: state.name,
    street: state.address.street,
    city: state.address.city,
    state: state.address.state,
    zipCode: state.address.zipCode,
  })

  const handleChange = evt => {
    setCoffeeShop({ ...coffeeShop, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    const adjustedFormData = {}
    adjustedFormData._id = state._id
    adjustedFormData.name = coffeeShop.name
    adjustedFormData.address = {
      street: coffeeShop.street,
      city: coffeeShop.city,
      state: coffeeShop.state,
      zipCode: coffeeShop.zipCode
    }
    evt.preventDefault()
    props.handleUpdateCoffeeShop(adjustedFormData)
  }

  return (
    <main>
      <div id={styles['background-image']}></div>
      <div id={styles['img-cover']}></div>
      <div className={styles['new-shop-form-container']}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.title}>Edit {coffeeShop.name}</h1>
          <div>
            <input type="text" name="name" id="shop-name" value={coffeeShop.name} onChange={handleChange} />
          </div>
          <h4>Address</h4>
          <div className={styles['address']}>
            <div>
              <label htmlFor="shop-street">Street:</label>
              <input type="text" name="street" id="shop-street" value={coffeeShop.street} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="shop-city">City:</label>
              <input type="text" name="city" value={coffeeShop.city} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="shop-state">State:</label>
              <input type="text" name="state" value={coffeeShop.state} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="shop-zipCode">Zip-code</label>
              <input type="text" name="zipCode" id="shop-zipCode" value={coffeeShop.zipCode} onChange={handleChange} />
            </div>
          </div>
          <button className={styles['edit-btn']} type='submit'>Save Shop</button>
        </form>
      </div>
    </main>
  )
}

export default EditCoffeeShop

