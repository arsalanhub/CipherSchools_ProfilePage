import React from 'react'
import AboutMe from './userDetails/AboutMe'
import OnTheWeb from './userDetails/OnTheWeb'

export default function UserDetails() {
  return (
    <div className="userDetailsWrapper">
        <AboutMe />
        <OnTheWeb />
    </div>
  )
}
