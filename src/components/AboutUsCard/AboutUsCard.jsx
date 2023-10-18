import styles from './AboutUsCard.module.css'

import github from '../../assets/Icon/github.svg'
import linkedIn from '../../assets/Icon/linkedIn.svg'
import mail from '../../assets/Icon/mail.svg'

const AboutUsCard = ({ about }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.front}>
          <h1 className={styles['name']}>{about.name}</h1>
        </div>

        <div className={styles.back}>
          <h1 className={styles['name']}>{about.name}</h1>
          <div className={styles.social}>
            <img src={github} alt="" />
            <img src={linkedIn} alt=""  />
            <img src={mail} alt="" />
          </div>
          <div className={styles.desc}>
            <p className={styles['name']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsCard