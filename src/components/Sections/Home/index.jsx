import React from 'react';
import SocialLinks from '../../SocialLinks/index.jsx';

export default function index() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>Siddhartha Saurav Gogoi</title>
      <div className="container-lp">
        <div className="identity">
          <img 
            src="https://media-exp1.licdn.com/dms/image/C5103AQHjwQKKEz4IXA/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=7czzH5gRxuBqFCkwQdv3MWV7ivDYmJUwmoL3Cj2z40A" 
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
