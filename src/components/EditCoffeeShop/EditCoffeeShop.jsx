//npm modules
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

//css
// import styles from './EditCoffeeShop.module.css'


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
    <form className="new-shop-form-container" onSubmit={handleSubmit}>
      {/* <h1>Add A Coffee Shop Here</h1> */}
      <div className="new-shop-image-holder"></div>
      <div className="shop-form">
        <div>
          <label htmlFor="shop-name">Name:</label>
          <input type="text" name="name" id="shop-name" value={coffeeShop.name} onChange={handleChange} />
        </div>
        <div className="shop-address">
          <h4>Address</h4>
          <div>
            <label htmlFor="shop-street">Street:</label>
            <input type="text" name="street" id="shop-street" value={coffeeShop.street} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="shop-city">City:</label>
            <input type="text" name="city" id="shop-city" value={coffeeShop.city} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="shop-state">State:</label>
            <input type="text" name="state" id="shop-state" value={coffeeShop.state} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="shop-zipCode">Zip-code</label>
            <input type="text" name="zipCode" id="shop-zipCode" value={coffeeShop.zipCode || ''} onChange={handleChange} />
          </div>
        </div>
        <button type='submit'>Edit CoffeeShop</button>
      </div>
    </form>
  )
}

export default EditCoffeeShop

