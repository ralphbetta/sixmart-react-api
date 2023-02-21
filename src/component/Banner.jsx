import React from 'react'

const image = "https://img.freepik.com/free-vector/template-banner-online-store-with-shopping-cart-with-purchases-boxes-delivery-from-supermarket-vector-illustration_548887-104.jpg"
const image2 = "https://img.freepik.com/free-vector/online-delivery-banner-with-realistic-laptop-parcels-clouds-social-icons-realistic-style_548887-53.jpg"
// style={{backgroundImage: `url(${banner})`}}
const Banner = () => {
  return (
    <div className='h-[450px] w-full bg-no-repeat bg-cover bg-center'  style={{backgroundImage: `url(${image2})`}}>
       
    </div>
  )
}

export default Banner