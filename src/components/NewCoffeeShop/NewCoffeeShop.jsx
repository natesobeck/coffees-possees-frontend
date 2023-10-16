const NewCoffeeShop = () => {
  return ( 
    <div className="new-shop-form-container">
      <h1>Add A Coffee Shop Here</h1>
      <div className="new-shop-image-holder"></div>
      <div className="shop-form">
        <label htmlFor="shop-name">Name:</label>
        <input type="text" name="name" id="shop-name" />
        <div className="shop-address">
          <h4>Address</h4>
          <label htmlFor="shop-street">Street:</label>
          <input type="text" name="street" id="shop-street" />
          <label htmlFor="shop-city">City:</label>
          <input type="text" name="city" id="shop-city" />
          <label htmlFor="shop-state">State:</label>
          <input type="text" name="state" id="shop-state" />
          <label htmlFor="shop-zipCode"></label>
          <input type="text" name="state" id="shop-zipCode" />
        </div>
      </div>
    </div>
  )
}
 
export default NewCoffeeShop;