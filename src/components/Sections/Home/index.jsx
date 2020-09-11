import React from 'react';
import SocialLinks from '../../SocialLinks/index.jsx';
import DP from '../../../assets/dp.jpg'

export default function index() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>Siddhartha Saurav Gogoi</title>
      <div className="container-lp">
        <div className="identity">
          <img 
            src={DP}
            alt="profile-pic" 
          />
          <p>
            Siddhartha Saurav Gogoi
          </p>
          <p>
            Software Developer
          </p>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}
