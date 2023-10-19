import { useState } from 'react';
import styles from './NewCoffeeShop.module.css'
import { useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate()

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
  
  const goToClubs = () => {
    navigate('/clubs')
  }

  return ( 
    <form className={styles['new-shop-form-container']} onSubmit={handleSubmit} id="shopForm">
      {/* <h1>Add A Coffee Shop Here</h1> */}
      <div className={styles["new-shop-image-holder"]}>
        <div className={styles.textOverImage}>
          <h4>Add a Coffee Shop, enjoy a moment with the members of your club. </h4>
        </div>
      </div>
      <div className={styles["shop-form"]}>
        <div className={styles["shop-address"]}>
          <div className={styles['address-title']}>Name of Shop</div>
          <div>
            <input type="text" name="name" id="shop-name" value={coffeeShop.name} onChange={handleChange} autoComplete='off' placeholder='Shop name e.g: Panther Coffee' required />
          </div>
          <div className={styles['address-title']}>Address</div>
          <div>
            <input type="text" name="street" id="shop-street" value={coffeeShop.street} onChange={handleChange} autoComplete='off' placeholder='Street Address e.g: Saint St' required />
          </div>
          <div>
            <input type="text" name="city" id="shop-city" value={coffeeShop.city} onChange={handleChange} autoComplete='off' placeholder='City e.g: Paris' required />
          </div>
          <div>
            <input type="text" name="state" id="shop-state" value={coffeeShop.state} onChange={handleChange} autoComplete='off' placeholder='State e.g: Texas' required />
          </div>
          <div>
            <input type="text" name="zipCode" id="shop-zipCode" value={coffeeShop.zipCode} onChange={handleChange} autoComplete='off' placeholder='Zip Code e.g: 40202' required />
          </div>
          <button 
            type='submit'
            id={styles['create-shop']}
          >
            Add Coffee Shop
          </button>
        </div>
      </div>
    </form>
  )
}
 
export default NewCoffeeShop;