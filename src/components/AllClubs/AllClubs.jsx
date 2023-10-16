import FindClubForm from '../FindClubForm/FindClubForm'
import FindClubResults from '../FindClubResults/FindClubResults'
import styles from './AllClubs.module.css'

const AllClubs = (props) => {
  return ( 
    <main>
      <div className={styles["clubs-container"]}>
        <FindClubForm />
        <FindClubResults clubs={props.clubs}/>
      </div>
    </main>
  )
}

export default AllClubs