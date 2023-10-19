import { useState } from 'react';
import styles from './NewCoffeeShop.module.css'
import { useEffect } from 'react';

const NewCoffeeShop = (props) => {

  const [coffeeShop, setCoffeeShop] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    location: ''
  })


  const handleChange = (evt) => {
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
  // const shopForm = document.getElementById('shopForm')
  // console.log(shopForm)
  function displayForm() {
    useEffect(() => {
      const shopForm = document.getElementById('shopForm')
      shopForm.style.display = 'flex'
      console.log(shopForm)
    }, [])
  }
  displayForm()

  return ( 
    <form className={styles['new-shop-form-container']} onSubmit={handleSubmit} id="shopForm">
      {/* <h1>Add A Coffee Shop Here</h1> */}
      <div className={styles["new-shop-image-holder"]}>
        <div className={styles.textOverImage}>
          <h4>Add a Coffee Shop, enjoy a moment with the members of your club. </h4>
        </div>
      </div>
      <div className={styles["shop-form"]}>
        <div>
          <label htmlFor="shop-name">Name:</label>
          <input type="text" name="name" id="shop-name" value={coffeeShop.name} onChange={handleChange} autoComplete='off' placeholder='e.g: Panther Coffee' required />
        </div>
        <div className={styles["shop-address"]}>
          <h4>Address</h4>
          <div>
            <label htmlFor="shop-street">Street:</label>
            <input type="text" name="street" id="shop-street" value={coffeeShop.street} onChange={handleChange} autoComplete='off' placeholder='e.g: Saint St' required />
          </div>
          <div>
            <label htmlFor="shop-city">City:</label>
            <input type="text" name="city" id="shop-city" value={coffeeShop.city} onChange={handleChange} autoComplete='off' placeholder='e.g: Paris' required />
          </div>
          <div>
            <label htmlFor="shop-state">State:</label>
            <input type="text" name="state" id="shop-state" value={coffeeShop.state} onChange={handleChange} autoComplete='off' placeholder='e.g: Texas' required />
          </div>
          <div>
            <label htmlFor="shop-zipCode">Zip-code:</label>
            <input type="text" name="zipCode" id="shop-zipCode" value={coffeeShop.zipCode} onChange={handleChange} autoComplete='off' placeholder='e.g: 40202' required />
          </div>
        </div>
        <button type='submit'>Add Coffee Shop</button>
      </div>
    </form>
  )
}
 
export default NewCoffeeShop;