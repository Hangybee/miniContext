import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)
    console.log('dddddddd',user)
    if(user && user.userName.length===0 || !user) return <div>Please login</div>

    return <div>Welcome {user.userName}</div>
  return (
    <div>Profile</div>
  )
}

export default Profile