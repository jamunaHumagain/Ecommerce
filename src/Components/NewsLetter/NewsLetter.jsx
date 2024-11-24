import React from 'react'
import "./NewsLetter.css"
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <br/>
   <p>Subscribe to our newsletter and stay updated</p>
  <br/>
   <div>
    
    <input type="email" placeholder='Your Email id' />
  <button>Subscribe</button>
  
   </div>
    </div>
  )
}

export default NewsLetter
