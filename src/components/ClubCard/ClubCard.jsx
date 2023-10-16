// css
import styles from './ClubCard.module.css'

const ClubCard = ({ club }) => {
  return (
    <div className={styles['club-card']}>
      <div>{club.name}</div>
      <div>{club.category}</div>
      <div>{club.timeOfDay}</div>
    </div>
  )
}

export default ClubCard
