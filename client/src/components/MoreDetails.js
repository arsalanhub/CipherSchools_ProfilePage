import React from 'react'
import RightSideBar from './RightSideBar'
import UserDetails from './UserDetails'

export default function MoreDetails() {
  return (
    <div style={{ display: "flex", backgroundColor: "rgb(242, 245, 250)" }}>
        <UserDetails />
        <RightSideBar />
    </div>
  )
}
