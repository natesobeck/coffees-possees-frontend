//npm imports
import { useState } from 'react'

//css
import styles from './NewReview.module.css'


const NewReview = (props) => {
  const [reviewFormData, setReviewFormData] = useState({})

  const handleChange = (evt) => {
    setReviewFormData({...reviewFormData, [evt.target.name]: evt.target.value})
  }

  const handleSubmitReview = (evt) => {
    evt.preventDefault()
    props.handleAddReview(reviewFormData)
    setReviewFormData({})


  }



  return (
    <form className={styles.container} onSubmit={handleSubmitReview}>
      <div className={styles['review-container']}> 


    {/* <h1>Leave a Review</h1> */}
    <div className={styles['space-between']}>
      <lable htmlFor='price'>Price of Coffees:</lable>
      <select name='price' value={reviewFormData.price}onChange={handleChange}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
    </div>
        
    <div className={styles['space-between']}>
      <label htmlFor='rating'> Rating:</label>
        <select name='rating' value={reviewFormData.rating} onChange={handleChange}>
          <option value='one'>1</option>
          <option value='two'>2</option>
          <option value='three'>3</option>
          <option value='four'>4</option>
          <option value='five'>5</option>
        </select>
    </div>
    <div className={styles['space-between']}>
      <label htmlFor='coffeeShopAmbience'>Ambience:</label>
          <select name='coffeeShopAmbience' value={reviewFormData.coffeeShopAmbience} onChange={handleChange}>
            <option value='Spacious'>Spacious</option>
            <option value='Cozy'>Cozy</option>
            <option value='Loud'>Loud</option>
            <option value='Relaxing'>Relaxing</option>
            <option value='Quiet'>Quiet</option>
          </select>
    </div>
    <div className={styles['space-between']}>
      <label htmlFor='wifiStrength'> Wifi Strength:</label>
        <select name='wifiStrength' value={reviewFormData.wifiStrength} onChange={handleChange}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
    </div>  
    <div className={styles['review-button']}>
      <button type="submit">Add Review</button>
    </div>

  </div>

</form>

  )
}


export default NewReview