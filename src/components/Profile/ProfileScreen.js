import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav/Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'
import { auth } from '../../firebase'
import PlanScreen from '../PlanScreen/PlanScreen'

function ProfileScreen() {
    const user = useSelector(selectUser);
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
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <PlanScreen />
                        <button
                        onClick={() => auth.signOut()}
                        className="profileScreen__signOut"
                        >Sign out</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default ProfileScreen