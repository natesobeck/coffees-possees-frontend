import style from './AboutUs.module.css'
import { data } from '../../data/aboutUs'
import AboutUsCard from '../AboutUsCard/AboutUsCard'

const AboutUs = () => {

  let aboutUsList = data.sort(() => 0.5 - Math.random())
  return (
    <div className={style.container} id="aboutUs" >
      {aboutUsList.map(about => (
        <AboutUsCard about={about} key={about.name} />
      ))}
    </div>
  )
}

export default AboutUs