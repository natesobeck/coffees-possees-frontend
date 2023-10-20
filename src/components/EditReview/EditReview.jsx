import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

//css
import styles from './EditReview.module.css'

// services
import * as shopService from '../../services/shopService'

const EditReview = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { shopId, reviewId } = useParams()
  const  [reviewFormData, setReviewFormData] = useState(state)

  const handleChange = (evt) => {
    setReviewFormData({ ...reviewFormData, [evt.target.name]: evt.target.value})
  }

  const handleSubmitEdit = async (evt) => {
    evt.preventDefault()
    await shopService.updateReview(shopId, reviewId, reviewFormData)
    navigate(`/shops/${shopId}`)
  }

  return (
    <main>
      <div id={styles['background-image']}></div>
      <div id={styles['img-cover']}></div>
      <div className={styles['form-container']}>
        <form onSubmit={handleSubmitEdit}>
          <h1 className={styles['title']}> EDIT REVIEW</h1>
          <div className={styles['review-container']}> 
            <div className={styles['space-between']}>
              <input
                required
                name='text'
                type='text'
                value={reviewFormData.text} 
                id='text'
                onChange={handleChange}
                placeholder='Edit Review'
                autoComplete='off'
              />
            </div>
            <div className={styles['space-between']}>
              <label htmlFor='price'>Price  💰 </label>
              <select name='price' value={reviewFormData.price} id='price' onChange={handleChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>    
            <div className={styles['space-between']}>
              <label htmlFor='rating'> Rating ⭐️ </label>
                <select name='rating' value={reviewFormData.rating} id='rating' onChange={handleChange}>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
            </div>
            <div className={styles['space-between']}>
              <label htmlFor='coffeeShopAmbience'>Ambience ☕️ </label>
              <select name='coffeeShopAmbience' value={reviewFormData.coffeeShopAmbience} id='coffeeShopAmbience' onChange={handleChange}>
                <option value='Spacious'>Spacious</option>
                <option value='Cozy'>Cozy</option>
                <option value='Loud'>Loud</option>
                <option value='Relaxing'>Relaxing</option>
                <option value='Quiet'>Quiet</option>
              </select>
            </div>
            <div className={styles['space-between']}>
              <label htmlFor='wifi'> Wifi 🛜 </label>
              <select name='wifi' value={reviewFormData.wifi} id='wifi' onChange={handleChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>  
            <div className={styles['review-button']}>
              <button type="submit" className={styles['edit-btn']}>Save Review</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default EditReview