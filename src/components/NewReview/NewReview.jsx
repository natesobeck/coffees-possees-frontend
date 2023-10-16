//npm imports
import { useState } from 'react'

//css
import styles from './NewReview.module.css'


const NewReview = () => {
  const [reviewFormData, setReviewFormData] = useState({})

  const handleChange = (evt) => {
    setReviewFormData({...reviewFormData, [evt.target.name]: evt.target.value})
  }

  const handleSubmitReview = (evt) => {
    evt.preventDefault()


  }



  return (
    <form className={styles.container}>
      <h1>Leave a Review</h1>
    
      
    
      

      
        <lable htmlFor>Price of Coffees:</lable>
          <select name='price'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        

        <label> Rating:</label>
          <select name='rating'>
            <option value='one'>1</option>
            <option value='two'>2</option>
            <option value='three'>3</option>
            <option value='four'>4</option>
            <option value='five'>5</option>
          </select>

        <label> Ambience:</label>
          <select name='coffeeShopAmbience'>
            <option value='spacious'>spacious</option>
            <option value='cozy'>cozy</option>
            <option value='loud'>loud</option>
            <option value='relaxing'>relaxing</option>
            <option value='quiet'>quiet</option>
          </select>

        <label> Wifi Strength:</label>
          <select name='wifiStrength'>
            <option value='one'>1</option>
            <option value='two'>2</option>
            <option value='three'>3</option>
            <option value='four'>4</option>
            <option value='five'>5</option>
          </select>
        <button type="submit">Add Review</button>
    </form>

  )
}


export default NewReview