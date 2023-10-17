import styles from './AddedBy.module.css'


const AddedBy = ({ content }) =>{

  return (
    <div className={styles.container}>
        <h3>{content.addedBy.name}</h3>
      </div>
    
    )
  }

  export default AddedBy