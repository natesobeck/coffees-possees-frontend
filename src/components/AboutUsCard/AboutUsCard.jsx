import style from './AboutUsCard.module.css'

import github from '../../assets/Icon/github.svg'
import linkedIn from '../../assets/Icon/linkedIn.svg'
import mail from '../../assets/Icon/mail.svg'

const AboutUsCard = ({ about }) => {
  return (
    <>
      <div className={style.card}>
        <div className={style.front}>
          <h1 style={{ color: '#61dafb' }}>{about.name}</h1>
        </div>

        <div className={style.back}>
          <h1 style={{ color: '#603601' }}>{about.name}</h1>
          <div className={style.social}>
            <img src={github} alt="" />
            <img src={linkedIn} alt=""  />
            <img src={mail} alt="" />
          </div>
          <div className={style.desc}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsCard