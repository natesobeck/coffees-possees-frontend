

const NewReview = () => {

  return (
    <main>
      <form>
        <textarea
        required
        type='text'
        />
        <select name='priceOfCoffees'>
          <option value='price'>Price</option>
        </select>


     
      <button type="submit"><Icon category="Create" /></button>
    </form>
  </main>
  )
}

// const review = {
//   _id: 3,
//   text: 'superrrrr',
//   price: 1000000,
//   rating: 5,
//   coffeeShopAmbience: 'spacious',
//   wifiStrength: 4,
//   addedBy: 'Nate'
// }


export default NewReview