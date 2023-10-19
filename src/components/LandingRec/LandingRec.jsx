// import { useState } from 'react'
import './LandingRec.css'

const LandingRec = (props) => {
  console.log('someShops:', props.someShops);

  let shop = props.someShops[0]


  return (
    <div className="content">
      <div className={`slide active`}>
        {/* <img src={"https://picsum.photos/800/1000?blur=2"} /> */}
        <div className="left_slide">
          <h1 style={{ border: 'none', background: 'none' }}>{shop ? shop.name : 'Shop Name'}</h1>
          <div className="info">
            {shop ?
              <p style={{ fontSize: '1.5rem' }}>{shop.address.street}, {shop.address.city}, {shop.address.state} {shop.address.zipCode}</p>
              :
              <p>Coffee Shop address</p>
            }

            {/* <p style={{ fontSize: '1.5rem' }}>{shop.address ?shop.address.street : "Coffee address"}</p> */}
            <p style={{ fontSize: '1.5rem' }}></p>
            <button className="btn">More Details</button>
          </div>
        </div>
        <div className="right_slide">
          <div className="info">
            <h1 style={{ marginBottom: '2rem', border: 'none', background: 'none', fontSize: '4rem' }}>
              at
            </h1>
            <div >
              <h1 style={{ marginBottom: '2rem', border: 'none', background: 'none' }}>
                {shop ? shop.location : "Location"}
              </h1>
            </div>
          </div>
          <div className="next_prev">
            <i className="fa-solid fa-chevron-left" id="prev"></i>
            <i className="fa-solid fa-chevron-right" id="next"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LandingRec






