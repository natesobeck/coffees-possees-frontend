//npm modules
import { Link } from 'react-router-dom'

// css
import styles from './ClubCard.module.css'

const ClubCard = ({ club }) => {
  return (
    <Link to={`/clubs/${club._id}`}>
      <div className={styles['club-card']}>
        <div>{club.name}</div>
        <div>{club.category}</div>
        <div>{club.timeOfDay}</div>
        <div>
          <button type='submit'>DELETE</button>
        </div>
      </div>
    </Link>
  )
}

export default ClubCard
