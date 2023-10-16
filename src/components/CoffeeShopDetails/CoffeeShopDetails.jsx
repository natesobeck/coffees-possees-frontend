//css
import styles from './CoffeeShopDetails.module.css'

//services
import * as shopService from '../../services/shopService'

//npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


//components




//import loading, new review, and reviews here 

const CoffeeShopDetails = () => {
  const [coffeeShop, setCoffeeShop] = useState({})
  const { coffeeShopId } = useParams()

  useEffect(() => {
    const fetchCoffeeShop = async () => {
      const data = await shopService.show(coffeeShopId)
      setCoffeeShop(data)
    }
    fetchCoffeeShop()
  }, [coffeeShopId])




  return (
    <main className={styles.container}>
      <div className={styles['coffeeShop-details-container']}>

      </div>
      






    </main>

)
}

export default CoffeeShopDetails








//refer to hoot details
// reviews will be embedded in this file using a handle function called handleAddReview once this is created 