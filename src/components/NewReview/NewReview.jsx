//npm imports
import { useState } from 'react'

//css
import styles from './NewReview.module.css'


const NewReview = () => {
  const [reviewFormData, setReviewFormData] = useState({})

  const handleChange = (evt) => {
    setReviewFormData({...reviewFormData, [evt.target.text: evt.target.value]})
  }

  const handleSubmitReview = (evt) => {
    evt.preventDefault()


  }



  return (
    <form className={styles.container}>
      // <h1>Leave a Review</h1>
    
      
      <textarea
      required
      type='text'
      />
      

      
        
          <select name='priceOfCoffee'>
            <option value='one'>1</option>
            <option value='two'>2</option>
            <option value='three'>3</option>
            <option value='four'>4</option>
            <option value='five'>5</option>
          </select>
        

        <label> 
        Rating:
          <select name='ratingForCoffeeShop'>
            <option value='one'>1</option>
            <option value='two'>2</option>
            <option value='three'>3</option>
            <option value='four'>4</option>
            <option value='five'>5</option>
          </select>
        </label>

        <label> 
        Ambience:
          <select name='coffeeShopAmbience'>
            <option value='spacious'>spacious</option>
            <option value='cozy'>cozy</option>
            <option value='loud'>loud</option>
            <option value='relaxing'>relaxing</option>
            <option value='quiet'>quiet</option>
          </select>
        </label>

        <label> 
        Wifi Strength:
          <select name='wifiStrength'>
            <option value='one'>1</option>
            <option value='two'>2</option>
            <option value='three'>3</option>
            <option value='four'>4</option>
            <option value='five'>5</option>
          </select>
        </label>
        <button type="submit">Add Review</button>
  
    </form>

  )
}


export default NewReview