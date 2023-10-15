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

      <h3>Name:{club.name} </h3>
      </div>
    </main>


      

  )
}

export default ClubDetails