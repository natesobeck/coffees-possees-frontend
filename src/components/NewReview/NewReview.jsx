import styles from './NewReview.module.css'


const NewReview = () => {

  return (
    <main>
      <h1>Leave a Review</h1>
      <form>
        <textarea
        required
        type='text'
        />
        <label> 
          Price of Coffee:
          <select name='priceOfCoffees'>
            <option value='one'>1</option>
            <option value='two'>2</option>
            <option value='three'>3</option>
            <option value='four'>4</option>
            <option value='five'>5</option>
          </select>
        </label>

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
            <option value='choiceOne'>spacious</option>
            <option value='choiceTwo'>cozy</option>
            <option value='choiceThree'>loud</option>
            <option value='choiceFive'>relaxing</option>
            <option value='choiceSix'>quiet</option>
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
  </main>
  )
}


export default NewReview