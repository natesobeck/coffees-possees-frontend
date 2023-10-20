import styles from './NoRoutes.module.css'
import { Link } from 'react-router-dom';

const NoRoutes = () => {

  const randomImage = () => {
    let images = [];
    
  }

  return ( 
    <div className={styles["no-route-handler"]}>
      <div className={styles["not-found-message"]}>
        <h1>OOOOPS!</h1>
        <div className={styles["notFound"]}>
        <h3>404 !</h3>
        <h5>Didn't find this page...</h5>
        </div>
        <Link to="/">
          <p>Back Home</p>
        </Link>
        
      </div>
      <div className={styles["main-image"]}></div>
    </div>
  )
}
 
export default NoRoutes;