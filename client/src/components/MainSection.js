import React, { useState } from 'react'
import FollowersSection from './FollowersSection'
import ProfileSection from './ProfileSection'

export default function MainSection() {
  const [display, setDisplay] = useState(false);
  return (
    <div style={{ backgroundColor: "#F2F5FA", width: "96%" }}>
        <ProfileSection />
        { display && <FollowersSection /> }
    </div>
  )
}
