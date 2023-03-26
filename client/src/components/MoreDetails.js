import React from 'react'
import RightSideBar from './RightSideBar'
import UserDetails from './UserDetails'

export default function MoreDetails() {
  return (
    <div style={{ display: "flex" }}>
        <UserDetails />
        <RightSideBar />
    </div>
  )
}
