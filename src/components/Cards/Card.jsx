import React from 'react'

export default function Card({name, children, logo, iOSLink, androidLink}) {
  return (
    <a className="card">
          <div className="logo-app">
            <img src={logo?.src} alt="" />
          </div>
          <div className="info-app">
                <h2 className="logo-name">{name}</h2>
          <p className="app-decription">{children}</p>
          </div>
      
          <div className="buttons">
            <a href={iOSLink} className="button-store">App Store</a>
            <a href={androidLink} className="button-store">Google Play</a>
          </div>
        </a>
  )
}
