import { useState } from 'react';
import styles from './NewCoffeeShop.module.css'

const NewCoffeeShop = (props) => {

  const [coffeeShop, setCoffeeShop] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    location: ''
  })

  const handleChange = evt => {
    setCoffeeShop({ ...coffeeShop, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    const adjustedFormData = {}
    adjustedFormData.name = coffeeShop.name
    adjustedFormData.location = coffeeShop.location
    adjustedFormData.address = {
      street: coffeeShop.street,
      city: coffeeShop.city,
      state: coffeeShop.state,
      zipCode: coffeeShop.zipCode
    }
    evt.preventDefault()
    props.handleAddShop(adjustedFormData)
  }

  // const handleChangeAddress = evt => {
  //   setCoffeeShop({ ...coffeeShop, [evt.target.name]: evt.target.value })
  // }
  // Build a new Object?
  // Store the address

  return ( 
    <form className={styles["new-shop-form-container"]} onSubmit={handleSubmit}>
      {/* <h1>Add A Coffee Shop Here</h1> */}
      <div className={styles["new-shop-image-holder"]}></div>
      <div className={styles["shop-form"]}>
        <div>
          <label htmlFor="shop-name">Name:</label>
          <input type="text" name="name" id="shop-name" value={coffeeShop.name} onChange={handleChange} autoComplete='off' />
        </div>
        <div className={styles["shop-address"]}>
          <h4>Address</h4>
          <div>
            <label htmlFor="shop-street">Street:</label>
            <input type="text" name="street" id="shop-street" value={coffeeShop.street} onChange={handleChange} autoComplete='off' />
          </div>
          <div>
            <label htmlFor="shop-city">City:</label>
            <input type="text" name="city" id="shop-city" value={coffeeShop.city} onChange={handleChange} autoComplete='off' />
          </div>
          <div>
            <label htmlFor="shop-state">State:</label>
            <input type="text" name="state" id="shop-state" value={coffeeShop.state} onChange={handleChange} autoComplete='off' />
          </div>
          <div>
            <label htmlFor="shop-zipCode">Zip-code</label>
            <input type="text" name="zipCode" id="shop-zipCode" value={coffeeShop.zipCode} onChange={handleChange} autoComplete='off' />
          </div>
        </div>
        <button type='submit'>Add Coffee Shop</button>
      </div>
    </form>
  )
}
 
export default NewCoffeeShop;