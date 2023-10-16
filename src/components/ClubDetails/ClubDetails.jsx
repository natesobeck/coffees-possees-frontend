//npm modeules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

//css
import styles from './ClubDetails.module.css'


//components



//services
import * as clubService from '../../services/clubService'


const ClubDetails = (clubs) => {
  const [club, setClub] = useState({})
  const { clubId } =useParams

useEffect(() => {
  const fetchClub = async () => {
    const data = await clubService.show(clubId)
    setClub(data)
  }
  fetchClub()
},[clubId])




  return (
    <main className={styles.container}>
      <div className={styles['club-details-container']}>
        <h1>Club Name Here</h1>
        <h3>Name:{club.name} </h3>
        <h3>Category:{club.category} </h3>
        <h3>Club Description: ....  </h3>
      </div>
      <div className={styles['show-previous-container']} >
        <h3> Previous Club Locations:</h3>
        <ul>
          <li>CoffeeShop Name</li>
          <li>CoffeShop Name</li>
          <li>CoffeeShop Name</li>
        </ul>



      </div>
    </main>
  )
}

export default ClubDetails



{/* <h1 className={styles['title-club-details']}>Club Name Here</h1> */}