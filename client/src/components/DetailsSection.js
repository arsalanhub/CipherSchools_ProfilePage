import React, { useEffect, useState } from "react";
import SimpleDialogDemo from "./DialogBox";

export default function DetailsSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState(false);
  const [userImage, setUserImage] = useState("");
  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    setName(userData.first_name);
    setEmail(userData.email);
    setUserImage(userData.image);
  }, [])
  return (
    <div className="detailsWrapper">
      {display && <SimpleDialogDemo setDisplay={setDisplay} pageName="profileUpdate" setName={setName} setUserImage={setUserImage} /> }
      <div className="profileImage" onClick={()=> setDisplay(true)}>
        {userImage==="" ? <svg
          class="MuiSvgIcon-root MuiAvatar-fallback"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{ overflow: "auto" }}
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
        </svg> : <img src={`${process.env.REACT_APP_SERVER_URL}/${userImage}`} className="customUserImage" />}
      </div>
      <div style={{ marginLeft: "1.5rem", marginRight: "70rem" }}>
        <h2
          style={{
            fontSize: "20px",
            lineHeight: "1.25",
            fontWeight: "400",
            margin: "0",
          }}
        >
          Hello
        </h2>
        <h1 style={{ fontSize: "24px", margin: "0" }}>{name && name}</h1>
        <h2 style={{ fontSize: "16px", fontWeight: "400", margin: "0" }}>
        {email && email}
        </h2>
      </div>
      <div
        style={{
          fontSize: "17px",
          cursor: "pointer",
          fontWeight: "550",
          display: "flex",
          alignItems: "center",
        }}
      >
        0 Followers
      </div>
    </div>
  );
}
