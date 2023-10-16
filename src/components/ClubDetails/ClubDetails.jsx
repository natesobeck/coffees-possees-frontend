//npm modeules
import { useState, useEffect } from 'react'


//css
import styles from './ClubDetails.module.css'


//components



//services
import * as clubService from '../../services/clubService'


const ClubDetails = (club) => {
//  const 


  return (
    <main className={styles.container}>
      <div className={styles['club-details-container']}>
        <h1>Club Name Here</h1>
        <h3>Name:{club.name} </h3>
        <h3>Category:{club.category} </h3>
        <h3>Club Description: ....  </h3>
      </div>
      <div className={styles['show-previous-container']} >

      </div>
    </main>
  )
}

export default ClubDetails



{/* <h1 className={styles['title-club-details']}>Club Name Here</h1> */}