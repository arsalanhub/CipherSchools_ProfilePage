import React from 'react'
import AboutMe from './userDetails/AboutMe'
import Interests from './userDetails/Interests'
import OnTheWeb from './userDetails/OnTheWeb'
import PasswordSecurity from './userDetails/PasswordSecurity'
import ProfessionalInformation from './userDetails/ProfessionalInformation'

export default function UserDetails() {
  return (
    <div className="userDetailsWrapper">
        <AboutMe />
        <OnTheWeb />
        <ProfessionalInformation />
        <PasswordSecurity />
        <Interests />
    </div>
  )
}
