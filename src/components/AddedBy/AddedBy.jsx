import styles from './AddedBy.module.css'


const AddedBy = ({ content }) => {
  return (
    <div className={styles['added-by']}>
      <span className={styles['added-by-name']}>{content.addedBy.name}</span> on {content.createdAt.slice(0, 10)}
    </div>
  )
}

  export default AddedBy