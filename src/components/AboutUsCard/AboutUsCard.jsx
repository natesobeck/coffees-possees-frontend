//css
import styles from './AboutUsCard.module.css'

// icon
import githubIco from '/assets/Icon/github.svg'
import linkedInIco from '/assets/Icon/linkedIn.svg'
import mailIco from '/assets/Icon/mail.svg'

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
            <img src={githubIco} alt="" />
            <img src={linkedInIco} alt="" />
            <img src={mailIco} alt="" />
          </div>
          <div className={styles.desc}>
            <p className={styles['blurb']}>{about.personal_brand}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsCard