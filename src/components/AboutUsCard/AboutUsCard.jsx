import style from './AboutUsCard.module.css'

import github from '../../assets/Icon/github.svg'
import linkedIn from '../../assets/Icon/linkedIn.svg'
import mail from '../../assets/Icon/mail.svg'

const AboutUsCard = ({ about }) => {
  return (
    <>
      <div className={style.card}>
        <div className={style.front}>
          <h1 style={{ color: 'red' }}>{about.name}</h1>
        </div>

        <div className={style.back}>
          <h1>{about.name}</h1>
          <img src={github} alt="" style={{width: '20px'}} />
          <img src={linkedIn} alt="" style={{width: '20px'}} />
          <img src={mail} alt="" style={{width: '20px'}} />

        </div>
      </div>
    </>
  )
}

export default AboutUsCard