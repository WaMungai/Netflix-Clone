import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav/Nav'

function ProfileScreen() {
  return (
    <div className="profileScreen">
        <Nav />
        <div className="profileScreen__body">
            <h1>Edit profile</h1>
            <div className="profileScreen__info">
                <img 
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
                />
            </div>
        </div>
        </div>
  )
}

export default ProfileScreen