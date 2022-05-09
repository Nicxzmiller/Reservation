import React from 'react'
import "./EmailList.css"

const EmailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save Time, Save Money</h1>
        <span className="mailDesc">Sign up and we'll make sure you are the first to get the best deals</span>
        <div className="mailInputContainer">
            <input type="email" placeholder='Enter your email address' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default EmailList