import styles from './ClubCard.module.css'

const ClubCard = ({ club }) => {

  return (
    <div className='club-card'>
      <div>{club.name}</div>
    </div>
  )
}

export default ClubCard
