//npm modeules
import { useState, useEffect } from 'react'
import { useParams, NavLink, useLocation } from 'react-router-dom'

//css
import styles from './ClubDetails.module.css'

//services
import * as clubService from '../../services/clubService'


const ClubDetails = ({ user }) => {
  const [club, setClub] = useState({})
  const { clubId } = useParams()

  useEffect(() => {
    const fetchClub = async () => {
      const data = await clubService.show(clubId)
      setClub(data)
    }
    fetchClub()
  },[clubId])



  return (
    <main className={styles['main']}>
      <div id={styles['background-image']}></div>
      <div id={styles['img-cover']}></div>
      <div className={styles.container}>
        <div className={styles['club-details-container']}>
          <h1>{club.name}</h1>
          <h3>Category: {club.category} </h3>
          <h3>Description: {club.description}  </h3>
        </div>
        <div className={styles['show-previous-container']} >
          <h3> Previous Club Locations:</h3>
          <ul>
            <h4>This club has not met at any shops yet!</h4>
          </ul>
        </div>
        <div> 
          <div className={styles['edit-delete-button']}> 
            {user?.profile === club.addedBy?._id &&
            <div>
              <NavLink state={club} to={`/clubs/${clubId}/editclub`}>
              <button className={styles['edit-btn']}>Edit</button>
              </NavLink>
              <button className={styles['delete-btn']}>Delete</button>
            </div>
            }
            {/* user?.profile === shop.addedBy._id */}
          </div> 
        </div>
      </div>
    </main>
  )
}


{/* <NavLink state={club} to={`/clubs/${clubId}/editclub`}>
              <button className={styles['edit-btn']}>Edit</button>
              </NavLink>
              <button className={styles['delete-btn']}>Delete</button>  */}
export default ClubDetails