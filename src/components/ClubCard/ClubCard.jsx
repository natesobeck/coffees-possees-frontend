//npm modules
import { Link } from 'react-router-dom'

// css
import styles from './ClubCard.module.css'

const ClubCard = ({ club, handleDeleteClub }) => {
  return (
    <div className={styles['club-card']}>
      <Link to={`/clubs/${club._id}`}>
        <div>{club.name}</div>
      </Link>
      <div>{club.category}</div>
      <div>{club.timeOfDay}</div>
      <div>
        <button type='submit' onClick={() => handleDeleteClub(club._id)}>DELETE</button>
      </div>
      </div>
  )
}

export default ClubCard
