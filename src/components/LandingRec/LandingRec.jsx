// npm modules
import { Link } from 'react-router-dom'
import { useState } from 'react'

// css
import './LandingRec.css'

const LandingRec = (props) => {
  const [currIdx, setCurrIdx] = useState(0)
  
  if (currIdx > props.someShops.length) {
    setCurrIdx(0)
  } else if (currIdx < 0) setCurrIdx(props.someShops.length - 1)

  const handleClickNext = () => {
    setCurrIdx(currIdx + 1)
  }

  const handleClickPrev = () => {
    setCurrIdx(currIdx - 1)
  }

  let shop = props.someShops[currIdx]

  return (
    <div className="content">
      <div className={`slide active`}>
        <div className="left_slide">
          <h1 style={{ border: 'none', background: 'none' }}>{shop ? shop.name : 'Shop Name'}</h1>
          <div className="info">
            {shop ?
              <p style={{ fontSize: '1.5rem' }}>{shop.address.street}, {shop.address.city}, {shop.address.state} {shop.address.zipCode}</p>
              :
              <p>Coffee Shop address</p>
            }
            <p style={{ fontSize: '1.5rem' }}></p>
            <Link to={`/shops/${shop?._id}`}>
              <button className="btn">More Details</button>
            </Link>
          </div>
        </div>
        <div className="right_slide">
          <div className="info">
            <h1 className="at">
              at
            </h1>
            <div className="rec-location">
              <h1>
                {shop ? shop.location : "Location"}
              </h1>
            </div>
          </div>
          <div className="next_prev">
            <i className="fa-solid fa-chevron-left" id="prev" onClick={handleClickPrev}></i>
            <i className="fa-solid fa-chevron-right" id="next"
            onClick={handleClickNext}></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingRec