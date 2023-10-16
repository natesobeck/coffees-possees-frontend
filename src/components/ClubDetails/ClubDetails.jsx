//npm modeules
import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

//css
import styles from './ClubDetails.module.css'


//components
// import loading


//services
import * as clubService from '../../services/clubService'


const ClubDetails = () => {
  const [club, setClub] = useState({})
  const { clubId } = useParams()

useEffect(() => {
  const fetchClub = async () => {
    const data = await clubService.show(clubId)
    setClub(data)
  }
  fetchClub()
},[clubId])

// useEffect is the function that makes the api call


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
 {/* for the list of the coffeshop names once this is done they will be written in a component tags above */}
      </div>
      {/* <button> edit</button> */}
      {/* <button> delete</button> */}
    </main>
  )
}

export default ClubDetails



{/* <h1 className={styles['title-club-details']}>Club Name Here</h1> */}